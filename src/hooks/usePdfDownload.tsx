import { pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import { InvoicePdf } from '../pdf/InvoicePdf';

export interface InvoiceItem {
  id: string;
  sn: string;
  name: string;
  description: string;
  qty: number;
  unitPriceBefore: number;
  unitPriceAfter: number;
  image: string | null;
}

export interface InvoiceData {
  clientName: string;
  projectTitle: string;
  items: InvoiceItem[];
  totalBeforeDiscount: number;
  totalAfterDiscount: number;
  totalDiscountAmount: number;
}

export async function downloadInvoicePdf(data: InvoiceData): Promise<void> {
  try {
    console.log('Starting PDF generation...');
    const blob = await pdf(<InvoicePdf data={data} />).toBlob();
    console.log('PDF blob created, size:', blob.size);

    // Generate filename
    const clientName = data.clientName || 'Invoice';
    const date = new Date().toISOString().split('T')[0];
    const filename = `${clientName.replace(/\s+/g, '-')}-${date}.pdf`;

    // Use file-saver for reliable downloads (fixes Chrome blob URL issues)
    saveAs(blob, filename);
    console.log('Download triggered:', filename);

  } catch (error) {
    console.error('PDF generation failed:', error);
    throw new Error('Failed to generate PDF: ' + (error as Error).message);
  }
}
