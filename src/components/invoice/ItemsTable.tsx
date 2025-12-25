import { Plus } from 'lucide-react';
import type { InvoiceItem } from '../../types/invoice';
import { ItemRow } from './ItemRow';

interface ItemsTableProps {
  items: InvoiceItem[];
  onUpdateItem: (itemId: string, data: Partial<InvoiceItem>) => void;
  onDeleteItem: (itemId: string) => void;
  onAddItem: () => void;
}

export function ItemsTable({
  items,
  onUpdateItem,
  onDeleteItem,
  onAddItem,
}: ItemsTableProps) {
  return (
    <div className="mt-6">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-[var(--border-light)]">
              <th className="py-3 px-3 text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider w-12">
                SN
              </th>
              <th className="py-3 px-3 text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider w-20">
                Image
              </th>
              <th className="py-3 px-3 text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider min-w-[200px]">
                Item Name
              </th>
              <th className="py-3 px-3 text-center text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider w-20">
                QTY
              </th>
              <th className="py-3 px-3 text-right text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider w-28">
                Unit (Before)
              </th>
              <th className="py-3 px-3 text-right text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider w-28">
                Unit (After)
              </th>
              <th className="py-3 px-3 text-right text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider w-28">
                Total (Before)
              </th>
              <th className="py-3 px-3 text-right text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider w-28">
                Total (After)
              </th>
              <th className="py-3 px-3 w-12"></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <ItemRow
                key={item.id}
                item={item}
                onUpdate={(data) => onUpdateItem(item.id, data)}
                onDelete={() => onDeleteItem(item.id)}
                canDelete={items.length > 1}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Item Button */}
      <button
        onClick={onAddItem}
        className="w-full mt-4 py-3 rounded-lg border-2 border-dashed border-[var(--border-light)] text-[var(--text-muted)] font-medium flex items-center justify-center gap-2 hover:border-[var(--accent-teal)] hover:text-[var(--accent-teal)] hover:bg-[var(--accent-teal-light)] transition-all"
      >
        <Plus size={20} />
        Add Item
      </button>
    </div>
  );
}
