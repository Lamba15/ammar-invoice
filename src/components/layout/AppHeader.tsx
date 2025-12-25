import { RotateCcw, Printer } from 'lucide-react';

interface AppHeaderProps {
  onReset: () => void;
  onPrint: () => void;
}

export function AppHeader({ onReset, onPrint }: AppHeaderProps) {
  return (
    <header className="h-14 bg-[var(--bg-header)] flex items-center justify-between px-6 no-print">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="flex items-baseline">
          <span className="text-white text-xl font-bold tracking-tight">VIVARA</span>
          <span className="text-[var(--white-muted)] text-sm font-medium ml-1">HOME</span>
        </div>
        <span className="text-[var(--white-subtle)] text-sm ml-4">|</span>
        <span className="text-[var(--white-subtle)] text-sm ml-4">Quotation Builder</span>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3">
        <button
          onClick={onReset}
          className="flex items-center gap-2 px-4 py-2 rounded-md bg-[rgba(255,255,255,0.1)] text-white text-sm font-medium hover:bg-[rgba(255,255,255,0.15)] transition-colors"
        >
          <RotateCcw size={16} />
          Reset
        </button>
        <button
          onClick={onPrint}
          className="flex items-center gap-2 px-4 py-2 rounded-md bg-[var(--accent-teal)] text-white text-sm font-medium hover:bg-[var(--accent-teal-dark)] transition-colors shadow-[var(--shadow-button)] hover:shadow-[var(--shadow-button-hover)]"
        >
          <Printer size={16} />
          Print / Save PDF
        </button>
      </div>
    </header>
  );
}
