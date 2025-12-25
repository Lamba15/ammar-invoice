import type { InvoiceTotals } from '../../types/invoice';
import { formatNumber } from '../../types/invoice';

interface TotalsSummaryProps {
  totals: InvoiceTotals;
}

export function TotalsSummary({ totals }: TotalsSummaryProps) {
  return (
    <div className="mt-6 pt-6 border-t border-[var(--border-light)]">
      <div className="flex justify-end">
        <div className="w-80 space-y-3">
          {/* Total Before Discount */}
          <div className="flex justify-between items-center">
            <span className="text-[var(--text-muted)]">Total (Before Discount)</span>
            <span className="text-[var(--price-strike)] line-through">
              {formatNumber(totals.totalBeforeDiscount)} EGP
            </span>
          </div>

          {/* Discount */}
          <div className="flex justify-between items-center">
            <span className="text-[var(--text-muted)]">Discount</span>
            <span className="text-[var(--success-text)] font-medium">
              -{formatNumber(totals.discountAmount)} EGP
            </span>
          </div>

          {/* Divider */}
          <div className="border-t border-[var(--border-light)]"></div>

          {/* Total After Discount */}
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-[var(--text-primary)]">
              Total (After Discount)
            </span>
            <span className="text-xl font-bold text-[var(--accent-teal)]">
              {formatNumber(totals.totalAfterDiscount)} EGP
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
