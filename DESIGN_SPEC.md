# VIVARA HOME - Quotation Builder Design Specification

## Overview
A quotation/invoice builder application for VIVARA HOME furniture business. The application allows creating itemized quotes with pricing, discounts, and client information.

**Source:** Gemini Canvas shared link
**Viewport Captured:** 957x955px

---

## Complete Layout Structure

### 1. Page Container (Outer Shell)
```css
.page-container {
  background-color: #1a1a1a;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
```

### 2. Gemini Header (Top Bar - Can be ignored for our implementation)
- Height: ~50px
- Background: #1a1a1a
- Contains: "Gemini" logo + user avatar
- **Note:** This is Gemini's UI, not part of the quotation builder

---

## App Header Bar (Dark Bar with Logo & Buttons)

### Measurements:
- **Height:** 56px
- **Background:** #2d2d2d (slightly lighter than page)
- **Padding:** 0 24px
- **Border-bottom:** 1px solid rgba(255,255,255,0.1)

### Left Side - Branding:
```css
.header-branding {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-text {
  font-family: 'Inter', -apple-system, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #ffffff;
  letter-spacing: 0.5px;
}

.separator {
  color: rgba(255, 255, 255, 0.4);
  font-weight: 300;
  margin: 0 4px;
}

.subtitle {
  font-family: 'Inter', -apple-system, sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
}
```

### Right Side - Action Buttons:

#### Reset Button:
```css
.reset-button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.reset-button:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.5);
}

.reset-button svg {
  width: 16px;
  height: 16px;
}
```

#### Print/Save PDF Button:
```css
.print-button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 20px;
  background: #ffffff;
  border: none;
  border-radius: 8px;
  color: #1a1a1a;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.print-button:hover {
  background: #f5f5f5;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.print-button svg {
  width: 18px;
  height: 18px;
}
```

---

## Main Content Area

```css
.main-content {
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 32px 24px;
  overflow-y: auto;
}
```

---

## Quote Card (White Document)

### Container Styles:
```css
.quote-card {
  background: #ffffff;
  border-radius: 12px;
  box-shadow:
    0 4px 6px rgba(0, 0, 0, 0.1),
    0 10px 40px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 850px;
  min-height: 600px;
  padding: 40px;
  position: relative;
}
```

### Scrollbar (Inside Card):
```css
.quote-card::-webkit-scrollbar {
  width: 6px;
}

.quote-card::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

.quote-card::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}
```

---

## Quote Header Section

### Layout:
```css
.quote-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 32px;
  padding-bottom: 24px;
}
```

### Left Column - Business Branding:

```css
.business-branding {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.brand-name {
  font-family: 'Inter', 'Helvetica Neue', sans-serif;
  font-size: 42px;
  font-weight: 800;
  color: #1a1a1a;
  letter-spacing: -1px;
  line-height: 1;
  margin: 0;
}

.brand-tagline {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #26a69a; /* Teal accent */
  letter-spacing: 6px;
  text-transform: uppercase;
  margin: 8px 0;
}

.project-type {
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 500;
  color: #424242;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
```

### Right Column - Client Information:

```css
.client-info {
  text-align: right;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.info-label {
  font-family: 'Inter', sans-serif;
  font-size: 10px;
  font-weight: 500;
  color: #9e9e9e;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 2px;
}

.client-name {
  font-family: 'Inter', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
}

.project-name {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;
}

.instagram-link {
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  font-weight: 500;
  color: #26a69a;
  text-decoration: none;
  transition: color 0.2s ease;
}

.instagram-link:hover {
  color: #00897b;
  text-decoration: underline;
}
```

---

## Items Table

### Table Container:
```css
.items-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 16px;
}
```

### Table Header:
```css
.table-header {
  border-bottom: 2px solid #e0e0e0;
}

.table-header th {
  font-family: 'Inter', sans-serif;
  font-size: 10px;
  font-weight: 600;
  color: #757575;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 12px 8px;
  text-align: center;
  white-space: nowrap;
}

.table-header th:nth-child(3) {
  text-align: left; /* ITEM NAME column */
}
```

### Column Widths:
| Column | Width | Alignment |
|--------|-------|-----------|
| SN | 50px | center |
| IMAGE | 80px | center |
| ITEM NAME / DESCRIPTION | flex (remaining) | left |
| QTY | 50px | center |
| PRICE BEFORE DISC. | 80px | center |
| PRICE AFTER DISC. | 80px | center |
| TOTAL BEFORE | 80px | center |
| TOTAL AFTER | 80px | center |
| Actions | 40px | center |

