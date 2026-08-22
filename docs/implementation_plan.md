# CoreBridge Landing Page - Project Specification (SSOT)

## Project Name
CoreBridge Landing Page Implementation

## Goal
To implement a high-converting, responsive landing page for **corebridge.com** using the provided fixed HTML content and logo. The implementation strictly adheres to the official 60-30-10 brand color system. This document serves as the Single Source of Truth (SSOT).

## Document Overview
This document defines the exact content, structure, buttons, styling, 60-30-10 color distribution, CSS variables, and responsive behaviors for every section of the landing page.

---

## 1. Official Brand Palette & 60-30-10 Color Architecture

The visual architecture is governed strictly by the **60-30-10 Rule** to ensure high-end corporate fintech aesthetics, clean contrast ratios, and effortless visual hierarchy:

```css
:root {
  --bg-primary: #FFFFFF;
  --bg-secondary: #EAF1FF;
  --border-subtle: #EAF1FF;
  --navy-dark: #0A1F44;
  --text-main: #0D0D0D;
  --text-muted: #444444;
  --text-navy-sub: #A9C2FF;
  --accent-primary: #0052FF;
  --accent-hover: #3D8BFF;
}
```

### 60% DOMINANT — Base / Canvas / Whitespace
*   **Pure White (`#FFFFFF`):** Main body background, primary cards, input fields, checklist containers, modal surfaces.
*   **Light Blue Tint (`#EAF1FF`):** Subtle card/panel backgrounds, pill badges, subtle borders (`1px solid #EAF1FF`), inactive pill backgrounds.

### 30% STRUCTURAL — Contrast / Structure / Typography
*   **Deep Navy (`#0A1F44`):** Dark stats section, contact section outer container, footer background, primary structural containers.
*   **Near Black (`#0D0D0D`):** Primary headings (H1, H2, H3), active tab titles, checklist bold labels, high-emphasis text.
*   **Muted Body Text (`#444444`):** Paragraph descriptions, secondary body text, form field labels, secondary navigation.
*   **Light Blue Subtext (`#A9C2FF`):** Subtitles, meta text, and muted copy placed inside dark navy containers.

### 10% ACCENT — Conversion Points / Interactive Highlights
*   **Primary Blue (`#0052FF`):** Primary CTA buttons, active tab backgrounds, badge pill text, key action triggers, icons.
*   **Accent Blue (`#3D8BFF`):** Hover states for buttons, interactive focus rings, active link hovers.

---

## 2. Technical & Design Architecture

To ensure a high-end, premium corporate compliance aesthetic (avoiding generic agency templates), the following architectural guidelines are strictly enforced:

| Category | Execution Approach | Reasoning |
| :--- | :--- | :--- |
| **1. Tech Stack** | **Semantic HTML5, Vanilla CSS, Vanilla JavaScript.** No heavy frameworks (React/Tailwind) unless explicitly requested. | Ensures maximum performance, zero code bloat, lightning-fast load times, and perfect SEO indexing. |
| **2. Design Approach** | **Premium Corporate Fintech Style.** High-contrast layouts, strict geometric typography (e.g. Inter), mathematically consistent spacing, and subtle 10px–20px rounded card corners. | Eliminates the "cheap template" look. Creates a serious, authoritative visual presence suitable for B2B compliance. |
| **3. Animation System** | **Smooth Micro-Interactions & Transitions.** Smooth fade & slide transitions on tab switches (`smoothTabFade`), marquee infinite scroll tracks, subtle hover lifts, and clean scroll reveals. | Ensures the page feels dynamic and premium without distracting the user with aggressive or bouncy animations. |
| **4. Responsive Behavior & UX** | **Mobile-First CSS.** Single-column vertical stacks for complex sections, 2-column mobile form layout with full-span CTA, horizontal scroll carousels for card decks, and clean 44px+ touch targets. | Guarantees a flawless user experience across small phones (<430px), tablets, and desktop viewports. |
| **5. AI Skills Active** | Enforcement of `high-end-visual-design`, `ui-ux-pro-max`, and `frontend-design` AI protocols during implementation. | Actively blocks generic AI coding defaults to maintain top-tier, agency-level UI/UX quality control throughout the build. |

