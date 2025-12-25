export interface InvoiceItem {
  id: string;
  serialNumber: string;
  image: string | null;
  itemName: string;
  description: string;
  quantity: number;
  priceBeforeDiscount: number;
  priceAfterDiscount: number;
}

export interface Invoice {
  id: string;
  createdAt: string;
  updatedAt: string;
  clientName: string;
  projectName: string;
  instagramHandle: string;
  items: InvoiceItem[];
}

export interface InvoiceStore {
  invoices: Invoice[];
  currentInvoiceId: string | null;

  // Actions
  createInvoice: () => string;
  updateInvoice: (id: string, data: Partial<Invoice>) => void;
  deleteInvoice: (id: string) => void;
  duplicateInvoice: (id: string) => string;
  setCurrentInvoice: (id: string | null) => void;
  getCurrentInvoice: () => Invoice | null;

  // Item actions
  addItem: (invoiceId: string) => void;
  updateItem: (invoiceId: string, itemId: string, data: Partial<InvoiceItem>) => void;
  deleteItem: (invoiceId: string, itemId: string) => void;
}

// Calculated totals
export interface InvoiceTotals {
  totalBeforeDiscount: number;
  totalAfterDiscount: number;
  discountAmount: number;
}

// Helper function to generate unique IDs
export const generateId = (): string => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

// Helper function to generate serial number
export const generateSerialNumber = (index: number): string => {
  return `v${index + 1}`;
};

// Default empty item
export const createEmptyItem = (index: number): InvoiceItem => ({
  id: generateId(),
  serialNumber: generateSerialNumber(index),
  image: null,
  itemName: '',
  description: '',
  quantity: 1,
  priceBeforeDiscount: 0,
  priceAfterDiscount: 0,
});

// Default empty invoice
export const createEmptyInvoice = (): Invoice => ({
  id: generateId(),
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  clientName: '',
  projectName: '',
  instagramHandle: '@Vivara.home.eg',
  items: [createEmptyItem(0)],
});

// Calculate totals for an invoice
export const calculateTotals = (items: InvoiceItem[]): InvoiceTotals => {
  const totalBeforeDiscount = items.reduce(
    (sum, item) => sum + item.quantity * item.priceBeforeDiscount,
    0
  );
  const totalAfterDiscount = items.reduce(
    (sum, item) => sum + item.quantity * item.priceAfterDiscount,
    0
  );
  const discountAmount = totalBeforeDiscount - totalAfterDiscount;

  return {
    totalBeforeDiscount,
    totalAfterDiscount,
    discountAmount,
  };
};

// Format number with commas
export const formatNumber = (num: number): string => {
  return num.toLocaleString('en-US');
};

// Format date for display
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};
