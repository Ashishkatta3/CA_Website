==============================================================
  PROJECT SUMMARY - MSS Advisory Services Website
  Date: 26 October 2026 (previous version: 8 October 2026)
==============================================================

1. GOAL
--------------------------------------------------------------
Build a professional website for MSS Advisory Services,
Chartered Accountants & Business Advisory Professionals,
Guntur and Vijayawada, Andhra Pradesh. Since 26 Oct 2026 the
design follows the reference site
https://ca-website-two-teal.vercel.app/ (navy, cream and gold).

Tagline : Taxation | GST | TDS | Accounting | Compliance |
          Business Advisory
Slogan  : Your Trusted Partner for Financial Excellence and
          Regulatory Compliance


2. FIRM DETAILS USED
--------------------------------------------------------------
Name     : MSS Advisory Services
Offices  : Guntur Office - 3rd Lane, Ashok Nagar, Lakshmipuram,
             Guntur, AP 522002
           Vijayawada Office - D.No: 40-6/1-7A, Ground Floor,
             Revenue Colony, Park Street, Near Income Tax Office,
             Mogalrajpuram, Vijayawada 520010
Email    : info@mssadvisoryservices.com
Phone    : +91 99593 96789 (also the WhatsApp number)
Hours    : Monday - Saturday 10:00 AM - 7:00 PM, Sunday closed

Director:
  Venkat Vidya Sagar Reddy Karumuri

Leadership Associates (in the order shown on the About page):
  CA V. Bala Murali Krishna Reddy, FCA - 20+ years of
    professional excellence
  P. Srinivas Rao, B.Com - 15+ years of expertise in
    Accounting & Compliance
  CA G. Siva Sankar Reddy, ACA - 5+ years of experience in
    Taxation, GST & Advisory Services
  CA Sainadh Velugula, ACA, CMA, LLB - 3+ years of experience
    in Taxation, Corporate Law & Financial Advisory


3. PAGES
--------------------------------------------------------------
  Page                  What it contains
  --------------------  --------------------------------------
  index.html            Home: hero with phone/email, service
                        highlights, trust strip, service tiles,
                        "Who we serve", how it works, upcoming
                        due dates, calculators, Knowledge
                        Center, call to action
  about.html            Firm Profile, Leadership Associates
                        (Director + team with photos), Our
                        Approach, Why organisations choose MSS
  services.html         All 7 services as cards
  service.html          Detail page for each service
                        (service.html?s=gst etc.): problems it
                        solves, what's included, steps, FAQs
  industries.html       Startups, SMBs, corporates, individuals,
                        professionals, non-profits
  resources.html        Links to the resource pages and official
                        portals (Income Tax, GST, MCA, TRACES,
                        CBIC, EPFO, Udyam, ICAI)
  calculators.html      Income tax, GST and EMI calculators
  important-dates.html  Due dates Oct 2026 - Apr 2027, filter by
                        GST / TDS / Income Tax / ROC, with an
                        official source link under every date.
                        Dates that have passed hide themselves.
  knowledge.html        Articles with category filters and a
                        reading view (knowledge.html?a=...)
  careers.html          Perks, current openings (4 roles), how
                        to apply by email
  contact.html          Enquiry form, phone, email, both office
                        addresses, office hours, a Google Map
                        for each office
  disclaimer.html,
  privacy.html,
  terms.html            Legal pages

The 7 services:
  1. Income Tax
  2. GST
  3. TDS Compliance
  4. Project Reports & Loan Advisory
  5. Company, LLP, Firm & MSME Registrations
     (old "Corporate & ROC" links redirect here)
  6. Accounting & Statutory Compliance
  7. Audit & Assurance


