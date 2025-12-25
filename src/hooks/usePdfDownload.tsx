import { pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import { InvoicePdf } from '../pdf/InvoicePdf';
import type { Invoice } from '../types/invoice';
import { calculateTotals } from '../types/invoice';

export async function downloadInvoicePdf(invoice: Invoice): Promise<void> {
  try {
    console.log('Starting PDF generation...');
    const totals = calculateTotals(invoice.items);
    const blob = await pdf(<InvoicePdf data={{ invoice, totals }} />).toBlob();
    console.log('PDF blob created, size:', blob.size);

    // Generate filename
    const clientName = invoice.clientName || 'Invoice';
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
