# Compliance calendar — daily update procedure

The Important Dates page (`/resources/important-dates`) and the home-page
"upcoming dates" box are built from two files:

- `src/content/important-dates.ts` — **rules** for recurring statutory due
  dates (TDS on the 7th, GSTR-1 on the 11th, …). These generate the calendar
  for the next 6 months automatically.
- `src/content/calendar-updates.json` — **official changes**: extensions of a
  rule-generated date (`overrides`), one-off deadlines (`events`), and
  `lastChecked`.

A scheduled agent runs this procedure once a day.

## 1. Check official sources only

Read the latest announcements on:

| Area | Where to look |
|---|---|
| Income tax / TDS | https://www.incometax.gov.in/iec/foportal/latest-news (circulars & notifications, PDFs under `/sites/default/files/`) |
| GST | https://www.gst.gov.in/newsandupdates and https://cbic-gst.gov.in (notifications & circulars) |
| ROC / LLP | https://www.mca.gov.in (news & updates, general circulars) |

Only `.gov.in` / `.nic.in` pages and the PDFs they host count as sources.
News sites, blogs and CA forums may be used to *find* an announcement, but
an entry is published only after the official document is located.

Look for anything that changes a due date falling between the start of the
current month and 6 months ahead: extensions, new forms or deadlines,
withdrawn deadlines, state-specific relief that covers Andhra Pradesh.

## 2. Record changes

- **Extension of a generated date** → add to `overrides`:
  `key` = `<rule id>@<original YYYY-MM-DD>` (rule ids are in
  `important-dates.ts`), new `date`, a `note` naming the circular /
  notification and its date, and `source` `{ label, url }` pointing at the
  official document.
- **One-off deadline not covered by a rule** → add to `events` with `id`,
  `date`, `category` (GST | TDS | Income Tax | ROC), `title`, optional
  `note`, and `source`.
- **Permanent change to a recurring rule** (e.g. a statute changes the
  normal due date) → do not edit the rules; open a GitHub issue titled
  `Calendar rule change: …` with the official link so a person updates the
  code.
- Entries dated before the current month may be removed.
- Set `lastChecked` to today's date (Asia/Kolkata), even when nothing else
  changed.

If an announcement is ambiguous, or the official document cannot be found,
do **not** publish it — open a GitHub issue titled `Calendar: needs review —
…` with what was found.

## 3. Verify and publish

```bash
npm ci
npm run check:calendar   # rejects non-official sources and malformed entries
npx tsc --noEmit
```

If all pass, commit to `main` with a message such as
`Calendar: GSTR-3B Oct extended to 25 Nov (CBIC Notif. 12/2026)` or
`Calendar: daily check, no changes`, and push. If a check fails, fix the
entry or drop it; never push a failing state.
