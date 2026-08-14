# UAE Filing Landing Page - Project Specification (SSOT)

## Project Name
UAE Filing Landing Page Implementation

## Goal
To implement a high-converting, responsive landing page for **uaefiling.com** using the provided fixed HTML content and logo. The implementation will strictly adhere to the provided fixed color system. This document serves as the Single Source of Truth (SSOT). The provided HTML file is strictly for content reference, and this MD file must be followed during implementation.

## Document Overview
This document defines the exact content, structure, buttons, styling, and responsive behaviors for every section of the landing page. All "Gold" colors from the original HTML draft have been completely removed and replaced strictly with the approved 4-color system.

---

## 1. Approved Color System (Strict Adherence)
- **60% — Main Base:** White (`#FFFFFF`) - Main page background, navbar, cards, button surfaces.
- **30% — Primary Dark:** Deep Navy (`#0D1F3C`) - Hero, CTA section, major dark surfaces, primary buttons.
- **10% — Deepest Accent:** Midnight Navy (`#071429`) - Footer, deepest backgrounds, strong contrast areas.
- **Typography / Secondary Dark:** Slate Navy (`#171F33`) - Headings, navigation text, body emphasis.

## 2. Technical & Design Architecture

To ensure a high-end, premium corporate compliance aesthetic (avoiding basic "AI-slop" or generic agency templates), the following architectural guidelines are strictly enforced:

| Category | Execution Approach | Reasoning |
| :--- | :--- | :--- |
| **1. Tech Stack** | **Semantic HTML5, Vanilla CSS, Vanilla JavaScript.** No heavy frameworks (React/Tailwind) unless explicitly requested. | Ensures maximum performance, zero code bloat, lightning-fast load times, and perfect SEO indexing. |
| **2. Design Approach** | **Premium Corporate Fintech Style.** High-contrast layouts, strict geometric typography (e.g. Inter), mathematically consistent spacing, and subtle 4px/8px corners (no bubbly curves or heavy drop shadows). | Eliminates the "cheap template" look. Creates a serious, expensive, and authoritative visual presence suitable for B2B compliance. |
| **3. Animation System** | **Smooth Micro-Interactions & Scroll Reveals.** Subtle `cubic-bezier` hover states. Content smoothly fades and drifts up using `IntersectionObserver` on scroll (e.g. 400ms duration). | Ensures the page feels dynamic and expensive without distracting the user with aggressive or bouncy animations. |
| **4. Responsive Behavior & UX** | **Mobile-First CSS.** All interactive actions on mobile must have a minimum target tap area of 44x44 pixels.<br>**Mobile CTA (<768px):** The primary operation trigger must detach and anchor to the bottom 30% of the viewport (the optimal thumb comfort zone). It must be forced into a fixed bottom position spanning full width (`position: fixed; bottom: 0; left: 0; width: 100%;`). It must include a subtle background blur backing sheet (e.g. `backdrop-filter: blur(12px); background: rgba(7, 20, 41, 0.8)`) beneath the button container to maintain clear content separation. | Guarantees a flawless user experience. The fixed mobile CTA maximizes conversions by keeping the primary action in the ergonomic thumb comfort zone at all times. |
| **5. AI Skills Active** | Enforcement of `high-end-visual-design`, `ui-ux-pro-max`, and `frontend-design` AI protocols during implementation. | Actively blocks generic AI coding defaults to maintain top-tier, agency-level UI/UX quality control throughout the build. |

---

## 3. Section-by-Section Specification

### 1. Navbar
| Attribute | Details |
| :--- | :--- |
| **Purpose** | A sticky navigation bar for branding and quick contact access. |
| **Exact HTML Content** | `UAEFiling`<br>`+971-586 450 918` |
| **Heading/Text Displayed** | Logo Text/Image (`UAE Filing Logo .png`)<br>Phone Number: +971-586 450 918 |
| **Buttons Used** | WhatsApp/Call Button, Mobile Hamburger Menu Button |
| **Button Colors** | **WhatsApp:** Background White (`#FFFFFF`), Border/Text Slate Navy (`#171F33`), Icon Deep Navy (`#0D1F3C`).<br>**Hamburger:** Deep Navy (`#0D1F3C`). |
| **Button Purpose** | **WhatsApp:** Initiates phone call or WhatsApp message.<br>**Hamburger:** Opens mobile navigation menu. |
| **Layout & Styling** | Fixed top. Main Base White (`#FFFFFF`). |
| **Responsive Behavior** | **Desktop/Tablet:** Full logo, contact button, and text visible side-by-side.<br>**Mobile:** Contact text may be simplified/icon-only, and navigation links hide behind the hamburger menu. |