---

## 3. Section-by-Section Color & Component Specifications

### 1. Navbar
| Attribute | Details |
| :--- | :--- |
| **Purpose** | A sticky navigation bar for branding and quick contact access. |
| **Exact HTML Content** | `CoreBridge`<br>`+971-586 450 918`<br>`Book Consultation` |
| **Color Mapping** | **Background:** Pure White (`#FFFFFF`) with subtle border (`1px solid #EAF1FF`) and backdrop blur.<br>**Logo/Brand:** Crisp official logo image.<br>**Nav Links:** Near Black (`#0D0D0D`) on hover / Muted Body Text (`#444444`).<br>**CTA Button:** Background Primary Blue (`#0052FF`), Text Pure White (`#FFFFFF`), Hover Accent Blue (`#3D8BFF`). |
| **Buttons Used** | "Book Consultation" (Primary CTA), Mobile Hamburger Menu Button |
| **Responsive Behavior** | **Desktop/Tablet:** Full logo, navigation links, and "Book Consultation" button visible.<br>**Mobile (<768px):** Height 56px, Logo height 34px, Hamburger drawer menu overlay. |

### 2. Hero Section
| Attribute | Details |
| :--- | :--- |
| **Purpose** | Main value proposition and primary call-to-action area at the top of the page. |
| **Exact HTML Content** | `DUBAI-BASED UAE COMPANY SETUP SPECIALISTS`<br>`Set Up Your UAE Trading Company with Confidence.`<br>`Built For Exporters, Traders and Distributors Worldwide. Establish your business in one of the world’s leading trade hubs.`<br><br>**Marquee Cards:**<br>1. `Visa Renewal` / `Employee, investor & dependent visas`<br>2. `Trade License Renewal` / `JAFZA, DMCC, RAKEZ & 15+ freezones`<br>3. `Customs Clearance` / `Jebel Ali, Abu Dhabi, Sharjah ports`<br>4. `VAT Filing & FTA Compliance` / `Quarterly returns & penalty resolution`<br>5. `PRO & Document Clearance` / `AMER, Tasheel, attestation & MOHRE` |
| **Color Mapping** | **Background:** Pure White (`#FFFFFF`).<br>**Heading (H1):** Near Black (`#0F172A`).<br>**Paragraph:** Muted Slate (`#334155`).<br>**Badge Pill:** Background Light Blue Tint (`#EFF6FF`), Text Primary Blue (`#0052FF`).<br>**CTA Button:** Background Primary Blue (`#0052FF`), Text Pure White (`#FFFFFF`), Hover Accent Blue (`#3D8BFF`).<br>**Auto-scroll Cards:** Background Pure White (`#FFFFFF`), Border `1px solid #EAF1FF`, Text Near Black (`#0D0D0D`). |
| **Buttons Used** | "Get Free Consultation →" (Primary CTA), 5x Duplicated Marquee Feature Cards |
| **Responsive Behavior** | **Desktop:** Centered typography stack with desktop break, 52px H1 title.<br>**Mobile:** Compact single column, 26px H1 title, balance text wrapping. |

