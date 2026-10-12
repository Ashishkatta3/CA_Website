// Validates src/content/calendar-updates.json before it is published.
// Every override and event must cite an official government source.
import { readFileSync } from "node:fs";

const root = new URL("..", import.meta.url);
const data = JSON.parse(readFileSync(new URL("src/content/calendar-updates.json", root), "utf8"));
const rulesSrc = readFileSync(new URL("src/content/important-dates.ts", root), "utf8");
const ruleIds = new Set([...rulesSrc.matchAll(/\{ id: "([a-z0-9-]+)"/g)].map((m) => m[1]));

const OFFICIAL = /(^|\.)(gov\.in|nic\.in)$/;
const ISO = /^\d{4}-\d{2}-\d{2}$/;
const CATEGORIES = ["GST", "TDS", "Income Tax", "ROC"];
const errors = [];

const validDate = (s) => ISO.test(s) && !Number.isNaN(Date.parse(`${s}T00:00:00Z`)) && new Date(`${s}T00:00:00Z`).toISOString().startsWith(s);

function checkSource(where, src) {
  if (!src?.label || !src?.url) return errors.push(`${where}: missing source label/url`);
  let host;
  try {
    const u = new URL(src.url);
    if (u.protocol !== "https:") errors.push(`${where}: source must use https`);
    host = u.hostname;
  } catch {
    return errors.push(`${where}: invalid source url ${src.url}`);
  }
  if (!OFFICIAL.test(host)) errors.push(`${where}: ${host} is not an official .gov.in / .nic.in source`);
}

if (!validDate(data.lastChecked)) errors.push(`lastChecked: invalid date ${data.lastChecked}`);

const keys = new Set();
for (const [i, o] of (data.overrides ?? []).entries()) {
  const where = `overrides[${i}] (${o.key})`;
  const [rule, original] = String(o.key).split("@");
  if (!ruleIds.has(rule)) errors.push(`${where}: unknown rule "${rule}"`);
  if (!validDate(original)) errors.push(`${where}: key must be <rule>@YYYY-MM-DD`);
  if (!validDate(o.date)) errors.push(`${where}: invalid date ${o.date}`);
  if (keys.has(o.key)) errors.push(`${where}: duplicate key`);
  keys.add(o.key);
  checkSource(where, o.source);
}

for (const [i, e] of (data.events ?? []).entries()) {
  const where = `events[${i}] (${e.id})`;
  if (!e.id || !e.title) errors.push(`${where}: id and title are required`);
  if (!validDate(e.date)) errors.push(`${where}: invalid date ${e.date}`);
  if (!CATEGORIES.includes(e.category)) errors.push(`${where}: category must be one of ${CATEGORIES.join(", ")}`);
  checkSource(where, e.source);
}

if (errors.length) {
  console.error(`calendar-updates.json has ${errors.length} problem(s):\n- ${errors.join("\n- ")}`);
  process.exit(1);
}
console.log(`calendar-updates.json OK (${data.overrides.length} overrides, ${data.events.length} events, ${ruleIds.size} rules)`);