### 2. Hero Section
| Attribute | Details |
| :--- | :--- |
| **Purpose** | Main value proposition and primary call-to-action area at the top of the page. |
| **Exact HTML Content** | `Trusted by 5,000+ UAE Businesses`<br>`Keep Your UAE Business Running.`<br>`Leave the Compliance to Us.`<br>`Visa renewals, trade license renewals, PRO services, customs clearance, and VAT filing — for freezone traders, logistics operators, and e-commerce businesses.`<br><br>**Rail Items:**<br>1. `Visa Renewal` / `Employee, investor & dependent visas`<br>2. `Trade License Renewal` / `JAFZA, DMCC, RAKEZ & 15+ freezones`<br>3. `Customs Clearance` / `Jebel Ali, Abu Dhabi, Sharjah ports`<br>4. `VAT Filing & FTA Compliance` / `Quarterly returns & penalty resolution`<br>5. `PRO & Document Clearance` / `AMER, Tasheel, attestation & MOHRE` |
| **Heading/Text Displayed** | **Badge:** Trusted by 5,000+ UAE Businesses<br>**H1:** Keep Your UAE Business Running. Leave the Compliance to Us.<br>**Paragraph:** Visa renewals, trade license renewals... |
| **Buttons Used** | "Get Free Consultation" (Primary CTA)<br>5x Service Rail Item Links |
| **Button Colors** | **CTA:** Deep Navy (`#0D1F3C`) background, White (`#FFFFFF`) text.<br>**Rail Items:** White (`#FFFFFF`) background, Slate Navy (`#171F33`) text, Deep Navy (`#0D1F3C`) hover/active state icons. |
| **Button Purpose** | **CTA:** Scrolls user down to the lead form.<br>**Rail Items:** Highlights specific services and scrolls to the contact form when clicked. |
| **Layout & Styling** | Background gradient utilizing White (`#FFFFFF`) and faint tint (if applicable). Typography in Slate Navy (`#171F33`). |
| **Responsive Behavior** | **Desktop/Tablet:** Headline and CTA placed prominently (left aligned or centered). Rail items may display in a wrapping row or compact vertical list.<br>**Mobile:** Text size scales down. Rail items stack vertically in a single column. |

### 3. Audience Selector (Who We Serve)
| Attribute | Details |
| :--- | :--- |
| **Purpose** | An interactive tabbed section allowing users to select their business type to see tailored services. |
| **Exact HTML Content** | `Who We Serve`<br>`Find your business type`<br><br>**Tabs:** `Freezone Traders`, `Logistics Operators`, `E-Commerce`<br><br>**Trader Panel:**<br>`Your Freezone. Our Expertise.`<br>`From JAFZA to DMCC, we manage your freezone compliance lifecycle so you focus on trade.`<br>- `Trade License Renewal`<br>- `Investor and Employee Visa Processing`<br>- `PRO and Document Clearance`<br>- `License Activity Amendment`<br>- `Corporate Bank Account Assistance`<br><br>**Logistics Panel:**<br>`Port Access. Customs Cleared.`<br>`Keep cargo moving at Jebel Ali, Abu Dhabi, and Sharjah with zero documentation delays.`<br>- `Customs Clearance — All UAE Ports`<br>- `Import and Export Permits`<br>- `Bonded Warehouse Documentation`<br>- `Employee Visa and Labour Compliance`<br>- `DP World Compliance Documentation`<br><br>**E-Commerce Panel:**<br>`Sell Globally. Stay Compliant.`<br>`VAT, customs, and visa compliance for UAE-based e-commerce and fulfilment operations.`<br>- `VAT Registration and Quarterly Filing`<br>- `FTA Compliance and Penalty Resolution`<br>- `Import Permit and Customs Clearance`<br>- `Employee and Partner Visa Processing`<br>- `Trade License Renewal and Amendment` |
| **Heading/Text Displayed** | **Kicker:** Who We Serve<br>**H2:** Find your business type<br>Panel Headings, Paragraphs, and Service Checklists for each tab as per content above. |
| **Buttons Used** | 3x Tab Selection Buttons (Traders, Logistics, E-Commerce) |
| **Button Colors** | **Default Tab:** White (`#FFFFFF`) background, Slate Navy (`#171F33`) text/border.<br>**Active Tab:** Deep Navy (`#0D1F3C`) background, White (`#FFFFFF`) text. |
| **Button Purpose** | Switches the visible content panel to show services relevant to the selected audience. |
| **Layout & Styling** | Base White (`#FFFFFF`) section. |
| **Responsive Behavior** | **Desktop/Tablet:** Tabs are displayed horizontally. Content panel takes full width underneath.<br>**Mobile:** Tabs transform into a horizontal scrollable row (pill navigation) to fit on screen without breaking structure. |