### 2.5. Why Traders Come to Us Section (Split Layout)
| Attribute | Details |
| :--- | :--- |
| **Purpose** | Highlight core challenges international exporters/traders face and present Core Bridge as the unified, end-to-end Dubai coordination partner. |
| **Positioning** | Placed directly between Hero Section and Who We Serve Section. |
| **Pill Badge** | `Why Traders Come to Us` |
| **Main Heading (H2)** | `Setting up a UAE trading company is more involved than most expect.` |
| **Introductory Paragraph** | `Exporters and distributors from the UK, India, Turkey and Africa face the same challenges when trying to establish a UAE free zone or mainland trading structure without local guidance.` |
| **Left Column (Sticky Solution)** | **Sub-heading (H3):** `Core Bridge coordinates the entire UAE trading company setup through one team.`<br>**Body Copy:** `We help you choose the right free zone or mainland route for your trade activities, prepare all required documents and coordinate company formation, corporate bank account facilitation and initial VAT and Corporate Tax registration with a named Dubai-based advisor for WhatsApp and email updates throughout the process.`<br>**CTA Button:** `Get Free Consultation →` |
| **Right Column (4 Challenge Cards)** | **Card 1:** `Unclear whether a free zone trading license or mainland company is the right structure for their specific products, export markets and trade flow.`<br>**Card 2:** `Corporate bank account documentation requirements in the UAE are complex. Rejected applications are common without prior file preparation and the right introductions.`<br>**Card 3:** `Uncertainty about UAE VAT registration thresholds and Corporate Tax obligations for free zone trading companies and re-export operations.`<br>**Card 4:** `No single Dubai-based point of contact to coordinate company formation, banking and tax registration — most providers handle only one piece of the process.` |
| **Color Mapping** | **Background:** Off-White/Light Tint (`#F8FAFC` or `#FFFFFF`).<br>**Cards Background:** Pure White (`#FFFFFF`) with subtle border `1px solid #E2E8F0` and soft shadow.<br>**Headings:** Deep Slate (`#0F172A`).<br>**Body Text:** Muted Slate (`#475569`).<br>**Badge:** Soft Blue Tint (`#EFF6FF`) with Primary Blue Text (`#0052FF`).<br>**CTA Button:** Primary Blue (`#0052FF`) with White Text (`#FFFFFF`). |
| **Layout & Behavior** | **Desktop (>= 1024px):** 2-column grid. Left column has sticky positioning (`position: sticky; top: 100px;`) while user scrolls through the 4 challenge cards on the right.<br>**Mobile (< 768px):** Stacked single column with header, solution text, and cards arranged sequentially. |

### 3. Audience Selector (Who We Serve)
| Attribute | Details |
| :--- | :--- |
| **Purpose** | An interactive tabbed section allowing users to select their business type to see tailored services with smooth transitions. |
| **Exact HTML Content** | `Who We Serve`<br>`Find your business type`<br><br>**Tabs:** `Freezone Traders`, `Logistics Operators`, `E-Commerce`<br><br>**Trader Panel:** `Your Freezone. Our Expertise.` (DMCC / JAFZA Hub Card)<br>**Logistics Panel:** `Port Access. Customs Cleared.`<br>**E-Commerce Panel:** `Sell Globally. Stay Compliant.` |
| **Color Mapping** | **Background:** Pure White (`#FFFFFF`).<br>**Active Tab:** Background Primary Blue (`#0052FF`), Text Pure White (`#FFFFFF`).<br>**Inactive Tabs:** Background Light Blue Tint (`#EAF1FF`), Text Near Black (`#0D0D0D`), Border `1px solid #EAF1FF`.<br>**Showcase Card:** Background Pure White (`#FFFFFF`), Border `1px solid #EAF1FF`, Box Shadow `0 10px 30px rgba(15, 23, 42, 0.04)`.<br>**Hub Pills / Tags:** Background Light Blue Tint (`#EAF1FF`), Text Primary Blue (`#0052FF`). |
| **Buttons Used** | 3x Tab Selection Buttons (Traders, Logistics, E-Commerce), "Explore Freezone Services" CTA |
| **Animation Behavior** | `smoothTabFade` animation: `0.35s cubic-bezier(0.16, 1, 0.3, 1)` with `opacity: 0 → 1` and `translateY: 10px → 0px`. |

### 4. Dark Navy Stats Bar (Trust Bar)
| Attribute | Details |
| :--- | :--- |
| **Purpose** | High-contrast credibility section highlighting proven track record. |
| **Exact HTML Content** | `5,000+` / `Businesses Served`<br>`15+` / `UAE Freezones Covered`<br>`10+` / `Years Experience`<br>`98%` / `Client Renewal Rate`<br>`Core Bridge is a Dubai-based corporate services firm specialising in UAE company formation, bank facilitation and VAT and Corporate Tax registration for international traders and exporters.` |
| **Color Mapping** | **Container Background:** Deep Navy (`#0A1F44`).<br>**Numbers / Main Stats:** Pure White (`#FFFFFF`).<br>**Labels / Subtext:** Light Blue Subtext (`#A9C2FF`).<br>**Container Border Radius:** `24px` on all 4 corners with `overflow: hidden`. |
| **Responsive Behavior** | **Desktop:** 4 columns side-by-side (1x4 grid).<br>**Mobile:** 2x2 grid, centered with `calc(100% - 32px)` width. |

