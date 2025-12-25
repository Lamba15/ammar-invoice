import { termsAndConditions } from '../../data/defaultTerms';

export function TermsSection() {
  return (
    <div className="mt-8 pt-6 border-t border-[var(--border-light)]">
      <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
        Terms & Conditions
      </h3>
      <ul className="space-y-2">
        {termsAndConditions.map((term, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-[var(--accent-teal)] mt-1">•</span>
            <span className="text-sm text-[var(--text-secondary)]">{term}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