### 4. Trust Bar
| Attribute | Details |
| :--- | :--- |
| **Purpose** | A statistics strip to build credibility. |
| **Exact HTML Content** | `5,000+` / `Businesses Served`<br>`15+` / `UAE Freezones Covered`<br>`10+` / `Years Experience`<br>`98%` / `Client Renewal Rate`<br>`UAE Filing is operated by Corebridge Corporate Solutions, Dubai, UAE.` |
| **Heading/Text Displayed** | 4 Statistic Numbers and Labels. Small disclaimer note at the bottom. |
| **Buttons Used** | None |
| **Button Colors** | N/A |
| **Button Purpose** | N/A |
| **Layout & Styling** | Deep Navy (`#0D1F3C`) background, White (`#FFFFFF`) text. |
| **Responsive Behavior** | **Desktop:** 4 columns side-by-side (1x4 grid).<br>**Tablet:** 2x2 grid.<br>**Mobile:** 2x2 grid or stacked vertically depending on screen width constraints. |

### 5. Services Section
| Attribute | Details |
| :--- | :--- |
| **Purpose** | A grid display of all core services offered. |
| **Exact HTML Content** | `Our Services`<br>`Everything your UAE business needs in one place`<br>`Ongoing compliance services that keep your freezone business legally active and operationally uninterrupted.`<br><br>**Cards:**<br>1. `Visa Renewal and Processing` / `Employee, investor, partner, and dependent visa renewals handled end to end including medical typing and MOHRE registration.` / Tag: `All Audiences`<br>2. `Trade License Renewal` / `Annual freezone and mainland license renewal. We manage submission, payment, and government liaison. No missed deadlines.` / Tag: `Traders / E-Commerce`<br>3. `Customs Clearance` / `Full customs clearance at Jebel Ali, Abu Dhabi, and Sharjah ports. Import and export permits and DP World compliance.` / Tag: `Logistics / E-Commerce`<br>4. `VAT Filing and FTA Compliance` / `Quarterly VAT returns, FTA registration, penalty resolution, and corporate tax compliance for freezone entities.` / Tag: `Traders / E-Commerce`<br>5. `PRO and Document Clearance` / `Government document processing, attestation, AMER and Tasheel typing. Your on-the-ground PRO in Dubai.` / Tag: `All Audiences`<br>6. `Corporate Bank Account` / `Assistance with UAE corporate bank account opening for freezone companies. Documentation and bank liaison included.` / Tag: `All Audiences` |
| **Heading/Text Displayed** | Kicker, H2, Paragraph. 6 Service Cards with Titles, Descriptions, and Tags. |
| **Buttons Used** | None (Service cards act as display elements). |
| **Button Colors** | N/A |
| **Button Purpose** | N/A |
| **Layout & Styling** | Main Base White (`#FFFFFF`) for background and cards. Slate Navy (`#171F33`) for headings. |
| **Responsive Behavior** | **Desktop:** 3 columns (3x2 grid).<br>**Tablet:** 2 columns (2x3 grid).<br>**Mobile:** 1 column vertically stacked (1x6 grid). |