### 5. Services Section
| Attribute | Details |
| :--- | :--- |
| **Purpose** | A comprehensive display of core compliance services. |
| **Exact HTML Content** | `Our Services`<br>`Everything your UAE business needs in one place`<br>6 Service Cards: Visa Renewal, Trade License Renewal, Customs Clearance, VAT Filing & FTA Compliance, PRO & Document Clearance, Corporate Bank Account. |
| **Color Mapping** | **Background:** Pure White (`#FFFFFF`).<br>**Headings:** Near Black (`#0D0D0D`).<br>**Cards:** Background Pure White (`#FFFFFF`), Border `1px solid #EAF1FF`, Hover Border Primary Blue (`#0052FF`).<br>**Service Category Tags:** Background Light Blue Tint (`#EAF1FF`), Text Primary Blue (`#0052FF`). |
| **Responsive Behavior** | **Desktop:** 3-Column Grid (`repeat(3, 1fr)`).<br>**Mobile:** Swipe carousel with `scroll-snap-type: x mandatory` and `82vw` card widths. |

### 6. How It Works (The Process 4-Step Sine Wave Infographic)
| Attribute | Details |
| :--- | :--- |
| **Purpose** | Step-by-step onboarding flow presented as a modern 4-step alternating sine wave roadmap infographic. |
| **Exact HTML Content** | `THE PROCESS`<br>`How to set up your UAE trading company in four steps`<br>`One team manages each stage. A clear document checklist and written scope are agreed before any work begins.`<br>Step 1: Book a 15-Minute Advisory Call<br>Step 2: Receive Your Recommended Setup Route and Document Checklist<br>Step 3: We Coordinate Your Company Formation, Bank File and Tax Registration<br>Step 4: Receive Your Full Handover Pack |
| **Color Mapping** | **Background:** Pure White (`#FFFFFF`).<br>**Wave Line:** Primary Blue SVG stroke (`#0052FF`).<br>**Headings:** Dark Navy (`#0F172A`).<br>**Body Copy:** Muted Slate (`#64748B`).<br>**Pill Badge:** Soft Blue Tint (`#EFF6FF`) with Primary Blue Text (`#0052FF`). |
| **Responsive Behavior** | **Desktop:** 4-Step Alternating Sine Wave Infographic (Top/Bottom nodes with central connecting SVG wave path).<br>**Mobile/Tablet:** Vertical timeline adaptation with connecting line. |

### 7. Freezone & Port Coverage
| Attribute | Details |
| :--- | :--- |
| **Purpose** | Comprehensive lists of supported freezone jurisdictions and maritime/air ports. |
| **Exact HTML Content** | `Coverage`<br>`UAE Freezones and Ports We Work With`<br>Panel 1: `Freezone Licences` (15+ Zones: JAFZA, DMCC, RAKEZ, SHAMS, IFZA, DAFZA, etc.)<br>Panel 2: `Ports and Customs Zones` (7 Ports: Jebel Ali, Khalifa Port, Khorfakkan, etc.) |
| **Color Mapping** | **Background:** Pure White (`#FFFFFF`).<br>**Panels:** Background Pure White (`#FFFFFF`), Border `1px solid #EAF1FF`.<br>**Pill Badges:** Background Light Blue Tint (`#EAF1FF`), Text Primary Blue (`#0052FF`).<br>**List Text:** Near Black (`#0D0D0D`) / Muted Body Text (`#444444`). |
| **Responsive Behavior** | **Desktop:** 2-column grid.<br>**Mobile:** 1-column vertical stack. |

