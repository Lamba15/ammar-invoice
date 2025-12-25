import type { Invoice, InvoiceItem } from '../../types/invoice';
import { calculateTotals } from '../../types/invoice';
import { BusinessHeader } from './BusinessHeader';
import { ItemsTable } from './ItemsTable';
import { TotalsSummary } from './TotalsSummary';
import { TermsSection } from './TermsSection';
import { PaymentSection } from './PaymentSection';
import { SignatureSection } from './SignatureSection';
import { AgreementSection } from './AgreementSection';

interface InvoiceCardProps {
  invoice: Invoice;
  onUpdateInvoice: (data: Partial<Invoice>) => void;
  onUpdateItem: (itemId: string, data: Partial<InvoiceItem>) => void;
  onDeleteItem: (itemId: string) => void;
  onAddItem: () => void;
}

export function InvoiceCard({
  invoice,
  onUpdateInvoice,
  onUpdateItem,
  onDeleteItem,
  onAddItem,
}: InvoiceCardProps) {
  const totals = calculateTotals(invoice.items);

  return (
    <div className="bg-[var(--bg-card)] rounded-xl shadow-[var(--shadow-card)] p-8 max-w-5xl mx-auto">
      <BusinessHeader
        clientName={invoice.clientName}
        projectName={invoice.projectName}
        instagramHandle={invoice.instagramHandle}
        onClientNameChange={(clientName) => onUpdateInvoice({ clientName })}
        onProjectNameChange={(projectName) => onUpdateInvoice({ projectName })}
        onInstagramChange={(instagramHandle) => onUpdateInvoice({ instagramHandle })}
      />

      <ItemsTable
        items={invoice.items}
        onUpdateItem={onUpdateItem}
        onDeleteItem={onDeleteItem}
        onAddItem={onAddItem}
      />

      <TotalsSummary totals={totals} />

      <TermsSection />

      <PaymentSection />

      <SignatureSection clientName={invoice.clientName} />

      <AgreementSection />
    </div>
  );
}
