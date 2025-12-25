import { Document, Page, View, Text, Image } from '@react-pdf/renderer';
import { styles } from './PdfStyles';

interface InvoiceItem {
  id: string;
  sn: string;
  name: string;
  description: string;
  qty: number;
  unitPriceBefore: number;
  unitPriceAfter: number;
  image: string | null;
}

interface InvoiceData {
  clientName: string;
  projectTitle: string;
  items: InvoiceItem[];
  totalBeforeDiscount: number;
  totalAfterDiscount: number;
  totalDiscountAmount: number;
}

const formatCurrency = (val: number) => {
  return new Intl.NumberFormat('en-EG', {
    style: 'decimal',
    minimumFractionDigits: 0
  }).format(val);
};

// Terms and conditions data
const termsAndConditions = [
  'Prices not including VAT.',
  'Delivery time 45-60 Days from confirmation on technical drawings.',
  'Prices include delivery and site installation inside Cairo Regions.',
  'Quotation Valid for 5 Days Only.',
];

const paymentConditions = [
  '60% down payment to start production.',
  '40% min. one week before delivery.',
  'Quality check before shipping is available upon request in warehouse.',
];

// Agreement clauses
const agreementClauses = [
  {
    title: '1. Scope of Work:',
    text: 'This Agreement includes only the deliverables stated in the proposal/quotation for custom furniture design and making (and installation if included). If new deliverables are requested (additional pieces, new areas, major changes in dimensions/materials, extra iterations, or new services), a new agreement / change order will be proposed (fees and due dates may differ).',
  },
  {
    title: '2. Working Hours:',
    text: 'Vivara Home operates from Sunday to Thursday, 10:00 AM to 7:00 PM.',
  },
  {
    title: '3. Deliverables:',
    text: 'Fees include the agreed furniture service, as specified in the proposal/quotation, which may include: Furniture concept/design development (if included), 2D shop drawings (DWG/CAD) and PDF drawing set (dimensions/details), 3D views and/or renders (if included), Materials/finishes specifications (wood/veneer/paint/fabric/hardware), Fabrication of the approved furniture pieces, Delivery and installation (if included).',
  },
  {
    title: '4. Intellectual Property:',
    text: "All drawings, models, renders, and design details remain the intellectual property of Vivara Home. Deliverables are for the Client's exclusive use for this project and may not be shared, distributed, reproduced, or altered without prior written consent.",
  },
  {
    title: '5. Portfolio Rights:',
    text: 'Vivara Home reserves the right to showcase the project on its portfolio/website and social media unless the Client has purchased a license to restrict this use (in writing).',
  },
  {
    title: '6. Additional Services:',
    text: 'Services beyond the agreed scope—such as additional furniture items, re-design after approvals, extra 3D modifications beyond included revisions, custom prototypes, urgent requests, or material upgrades—will incur additional fees.',
  },
  {
    title: '7. Project Timeline:',
    text: "The project timeline is based on delivering the agreed furniture scope within sixty (60) calendar days from the official start date. The start date begins once the agreed installment payment has been transferred and all required site measurements/approvals are confirmed. Please allow a buffer of 2–5 working days after confirmation for production scheduling to begin. Note: The 60-day timeline may be affected by: (a) delayed Client approvals/feedback, (b) changes requested after approval, (c) delayed payments, (d) site readiness issues, or (e) material/hardware availability beyond Vivara Home's control.",
  },
  {
    title: '8. Client Feedback:',
    text: 'To maintain timelines and avoid delays, the Client agrees to provide feedback/approvals on each deliverable within 7 business days.',
  },
  {
    title: '9. Revisions & Change Impact:',
    text: 'If the furniture making process is extended due to Client revisions or changes after approvals (especially changes affecting dimensions, structure, materials, finishes, or hardware), Vivara Home reserves the right to request an additional payment before proceeding with major modifications, rework, or re-production.',
  },
  {
    title: '10. Pause Fee:',
    text: 'For project holds exceeding one (1) month, a pause fee of 10% of the total project cost per month will be applied to ensure resource allocation and to prevent scheduling conflicts.',
  },
  {
    title: '11. Payment & Scheduling:',
    text: 'Installment payments are due as per the agreed schedule. Delays in payments may affect production start, delivery timeline, and completion.',
  },
  {
    title: '12. Post-Delivery Support:',
    text: 'Vivara Home provides post-delivery support for a duration of two (2) years following project delivery/installation. Support includes reasonable guidance and issue reporting coordination related to the delivered furniture (subject to the Warranty and Maintenance terms below).',
  },
  {
    title: '13. Free Maintenance:',
    text: 'Vivara Home provides free maintenance for six (6) months from the delivery/installation date for furniture-related adjustments and servicing that fall under normal use and workmanship-related needs. Examples may include: hinge/runner alignment, door/drawer adjustments, minor tightening, and fitment calibration.',
  },
];

