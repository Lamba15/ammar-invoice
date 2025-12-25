// Default Terms & Conditions
export const termsAndConditions = [
  'Prices not including VAT.',
  'Delivery time 45-60 Days from confirmation on technical drawings.',
  'Prices include delivery and site installation inside Cairo Regions.',
  'Quotation Valid for 5 Days Only.',
];

// Default Payment Conditions
export const paymentConditions = [
  '60% down payment to start production.',
  '40% min. one week before delivery.',
  'Quality check before shipping is available upon request in warehouse.',
];

// Terms of Agreement (14 clauses)
export interface AgreementClause {
  number: number;
  title: string;
  content: string;
}

export const termsOfAgreement: AgreementClause[] = [
  {
    number: 1,
    title: 'Scope of Work',
    content:
      'This Agreement includes only the deliverables stated in the proposal/quotation for custom furniture design and making (and installation if included). If new deliverables are requested (additional pieces, new areas, major changes in dimensions/materials, extra iterations, or new services), a new agreement / change order will be proposed (fees and due dates may differ).',
  },
  {
    number: 2,
    title: 'Working Hours',
    content: 'Vivara Home operates from Sunday to Thursday, 10:00 AM to 7:00 PM.',
  },
  {
    number: 3,
    title: 'Deliverables',
    content:
      'Fees include the agreed furniture service, as specified in the proposal/quotation, which may include: Furniture concept/design development (if included), 2D shop drawings (DWG/CAD) and PDF drawing set (dimensions/details), 3D views and/or renders (if included), Materials/finishes specifications (wood/veneer/paint/fabric/hardware), Fabrication of the approved furniture pieces, Delivery and installation (if included).',
  },
  {
    number: 4,
    title: 'Intellectual Property',
    content:
      'All drawings, models, renders, and design details remain the intellectual property of Vivara Home. Deliverables are for the Client\'s exclusive use for this project and may not be shared, distributed, reproduced, or altered without prior written consent.',
  },
  {
    number: 5,
    title: 'Portfolio Rights',
    content:
      'Vivara Home reserves the right to showcase the project on its portfolio/website and social media unless the Client has purchased a license to restrict this use (in writing).',
  },
  {
    number: 6,
    title: 'Additional Services',
    content:
      'Services beyond the agreed scope—such as additional furniture items, re-design after approvals, extra 3D modifications beyond included revisions, custom prototypes, urgent requests, or material upgrades—will incur additional fees.',
  },
  {
    number: 7,
    title: 'Project Timeline',
    content:
      'The project timeline is based on delivering the agreed furniture scope within sixty (60) calendar days from the official start date. The start date begins once the agreed installment payment has been transferred and all required site measurements/approvals are confirmed. Please allow a buffer of 2–5 working days after confirmation for production scheduling to begin. Note: The 60-day timeline may be affected by: (a) delayed Client approvals/feedback, (b) changes requested after approval, (c) delayed payments, (d) site readiness issues, or (e) material/hardware availability beyond Vivara Home\'s control.',
  },
  {
    number: 8,
    title: 'Client Feedback',
    content:
      'To maintain timelines and avoid delays, the Client agrees to provide feedback/approvals on each deliverable within 7 business days.',
  },
  {
    number: 9,
    title: 'Revisions & Change Impact',
    content:
      'If the furniture making process is extended due to Client revisions or changes after approvals (especially changes affecting dimensions, structure, materials, finishes, or hardware), Vivara Home reserves the right to request an additional payment before proceeding with major modifications, rework, or re-production.',
  },
  {
    number: 10,
    title: 'Pause Fee',
    content:
      'For project holds exceeding one (1) month, a pause fee of 10% of the total project cost per month will be applied to ensure resource allocation and to prevent scheduling conflicts.',
  },
  {
    number: 11,
    title: 'Payment & Scheduling',
    content:
      'Installment payments are due as per the agreed schedule. Delays in payments may affect production start, delivery timeline, and completion.',
  },
  {
    number: 12,
    title: 'Post-Delivery Support',
    content:
      'Vivara Home provides post-delivery support for a duration of two (2) years following project delivery/installation. Support includes reasonable guidance and issue reporting coordination related to the delivered furniture (subject to the Warranty and Maintenance terms below).',
  },
  {
    number: 13,
    title: 'Free Maintenance',
    content:
      'Vivara Home provides free maintenance for six (6) months from the delivery/installation date for furniture-related adjustments and servicing that fall under normal use and workmanship-related needs. Examples may include: hinge/runner alignment, door/drawer adjustments, minor tightening, and fitment calibration.',
  },
  {
    number: 14,
    title: 'Warranty',
    content:
      'Vivara Home provides a two (2) year warranty from the delivery/installation date against defects that are the result of Vivara Home\'s workmanship. This warranty covers repair or replacement (at Vivara Home\'s discretion) of the affected component(s) where the defect is confirmed to be caused by manufacturing/installation workmanship.',
  },
];

// Warranty Exclusions
export const warrantyExclusions = [
  'Misuse, abuse, negligence, accidents, or intentional damage',
  'Water leakage, humidity, heat exposure, direct sunlight damage beyond normal expectations, or chemical cleaning damage',
  'Normal wear and tear (scratches, dents, fading, fabric wear)',
  'Improper use',
  'Third-party modifications, repairs, relocation, or re-installation by others',
  'Site conditions beyond Vivara Home control',
  'Materials supplied/selected by Client outside recommendations',
];

// Business Info (Fixed)
export const businessInfo = {
  name: 'VIVARA',
  tagline: 'HOME',
  projectType: 'FURNITURE PROJECT',
  preparedBy: 'Vivara.Home',
};