### 6. How It Works (The Process)
| Attribute | Details |
| :--- | :--- |
| **Purpose** | A step-by-step vertical timeline explaining the onboarding and service process. |
| **Exact HTML Content** | `The Process`<br>`Three steps to stay compliant`<br>`No queues. No government portals. We handle it all from our Dubai office.`<br><br>**Steps:**<br>`1. Submit Your Enquiry` / `Fill in the form with your company details and the service you need. Our team reviews within one business day.`<br>`2. Speak with a Specialist` / `A dedicated UAE Filing advisor contacts you to confirm requirements and provide a transparent fixed quote. No hidden fees.`<br>`3. We Handle Everything` / `All government submissions, document processing, and follow-up managed by our team. Status updates at every stage.`<br><br>**Timelines:**<br>`Visa renewals` / `3 to 5 working days`<br>`License renewals` / `5 to 7 working days`<br>`Customs clearance` / `48 hours average` |
| **Heading/Text Displayed** | Kicker, H2, Paragraph. 3 Process Steps. 3 Timeline Estimates. |
| **Buttons Used** | None |
| **Button Colors** | N/A |
| **Button Purpose** | N/A |
| **Layout & Styling** | Background Base White (`#FFFFFF`). Step Numbers use Deep Navy (`#0D1F3C`) background with White (`#FFFFFF`) text. |
| **Responsive Behavior** | **Desktop/Tablet/Mobile:** Maintains a vertical timeline list structure. Step lines/spacing scales down proportionally on smaller screens. |

### 7. Freezone Coverage (Coverage)
| Attribute | Details |
| :--- | :--- |
| **Purpose** | Stacked panels listing the supported freezones and ports. |
| **Exact HTML Content** | `Coverage`<br>`UAE Freezones and Ports We Work With`<br>`We know the exact requirements for your zone and port. Wherever you are registered.`<br><br>**Panel 1 Header:** `Freezone Licences` / `15+ Zones`<br>**Panel 1 Items:**<br>- `JAFZA — Jebel Ali Freezone Authority`<br>- `DMCC — Dubai Multi Commodities Centre`<br>- `RAKEZ — Ras Al Khaimah Economic Zone`<br>- `SHAMS — Sharjah Media City`<br>- `IFZA — International Freezone Authority`<br>- `DAFZA — Dubai Airport Freezone`<br>- `Hamriyah Freezone`<br>- `Ajman Freezone`<br>- `ADGM — Abu Dhabi Global Market`<br>- `All other UAE Freezones`<br><br>**Panel 2 Header:** `Ports and Customs Zones` / `7 Ports`<br>**Panel 2 Items:**<br>- `Jebel Ali Port — DP World`<br>- `Abu Dhabi Port — Khalifa Port`<br>- `Sharjah Port — Khorfakkan`<br>- `Port Rashid, Dubai`<br>- `Hamriyah Port`<br>- `Dubai International Airport — Air Freight`<br>- `Abu Dhabi Airport — Air Freight` |
| **Heading/Text Displayed** | Kicker, H2, Paragraph. 2 Main Panels with sub-lists of locations. |
| **Buttons Used** | None (May behave as accordions on mobile). |
| **Button Colors** | N/A |
| **Button Purpose** | N/A |
| **Layout & Styling** | White (`#FFFFFF`) Base background. List items use Slate Navy (`#171F33`) text. |
| **Responsive Behavior** | **Desktop:** Panels display expanded in 2 columns.<br>**Tablet/Mobile:** Panels stack vertically in 1 column. Lists may be collapsed into accordions on very small screens to save vertical space. |

