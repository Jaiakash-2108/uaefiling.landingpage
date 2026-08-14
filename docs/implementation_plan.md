# UAE Filing Landing Page - Project Specification (SSOT)

## Project Name
UAE Filing Landing Page Implementation

## Goal
To implement a high-converting, responsive landing page for **uaefiling.com** using the provided fixed HTML content and logo. The implementation strictly adheres to the official 60-30-10 brand color system. This document serves as the Single Source of Truth (SSOT).

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
| **Exact HTML Content** | `UAEFiling`<br>`+971-586 450 918`<br>`Book Consultation` |
| **Color Mapping** | **Background:** Pure White (`#FFFFFF`) with subtle border (`1px solid #EAF1FF`) and backdrop blur.<br>**Logo/Brand:** Crisp official logo image.<br>**Nav Links:** Near Black (`#0D0D0D`) on hover / Muted Body Text (`#444444`).<br>**CTA Button:** Background Primary Blue (`#0052FF`), Text Pure White (`#FFFFFF`), Hover Accent Blue (`#3D8BFF`). |
| **Buttons Used** | "Book Consultation" (Primary CTA), Mobile Hamburger Menu Button |
| **Responsive Behavior** | **Desktop/Tablet:** Full logo, navigation links, and "Book Consultation" button visible.<br>**Mobile (<768px):** Height 56px, Logo height 34px, Hamburger drawer menu overlay. |

### 2. Hero Section
| Attribute | Details |
| :--- | :--- |
| **Purpose** | Main value proposition and primary call-to-action area at the top of the page. |
| **Exact HTML Content** | `Trusted by 5,000+ UAE Businesses`<br>`Keep Your UAE Business Running.`<br>`Leave the Compliance to Us.`<br>`Visa renewals, trade license renewals, PRO services, customs clearance, and VAT filing — for freezone traders, logistics operators, and e-commerce businesses.`<br><br>**Marquee Cards:**<br>1. `Visa Renewal` / `Employee, investor & dependent visas`<br>2. `Trade License Renewal` / `JAFZA, DMCC, RAKEZ & 15+ freezones`<br>3. `Customs Clearance` / `Jebel Ali, Abu Dhabi, Sharjah ports`<br>4. `VAT Filing & FTA Compliance` / `Quarterly returns & penalty resolution`<br>5. `PRO & Document Clearance` / `AMER, Tasheel, attestation & MOHRE` |
| **Color Mapping** | **Background:** Pure White (`#FFFFFF`).<br>**Heading (H1):** Near Black (`#0D0D0D`).<br>**Paragraph:** Muted Body Text (`#444444`).<br>**Badge Pill:** Background Light Blue Tint (`#EAF1FF`), Text Primary Blue (`#0052FF`).<br>**CTA Button:** Background Primary Blue (`#0052FF`), Text Pure White (`#FFFFFF`), Hover Accent Blue (`#3D8BFF`).<br>**Auto-scroll Cards:** Background Pure White (`#FFFFFF`), Border `1px solid #EAF1FF`, Text Near Black (`#0D0D0D`). |
| **Buttons Used** | "Get Free Consultation" (Primary CTA), 5x Duplicated Marquee Feature Cards |
| **Responsive Behavior** | **Desktop:** 2-column layout / centered stack with marquee slider.<br>**Mobile:** Compact single column, infinite seamless marquee track. |

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
| **Exact HTML Content** | `5,000+` / `Businesses Served`<br>`15+` / `UAE Freezones Covered`<br>`10+` / `Years Experience`<br>`98%` / `Client Renewal Rate`<br>`UAE Filing is operated by Corebridge Corporate Solutions, Dubai, UAE.` |
| **Color Mapping** | **Container Background:** Deep Navy (`#0A1F44`).<br>**Numbers / Main Stats:** Pure White (`#FFFFFF`).<br>**Labels / Subtext:** Light Blue Subtext (`#A9C2FF`).<br>**Container Border Radius:** `24px` on all 4 corners with `overflow: hidden`. |
| **Responsive Behavior** | **Desktop:** 4 columns side-by-side (1x4 grid).<br>**Mobile:** 2x2 grid, centered with `calc(100% - 32px)` width. |

### 5. Services Section
| Attribute | Details |
| :--- | :--- |
| **Purpose** | A comprehensive display of core compliance services. |
| **Exact HTML Content** | `Our Services`<br>`Everything your UAE business needs in one place`<br>6 Service Cards: Visa Renewal, Trade License Renewal, Customs Clearance, VAT Filing & FTA Compliance, PRO & Document Clearance, Corporate Bank Account. |
| **Color Mapping** | **Background:** Pure White (`#FFFFFF`).<br>**Headings:** Near Black (`#0D0D0D`).<br>**Cards:** Background Pure White (`#FFFFFF`), Border `1px solid #EAF1FF`, Hover Border Primary Blue (`#0052FF`).<br>**Service Category Tags:** Background Light Blue Tint (`#EAF1FF`), Text Primary Blue (`#0052FF`). |
| **Responsive Behavior** | **Desktop:** 3-Column Grid (`repeat(3, 1fr)`).<br>**Mobile:** Swipe carousel with `scroll-snap-type: x mandatory` and `82vw` card widths. |