### Table Row:
```css
.table-row {
  border-bottom: 1px solid #f0f0f0;
  transition: background-color 0.15s ease;
}

.table-row:hover {
  background-color: #fafafa;
}

.table-row td {
  padding: 16px 8px;
  vertical-align: middle;
}
```

### Individual Cell Styles:

#### Serial Number:
```css
.serial-number {
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  font-weight: 500;
  color: #9e9e9e;
  text-align: center;
}
```

#### Image Placeholder:
```css
.image-placeholder {
  width: 64px;
  height: 64px;
  border: 2px dashed #e0e0e0;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  background: #fafafa;
}

.image-placeholder:hover {
  border-color: #26a69a;
  background: #f5f5f5;
}

.image-placeholder svg {
  width: 20px;
  height: 20px;
  color: #bdbdbd;
}

.image-placeholder-text {
  font-family: 'Inter', sans-serif;
  font-size: 9px;
  font-weight: 600;
  color: #26a69a;
  text-transform: uppercase;
  letter-spacing: 0.3px;
}

/* When image is uploaded */
.image-thumbnail {
  width: 64px;
  height: 64px;
  border-radius: 8px;
  object-fit: cover;
}
```

#### Item Name & Description:
```css
.item-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.item-name {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;
}

.item-name-input {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #1a1a1a;
  border: none;
  background: transparent;
  padding: 4px 0;
  width: 100%;
}

.item-name-input:focus {
  outline: none;
  border-bottom: 2px solid #26a69a;
}

.item-description {
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: #9e9e9e;
  font-style: italic;
  margin: 0;
}

.item-description-input {
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: #9e9e9e;
  font-style: italic;
  border: none;
  background: transparent;
  padding: 2px 0;
  width: 100%;
}

.item-description-input::placeholder {
  color: #bdbdbd;
}
```

#### Quantity:
```css
.quantity {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #424242;
  text-align: center;
}

.quantity-input {
  width: 40px;
  text-align: center;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #424242;
  border: 1px solid transparent;
  border-radius: 4px;
  padding: 4px;
  background: transparent;
}

.quantity-input:focus {
  outline: none;
  border-color: #26a69a;
  background: #f5f5f5;
}
```

#### Price Before Discount:
```css
.price-before {
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  font-weight: 500;
  color: #757575;
  text-align: center;
}
```

#### Price After Discount:
```css
.price-after {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #1a1a1a;
  text-align: center;
}
```

#### Total Before (Strikethrough):
```css
.total-before {
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  font-weight: 500;
  color: #ef9a9a; /* Light red/pink for strikethrough */
  text-align: center;
  text-decoration: line-through;
  text-decoration-color: #ef5350;
}
```

#### Total After:
```css
.total-after {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: #1a1a1a;
  text-align: center;
}
```

#### Delete Button:
```css
.delete-button {
  width: 32px;
  height: 32px;
  border: none;
  background: transparent;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s ease;
  color: #bdbdbd;
}

.delete-button:hover {
  background: #ffebee;
  color: #ef5350;
}

.delete-button svg {
  width: 18px;
  height: 18px;
}
```

---

## Footer Section (Totals & Add Item)

### Add Item Button:
```css
.add-item-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 16px;
  margin-top: 16px;
  background: transparent;
  border: 2px dashed #e0e0e0;
  border-radius: 8px;
  color: #757575;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.add-item-button:hover {
  border-color: #26a69a;
  color: #26a69a;
  background: rgba(38, 166, 154, 0.05);
}

.add-item-button svg {
  width: 20px;
  height: 20px;
}
```

### Totals Summary (Actual Content):
The totals section displays:
- **Total Before Discount:** 108,000 EGP
- **Discount Amount:** - 28,000 EGP
- **Total After Discount:** 80,000 EGP

```css
.totals-section {
  margin-top: 32px;
  padding-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
}

.total-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 280px;
}

.total-label {
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  font-weight: 500;
  color: #757575;
}

.total-value {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #424242;
}

/* Discount amount in red/negative */
.discount-value {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #ef5350;
}

.grand-total-row {
  padding-top: 12px;
  border-top: 1px solid #e0e0e0;
  margin-top: 8px;
  width: 280px;
}

.grand-total-label {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #1a1a1a;
}

.grand-total-value {
  font-family: 'Inter', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #1a1a1a;
}
```

---

## Terms & Conditions Section