### 8. Why UAE Filing
| Attribute | Details |
| :--- | :--- |
| **Purpose** | Value propositions and client testimonials. |
| **Exact HTML Content** | `Why UAE Filing`<br>`Why Businesses Choose Us`<br>`Corebridge Corporate Solutions. Over a decade of UAE regulatory compliance. Your on-the-ground partner in Dubai.`<br><br>**Values:**<br>1. `One Point of Contact` / `A dedicated advisor manages all your requirements. No call centres. No queues.`<br>2. `Transparent Pricing` / `Fixed quote before any work begins. No hidden government fees. No surprise charges.`<br>3. `Government Liaison Included` / `We handle all interaction with UAE government portals and freezones. You do not need to visit the UAE.`<br><br>**Quotes:**<br>1. `"Our JAFZA license and three employee visas were renewed without us visiting the UAE once. UAE Filing handled everything remotely."` - `Logistics Company, United Kingdom`<br>2. `"We received an FTA penalty on a late VAT return. UAE Filing resolved the filing and secured a waiver within two weeks."` - `E-Commerce Trader, India`<br>3. `"Our Jebel Ali customs clearance now takes 48 hours consistently. UAE Filing handles our import permits end to end."` - `Import and Export Trader, Oman` |
| **Heading/Text Displayed** | Kicker, H2, Paragraph. 3 Value Proposition Blocks. 3 Quote Cards. |
| **Buttons Used** | None |
| **Button Colors** | N/A |
| **Button Purpose** | N/A |
| **Layout & Styling** | Quote cards have White (`#FFFFFF`) backgrounds with Slate Navy (`#171F33`) text accents. |
| **Responsive Behavior** | **Desktop:** Value propositions and Quotes display side-by-side in a split layout or multi-column grid.<br>**Tablet:** 2 column grid for quotes.<br>**Mobile:** Single vertical column for all value blocks and quotes. |

### 9. FAQ
| Attribute | Details |
| :--- | :--- |
| **Purpose** | An interactive accordion for frequently asked questions. |
| **Exact HTML Content** | `FAQ`<br>`Frequently asked questions`<br>`Common questions from traders, logistics operators, and e-commerce businesses.`<br><br>**General:**<br>- `Do I need to be in the UAE to renew my license or visa?` / `No. UAE Filing manages the full renewal process remotely from our Dubai office. We require your documents and authorisation only.`<br>- `How long does a visa renewal take?` / `Standard visa renewals take 3 to 5 working days once documents are received. You receive status updates throughout.`<br>- `Can you handle any UAE Freezone?` / `Yes. We work across all UAE Freezones including JAFZA, DMCC, RAKEZ, SHAMS, IFZA, DAFZA, Hamriyah, Ajman, and more.`<br><br>**Logistics Operators:**<br>- `Do you clear customs at all UAE ports?` / `Yes. We cover Jebel Ali, Abu Dhabi (Khalifa Port), Sharjah (Khorfakkan), and UAE air ports. We process import permits, bonded warehouse documentation, and duty calculations.`<br>- `Can you clear cargo without us being present?` / `Yes. We act as your authorised customs agent. All procedures are managed by our team and you receive copies of all documentation.`<br><br>**E-Commerce:**<br>- `We received an FTA penalty. Can you help?` / `Yes. We can file outstanding VAT returns and submit a formal penalty reconsideration request to the FTA. Our team has resolved many such cases.`<br>- `Do you support GCC and international shipping?` / `Yes. We support UAE-based e-commerce companies using the UAE as a re-export hub, covering VAT, customs, import permits, and license renewals.` |
| **Heading/Text Displayed** | Kicker, H2, Paragraph. 3 Categorized groups of Question/Answer accordions. |
| **Buttons Used** | 7x Accordion Toggle Buttons |
| **Button Colors** | **Accordion Buttons:** White (`#FFFFFF`) background, Slate Navy (`#171F33`) text. The toggle icon (+/-) uses Deep Navy (`#0D1F3C`). |
| **Button Purpose** | **Accordion Toggle:** Expands or collapses the answer panel for the specific question. |
| **Layout & Styling** | Base White (`#FFFFFF`) section. |
| **Responsive Behavior** | **Desktop/Tablet/Mobile:** Accordion format remains consistent across all breakpoints, ensuring optimal vertical space management. Font sizes scale down slightly on mobile. |

