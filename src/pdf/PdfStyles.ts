import { StyleSheet } from '@react-pdf/renderer';

// A4 dimensions: 595 x 842 points
export const styles = StyleSheet.create({
  // Page styles
  page: {
    padding: 40,
    fontFamily: 'Helvetica',
    fontSize: 9,
    color: '#1a1a1a',
  },

  // Header section
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderBottomColor: '#000000',
    paddingBottom: 15,
    marginBottom: 20,
  },
  brandingLeft: {
    flexDirection: 'column',
  },
  vivaraText: {
    fontSize: 28,
    fontFamily: 'Helvetica-Bold',
    letterSpacing: -1,
  },
  homeText: {
    fontSize: 12,
    letterSpacing: 8,
    color: '#888888',
    marginTop: 2,
  },
  projectLabel: {
    fontSize: 8,
    fontFamily: 'Helvetica-Bold',
    marginTop: 12,
  },
  clientInfoRight: {
    alignItems: 'flex-end',
  },
  clientLabel: {
    fontSize: 7,
    color: '#999999',
    textTransform: 'uppercase',
    marginBottom: 2,
  },
  clientName: {
    fontSize: 14,
    fontFamily: 'Helvetica-Bold',
    textTransform: 'uppercase',
  },
  projectTitle: {
    fontSize: 10,
    textTransform: 'uppercase',
    marginTop: 8,
  },
  instagram: {
    fontSize: 8,
    color: '#666666',
    marginTop: 8,
  },

  // Table styles
  table: {
    marginTop: 10,
  },
  tableHeader: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: '#000000',
    paddingBottom: 8,
    marginBottom: 4,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    paddingVertical: 8,
    minHeight: 50,
    alignItems: 'flex-start',
  },
  // Column widths (total ~515pt available width)
  colSn: { width: 22 },
  colImage: { width: 45, alignItems: 'center' },
  colItem: { width: 130, paddingRight: 6 },
  colQty: { width: 28, textAlign: 'center' },
  colPriceBefore: { width: 60, textAlign: 'right', paddingRight: 4 },
  colPriceAfter: { width: 60, textAlign: 'right', paddingRight: 4 },
  colTotalBefore: { width: 70, textAlign: 'right', backgroundColor: '#f5f5f5', paddingHorizontal: 4 },
  colTotalAfter: { width: 70, textAlign: 'right', backgroundColor: '#f5f5f5', paddingHorizontal: 4 },

  // Table header text
  headerText: {
    fontSize: 6,
    fontFamily: 'Helvetica-Bold',
    textTransform: 'uppercase',
    color: '#666666',
  },
  headerSubtext: {
    fontSize: 5,
    color: '#999999',
    marginTop: 1,
  },

  // Table cell content
  itemSn: {
    fontSize: 8,
    fontFamily: 'Courier',
    color: '#888888',
  },
  imagePlaceholder: {
    width: 40,
    height: 40,
    backgroundColor: '#f0f0f0',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderStyle: 'dashed',
  },
  itemImage: {
    width: 40,
    height: 40,
    objectFit: 'cover',
  },
  itemName: {
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
    textTransform: 'uppercase',
    marginBottom: 2,
  },
  itemDescription: {
    fontSize: 7,
    color: '#666666',
  },
  cellText: {
    fontSize: 9,
    fontFamily: 'Courier',
  },
  cellTextBold: {
    fontSize: 9,
    fontFamily: 'Courier-Bold',
  },
  cellTextMuted: {
    fontSize: 9,
    fontFamily: 'Courier',
    color: '#888888',
  },

  // Totals section
  totalsContainer: {
    marginTop: 20,
    alignItems: 'flex-end',
  },
  totalsBox: {
    width: 200,
    borderTopWidth: 2,
    borderTopColor: '#000000',
    paddingTop: 10,
  },
  totalsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  totalsLabel: {
    fontSize: 8,
    textTransform: 'uppercase',
    fontFamily: 'Helvetica-Bold',
    color: '#666666',
  },
  totalsValue: {
    fontSize: 9,
    fontFamily: 'Courier',
  },
  discountValue: {
    fontSize: 9,
    fontFamily: 'Courier',
    color: '#22c55e',
  },
  totalsFinalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingTop: 8,
    marginTop: 8,
  },
  totalsFinalLabel: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    textTransform: 'uppercase',
  },
  totalsFinalValue: {
    fontSize: 14,
    fontFamily: 'Courier-Bold',
  },

  // Footer terms section
  footerTerms: {
    marginTop: 25,
    borderTopWidth: 2,
    borderTopColor: '#000000',
    paddingTop: 15,
  },
  termsGrid: {
    flexDirection: 'row',
    gap: 30,
  },
  termsColumn: {
    flex: 1,
  },
  termsTitle: {
    fontSize: 8,
    fontFamily: 'Helvetica-Bold',
    textTransform: 'uppercase',
    marginBottom: 6,
  },
  termsList: {
    paddingLeft: 8,
  },
  termsItem: {
    fontSize: 7,
    marginBottom: 3,
    color: '#444444',
    lineHeight: 1.4,
  },
  bullet: {
    marginRight: 4,
  },

  // Signatures
  signaturesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    alignItems: 'flex-end',
  },
  preparedBy: {
    fontSize: 7,
    textTransform: 'uppercase',
    letterSpacing: 2,
    color: '#999999',
    fontFamily: 'Helvetica-Bold',
  },
  signatureBox: {
    alignItems: 'center',
  },
  signatureLine: {
    width: 150,
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    marginBottom: 4,
    height: 30,
  },
  signatureLabel: {
    fontSize: 7,
    textTransform: 'uppercase',
    fontFamily: 'Helvetica-Bold',
  },

  // Page 2 - Agreement
  agreementPage: {
    padding: 40,
    fontFamily: 'Helvetica',
    fontSize: 8,
    color: '#1a1a1a',
  },
  agreementHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  agreementTitle: {
    fontSize: 18,
    fontFamily: 'Helvetica-Bold',
    textTransform: 'uppercase',
    letterSpacing: 3,
    marginBottom: 6,
  },
  agreementSubtitle: {
    fontSize: 8,
    textTransform: 'uppercase',
    color: '#666666',
    fontFamily: 'Helvetica-Bold',
  },
  clauseContainer: {
    marginBottom: 8,
  },
  clauseText: {
    fontSize: 8,
    lineHeight: 1.5,
    textAlign: 'justify',
    color: '#333333',
  },
  clauseTitle: {
    fontFamily: 'Helvetica-Bold',
    textTransform: 'uppercase',
  },
  warrantyBox: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    marginTop: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  warrantyExclusions: {
    fontSize: 7,
    fontStyle: 'italic',
    color: '#666666',
    marginTop: 6,
    lineHeight: 1.4,
  },
  agreementSignature: {
    marginTop: 25,
    alignItems: 'flex-end',
  },
  agreementSignatureLine: {
    width: 200,
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    marginBottom: 4,
    height: 30,
  },
  agreementSignatureLabel: {
    fontSize: 7,
    textTransform: 'uppercase',
    fontFamily: 'Helvetica-Bold',
  },
});