### Content:
```
Terms & Conditions
- Prices not including VAT.
- Delivery time 45-60 Days from confirmation on technical drawings.
- Prices include delivery and site installation inside Cairo Regions.
- Quotation Valid for 5 Days Only.
```

### Styling:
```css
.terms-section {
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px solid #e0e0e0;
}

.terms-title {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 12px;
}

.terms-list {
  list-style: disc;
  padding-left: 20px;
  margin: 0;
}

.terms-list li {
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: #616161;
  line-height: 1.6;
  margin-bottom: 4px;
}
```

---

## Payment Conditions Section

### Content:
```
Payment Conditions
- 60% down payment to start production.
- 40% min. one week before delivery.
- Quality check before shipping is available upon request in warehouse.
```

### Styling:
```css
.payment-section {
  margin-top: 24px;
}

.payment-title {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 12px;
}

.payment-list {
  list-style: disc;
  padding-left: 20px;
  margin: 0;
}

.payment-list li {
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: #616161;
  line-height: 1.6;
  margin-bottom: 4px;
}
```

---

## Signature Section

### Content:
```
Prepared by Vivara.Home
(Client Signature)
```

### Styling:
```css
.signature-section {
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.prepared-by {
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 500;
  color: #757575;
}

.client-signature {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.signature-line {
  width: 200px;
  height: 1px;
  background: #1a1a1a;
}

.signature-label {
  font-family: 'Inter', sans-serif;
  font-size: 11px;
  font-weight: 400;
  color: #757575;
}
```

---

## Terms of Agreement (Full Legal Section)

This is a comprehensive terms document that appears at the bottom of the quotation.

### Section Title:
```css
.agreement-title {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #1a1a1a;
  margin-top: 48px;
  margin-bottom: 8px;
  text-align: center;
}

.agreement-subtitle {
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: #757575;
  text-align: center;
  margin-bottom: 24px;
}
```

### Agreement Content (14 Clauses):

```typescript
const termsOfAgreement = [
  {
    number: 1,
    title: "Scope of Work",
    content: "This Agreement includes only the deliverables stated in the proposal/quotation for custom furniture design and making (and installation if included). If new deliverables are requested (additional pieces, new areas, major changes in dimensions/materials, extra iterations, or new services), a new agreement / change order will be proposed (fees and due dates may differ)."
  },
  {
    number: 2,
    title: "Working Hours",
    content: "Vivara Home operates from Sunday to Thursday, 10:00 AM to 7:00 PM."
  },
  {
    number: 3,
    title: "Deliverables",
    content: "Fees include the agreed furniture service, as specified in the proposal/quotation, which may include: Furniture concept/design development (if included), 2D shop drawings (DWG/CAD) and PDF drawing set (dimensions/details), 3D views and/or renders (if included), Materials/finishes specifications (wood/veneer/paint/fabric/hardware), Fabrication of the approved furniture pieces, Delivery and installation (if included)."
  },
  {
    number: 4,
    title: "Intellectual Property",
    content: "All drawings, models, renders, and design details remain the intellectual property of Vivara Home. Deliverables are for the Client's exclusive use for this project and may not be shared, distributed, reproduced, or altered without prior written consent."
  },
  {
    number: 5,
    title: "Portfolio Rights",
    content: "Vivara Home reserves the right to showcase the project on its portfolio/website and social media unless the Client has purchased a license to restrict this use (in writing)."
  },
  {
    number: 6,
    title: "Additional Services",
    content: "Services beyond the agreed scope—such as additional furniture items, re-design after approvals, extra 3D modifications beyond included revisions, custom prototypes, urgent requests, or material upgrades—will incur additional fees."
  },
  {
    number: 7,
    title: "Project Timeline",
    content: "The project timeline is based on delivering the agreed furniture scope within sixty (60) calendar days from the official start date. The start date begins once the agreed installment payment has been transferred and all required site measurements/approvals are confirmed. Please allow a buffer of 2–5 working days after confirmation for production scheduling to begin. Note: The 60-day timeline may be affected by: (a) delayed Client approvals/feedback, (b) changes requested after approval, (c) delayed payments, (d) site readiness issues, or (e) material/hardware availability beyond Vivara Home's control."
  },
  {
    number: 8,
    title: "Client Feedback",
    content: "To maintain timelines and avoid delays, the Client agrees to provide feedback/approvals on each deliverable within 7 business days."
  },
  {
    number: 9,
    title: "Revisions & Change Impact",
    content: "If the furniture making process is extended due to Client revisions or changes after approvals (especially changes affecting dimensions, structure, materials, finishes, or hardware), Vivara Home reserves the right to request an additional payment before proceeding with major modifications, rework, or re-production."
  },
  {
    number: 10,
    title: "Pause Fee",
    content: "For project holds exceeding one (1) month, a pause fee of 10% of the total project cost per month will be applied to ensure resource allocation and to prevent scheduling conflicts."
  },
  {
    number: 11,
    title: "Payment & Scheduling",
    content: "Installment payments are due as per the agreed schedule. Delays in payments may affect production start, delivery timeline, and completion."
  },
  {
    number: 12,
    title: "Post-Delivery Support",
    content: "Vivara Home provides post-delivery support for a duration of two (2) years following project delivery/installation. Support includes reasonable guidance and issue reporting coordination related to the delivered furniture (subject to the Warranty and Maintenance terms below)."
  },
  {
    number: 13,
    title: "Free Maintenance",
    content: "Vivara Home provides free maintenance for six (6) months from the delivery/installation date for furniture-related adjustments and servicing that fall under normal use and workmanship-related needs. Examples may include: hinge/runner alignment, door/drawer adjustments, minor tightening, and fitment calibration."
  },
  {
    number: 14,
    title: "Warranty",
    content: "Vivara Home provides a two (2) year warranty from the delivery/installation date against defects that are the result of Vivara Home's workmanship. This warranty covers repair or replacement (at Vivara Home's discretion) of the affected component(s) where the defect is confirmed to be caused by manufacturing/installation workmanship."
  }
];

const warrantyExclusions = [
  "Misuse, abuse, negligence, accidents, or intentional damage",
  "Water leakage, humidity, heat exposure, direct sunlight damage beyond normal expectations, or chemical cleaning damage",
  "Normal wear and tear (scratches, dents, fading, fabric wear)",
  "Improper use",
  "Third-party modifications, repairs, relocation, or re-installation by others",
  "Site conditions beyond Vivara Home control",
  "Materials supplied/selected by Client outside recommendations"
];
```