### 10. Lead Form (Contact)
| Attribute | Details |
| :--- | :--- |
| **Purpose** | The primary lead capture form. |
| **Exact HTML Content** | `Get In Touch`<br>`Ready to Keep Your UAE Business Compliant?`<br>`A UAE Filing compliance specialist will contact you within one business day. Serving the UK, India, Oman, Turkey, and GCC.`<br><br>**Meta info:**<br>- `info@uaefiling.com`<br>- `Dubai, United Arab Emirates`<br>- `Operated by Corebridge Corporate Solutions`<br><br>**Form Fields:**<br>- `Full Name *`<br>- `Company *`<br>- `Email Address *`<br>- `Phone Number *`<br>- `Country` (Options: Select, United Kingdom, India, Oman, Turkey, UAE, Other)<br>- `Freezone / Port`<br>- `Service Required` (Options: Select service, Visa Renewal, Trade License Renewal, PRO and Document Clearance, Customs Clearance, VAT Filing and FTA Compliance, Corporate Bank Account, Multiple Services)<br>- `Message (optional)`<br><br>**Trust Text:** `Your information is protected and never shared.` |
| **Heading/Text Displayed** | Kicker, H2, Paragraph. 3 Meta contact details. Form input labels/placeholders. Trust badge text. |
| **Buttons Used** | "Submit Enquiry" (Form submit button) |
| **Button Colors** | **Submit Enquiry:** White (`#FFFFFF`) background, Deep Navy (`#0D1F3C`) text. |
| **Button Purpose** | Validates and submits the user's form data. |
| **Layout & Styling** | Entire section background is Primary Dark Deep Navy (`#0D1F3C`). White (`#FFFFFF`) text. |
| **Responsive Behavior** | **Desktop/Tablet:** Left side holds contact text/meta info, right side holds the form (2 column split). Form fields may sit 2-per-row.<br>**Mobile:** Layout stacks vertically. All form fields become 100% width (1-per-row). |

### 11. Footer
| Attribute | Details |
| :--- | :--- |
| **Purpose** | Secondary navigation and legal/copyright information. |
| **Exact HTML Content** | Logo Text/Image (`UAE Filing Logo .png`)<br>`Expert UAE Compliance. Wherever You Are. Operated by Corebridge Corporate Solutions, Dubai.`<br><br>**Services column:** `Services`<br>- `Visa Renewal`<br>- `License Renewal`<br>- `PRO Services`<br>- `Customs Clearance`<br>- `VAT Filing`<br><br>**Company column:** `Company`<br>- `How It Works`<br>- `Freezones`<br>- `About Us`<br>- `Contact`<br>- `Privacy Policy`<br><br>**Copyright Text:**<br>`Copyright 2026 UAE Filing. All rights reserved. Operated by Corebridge Corporate Solutions, Dubai, UAE.` |
| **Heading/Text Displayed** | Logo, Tagline, 2 Columns of Links, Copyright text. |
| **Buttons Used** | None (Text links only) |
| **Button Colors** | N/A |
| **Button Purpose** | N/A |
| **Layout & Styling** | Background Deepest Accent Midnight Navy (`#071429`). Text uses White (`#FFFFFF`) with varying opacity. |
| **Responsive Behavior** | **Desktop:** 3 to 4 column layout (Logo/Tagline on left, link columns on right).<br>**Tablet:** 2 column layout.<br>**Mobile:** Vertical stack, all columns sit on top of each other. Center-aligned text. |

---

## 4. Current Design System & Spacing Matrix

### Recent Changes & Layout Improvements
*   **Mobile View Enhancements:**
    *   Removed sticky floating bottom bar and body offsets.
    *   Converted the 6-card Services Grid into a smooth horizontal scroll carousel with CSS scroll-snap (`scroll-snap-type: x mandatory`).
    *   Fixed layout cut-off and text wrapping in `.step-item` cards, setting `min-width: 0` on flex children.
    *   Removed em-dashes (`—`) in JAFZA/DMCC listings to structure them into clean 2-line stacked typography.
    *   Added a dedicated `.mobile-menu-header` inside the overlay drawer containing a light logo and a large close button (`&times;`).
*   **Desktop View Enhancements:**
    *   Solved double scrollbar issues by making `html` the exclusive scrolling container (`overflow-y: auto`) and setting `body` to `overflow: visible`.
    *   Compacted the desktop sticky navbar padding to `10px 40px` and height to `60px` with a proportional `28px` logo.
    *   Styled the 'Get In Touch' section (`.contact-section`) into a navy floating card container with `24px` rounded corners and outer margins.
*   **Testimonials Component:**
    *   Enforced `.testimonial-card` with `min-height: 220px !important` to prevent height switches or layout jumps.
    *   Wired pure opacity cross-fade transitions (`0.3s ease-in-out`) without translation offsets.