### 8. Why CoreBridge & Testimonial Switcher
| Attribute | Details |
| :--- | :--- |
| **Purpose** | Value propositions and interactive client reviews. |
| **Exact HTML Content** | `Why CoreBridge`<br>`Why Businesses Choose Us`<br>3 Values: One Point of Contact, Transparent Pricing, Government Liaison Included.<br>3 Quotes: Logistics Co (UK), E-Commerce Trader (India), Import/Export (Oman). |
| **Color Mapping** | **Background:** Pure White (`#FFFFFF`).<br>**Value Cards:** Background Pure White (`#FFFFFF`), Border `1px solid #EAF1FF`.<br>**Active Testimonial Pill:** Background Primary Blue (`#0052FF`), Text Pure White (`#FFFFFF`).<br>**Inactive Testimonial Avatar:** Background Light Blue Tint (`#EAF1FF`), Text Near Black (`#0D0D0D`). |
### 8.5. Packages Section (Three Setup Options)
| Attribute | Details |
| :--- | :--- |
| **Purpose** | Present 3 transparent UAE trading company setup tiers (Starter, Growth, Scale) with feature checklists, clear positioning, and supporting advisory disclosure. |
| **Positioning** | Placed directly BEFORE the FAQ Section. |
| **Pill Badge** | `PACKAGES` |
| **Main Heading (H2)** | `Three UAE trading company setup options` |
| **Subtitle** | `All packages include a written document checklist and named advisor. Exact fees confirmed after your advisory call based on jurisdiction, visa count and government charges.` |
| **Background Styling** | Off-White canvas (`#FAFAFA`) with subtle dot grid pattern (`radial-gradient(#CBD5E1 1px, transparent 1px)`). |
| **Package 1 (Starter)** | - **Badge:** `Starter`<br>- **Title:** `Free Zone Trading License`<br>- **Best For:** `Single-entity trading hub for import, export and re-export`<br>- **Price Tag:** `From AED [XXXX]`<br>- **Price Note:** `Exact fees depend on free zone, activities, visa count and government charges.`<br>- **Checklist Features:**<br>  1. Free zone trading license and establishment card<br>  2. Registered UAE business address<br>  3. One visa allocation where included by jurisdiction<br>  4. Initial UAE VAT and Corporate Tax registration support<br>  5. Corporate bank account introduction pack and file preparation<br>- **CTA Button:** `Get Exact Quote on WhatsApp →` (Outline Button) |
| **Package 2 (Growth - Featured)** | - **Badge:** `Growth` (Popular Highlight)<br>- **Title:** `Mainland Trading Company`<br>- **Best For:** `Businesses needing direct UAE mainland market access`<br>- **Price Tag:** `From AED [XXXX]`<br>- **Price Note:** `Exact fees depend on DED emirate, activities, visa count, bank requirements and government charges.`<br>- **Checklist Features:**<br>  1. Everything in Starter<br>  2. Mainland trading company formation coordination<br>  3. Multi-activity license guidance for import, export and re-export operations<br>  4. Enhanced corporate bank account file support<br>  5. Basic bookkeeping and accounting setup<br>- **CTA Button:** `Discuss My UAE Company Setup →` (Primary Solid Blue Button) |
| **Package 3 (Scale)** | - **Badge:** `Scale`<br>- **Title:** `UAE Trading Hub and Operations`<br>- **Best For:** `Growing teams with ongoing compliance and operational needs`<br>- **Price Tag:** `From AED [XXXX]`<br>- **Price Note:** `Exact fees confirmed after advisory call based on visa count, services and requirements.`<br>- **Checklist Features:**<br>  1. Everything in Growth<br>  2. Multi-visa processing and PRO support<br>  3. Accounting and Corporate Tax filing services<br>  4. Dedicated account manager and periodic compliance review<br>  5. Trading license renewal, visa renewal and ongoing PRO managed annually<br>- **CTA Button:** `Build My UAE Trading Hub →` (Outline Button) |
| **Supporting Info Card** | `All packages include a document checklist and written scope before fees are committed. Bank approval is not guaranteed. We prepare a comprehensive, banker-ready application and coordinate introductions where suitable.` |
| **Color Mapping** | **Cards Background:** Pure White (`#FFFFFF`), Border `1px solid #E2E8F0`, Elevated Shadow on Middle Card.<br>**Accent Blue:** Primary Brand Blue (`#0052FF`).<br>**Check Icons:** Deep Slate (`#0F172A`).<br>**Subtle Text:** Slate Grey (`#64748B`). |
| **Responsive Behavior** | **Desktop (>= 1024px):** 3-column side-by-side grid with middle card slightly elevated.<br>**Mobile (< 768px):** Single column vertical stack. |

