import { Trash2 } from 'lucide-react';
import type { InvoiceItem } from '../../types/invoice';
import { formatNumber } from '../../types/invoice';
import { ImageUpload } from './ImageUpload';

interface ItemRowProps {
  item: InvoiceItem;
  onUpdate: (data: Partial<InvoiceItem>) => void;
  onDelete: () => void;
  canDelete: boolean;
}

export function ItemRow({ item, onUpdate, onDelete, canDelete }: ItemRowProps) {
  const totalBefore = item.quantity * item.priceBeforeDiscount;
  const totalAfter = item.quantity * item.priceAfterDiscount;

  return (
    <tr className="group border-b border-[var(--border-subtle)] hover:bg-[var(--bg-hover)] transition-colors">
      {/* Serial Number */}
      <td className="py-3 px-3 text-center">
        <span className="text-sm font-medium text-[var(--text-muted)]">
          {item.serialNumber}
        </span>
      </td>

      {/* Image */}
      <td className="py-3 px-3">
        <ImageUpload
          image={item.image}
          onImageChange={(image) => onUpdate({ image })}
        />
      </td>

      {/* Item Name & Description */}
      <td className="py-3 px-3">
        <input
          type="text"
          value={item.itemName}
          onChange={(e) => onUpdate({ itemName: e.target.value })}
          placeholder="Item Name"
          className="w-full font-medium text-[var(--text-primary)] bg-transparent border-b border-transparent hover:border-[var(--border-light)] focus:border-[var(--accent-teal)] transition-colors outline-none px-1 py-0.5"
        />
        <textarea
          value={item.description}
          onChange={(e) => onUpdate({ description: e.target.value })}
          placeholder="Description"
          rows={2}
          className="w-full text-sm text-[var(--text-muted)] bg-transparent border border-transparent hover:border-[var(--border-light)] focus:border-[var(--accent-teal)] rounded transition-colors outline-none px-1 py-0.5 mt-1 resize-none"
        />
      </td>

      {/* Quantity */}
      <td className="py-3 px-3 text-center">
        <input
          type="number"
          min="1"
          value={item.quantity}
          onChange={(e) => onUpdate({ quantity: Math.max(1, parseInt(e.target.value) || 1) })}
          className="w-16 text-center font-medium text-[var(--text-primary)] bg-[var(--bg-input)] border border-[var(--border-light)] rounded-md focus:border-[var(--accent-teal)] outline-none px-2 py-1"
        />
      </td>

      {/* Unit Price Before Discount */}
      <td className="py-3 px-3 text-right">
        <input
          type="number"
          min="0"
          value={item.priceBeforeDiscount || ''}
          onChange={(e) => onUpdate({ priceBeforeDiscount: parseFloat(e.target.value) || 0 })}
          placeholder="0"
          className="w-24 text-right text-[var(--price-strike)] line-through bg-transparent border-b border-transparent hover:border-[var(--border-light)] focus:border-[var(--accent-teal)] transition-colors outline-none px-1"
        />
      </td>

      {/* Unit Price After Discount */}
      <td className="py-3 px-3 text-right">
        <input
          type="number"
          min="0"
          value={item.priceAfterDiscount || ''}
          onChange={(e) => onUpdate({ priceAfterDiscount: parseFloat(e.target.value) || 0 })}
          placeholder="0"
          className="w-24 text-right font-semibold text-[var(--text-primary)] bg-transparent border-b border-transparent hover:border-[var(--border-light)] focus:border-[var(--accent-teal)] transition-colors outline-none px-1"
        />
      </td>

      {/* Total Before */}
      <td className="py-3 px-3 text-right">
        <span className="text-[var(--price-strike)] line-through">
          {formatNumber(totalBefore)}
        </span>
      </td>

      {/* Total After */}
      <td className="py-3 px-3 text-right">
        <span className="font-semibold text-[var(--text-primary)]">
          {formatNumber(totalAfter)}
        </span>
      </td>

      {/* Delete Button */}
      <td className="py-3 px-3 text-center">
        {canDelete && (
          <button
            onClick={onDelete}
            className="p-2 rounded-md text-[var(--text-disabled)] hover:text-[var(--delete-hover-color)] hover:bg-[var(--delete-hover-bg)] opacity-0 group-hover:opacity-100 transition-all"
          >
            <Trash2 size={16} />
          </button>
        )}
      </td>
    </tr>
  );
}