---

### Section Layout Architecture & Core Styles

| Section Sequence | Desktop Layout | Mobile Layout | Core CSS Classes / Selectors |
| :--- | :--- | :--- | :--- |
| **1. Header / Navbar** | Horizontal Flexbox, sticky top, centered container | Compact flex layout, logo left, hamburger right | `.navbar`, `.navbar-inner`, `.logo-link` |
| **2. Hero Section** | Centered vertical stack, infinite horizontal marquee | Scaled fonts, block stacking, horizontal marquee | `.hero`, `.hero-inner`, `.hero-marquee-wrapper` |
| **3. Who We Serve** | Horizontal tabs list, grid split panels underneath | Scrollable pill tab triggers, single column stacked | `.serve-section`, `.serve-tabs-nav`, `.serve-panel-grid` |
| **4. Services Grid** | 3-Column Grid (`repeat(3, 1fr)`) | Swipe carousel, card widths `82vw`, scroll snap | `.services-grid`, `.service-card`, `.service-link` |
| **5. The Process** | Vertical timeline flow with card details | Single column layout, Top-left flexed step labels | `.process-section`, `.process-layout`, `.step-item` |
| **6. Average Timelines** | Flex row header, block columns | Stacked timelines, wrapping pill status badges | `.process-timelines`, `.timeline-box`, `.timeline-row` |
| **7. Coverage** | 2-Column Grid split panels (Zones / Ports) | Single column layout, stacked list items | `.coverage-section`, `.coverage-grid`, `.zone-item` |
| **8. Why UAE Filing** | 2-Column Grid (3 Value cards left, Testimonials right) | Single column layout, stacked card panels | `.why-section`, `.why-grid`, `.value-card` |
| **9. Testimonial Dock** | Center aligned text, initials buttons group underneath | Identical switcher block, smaller mobile typography | `.testimonial-switcher-container`, `.avatar-group` |
| **10. FAQ** | Full width centered grid accordions | Stacking column list items, smaller text sizes | `.faq-section`, `.faq-grid-layout`, `.accordion-item` |
| **11. Get In Touch** | Floating Card (4:6 Grid contact info vs form fields) | Floating Card (1-Column Stack, compact paddings) | `.contact-section`, `.contact-grid`, `.contact-form-wrapper` |
| **12. Footer** | Multi-column grid (Branding left, link lists right) | Centered vertical flex stack, centered logo & links | `.footer`, `.footer-grid`, `.footer-brand`, `.link-column` |

---

### Spacing & Padding Matrix

| Section / Element | Desktop (> 1024px) | Tablet (768px - 1023px) | Mobile (< 768px) |
| :--- | :--- | :--- | :--- |
| **Sticky Navbar** | `padding: 10px 40px !important; min-height: 60px` | `padding: 10px 32px !important; min-height: 60px` | `padding: 10px 16px !important; height: 56px` |
| **Hero Section** | `padding: 40px 20px !important; margin-bottom: 0` | `padding: 40px 20px !important; margin-bottom: 0` | `padding: 40px 20px !important; margin-bottom: 0` |
| **Who We Serve** | `padding-top: 24px !important; padding-bottom: 48px` | `padding-top: 24px !important; padding-bottom: 48px` | `padding-top: 24px !important; padding-bottom: 32px` |
| **Services Grid** | `padding: 48px 0 !important; margin-bottom: 48px` | `padding: 48px 0 !important; margin-bottom: 48px` | `padding: 32px 0 !important; margin-bottom: 32px` |
| **The Process** | `padding: 48px 0 !important; margin-bottom: 48px` | `padding: 48px 0 !important; margin-bottom: 48px` | `padding: 32px 0 !important; margin-bottom: 32px` |
| **Coverage** | `padding: 48px 0 !important; margin-bottom: 48px` | `padding: 48px 0 !important; margin-bottom: 48px` | `padding: 32px 0 !important; margin-bottom: 32px` |
| **Why UAE Filing** | `padding: 48px 0 !important; margin-bottom: 48px` | `padding: 48px 0 !important; margin-bottom: 48px` | `padding: 32px 0 !important; margin-bottom: 32px` |
| **FAQ** | `padding: 48px 0 !important; margin-bottom: 48px` | `padding: 48px 0 !important; margin-bottom: 48px` | `padding: 32px 0 !important; margin-bottom: 32px` |
| **Get In Touch** | `padding: 48px 40px !important; margin: 0 auto 60px` | `padding: 48px 40px !important; margin: 0 auto 60px` | `padding: 32px 20px !important; margin: 0 auto 40px` |
| **Footer** | `padding: 96px 0 48px 0;` | `padding: 96px 0 48px 0;` | `padding: 48px 0 32px 0;` |