### 6. How It Works (The Process & Average Timelines)
| Attribute | Details |
| :--- | :--- |
| **Purpose** | Step-by-step onboarding flow and estimated turnaround times. |
| **Exact HTML Content** | `The Process`<br>`Three steps to stay compliant`<br>Step 1: Submit Your Enquiry<br>Step 2: Speak with a Specialist<br>Step 3: We Handle Everything<br><br>**Average Timelines:** Visa (3-5 days), License (5-7 days), Customs (48 hours). |
| **Color Mapping** | **Background:** Pure White (`#FFFFFF`).<br>**Step Numbers:** Background Deep Navy (`#0A1F44`), Text Pure White (`#FFFFFF`).<br>**Timeline Box:** Background Pure White (`#FFFFFF`), Border `1px solid #EAF1FF`.<br>**SLA Badge:** Background Light Blue Tint (`#EAF1FF`), Text Primary Blue (`#0052FF`).<br>**Timeline Pill:** Background Light Blue Tint (`#EAF1FF`), Text Near Black (`#0D0D0D`). |
| **Responsive Behavior** | **Desktop:** 3:2 grid split.<br>**Mobile:** Single-column vertical stack, 2-line stacked timeline cards (Icon+Title on top, duration pill below). |

### 7. Freezone & Port Coverage
| Attribute | Details |
| :--- | :--- |
| **Purpose** | Comprehensive lists of supported freezone jurisdictions and maritime/air ports. |
| **Exact HTML Content** | `Coverage`<br>`UAE Freezones and Ports We Work With`<br>Panel 1: `Freezone Licences` (15+ Zones: JAFZA, DMCC, RAKEZ, SHAMS, IFZA, DAFZA, etc.)<br>Panel 2: `Ports and Customs Zones` (7 Ports: Jebel Ali, Khalifa Port, Khorfakkan, etc.) |
| **Color Mapping** | **Background:** Pure White (`#FFFFFF`).<br>**Panels:** Background Pure White (`#FFFFFF`), Border `1px solid #EAF1FF`.<br>**Pill Badges:** Background Light Blue Tint (`#EAF1FF`), Text Primary Blue (`#0052FF`).<br>**List Text:** Near Black (`#0D0D0D`) / Muted Body Text (`#444444`). |
| **Responsive Behavior** | **Desktop:** 2-column grid.<br>**Mobile:** 1-column vertical stack. |

### 8. Why UAE Filing & Testimonial Switcher
| Attribute | Details |
| :--- | :--- |
| **Purpose** | Value propositions and interactive client reviews. |
| **Exact HTML Content** | `Why UAE Filing`<br>`Why Businesses Choose Us`<br>3 Values: One Point of Contact, Transparent Pricing, Government Liaison Included.<br>3 Quotes: Logistics Co (UK), E-Commerce Trader (India), Import/Export (Oman). |
| **Color Mapping** | **Background:** Pure White (`#FFFFFF`).<br>**Value Cards:** Background Pure White (`#FFFFFF`), Border `1px solid #EAF1FF`.<br>**Active Testimonial Pill:** Background Primary Blue (`#0052FF`), Text Pure White (`#FFFFFF`).<br>**Inactive Testimonial Avatar:** Background Light Blue Tint (`#EAF1FF`), Text Near Black (`#0D0D0D`). |
| **Responsive Behavior** | **Desktop:** 2-column split.<br>**Mobile:** Stacked vertical layout, compact testimonial dock with min-height lock. |

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

### 11. Footer
| Attribute | Details |
| :--- | :--- |
| **Purpose** | Secondary navigation, compliance links, and copyright info. |
| **Exact HTML Content** | Brand logo, corporate statement, Services links, Company links, Copyright 2026. |
| **Color Mapping** | **Background:** Deep Navy (`#0A1F44`).<br>**Headings:** Pure White (`#FFFFFF`).<br>**Links:** Light Blue Subtext (`#A9C2FF`), Hover Pure White (`#FFFFFF`).<br>**Copyright Text:** Light Blue Subtext (`#A9C2FF`) with `0.7` opacity. |
| **Responsive Behavior** | **Desktop:** 4-column layout.<br>**Mobile:** Centered vertical stack. |

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
| **Why UAE Filing** | `padding: 48px 0 !important; margin-bottom: 48px` | `padding: 48px 0 !important; margin-bottom: 48px` | `padding: 32px 0 !important; margin-bottom: 40px` |
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
