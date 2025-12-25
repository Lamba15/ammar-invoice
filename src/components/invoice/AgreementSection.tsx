import { termsOfAgreement, warrantyExclusions } from '../../data/defaultTerms';

export function AgreementSection() {
  return (
    <div className="mt-8 pt-6 border-t border-[var(--border-light)]">
      <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-6">
        Terms of Agreement
      </h3>

      <div className="space-y-6">
        {termsOfAgreement.map((clause) => (
          <div key={clause.number}>
            <h4 className="font-semibold text-[var(--text-primary)] mb-2">
              {clause.number}. {clause.title}
            </h4>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              {clause.content}
            </p>
          </div>
        ))}

        {/* Warranty Exclusions */}
        <div className="mt-6 p-4 bg-[var(--bg-input)] rounded-lg">
          <h4 className="font-semibold text-[var(--text-primary)] mb-3">
            Warranty Exclusions:
          </h4>
          <ul className="space-y-1">
            {warrantyExclusions.map((exclusion, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-[var(--text-muted)] mt-1">•</span>
                <span className="text-sm text-[var(--text-secondary)]">{exclusion}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