### Agreement Clause Styling:
```css
.agreement-clause {
  margin-bottom: 16px;
}

.clause-number {
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 700;
  color: #1a1a1a;
  display: inline;
}

.clause-title {
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 700;
  color: #1a1a1a;
  display: inline;
}

.clause-content {
  font-family: 'Inter', sans-serif;
  font-size: 11px;
  font-weight: 400;
  color: #616161;
  line-height: 1.6;
  display: inline;
}

.warranty-exclusions {
  margin-top: 12px;
  padding-left: 20px;
}

.warranty-exclusions-title {
  font-family: 'Inter', sans-serif;
  font-size: 11px;
  font-weight: 600;
  color: #424242;
  margin-bottom: 8px;
}

.warranty-exclusions-list {
  list-style: disc;
  padding-left: 16px;
}

.warranty-exclusions-list li {
  font-family: 'Inter', sans-serif;
  font-size: 10px;
  font-weight: 400;
  color: #757575;
  line-height: 1.5;
  margin-bottom: 2px;
}
```

### Final Client Signature (Terms Acceptance):
```css
.terms-signature-section {
  margin-top: 32px;
  padding-top: 24px;
  border-top: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.terms-signature-label {
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 500;
  color: #757575;
}

.terms-signature-line {
  width: 300px;
  height: 1px;
  background: #1a1a1a;
  margin-top: 40px;
}
```

---

## Complete Color Palette

| Variable Name | Hex Code | Usage |
|--------------|----------|-------|
| `--bg-dark` | `#1a1a1a` | Page background |
| `--bg-header` | `#2d2d2d` | Header bar background |
| `--bg-card` | `#ffffff` | Quote card background |
| `--bg-hover` | `#fafafa` | Row hover state |
| `--bg-input` | `#f5f5f5` | Input focus background |
| `--text-primary` | `#1a1a1a` | Main headings, totals |
| `--text-secondary` | `#424242` | Body text |
| `--text-muted` | `#757575` | Labels, secondary info |
| `--text-placeholder` | `#9e9e9e` | Placeholder text |
| `--text-disabled` | `#bdbdbd` | Disabled/inactive |
| `--accent-teal` | `#26a69a` | Brand accent, links |
| `--accent-teal-dark` | `#00897b` | Hover state for teal |
| `--accent-teal-light` | `rgba(38, 166, 154, 0.1)` | Teal backgrounds |
| `--border-light` | `#e0e0e0` | Borders, dividers |
| `--border-subtle` | `#f0f0f0` | Row separators |
| `--price-before` | `#ef9a9a` | Strikethrough price |
| `--price-strike` | `#ef5350` | Strikethrough line color |
| `--delete-hover-bg` | `#ffebee` | Delete button hover |
| `--delete-hover-color` | `#ef5350` | Delete icon hover |
| `--success-bg` | `#e8f5e9` | Savings background |
| `--success-text` | `#2e7d32` | Savings text |
| `--white` | `#ffffff` | White elements |
| `--white-muted` | `rgba(255, 255, 255, 0.8)` | Muted white text |
| `--white-subtle` | `rgba(255, 255, 255, 0.4)` | Subtle white |

