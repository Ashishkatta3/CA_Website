==============================================================
  PROJECT SUMMARY - MSS Advisory Services Website
  Date: 8 October 2026
==============================================================

1. GOAL
--------------------------------------------------------------
Build a professional website for MSS Advisory Services,
Chartered Accountants & Business Advisory Professionals,
Guntur, Andhra Pradesh. The design follows the reference site
https://cawebsite2.vercel.app/ (clean, Apple-style layout).

Tagline : Taxation | GST | TDS | Accounting | Compliance |
          Business Advisory
Slogan  : Your Trusted Partner for Financial Excellence and
          Regulatory Compliance


2. FIRM DETAILS USED
--------------------------------------------------------------
Name    : MSS Advisory Services
Address : 3rd Lane, Ashok Nagar, Lakshmipuram, Guntur, AP 522002
Email   : Info@mssadvisoryservices.com
Phone   : not yet provided (phone links are hidden until added)

Director:
  Venkat Vidya Sagar Reddy Karumuri

Leadership Associates:
  CA V. Bala Murali Krishna Reddy, FCA - 20+ years of
    professional excellence
  P. Srinivas Rao, B.Com - 15+ years in Accounting & Compliance
  CA G. Siva Sankar Reddy, ACA - 5+ years in Taxation, GST &
    Advisory Services
  CA Sainadh Velugula, ACA, CMA, LLB - 3+ years in Taxation,
    Corporate Law & Financial Advisory


3. PAGES
--------------------------------------------------------------
  Page                  What it contains
  --------------------  --------------------------------------
  index.html            Home: hero, service highlights, trust
                        strip, service tiles, "Who we serve"
                        tabs, why work with us, how it works,
                        upcoming due dates, calculators,
                        Knowledge Center, call to action
  about.html            About Us, Director, Leadership
                        Associates (with photos), service
                        portfolio, how we work, why choose MSS
  services.html         All 8 services as cards
  service.html          Detail page for each service
                        (service.html?s=gst etc.): problems it
                        solves, what's included, steps, FAQs
  industries.html       Startups, SMBs, corporates, individuals,
                        professionals, non-profits
  resources.html        Links to the resource pages and official
                        portals (Income Tax, GST, MCA, TRACES,
                        CBIC, EPFO, Udyam, ICAI)
  calculators.html      Income tax (new regime FY 2025-26), GST
                        and EMI calculators
  important-dates.html  Due dates Oct 2026 - Mar 2027, filter by
                        GST / TDS / Income Tax / ROC
  knowledge.html        8 articles with category filters and a
                        reading view (knowledge.html?a=...)
  careers.html          Who we hire, what we look for, how to
                        apply
  contact.html          Enquiry form, email, address, Google Map
  disclaimer.html,
  privacy.html,
  terms.html            Legal pages

The 8 services:
  1. Income Tax
  2. GST & Indirect Tax (incl. litigation support)
  3. Accounting & Bookkeeping
  4. Audit & Assurance
  5. TDS & Payroll Compliance (incl. reconciliation, notices)
  6. Corporate & ROC Compliance
  7. Business Advisory (project reports, CMA data, projections,
     loan documentation, feasibility assessments)
  8. Registrations (Company, LLP, Firm, MSME / Udyam, etc.)


4. DESIGN
--------------------------------------------------------------
- Apple-style: white and light-grey sections, black feature
  sections, blue (#0071e3) buttons and links, Inter font.
- Logo: a white "M" over a gold double underline (the mark an
  accountant draws under a final total) on a navy square,
  with "MSS Advisory Services / CHARTERED ACCOUNTANTS".
  Used in the header, footer, chatbot and browser tab.
- Desktop menu opens dropdown panels on hover; on mobile it
  becomes a full-screen menu.
- Sections fade in on scroll. Layout works on desktop, tablet
  and phone (checked: no sideways scrolling).


5. ICAI COMPLIANCE
--------------------------------------------------------------
- Disclaimer pop-up on the first visit ("I Agree" / "I
  Disagree"), because CAs may not solicit work or advertise.
- No testimonials and no "best firm" claims.
- Calculators, due dates and articles are marked as general,
  indicative information.


6. CHATBOT ("MSS Assistant") AND WHATSAPP
--------------------------------------------------------------
A chat button in the bottom-right corner of every page.
- Quick replies: services, upcoming due dates, documents
  needed, office address, request a callback.
- Understands typed questions by key words (GST, ITR, TDS,
  project report, CMA, LLP, Udyam, notice, fees, etc.).
- Callback flow: asks name, phone and requirement, then sends
  the request by email (and WhatsApp once a number is added).
- It is not AI. It answers only the topics written into
  js/chatbot.js, and reads firm details, services and due
  dates from js/data.js.
- WhatsApp button: built, but hidden until a WhatsApp number
  is added in js/data.js (field "whatsapp").


7. FILE STRUCTURE
--------------------------------------------------------------
  *.html           The pages (each page only holds its own
                   content)
  css/style.css    All styling
  js/data.js       FIRM DETAILS, services, industries, team,
                   due dates, logo. Edit this file to change
                   text across the whole site.
  js/articles.js   Knowledge Center articles
  js/site.js       Shared header, menus, footer, disclaimer,
                   animations (one place for every page)
  js/chatbot.js    Chatbot and WhatsApp button
  js/team-photos.js  Team photos, embedded as image data
  images/          favicon.svg

Note: js/main.js (old site) and images/_write_test.txt (empty
test file) are not used and can be deleted.


8. HOW TO VIEW IT LOCALLY
--------------------------------------------------------------
Run a local server in the project folder (Node.js is
installed):
    npx http-server -p 8080
then open http://localhost:8080
(Opening index.html directly also works in most browsers.)


9. PENDING / TO DO
--------------------------------------------------------------
[x] Team photos: embedded in js/team-photos.js (done 8 Oct 2026).
[ ] Phone / WhatsApp number: add to js/data.js (phone, mobile,
    whatsapp).
[x] Office hours: Mon-Sat 10 AM - 7 PM, Sunday closed.
[ ] ICAI Firm Registration Number: add to js/data.js (frn).
[ ] Director: a formal photo and a short bio, if available.
[x] Services: keep Audit & Assurance and Corporate & ROC
    Compliance (confirmed).
[x] Articles and due dates reviewed on 8 Oct 2026 and updated
    for the Income-tax Act, 2025 (in force 1 April 2026):
    "tax year", renumbered sections, new TDS form numbers
    (Form 130 / 138 / 140 / 144). Added an article on the new
    Act. Review again every few months.
[x] Enquiry form and chatbot callback now send to
    Info@mssadvisoryservices.com through FormSubmit
    (formsubmit.co). If sending fails, they fall back to the
    visitor's email app.
[ ] FormSubmit activation: the FIRST enquiry sent from the live
    site triggers a one-time "Activate form" email to
    Info@mssadvisoryservices.com. Click the link in it, or
    enquiries will not be delivered.
[ ] Publish the site (Netlify, GitHub Pages or other hosting)
    and connect the domain mssadvisoryservices.com.
[ ] Commit the work to git. OneDrive once replaced about.html
    with an old copy, so a commit protects the current version.


10. POSSIBLE FUTURE ADDITIONS
--------------------------------------------------------------
- AI chatbot using Claude (needs a small server to keep the API
  key secret; each conversation has a small usage cost)
- Office photos
- Google Business Profile and SEO setup
==============================================================