4. DESIGN
--------------------------------------------------------------
- Colours: navy (#0d1b2a), warm cream backgrounds and gold
  (#e8a33d) accents. No plain white backgrounds; cards are a
  soft ivory.
- Fonts: Archivo (headings and brand name) and Inter (text).
- Brand name (no picture logo), style "Ledger frame": "MSS" in
  navy Playfair Display (a classic serif) between gold corner
  brackets, like a figure marked out on a ledger; beside it
  "ADVISORY SERVICES" with "Chartered Accountants" in gold.
  Other styles to compare: brand-options.html.
- Browser-tab icon and chatbot avatar: small navy square with
  a white "M" and a gold diamond (images/favicon.svg).
- Header is 72px tall on desktop. Desktop menu opens dropdown
  panels on hover; on mobile it becomes a full-screen menu.
- Sections fade in on scroll. Layout works on desktop, tablet
  and phone (checked: no sideways scrolling).


5. ICAI COMPLIANCE
--------------------------------------------------------------
- Disclaimer pop-up on the first visit ("Read full
  disclaimer" / "I agree"), because CAs may not solicit work
  or advertise.
- No testimonials and no "best firm" claims.
- Calculators, due dates and articles are marked as general,
  indicative information (footer and legal pages).


6. CHATBOT ("MSS Assistant") AND WHATSAPP
--------------------------------------------------------------
- Chat button in the bottom-right corner of every page.
- Green WhatsApp button in the bottom-LEFT corner of every
  page. It opens a chat with +91 99593 96789 with the message
  "Hello MSS Advisory Services, I have a query." filled in.
- Phone numbers on the site start a phone call (tel: link),
  not WhatsApp.
- Quick replies: services, upcoming due dates, documents
  needed, office address (both offices), request a callback,
  chat on WhatsApp.
- Understands typed questions by key words (GST, ITR, TDS,
  project report, CMA, LLP, Udyam, notice, Vijayawada, etc.).
- Callback flow: asks name, phone and requirement, then sends
  the request by email, with an option to send it on WhatsApp.
- It is not AI. It answers only the topics written into
  js/chatbot.js, and reads firm details, services and due
  dates from js/data.js.


7. FILE STRUCTURE
--------------------------------------------------------------
  *.html           The pages (each page only holds its own
                   content)
  css/style.css    All styling
  js/data.js       FIRM DETAILS, offices, services, industries,
                   team, due dates, small logo. Edit this file
                   to change text across the whole site.
  js/articles.js   Knowledge Center articles
  js/site.js       Shared header, menus, footer, disclaimer,
                   animations (one place for every page)
  js/chatbot.js    Chatbot and WhatsApp button
  js/team-photos.js  Team photos, embedded as image data
                   (480x600 WebP, sharp on high-res screens)
  images/          favicon.svg

Note: js/main.js (old site), images/_write_test.txt and
js/_t.txt (empty test files) are not used and can be deleted.


8. HOW TO VIEW IT LOCALLY
--------------------------------------------------------------
Run a local server in the project folder (Node.js is
installed):
    npx http-server -p 8090 -c-1
then open http://localhost:8090
On a phone on the same Wi-Fi, open http://<this PC's IP>:8090
(on 26 Oct 2026 the PC's IP was 192.168.1.73; it can change).
Allow Node.js through Windows Firewall if the phone can't
connect.


9. PENDING / TO DO
--------------------------------------------------------------
[x] Team photos: embedded in js/team-photos.js; rebuilt in
    higher quality on 26 Oct 2026 from the original photos.
[x] Phone / WhatsApp number: +91 99593 96789 (26 Oct 2026).
[x] Office hours: Mon-Sat 10 AM - 7 PM, Sunday closed.
[x] Vijayawada office added (26 Oct 2026).
[ ] ICAI Firm Registration Number: add to js/data.js (frn).
    It stays hidden while it contains XXXX.
[ ] Director: a formal photo and a short bio, if available.
[ ] Check the April 2027 due dates against any government
    extensions, and review all due dates every few months.
[ ] Check that the Vijayawada Google Map shows the right spot.
[x] Enquiry form and chatbot callback send to
    info@mssadvisoryservices.com through FormSubmit
    (formsubmit.co). If sending fails, they fall back to the
    visitor's email app.
[ ] FormSubmit activation: the FIRST enquiry sent from the live
    site triggers a one-time "Activate form" email to
    info@mssadvisoryservices.com. Click the link in it, or
    enquiries will not be delivered.
[ ] Copy the updated site into the project folder. Windows
    "Controlled folder access" blocked the changes being saved
    there directly; run (as administrator):
      Copy-Item "C:\Users\PRUTHVI\AppData\Local\Temp\claude\e--OneDrive-Documents-GitHub-CA-Website\37cdc0a4-0ce7-46c5-9e38-53a843b53053\scratchpad\site\*" "E:\OneDrive\Documents\GitHub\CA_Website\" -Recurse -Force
[ ] Commit the work to git.
[ ] Publish the site (Vercel, Netlify, GitHub Pages or other
    hosting) and connect the domain mssadvisoryservices.com.


10. POSSIBLE FUTURE ADDITIONS
--------------------------------------------------------------
- AI chatbot using Claude (needs a small server to keep the API
  key secret; each conversation has a small usage cost)
- Office photos
- Google Business Profile and SEO setup


11. CHANGES MADE ON 26 OCTOBER 2026
--------------------------------------------------------------
Redesign
- Whole site restyled to match https://ca-website-two-teal.vercel.app/:
  navy / cream / gold colours, new About, Careers and
  Resources layouts, new footer with sitemap link.
- Services reorganised from 8 to 7 (see section 3).
- White backgrounds replaced with warm cream so white no longer
  dominates.

Brand
- Several logo versions were tried (mountain, orange growth
  chart, navy "M" emblem, gradient "MSS", gold double
  underline). Current choice (27 Oct 2026): "Ledger frame",
  a serif "MSS" between gold corner brackets (see section 4).
- Header made taller and the brand name larger.

Contact
- Phone +91 99593 96789 added across the site.
- WhatsApp button added, placed in the bottom-left corner.
- Phone numbers on the home page start a phone call ("Or call
  +91 99593 96789").
- Vijayawada office added to the contact page (with its own
  map), footer, chatbot, About page and search descriptions.

Team (About page)
- Names corrected and matched to the right photos.
- "Bala" added: CA V. Bala Murali Krishna Reddy.
- Names under the 3rd and 4th photos swapped, then (27 Oct)
  the cards reordered: CA G. Siva Sankar Reddy 3rd, CA Sainadh
  Velugula 4th.
- Experience lines and "P. Srinivas Rao" (no "CA") set to the
  firm's own wording (27 Oct 2026).
- Photos rebuilt from the originals (640x800) so they are no
  longer blurry.

Important Dates
- Removed the "Due dates are indicative ... Last reviewed"
  notice at the top of the page.
- Added April 2027 due dates (GST, TDS deposit, GSTR-4,
  MSME Form 1).
- Added a "Source:" link under every date to the official
  portal: GST Portal, Income Tax Department, TRACES, Income
  Tax e-Filing or Ministry of Corporate Affairs.
==============================================================