---

## Typography System

### Font Family:
```css
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

### Font Scale:
| Name | Size | Weight | Line Height | Letter Spacing |
|------|------|--------|-------------|----------------|
| Display (VIVARA) | 42px | 800 | 1 | -1px |
| Heading 1 | 20px | 700 | 1.3 | 0 |
| Heading 2 | 16px | 700 | 1.4 | 0.5px |
| Body | 14px | 500/600 | 1.5 | 0 |
| Body Small | 13px | 500 | 1.5 | 0 |
| Caption | 12px | 400/500 | 1.4 | 0 |
| Label | 10px | 500/600 | 1.3 | 0.5px |
| Tagline (HOME) | 14px | 500 | 1.4 | 6px |
| Tiny | 9px | 600 | 1.3 | 0.3px |

---

## Spacing System

```css
--space-xs: 4px;
--space-sm: 8px;
--space-md: 12px;
--space-lg: 16px;
--space-xl: 24px;
--space-2xl: 32px;
--space-3xl: 40px;
```

---

## Border Radius

```css
--radius-sm: 4px;
--radius-md: 6px;
--radius-lg: 8px;
--radius-xl: 12px;
```

---

## Shadows

```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 40px rgba(0, 0, 0, 0.15);
--shadow-card: 0 4px 6px rgba(0, 0, 0, 0.1), 0 10px 40px rgba(0, 0, 0, 0.15);
--shadow-button: 0 2px 4px rgba(0, 0, 0, 0.1);
--shadow-button-hover: 0 4px 8px rgba(0, 0, 0, 0.15);
```

---

## Transitions & Animations

```css
--transition-fast: 0.15s ease;
--transition-normal: 0.2s ease;
--transition-slow: 0.3s ease;
```

### Hover Animations:
- Buttons: Scale slightly (1.02) on hover
- Rows: Background color change
- Delete icon: Color and background change
- Links: Color change and underline

---

## Icons Used

| Icon | Location | Size | Library Suggestion |
|------|----------|------|-------------------|
| Refresh/Reset | Reset button | 16px | Lucide: `RotateCcw` |
| Printer | Print button | 18px | Lucide: `Printer` |
| Image/Camera | Image placeholder | 20px | Lucide: `ImagePlus` or `Camera` |
| Trash | Delete button | 18px | Lucide: `Trash2` |
| Plus | Add item button | 20px | Lucide: `Plus` |

---

## State Management (Logic)

### Data Structure:
```typescript
interface QuoteItem {
  id: string;
  serialNumber: string;
  image: string | null;
  itemName: string;
  description: string;
  quantity: number;
  priceBeforeDiscount: number;
  priceAfterDiscount: number;
}

interface QuoteState {
  businessName: string;
  tagline: string;
  projectType: string;
  clientName: string;
  projectName: string;
  instagramHandle: string;
  items: QuoteItem[];
}
```

### Calculations:
```typescript
// Per item
const totalBefore = quantity * priceBeforeDiscount;
const totalAfter = quantity * priceAfterDiscount;

// Grand totals
const grandTotalBefore = items.reduce((sum, item) =>
  sum + (item.quantity * item.priceBeforeDiscount), 0);
const grandTotalAfter = items.reduce((sum, item) =>
  sum + (item.quantity * item.priceAfterDiscount), 0);
