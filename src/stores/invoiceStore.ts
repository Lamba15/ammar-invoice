import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Invoice, InvoiceItem, InvoiceStore } from '../types/invoice';
import {
  createEmptyInvoice,
  createEmptyItem,
  generateSerialNumber,
} from '../types/invoice';

export const useInvoiceStore = create<InvoiceStore>()(
  persist(
    (set, get) => ({
      invoices: [],
      currentInvoiceId: null,

      // Create a new invoice
      createInvoice: () => {
        const newInvoice = createEmptyInvoice();
        set((state) => ({
          invoices: [newInvoice, ...state.invoices],
          currentInvoiceId: newInvoice.id,
        }));
        return newInvoice.id;
      },

      // Update an existing invoice
      updateInvoice: (id: string, data: Partial<Invoice>) => {
        set((state) => ({
          invoices: state.invoices.map((invoice) =>
            invoice.id === id
              ? { ...invoice, ...data, updatedAt: new Date().toISOString() }
              : invoice
          ),
        }));
      },

      // Delete an invoice
      deleteInvoice: (id: string) => {
        set((state) => {
          const newInvoices = state.invoices.filter((inv) => inv.id !== id);
          const newCurrentId =
            state.currentInvoiceId === id
              ? newInvoices.length > 0
                ? newInvoices[0].id
                : null
              : state.currentInvoiceId;
          return {
            invoices: newInvoices,
            currentInvoiceId: newCurrentId,
          };
        });
      },

      // Duplicate an invoice
      duplicateInvoice: (id: string) => {
        const state = get();
        const originalInvoice = state.invoices.find((inv) => inv.id === id);
        if (!originalInvoice) return id;

        const newInvoice: Invoice = {
          ...JSON.parse(JSON.stringify(originalInvoice)),
          id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          clientName: `${originalInvoice.clientName} (Copy)`,
        };

        // Regenerate item IDs
        newInvoice.items = newInvoice.items.map((item, index) => ({
          ...item,
          id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
          serialNumber: generateSerialNumber(index),
        }));

        set((state) => ({
          invoices: [newInvoice, ...state.invoices],
          currentInvoiceId: newInvoice.id,
        }));

        return newInvoice.id;
      },

      // Set current invoice
      setCurrentInvoice: (id: string | null) => {
        set({ currentInvoiceId: id });
      },

      // Get current invoice
      getCurrentInvoice: () => {
        const state = get();
        return state.invoices.find((inv) => inv.id === state.currentInvoiceId) || null;
      },

      // Add item to invoice
      addItem: (invoiceId: string) => {
        set((state) => ({
          invoices: state.invoices.map((invoice) => {
            if (invoice.id === invoiceId) {
              const newItem = createEmptyItem(invoice.items.length);
              return {
                ...invoice,
                items: [...invoice.items, newItem],
                updatedAt: new Date().toISOString(),
              };
            }
            return invoice;
          }),
        }));
      },

      // Update item in invoice
      updateItem: (invoiceId: string, itemId: string, data: Partial<InvoiceItem>) => {
        set((state) => ({
          invoices: state.invoices.map((invoice) => {
            if (invoice.id === invoiceId) {
              return {
                ...invoice,
                items: invoice.items.map((item) =>
                  item.id === itemId ? { ...item, ...data } : item
                ),
                updatedAt: new Date().toISOString(),
              };
            }
            return invoice;
          }),
        }));
      },

      // Delete item from invoice
      deleteItem: (invoiceId: string, itemId: string) => {
        set((state) => ({
          invoices: state.invoices.map((invoice) => {
            if (invoice.id === invoiceId) {
              const newItems = invoice.items
                .filter((item) => item.id !== itemId)
                .map((item, index) => ({
                  ...item,
                  serialNumber: generateSerialNumber(index),
                }));
              return {
                ...invoice,
                items: newItems.length > 0 ? newItems : [createEmptyItem(0)],
                updatedAt: new Date().toISOString(),
              };
            }
            return invoice;
          }),
        }));
      },
    }),
    {
      name: 'vivara-invoice-storage',
    }
  )
);
