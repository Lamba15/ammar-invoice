import { Instagram } from 'lucide-react';
import { businessInfo } from '../../data/defaultTerms';

interface BusinessHeaderProps {
  clientName: string;
  projectName: string;
  instagramHandle: string;
  onClientNameChange: (value: string) => void;
  onProjectNameChange: (value: string) => void;
  onInstagramChange: (value: string) => void;
}

export function BusinessHeader({
  clientName,
  projectName,
  instagramHandle,
  onClientNameChange,
  onProjectNameChange,
  onInstagramChange,
}: BusinessHeaderProps) {
  return (
    <div className="flex items-start justify-between pb-6 border-b border-[var(--border-light)]">
      {/* Left: Business Branding */}
      <div>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
            {businessInfo.name}
          </span>
        </div>
        <div className="text-lg font-medium text-[var(--text-muted)] tracking-widest mt-[-4px]">
          {businessInfo.tagline}
        </div>
        <div className="text-sm text-[var(--accent-teal)] font-medium mt-3">
          {businessInfo.projectType}
        </div>
      </div>

      {/* Right: Client Info */}
      <div className="text-right space-y-2">
        <div className="flex items-center justify-end gap-2">
          <label className="text-sm text-[var(--text-muted)]">CLIENT:</label>
          <input
            type="text"
            value={clientName}
            onChange={(e) => onClientNameChange(e.target.value)}
            placeholder="Client Name"
            className="text-right text-lg font-semibold text-[var(--text-primary)] bg-transparent border-b border-transparent hover:border-[var(--border-light)] focus:border-[var(--accent-teal)] transition-colors outline-none px-1"
          />
        </div>
        <div className="flex items-center justify-end gap-2">
          <label className="text-sm text-[var(--text-muted)]">PROJECT:</label>
          <input
            type="text"
            value={projectName}
            onChange={(e) => onProjectNameChange(e.target.value)}
            placeholder="Project Name"
            className="text-right text-lg font-semibold text-[var(--text-primary)] bg-transparent border-b border-transparent hover:border-[var(--border-light)] focus:border-[var(--accent-teal)] transition-colors outline-none px-1"
          />
        </div>
        <div className="flex items-center justify-end gap-2 mt-3">
          <Instagram size={16} className="text-[var(--text-muted)]" />
          <input
            type="text"
            value={instagramHandle}
            onChange={(e) => onInstagramChange(e.target.value)}
            className="text-right text-sm text-[var(--text-muted)] bg-transparent border-b border-transparent hover:border-[var(--border-light)] focus:border-[var(--accent-teal)] transition-colors outline-none px-1"
          />
        </div>
      </div>
    </div>
  );
}