const totalSavings = grandTotalBefore - grandTotalAfter;
```

### Number Formatting:
```typescript
const formatNumber = (num: number): string => {
  return num.toLocaleString('en-US');
};
// 24000 -> "24,000"
```

---

## Functions & Actions

| Action | Trigger | Behavior |
|--------|---------|----------|
| Add Item | Click "Add Item" button | Adds new row with default values |
| Delete Item | Click trash icon | Removes row, updates totals |
| Edit Field | Click on editable field | Enables inline editing |
| Upload Image | Click image placeholder | Opens file picker, stores image |
| Reset | Click Reset button | Clears all data to defaults |
| Print/PDF | Click Print button | Generates PDF or opens print dialog |

---

## Print Styles

```css
@media print {
  .page-container {
    background: white;
  }

  .app-header {
    display: none;
  }

  .delete-button,
  .add-item-button,
  .reset-button,
  .print-button {
    display: none;
  }

  .quote-card {
    box-shadow: none;
    max-width: 100%;
    padding: 20px;
  }

  .image-placeholder {
    border-style: solid;
  }
}
```

---

## Responsive Breakpoints

```css
/* Mobile */
@media (max-width: 640px) {
  .quote-card { padding: 20px; }
  .brand-name { font-size: 28px; }
  .items-table { font-size: 12px; }
  /* Table scrolls horizontally */
}

/* Tablet */
@media (max-width: 900px) {
  .quote-header { flex-direction: column; gap: 24px; }
  .client-info { text-align: left; }
}
```

---

## Implementation Notes

1. **Editable Fields:** All text fields (client name, item names, prices) should be editable inline
2. **Auto-save:** Consider auto-saving to localStorage
3. **Image Upload:** Support drag-and-drop and file picker
4. **PDF Generation:** Use html2pdf.js or react-pdf
5. **Number Inputs:** Use number type with formatting on blur
6. **Serial Numbers:** Auto-generate with "v" prefix (v1, v2, v3...)
7. **Validation:** Prices should be positive numbers
8. **Currency:** No currency symbol shown, assumes EGP

---

## Sample Data

```json
{
  "businessName": "VIVARA",
  "tagline": "HOME",
  "projectType": "FURNITURE PROJECT",
  "clientName": "MOHAMED MADDY",
  "projectName": "FURNITURE",
  "instagramHandle": "@Vivara.home.eg",
  "currency": "EGP",
  "items": [
    {
      "id": "1",
      "serialNumber": "v1",
      "image": null,
      "itemName": "MIRAI SOFA 3 SEATS",
      "description": "Optional description...",
      "quantity": 1,
      "priceBeforeDiscount": 30000,
      "priceAfterDiscount": 24000
    },
    {
      "id": "2",
      "serialNumber": "v2",
      "image": null,
      "itemName": "MIRAI SOFA 2 SEATS",
      "description": "Optional description...",
      "quantity": 1,
      "priceBeforeDiscount": 28000,
      "priceAfterDiscount": 22000
    },
    {
      "id": "3",
      "serialNumber": "v3",
      "image": null,
      "itemName": "MIRAI CHAIR",
      "description": "Optional description...",
      "quantity": 2,
      "priceBeforeDiscount": 25000,
      "priceAfterDiscount": 17000
    }
  ],
  "totals": {
    "totalBeforeDiscount": 108000,
    "discountAmount": 28000,
    "totalAfterDiscount": 80000
  },
  "termsAndConditions": [
    "Prices not including VAT.",
    "Delivery time 45-60 Days from confirmation on technical drawings.",
    "Prices include delivery and site installation inside Cairo Regions.",
    "Quotation Valid for 5 Days Only."
  ],
  "paymentConditions": [
    "60% down payment to start production.",
    "40% min. one week before delivery.",
    "Quality check before shipping is available upon request in warehouse."
  ],
  "preparedBy": "Vivara.Home"
}
```

### Calculations Verification:
```
Item 1: 1 × 30,000 = 30,000 (before) | 1 × 24,000 = 24,000 (after)
Item 2: 1 × 28,000 = 28,000 (before) | 1 × 22,000 = 22,000 (after)
Item 3: 2 × 25,000 = 50,000 (before) | 2 × 17,000 = 34,000 (after)
─────────────────────────────────────────────────────────────────
Total Before: 30,000 + 28,000 + 50,000 = 108,000 EGP
Total After:  24,000 + 22,000 + 34,000 = 80,000 EGP
Discount:     108,000 - 80,000 = 28,000 EGP
```

---

## Tech Stack Recommendation

- **Framework:** React 18+ with TypeScript
- **Styling:** Tailwind CSS or CSS Modules
- **State:** React useState/useReducer or Zustand
- **PDF:** html2canvas + jsPDF or @react-pdf/renderer
- **Icons:** Lucide React
- **Fonts:** Google Fonts (Inter)