### 9. FAQ Section
| Attribute | Details |
| :--- | :--- |
| **Purpose** | Interactive accordions answering common customer questions. |
| **Exact HTML Content** | `FAQ`<br>`Frequently asked questions`<br>7 Question/Answer accordions categorized under General, Logistics Operators, and E-Commerce. |
| **Color Mapping** | **Background:** Pure White (`#FFFFFF`).<br>**Accordion Item:** Background Pure White (`#FFFFFF`), Border `1px solid #EAF1FF`.<br>**Question Text:** Near Black (`#0D0D0D`).<br>**Expanded Answer:** Muted Body Text (`#444444`).<br>**Toggle Icon (+/-):** Primary Blue (`#0052FF`). |
| **Responsive Behavior** | Full-width centered accordion across all screen sizes. |

### 10. Get In Touch & Lead Form
| Attribute | Details |
| :--- | :--- |
| **Purpose** | The primary high-conversion lead capture container. |
| **Exact HTML Content** | `Get In Touch`<br>`Ready to Keep Your UAE Business Compliant?`<br>Meta: Email, Location, Operator.<br>Form: Full Name, Company, Email, Phone, Country, Freezone, Service Required, Message.<br>Button: `Submit Enquiry`<br>Trust text: `Your information is protected and never shared.` |
| **Color Mapping** | **Outer Container:** Deep Navy (`#0A1F44`) with `24px` border radius.<br>**Left Headings:** Pure White (`#FFFFFF`).<br>**Left Subtext / Meta:** Light Blue Subtext (`#A9C2FF`).<br>**White Form Card:** Pure White (`#FFFFFF`) with `18px–20px` border radius.<br>**Inputs / Selects / Textarea:** Background Pure White (`#FFFFFF`), Border `1px solid #EAF1FF`, Focus Ring Accent Blue (`#3D8BFF`), Text Near Black (`#0D0D0D`).<br>**Submit Button:** Background Primary Blue (`#0052FF`), Text Pure White (`#FFFFFF`), Hover Accent Blue (`#3D8BFF`).<br>**Privacy Disclaimer Text:** Centered Muted Body Text (`#444444`). |
| **Responsive Behavior** | **Desktop:** 4:6 grid split.<br>**Mobile:** Single-column container, 2-column form grid (`1fr 1fr`), full-span fields for Service/Message/Submit, compact 40px inputs. |

### 11. Footer (Multi-Column & Watermark Layout)
| Attribute | Details |
| :--- | :--- |
| **Purpose** | Comprehensive footer with brand information, trust badges, 3-column navigation grid, large subtle watermark text, and copyright bar. |
| **Layout** | 4-column responsive grid (Brand column with Trust Badges + 3 Link Columns) followed by a subtle large watermark graphic text and copyright bar. |
| **Brand Info** | Logo + "Expert UAE Company Setup, Banking Facilitation, and Compliance support for international exporters and distributors. Operated by Corebridge Corporate Services, Dubai, UAE." + DED Registered & FTA Compliant Trust Badges. |
| **Link Columns** | **Services:** Free Zone Setup, Mainland Company, Bank File Facilitation, VAT & Tax Registration, Customs Clearance.<br>**Company:** How It Works, Why Traders Choose Us, Setup Packages, Frequently Asked Questions, Contact Dubai Office.<br>**Legal & Compliance:** Privacy Policy, Terms of Service, Compliance Disclaimer, Document Checklist. |
| **Bottom Accent** | Subtle oversized watermark text (`COREBRIDGE`) with low opacity (`-webkit-text-stroke: 1px rgba(255, 255, 255, 0.06)`). |
| **Color Mapping** | **Background:** Approved Deep Navy (`#061124`).<br>**Headings:** Pure White (`#FFFFFF`).<br>**Links:** Slate Muted (`#94A3B8`), Hover Accent Blue (`#3D8BFF`).<br>**Copyright & Operated By:** Muted Slate (`#64748B`).<br>**Trust Badges:** Subtle White Tint (`rgba(255, 255, 255, 0.05)`) with Light Slate Text (`#CBD5E1`). |
| **Responsive Behavior** | **Desktop (>= 1024px):** 4-column grid layout (1.3fr brand column + 3 link columns).<br>**Mobile (< 768px):** Stacked vertical columns with responsive watermark scale. |