const warrantyClause = {
  title: '14. Warranty:',
  text: "Vivara Home provides a two (2) year warranty from the delivery/installation date against defects that are the result of Vivara Home's workmanship. This warranty covers repair or replacement (at Vivara Home's discretion) of the affected component(s) where the defect is confirmed to be caused by manufacturing/installation workmanship.",
  exclusions: 'Warranty does not cover: Misuse, abuse, negligence, accidents, or intentional damage; Water leakage, humidity, heat exposure, direct sunlight damage beyond normal expectations, or chemical cleaning damage; Normal wear and tear (scratches, dents, fading, fabric wear); Improper use; Third-party modifications, repairs, relocation, or re-installation by others; Site conditions beyond Vivara Home control; Materials supplied/selected by Client outside recommendations.',
};

export const InvoicePdf = ({ data }: { data: InvoiceData }) => (
  <Document>
    {/* Page 1: Invoice */}
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.brandingLeft}>
          <Text style={styles.vivaraText}>VIVARA</Text>
          <Text style={styles.homeText}>HOME</Text>
          <Text style={styles.projectLabel}>FURNITURE PROJECT</Text>
        </View>
        <View style={styles.clientInfoRight}>
          <Text style={styles.clientLabel}>Client Name</Text>
          <Text style={styles.clientName}>{data.clientName}</Text>
          <Text style={styles.clientLabel}>Project</Text>
          <Text style={styles.projectTitle}>{data.projectTitle}</Text>
          <Text style={styles.instagram}>INSTAGRAM/@Vivara.home.eg</Text>
        </View>
      </View>

      {/* Items Table */}
      <View style={styles.table}>
        {/* Table Header */}
        <View style={styles.tableHeader}>
          <View style={styles.colSn}>
            <Text style={styles.headerText}>SN</Text>
          </View>
          <View style={styles.colImage}>
            <Text style={styles.headerText}>Image</Text>
          </View>
          <View style={styles.colItem}>
            <Text style={styles.headerText}>Item Name / Description</Text>
          </View>
          <View style={styles.colQty}>
            <Text style={styles.headerText}>Qty</Text>
          </View>
          <View style={styles.colPriceBefore}>
            <Text style={styles.headerText}>Price</Text>
            <Text style={styles.headerSubtext}>Before Disc.</Text>
          </View>
          <View style={styles.colPriceAfter}>
            <Text style={styles.headerText}>Price</Text>
            <Text style={styles.headerSubtext}>After Disc.</Text>
          </View>
          <View style={styles.colTotalBefore}>
            <Text style={styles.headerText}>Total</Text>
            <Text style={styles.headerSubtext}>Before</Text>
          </View>
          <View style={styles.colTotalAfter}>
            <Text style={styles.headerText}>Total</Text>
            <Text style={styles.headerSubtext}>After</Text>
          </View>
        </View>

        {/* Table Rows */}
        {data.items.map((item) => (
          <View key={item.id} style={styles.tableRow}>
            <View style={styles.colSn}>
              <Text style={styles.itemSn}>{item.sn}</Text>
            </View>
            <View style={styles.colImage}>
              {item.image ? (
                <Image src={item.image} style={styles.itemImage} />
              ) : (
                <View style={styles.imagePlaceholder} />
              )}
            </View>
            <View style={styles.colItem}>
              <Text style={styles.itemName}>{item.name}</Text>
              {item.description && (
                <Text style={styles.itemDescription}>{item.description}</Text>
              )}
            </View>
            <View style={styles.colQty}>
              <Text style={styles.cellText}>{item.qty}</Text>
            </View>
            <View style={styles.colPriceBefore}>
              <Text style={styles.cellText}>{formatCurrency(item.unitPriceBefore)}</Text>
            </View>
            <View style={styles.colPriceAfter}>
              <Text style={styles.cellTextBold}>{formatCurrency(item.unitPriceAfter)}</Text>
            </View>
            <View style={styles.colTotalBefore}>
              <Text style={styles.cellTextMuted}>
                {formatCurrency(item.qty * item.unitPriceBefore)}
              </Text>
            </View>
            <View style={styles.colTotalAfter}>
              <Text style={styles.cellTextBold}>
                {formatCurrency(item.qty * item.unitPriceAfter)}
              </Text>
            </View>
          </View>
        ))}
      </View>

      {/* Totals */}
      <View style={styles.totalsContainer}>
        <View style={styles.totalsBox}>
          <View style={styles.totalsRow}>
            <Text style={styles.totalsLabel}>Total Before Discount</Text>
            <Text style={styles.totalsValue}>{formatCurrency(data.totalBeforeDiscount)} EGP</Text>
          </View>
          <View style={styles.totalsRow}>
            <Text style={styles.totalsLabel}>Discount Amount</Text>
            <Text style={styles.discountValue}>- {formatCurrency(data.totalDiscountAmount)} EGP</Text>
          </View>
          <View style={styles.totalsFinalRow}>
            <View>
              <Text style={styles.totalsFinalLabel}>Total After</Text>
              <Text style={styles.totalsFinalLabel}>Discount</Text>
            </View>
            <Text style={styles.totalsFinalValue}>{formatCurrency(data.totalAfterDiscount)} EGP</Text>
          </View>
        </View>
      </View>

      {/* Footer Terms */}
      <View style={styles.footerTerms}>
        <View style={styles.termsGrid}>
          <View style={styles.termsColumn}>
            <Text style={styles.termsTitle}>Terms & Conditions</Text>
            <View style={styles.termsList}>
              {termsAndConditions.map((term, i) => (
                <Text key={i} style={styles.termsItem}>• {term}</Text>
              ))}
            </View>
          </View>
          <View style={styles.termsColumn}>
            <Text style={styles.termsTitle}>Payment Conditions</Text>
            <View style={styles.termsList}>
              {paymentConditions.map((term, i) => (
                <Text key={i} style={styles.termsItem}>• {term}</Text>
              ))}
            </View>
          </View>
        </View>

        {/* Signatures */}
        <View style={styles.signaturesContainer}>
          <Text style={styles.preparedBy}>Prepared by Vivara.Home</Text>
          <View style={styles.signatureBox}>
            <View style={styles.signatureLine} />
            <Text style={styles.signatureLabel}>(Client Signature)</Text>
          </View>
        </View>
      </View>
    </Page>

    {/* Page 2: Terms of Agreement */}
    <Page size="A4" style={styles.agreementPage}>
      {/* Agreement Header */}
      <View style={styles.agreementHeader}>
        <Text style={styles.agreementTitle}>Terms of Agreement</Text>
        <Text style={styles.agreementSubtitle}>
          Agreement Details (Vivara Home – Furniture Design, Making, Warranty & Maintenance)
        </Text>
      </View>

      {/* Clauses 1-13 */}
      {agreementClauses.map((clause, i) => (
        <View key={i} style={styles.clauseContainer}>
          <Text style={styles.clauseText}>
            <Text style={styles.clauseTitle}>{clause.title}</Text> {clause.text}
          </Text>
        </View>
      ))}

      {/* Clause 14 - Warranty (special formatting) */}
      <View style={styles.warrantyBox}>
        <Text style={styles.clauseText}>
          <Text style={styles.clauseTitle}>{warrantyClause.title}</Text> {warrantyClause.text}
        </Text>
        <Text style={styles.warrantyExclusions}>{warrantyClause.exclusions}</Text>
      </View>

      {/* Agreement Signature */}
      <View style={styles.agreementSignature}>
        <View style={styles.signatureBox}>
          <View style={styles.agreementSignatureLine} />
          <Text style={styles.agreementSignatureLabel}>Client Signature (Terms Acceptance)</Text>
        </View>
      </View>
    </Page>
  </Document>
);
