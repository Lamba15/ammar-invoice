import { Plus, Trash2, Copy, Search } from 'lucide-react';
import { useState } from 'react';
import type { Invoice } from '../../types/invoice';
import { calculateTotals, formatNumber, formatDate } from '../../types/invoice';

interface SidebarProps {
  invoices: Invoice[];
  currentInvoiceId: string | null;
  onSelect: (id: string) => void;
  onCreate: () => void;
  onDelete: (id: string) => void;
  onDuplicate: (id: string) => void;
}

export function Sidebar({
  invoices,
  currentInvoiceId,
  onSelect,
  onCreate,
  onDelete,
  onDuplicate,
}: SidebarProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredInvoices = invoices.filter((invoice) => {
    const query = searchQuery.toLowerCase();
    return (
      invoice.clientName.toLowerCase().includes(query) ||
      invoice.projectName.toLowerCase().includes(query)
    );
  });

  return (
    <aside className="w-72 bg-[var(--bg-card)] border-r border-[var(--border-light)] flex flex-col h-full no-print">
      {/* Header */}
      <div className="p-4 border-b border-[var(--border-light)]">
        <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
          Invoice History
        </h2>

        {/* Search */}
        <div className="relative">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]"
          />
          <input
            type="text"
            placeholder="Search invoices..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 bg-[var(--bg-input)] border border-[var(--border-light)] rounded-md text-sm text-[var(--text-primary)] placeholder:text-[var(--text-placeholder)] focus:border-[var(--accent-teal)] focus:ring-1 focus:ring-[var(--accent-teal)]"
          />
        </div>
      </div>

      {/* Invoice List */}
      <div className="flex-1 overflow-y-auto p-3">
        {filteredInvoices.length === 0 ? (
          <div className="text-center py-8 text-[var(--text-muted)] text-sm">
            {searchQuery ? 'No invoices match your search' : 'No invoices yet'}
          </div>
        ) : (
          <div className="space-y-2">
            {filteredInvoices.map((invoice) => {
              const totals = calculateTotals(invoice.items);
              const isActive = invoice.id === currentInvoiceId;

              return (
                <div
                  key={invoice.id}
                  onClick={() => onSelect(invoice.id)}
                  className={`group p-3 rounded-lg cursor-pointer transition-all ${
                    isActive
                      ? 'bg-[var(--accent-teal-light)] border border-[var(--accent-teal)]'
                      : 'bg-[var(--bg-hover)] border border-transparent hover:border-[var(--border-light)]'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-[var(--text-primary)] truncate">
                        {invoice.clientName || 'Untitled Invoice'}
                      </h3>
                      <p className="text-sm text-[var(--text-muted)] truncate">
                        {invoice.projectName || 'No project name'}
                      </p>
                      <p className="text-xs text-[var(--text-muted)] mt-1">
                        {formatDate(invoice.createdAt)}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-semibold text-[var(--accent-teal)]">
                        {formatNumber(totals.totalAfterDiscount)} EGP
                      </span>
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div
                    className={`flex items-center gap-1 mt-2 pt-2 border-t border-[var(--border-subtle)] ${
                      isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    } transition-opacity`}
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onDuplicate(invoice.id);
                      }}
                      className="flex items-center gap-1 px-2 py-1 text-xs text-[var(--text-muted)] hover:text-[var(--accent-teal)] hover:bg-[var(--accent-teal-light)] rounded transition-colors"
                    >
                      <Copy size={12} />
                      Duplicate
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onDelete(invoice.id);
                      }}
                      className="flex items-center gap-1 px-2 py-1 text-xs text-[var(--text-muted)] hover:text-[var(--delete-hover-color)] hover:bg-[var(--delete-hover-bg)] rounded transition-colors"
                    >
                      <Trash2 size={12} />
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* New Invoice Button */}
      <div className="p-3 border-t border-[var(--border-light)]">
        <button
          onClick={onCreate}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-lg border-2 border-dashed border-[var(--accent-teal)] text-[var(--accent-teal)] font-medium hover:bg-[var(--accent-teal-light)] transition-colors"
        >
          <Plus size={20} />
          New Invoice
        </button>
      </div>
    </aside>
  );
}