---

## 4. Spacing & Padding Matrix

| Section / Element | Desktop (> 1024px) | Tablet (768px - 1023px) | Mobile (< 768px) |
| :--- | :--- | :--- | :--- |
| **Sticky Navbar** | `padding: 10px 40px !important; min-height: 60px` | `padding: 10px 32px !important; min-height: 60px` | `padding: 10px 16px !important; height: 56px` |
| **Hero Section** | `padding: 40px 20px !important; margin-bottom: 0` | `padding: 40px 20px !important; margin-bottom: 0` | `padding: 40px 20px !important; margin-bottom: 0` |
| **Who We Serve** | `padding-top: 24px !important; padding-bottom: 48px` | `padding-top: 24px !important; padding-bottom: 48px` | `padding-top: 24px !important; padding-bottom: 32px` |
| **Services Grid** | `padding: 48px 0 !important; margin-bottom: 48px` | `padding: 48px 0 !important; margin-bottom: 48px` | `padding: 32px 0 !important; margin-bottom: 40px` |
| **The Process** | `padding: 48px 0 !important; margin-bottom: 48px` | `padding: 48px 0 !important; margin-bottom: 48px` | `padding: 32px 0 !important; margin-bottom: 40px` |
| **Coverage** | `padding: 48px 0 !important; margin-bottom: 48px` | `padding: 48px 0 !important; margin-bottom: 48px` | `padding: 32px 0 !important; margin-bottom: 40px` |
| **Why CoreBridge** | `padding: 48px 0 !important; margin-bottom: 48px` | `padding: 48px 0 !important; margin-bottom: 48px` | `padding: 32px 0 !important; margin-bottom: 40px` |
| **FAQ** | `padding: 48px 0 !important; margin-bottom: 48px` | `padding: 48px 0 !important; margin-bottom: 48px` | `padding: 32px 0 !important; margin-bottom: 40px` |
| **Get In Touch** | `padding: 48px 40px !important; margin: 0 auto 60px` | `padding: 48px 40px !important; margin: 0 auto 60px` | `padding: 28px 12px !important; margin: 24px auto 40px` |
| **Footer** | `padding: 96px 0 48px 0;` | `padding: 96px 0 48px 0;` | `padding: 48px 0 32px 0;` |

---

## 5. Global Typography & Responsiveness Rules

### Typography Hierarchy
*   **H1 (Hero):** Desktop: `clamp(2.5rem, 5vw, 4rem)`, Mobile: `clamp(28px, 6vw, 32px) !important; line-height: 1.25; color: #0D0D0D;`
*   **H2 (Section Header):** Desktop: `clamp(2rem, 4vw, 3rem)`, Mobile: `24px–28px !important; line-height: 1.25; color: #0D0D0D;`
*   **H3 / H4 (Cards & Steps):** Desktop: `1.25rem`, Mobile: `15px–17px !important; line-height: 1.3; color: #0D0D0D;`
*   **Body Text:** Desktop: `15px / 17px; line-height: 1.6;`, Mobile: `13.5px / 14px !important; color: #444444;`
*   **Subtext in Dark Containers:** `color: #A9C2FF; line-height: 1.5;`

### Responsiveness Rules
*   **Single Scrollbar Rule:** Force `html { overflow-y: auto; }` and `body { overflow: visible !important; }` to lock scrollbars strictly to the root browser window.
*   **Mobile Viewport Bounds:** Enforce `max-width: 100vw; box-sizing: border-box; overflow-x: hidden;` across all major wrappers to prevent horizontal page overflow.

---
> **Developer Note:** This document serves as the active Single Source of Truth (SSOT). All future UI development and styling modifications must adhere strictly to these 60-30-10 color tokens and structural rules.
