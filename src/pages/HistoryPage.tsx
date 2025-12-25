import { useState } from 'react';
import { ArrowLeft, Plus, Search, Edit2, Copy, Trash2, FileText } from 'lucide-react';

export interface SavedInvoice {
  id: string;
  clientName: string;
  projectTitle: string;
  totalAfterDiscount: number;
  itemCount: number;
  savedAt: string;
  items: Array<{
    id: string;
    sn: string;
    name: string;
    description: string;
    qty: number;
    unitPriceBefore: number;
    unitPriceAfter: number;
    image: string | null;
  }>;
}

interface HistoryPageProps {
  invoices: SavedInvoice[];
  onBack: () => void;
  onNew: () => void;
  onEdit: (invoice: SavedInvoice) => void;
  onDuplicate: (invoice: SavedInvoice) => void;
  onDelete: (id: string) => void;
}

export function HistoryPage({
  invoices,
  onBack,
  onNew,
  onEdit,
  onDuplicate,
  onDelete,
}: HistoryPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-EG', {
      style: 'decimal',
      minimumFractionDigits: 0,
    }).format(val);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const filteredInvoices = invoices.filter((invoice) => {
    const query = searchQuery.toLowerCase();
    return (
      invoice.clientName.toLowerCase().includes(query) ||
      invoice.projectTitle.toLowerCase().includes(query)
    );
  });

  const handleDelete = (id: string) => {
    if (deleteConfirm === id) {
      onDelete(id);
      setDeleteConfirm(null);
    } else {
      setDeleteConfirm(id);
      // Auto-reset after 3 seconds
      setTimeout(() => setDeleteConfirm(null), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-black text-white p-4 shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold tracking-widest">VIVARA HOME</h1>
            <span className="text-gray-500">|</span>
            <span className="text-sm text-gray-300">Invoice History</span>
          </div>
          <div className="flex space-x-3">
            <button
              onClick={onNew}
              className="flex items-center px-4 py-2 text-sm bg-white text-black font-semibold hover:bg-gray-200 rounded transition"
            >
              <Plus size={16} className="mr-2" /> New Invoice
            </button>
            <button
              onClick={onBack}
              className="flex items-center px-3 py-2 text-sm bg-gray-800 hover:bg-gray-700 rounded transition"
            >
              <ArrowLeft size={16} className="mr-2" /> Back to Editor
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto p-8">
        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search by client or project name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-900 placeholder:text-gray-400 focus:border-black focus:ring-1 focus:ring-black outline-none transition"
            />
          </div>
        </div>

        {/* Invoice Grid */}
        {filteredInvoices.length === 0 ? (
          <div className="text-center py-16">
            <FileText size={48} className="mx-auto text-gray-300 mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              {searchQuery ? 'No invoices match your search' : 'No saved invoices yet'}
            </h3>
            <p className="text-gray-400 mb-6">
              {searchQuery
                ? 'Try a different search term'
                : 'Create an invoice and save it as PDF to see it here'}
            </p>
            {!searchQuery && (
              <button
                onClick={onNew}
                className="inline-flex items-center px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition"
              >
                <Plus size={20} className="mr-2" /> Create Your First Invoice
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredInvoices.map((invoice) => (
              <div
                key={invoice.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden group"
              >
                {/* Card Header */}
                <div className="p-6 border-b border-gray-100">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-lg text-gray-900 truncate">
                        {invoice.clientName || 'Untitled Invoice'}
                      </h3>
                      <p className="text-sm text-gray-500 truncate">
                        {invoice.projectTitle || 'No project name'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">
                      {formatDate(invoice.savedAt)}
                    </span>
                    <span className="text-xs text-gray-400">
                      {invoice.itemCount} item{invoice.itemCount !== 1 ? 's' : ''}
                    </span>
                  </div>
                </div>

                {/* Card Body - Total */}
                <div className="px-6 py-4 bg-gray-50">
                  <div className="text-center">
                    <span className="text-2xl font-bold text-gray-900">
                      {formatCurrency(invoice.totalAfterDiscount)}
                    </span>
                    <span className="text-sm text-gray-500 ml-1">EGP</span>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="px-4 py-3 bg-white border-t border-gray-100 flex items-center justify-between">
                  <button
                    onClick={() => onEdit(invoice)}
                    className="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-black hover:bg-gray-100 rounded-lg transition"
                  >
                    <Edit2 size={14} className="mr-1.5" /> Edit
                  </button>
                  <button
                    onClick={() => onDuplicate(invoice)}
                    className="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-black hover:bg-gray-100 rounded-lg transition"
                  >
                    <Copy size={14} className="mr-1.5" /> Duplicate
                  </button>
                  <button
                    onClick={() => handleDelete(invoice.id)}
                    className={`flex items-center px-3 py-2 text-sm rounded-lg transition ${
                      deleteConfirm === invoice.id
                        ? 'bg-red-500 text-white'
                        : 'text-gray-600 hover:text-red-500 hover:bg-red-50'
                    }`}
                  >
                    <Trash2 size={14} className="mr-1.5" />
                    {deleteConfirm === invoice.id ? 'Confirm?' : 'Delete'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Stats Footer */}
        {invoices.length > 0 && (
          <div className="mt-12 text-center text-sm text-gray-400">
            {invoices.length} invoice{invoices.length !== 1 ? 's' : ''} saved
          </div>
        )}
      </div>
    </div>
  );
}
