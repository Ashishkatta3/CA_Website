==============================================================
  PROJECT SUMMARY - Anil Reddy & Co Website Redesign
  Date: 30 September 2026
==============================================================

1. GOAL
--------------------------------------------------------------
Redesign the website of Anil Reddy & Co, Chartered Accountants
(currently at https://caanilreddy.com/) so it looks professional
and has much more useful content.


2. PROBLEMS WITH THE CURRENT WEBSITE
--------------------------------------------------------------
- Very little content: About Us has only two short paragraphs,
  and the Team page has one generic sentence.
- The Vision and Mission pages are empty.
- Two of the seven services listed (Service Tax and VAT) no
  longer exist. GST replaced them in July 2017.
- The design is a generic template (built by CASANSAAR).


3. WHAT WE BUILT
--------------------------------------------------------------
A new website with 8 pages, written in plain HTML, CSS and
JavaScript. No installation or special software is needed.

  Page              What it contains
  ----------------  ------------------------------------------
  index.html        Home: opening banner, firm introduction,
                    6 service cards, working principles, how an
                    engagement works, key due dates, FAQs,
                    call-to-action
  about.html        Firm profile, Vision & Mission, values,
                    team section
  services.html     9 services, each with a description and a
                    list of what is included, plus a side menu
                    that tracks where you are on the page
  industries.html   Sectors served: Infrastructure, Financial,
                    Industrial, Services, plus what the firm does
                    in each sector
  resources.html    Monthly and annual compliance calendar,
                    document checklists, links to official
                    portals (Income Tax, GST, MCA, TRACES, EPFO,
                    ESIC, RBI, ICAI)
  careers.html      Articleship, CA and accounts executive roles
  contact.html      Both office addresses, phones, email,
                    enquiry form, Google Maps for both offices
  disclaimer.html   ICAI disclaimer and privacy policy

The 9 services:
  1. Audit & Assurance
  2. Income Tax (mentions the new Income-tax Act, 2025)
  3. GST (replaces the old Service Tax and VAT listings)
  4. Accounting, Bookkeeping & Payroll
  5. Company Law & Corporate Governance
  6. RBI & FEMA Matters
  7. Project & Corporate Finance
  8. Business Setup & Registrations
  9. Advisory & Virtual CFO


4. DESIGN
--------------------------------------------------------------
- Colours: navy blue and gold.
- Fonts: "Fraunces" (serif) for headings, "Inter" for body text.
- Menu stays at the top of the screen while scrolling. On
  mobile it becomes a slide-out menu.
- Sections fade in as you scroll, and cards lift when you hover
  over them.
- There is a back-to-top button.
- Layout adjusts for desktop, tablet and mobile.
- The logo is an "AR" monogram, used in the header and as the
  browser tab icon.


5. ICAI COMPLIANCE
--------------------------------------------------------------
- A disclaimer pop-up appears on the first visit ("I Agree" /
  "I Disagree"), as ICAI requires, since CAs may not advertise.
- The site has no testimonials, no "leading firm" or
  "best firm" claims, and no invented statistics.
- The privacy policy mentions the DPDP Act, 2023.


6. CHATBOT ("AR Assistant")
--------------------------------------------------------------
A chat button in the bottom-right corner of every page.
- Quick-reply buttons: Services, Due dates, Documents needed,
  Office address & hours, Request a callback.
- Understands typed questions by key words (GST, ITR, audit,
  notice, fees, LLP, NRI, loan, articleship, etc.).
- Callback flow: asks for name, phone and requirement, then
  offers "Send request by email" or "Call us now".
- Shows a note: "general information only, not professional
  advice".
- It is not AI. It answers only the topics written into it.
  To change the answers, edit the INTENTS list at the top of
  js/chatbot.js.


7. FILE STRUCTURE
--------------------------------------------------------------
Project CA/
  index.html, about.html, services.html, industries.html,
  resources.html, careers.html, contact.html, disclaimer.html
  css/style.css      All styling (colours are defined at the top)
  js/main.js         Menu, scroll effects, disclaimer, contact form
  js/chatbot.js      The chatbot
  PROJECT_SUMMARY.txt  This file

Note: the header and footer are repeated in every page file.
A change to the menu or contact details must be made in all
8 pages.


8. HOW TO VIEW IT LOCALLY
--------------------------------------------------------------
Option A: Double-click index.html to open it in a browser.
Option B: Run a local server. Node.js is installed, so in a
          terminal inside the project folder run:
              npx http-server -p 5500
          then open http://localhost:5500


9. CONTACT DETAILS USED (taken from the current website)
--------------------------------------------------------------
Head Office : HIG-152, Road No. 5, Phase 1, KPHB Colony,
              JNTU - Hitech City Road, Hyderabad - 500072
Branch      : G2, Dwaraka Icon, Plot No. 131, Kavuri Hills,
              Madhapur, Hyderabad - 500033
Phone       : 040 - 4024 9702 / +91 63574 45566
Email       : caanilreddy@gmail.com


10. PENDING / TO DO
--------------------------------------------------------------
[ ] Team section (about.html): replace the [Partner Name] and
    [Team Member] placeholders with real names, qualifications
    and experience, and check the "CA Anil Reddy" card.
[ ] Office hours: "Mon-Sat, 10 AM - 7 PM" is an assumption.
    Confirm it with the firm.
[ ] Due dates (resources.html): statutory defaults. Have the
    firm check them every year.
[ ] Enquiry form and chatbot callback currently open the
    visitor's email app (mailto). To receive enquiries directly,
    connect a form service such as Formspree.
[ ] Add a real firm logo and office or team photos, if
    available.
[ ] Publish the site (Netlify, GitHub Pages, or the firm's
    current hosting) and point caanilreddy.com to it.


11. POSSIBLE FUTURE ADDITIONS
--------------------------------------------------------------
- Blog / news and updates section
- Tax calculators (income tax, GST, HRA, etc.)
- AI chatbot using Claude (needs a small server to keep the API
  key secret; each conversation has a small usage cost)
- WhatsApp chat button (if the mobile number uses WhatsApp)
- Google Business Profile and SEO setup
==============================================================
