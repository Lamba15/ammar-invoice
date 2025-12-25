import { businessInfo } from '../../data/defaultTerms';

interface SignatureSectionProps {
  clientName: string;
}

export function SignatureSection({ clientName }: SignatureSectionProps) {
  return (
    <div className="mt-8 pt-6 border-t border-[var(--border-light)]">
      <div className="grid grid-cols-2 gap-12">
        {/* Prepared By */}
        <div>
          <p className="text-sm text-[var(--text-muted)] mb-2">PREPARED BY:</p>
          <p className="text-lg font-semibold text-[var(--text-primary)]">
            {businessInfo.preparedBy}
          </p>
          <div className="mt-8 pt-2 border-t border-[var(--text-primary)]">
            <p className="text-sm text-[var(--text-muted)]">Signature</p>
          </div>
        </div>

        {/* Approved By */}
        <div>
          <p className="text-sm text-[var(--text-muted)] mb-2">APPROVED BY:</p>
          <p className="text-lg font-semibold text-[var(--text-primary)]">
            {clientName || 'Client Name'}
          </p>
          <div className="mt-8 pt-2 border-t border-[var(--text-primary)]">
            <p className="text-sm text-[var(--text-muted)]">Signature</p>
          </div>
        </div>
      </div>
    </div>
  );
}
