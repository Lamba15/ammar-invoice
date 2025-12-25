import { paymentConditions } from '../../data/defaultTerms';

export function PaymentSection() {
  return (
    <div className="mt-6 pt-6 border-t border-[var(--border-light)]">
      <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
        Payment Conditions
      </h3>
      <ul className="space-y-2">
        {paymentConditions.map((condition, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-[var(--accent-teal)] mt-1">•</span>
            <span className="text-sm text-[var(--text-secondary)]">{condition}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