---

### Button & Badge Design Tokens

#### 1. Primary Buttons (`.btn-primary`, `.btn-flow`, `.btn-submit`)
*   **Desktop:** `padding: 10px 20px; font-size: 15px; font-weight: 600; border-radius: 8px;`
*   **Mobile:** Auto width, block layouts stretch `100%` width with tap target helper adjustments.
*   **Flow Button Hover:** Scale transitions on inner svg arrow elements (`transform: translateX(4px)`).

#### 2. Navbar CTA Button (`.nav-cta-btn`)
*   **Desktop (> 768px):** `padding: 8px 18px !important; font-size: 13px !important; font-weight: 600; border-radius: 8px;`
*   **Mobile (< 768px):** Hidden (`display: none !important;`).

#### 3. Category Eyebrow Badges (`.section-eyebrow`, `.badge`)
*   **Desktop/Mobile:** `padding: 6px 14px; font-size: 12px; font-weight: 700; border-radius: 999px; text-transform: uppercase; letter-spacing: 1px; width: fit-content;`

#### 4. SLA & Info Capsule Badges (`.sla-badge`, `.badge-pill`)
*   **Desktop/Mobile:** `padding: 6px 12px !important; font-size: 12px !important; font-weight: 600 !important; border-radius: 999px; white-space: nowrap !important;`

#### 5. Testimonial Avatar Pills (`.avatar-btn`)
*   **Inactive State:** Circle button (`width: 36px !important; height: 36px !important; border-radius: 50% !important; padding: 0 !important;`). Inner initials circle: `width: 34px; height: 34px; font-size: 12px;`.
*   **Active State:** Expanded pill (`width: auto !important; height: 36px !important; padding: 0 12px 0 4px !important; border-radius: 9999px !important;`). Inner initials circle shrinks: `width: 28px; height: 28px; font-size: 10px;`. Name text fades in: `max-width: 150px; opacity: 1; margin-left: 8px; font-size: 13px !important; font-weight: 700;`.

---

### Typography & Global Responsiveness Guidelines

#### Heading Sizes & Line Heights
*   **H1 (Hero):**
    *   Desktop: `font-size: clamp(2.5rem, 5vw, 4rem); line-height: 1.2;`
    *   Mobile (< 768px): `font-size: clamp(28px, 6vw, 32px) !important; line-height: 1.25 !important;`
*   **H2 (Section Header):**
    *   Desktop: `font-size: clamp(2rem, 4vw, 3rem); line-height: 1.2;`
    *   Mobile (< 768px): `font-size: 1.75rem !important; line-height: 1.25 !important;`
*   **H3 (Card Title):**
    *   Desktop: `font-size: 1.25rem; line-height: 1.35;`
    *   Mobile (< 768px): `font-size: 17px !important; line-height: 1.3 !important;`
*   **Body Paragraphs:**
    *   Desktop: `font-size: 0.9375rem (15px) / 1.0625rem (17px); line-height: 1.6;`
    *   Mobile (< 768px): `font-size: 14px / 15px !important;`

#### Responsiveness Rules
*   **Single Scrollbar Rule:** Force `html { overflow-y: auto; }` and `body { overflow: visible !important; }` to lock scrollbars strictly to the root browser window. Force `overflow-y: visible !important` on structural containers (`div`, `main`, `section`, `header`, `nav`).
*   **Mobile Viewport Bounds:** Lock layout limits (`max-width: 100vw; box-sizing: border-box; overflow-x: hidden;`) to prevent unwanted right-side clipping scrollbars.

---
> **Developer Note:** This design system specification reflects the active layout metrics in styles.css and is aligned with the production deployment.
