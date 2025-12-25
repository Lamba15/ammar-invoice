import { useState } from 'react';
import { RotateCcw, Printer, Plus, Trash2, ImageIcon, Loader2 } from 'lucide-react';
import { downloadInvoicePdf } from './hooks/usePdfDownload';

interface InvoiceItem {
  id: string;
  sn: string;
  name: string;
  description: string;
  qty: number;
  unitPriceBefore: number;
  unitPriceAfter: number;
  image: string | null;
}

const initialItems: InvoiceItem[] = [];

function App() {
  const [items, setItems] = useState<InvoiceItem[]>(initialItems);
  const [clientName, setClientName] = useState('');
  const [projectTitle, setProjectTitle] = useState('');
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-EG', {
      style: 'decimal',
      minimumFractionDigits: 0
    }).format(val);
  };

  const calculateLineTotalBefore = (item: InvoiceItem) => item.qty * item.unitPriceBefore;
  const calculateLineTotalAfter = (item: InvoiceItem) => item.qty * item.unitPriceAfter;

  const totalBeforeDiscount = items.reduce((sum, item) => sum + calculateLineTotalBefore(item), 0);
  const totalAfterDiscount = items.reduce((sum, item) => sum + calculateLineTotalAfter(item), 0);
  const totalDiscountAmount = totalBeforeDiscount - totalAfterDiscount;

  const handleAddItem = () => {
    const newItem: InvoiceItem = {
      id: Date.now().toString(),
      sn: `v${items.length + 1}`,
      name: '',
      description: '',
      qty: 1,
      unitPriceBefore: 0,
      unitPriceAfter: 0,
      image: null,
    };
    setItems([...items, newItem]);
  };

  const handleRemoveItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleItemChange = (id: string, field: keyof InvoiceItem, value: string | number | null) => {
    setItems(items.map((item) => {
      if (item.id === id) {
        return { ...item, [field]: value };
      }
      return item;
    }));
  };

  const handleImageUpload = (id: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        handleItemChange(id, 'image', reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePrint = async () => {
    if (isGeneratingPdf) return;

    setIsGeneratingPdf(true);
    try {
      await downloadInvoicePdf({
        clientName,
        projectTitle,
        items,
        totalBeforeDiscount,
        totalAfterDiscount,
        totalDiscountAmount,
      });
    } catch (error) {
      console.error('PDF generation failed:', error);
      alert('Failed to generate PDF. Please try again.');
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  const handleReset = () => {
    setItems([]);
    setClientName('');
    setProjectTitle('');
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-900 print:bg-white print:min-h-0">
      {/* Header */}
      <div className="bg-black text-white p-4 shadow-md print:hidden sticky top-0 z-50">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold tracking-widest">VIVARA HOME</h1>
            <span className="text-gray-500">|</span>
            <span className="text-sm text-gray-300">Quotation Builder</span>
          </div>
          <div className="flex space-x-3">
            <button
              onClick={handleReset}
              className="flex items-center px-3 py-2 text-sm bg-gray-800 hover:bg-gray-700 rounded transition"
            >
              <RotateCcw size={16} className="mr-2" /> Reset
            </button>
            <button
              onClick={handlePrint}
              disabled={isGeneratingPdf}
              className="flex items-center px-4 py-2 bg-white text-black font-semibold hover:bg-gray-200 rounded transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isGeneratingPdf ? (
                <>
                  <Loader2 size={16} className="mr-2 animate-spin" /> Generating...
                </>
              ) : (
                <>
                  <Printer size={16} className="mr-2" /> Save PDF
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Document */}
      <div className="max-w-[210mm] mx-auto bg-white min-h-[297mm] shadow-2xl my-8 p-12 print:shadow-none print:m-0 print:p-0 print:w-full print:max-w-none">
        {/* Document Header */}
        <header className="flex justify-between items-start mb-16 border-b-2 border-black pb-8">
          <div className="flex flex-col space-y-2">
            <h2 className="text-4xl font-bold tracking-tighter">VIVARA</h2>
            <h2 className="text-lg tracking-[0.5em] text-gray-500">HOME</h2>
            <p className="text-xs font-bold mt-4">FURNITURE PROJECT</p>
          </div>
          <div className="text-right flex flex-col items-end space-y-4">
            <div className="flex flex-col items-end">
              <label className="text-[10px] uppercase text-gray-400 font-bold mb-1 print:hidden">Client Name</label>
              <input
                type="text"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="text-right font-bold text-xl uppercase border-b border-dashed border-transparent hover:border-gray-300 focus:border-black outline-none bg-transparent transition-colors w-64 placeholder-gray-300"
                placeholder="CLIENT NAME"
              />
            </div>
            <div className="flex flex-col items-end">
              <label className="text-[10px] uppercase text-gray-400 font-bold mb-1 print:hidden">Project</label>
              <input
                type="text"
                value={projectTitle}
                onChange={(e) => setProjectTitle(e.target.value)}
                className="text-right text-sm uppercase border-b border-dashed border-transparent hover:border-gray-300 focus:border-black outline-none bg-transparent transition-colors w-64 placeholder-gray-300"
                placeholder="PROJECT TITLE"
              />
            </div>
            <p className="text-xs text-gray-500 mt-2">INSTAGRAM/@Vivara.home.eg</p>
          </div>
        </header>

        {/* Items Table */}
        <div className="mb-12">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-black">
                <th className="py-4 text-xs font-bold uppercase w-10 text-gray-600">SN</th>
                <th className="py-4 text-xs font-bold uppercase w-20 text-gray-600 text-center">Image</th>
                <th className="py-4 text-xs font-bold uppercase w-1/3 text-gray-600 pl-4">Item Name / Description</th>
                <th className="py-4 text-xs font-bold uppercase text-center w-12 text-gray-600">Qty</th>
                <th className="py-4 text-xs font-bold uppercase text-right w-20 text-gray-600">
                  Price<br /><span className="text-[10px] text-gray-400">Before Disc.</span>
                </th>
                <th className="py-4 text-xs font-bold uppercase text-right w-20 text-gray-600">
                  Price<br /><span className="text-[10px] text-gray-400">After Disc.</span>
                </th>
                <th className="py-4 text-xs font-bold uppercase text-right w-24 text-gray-600 bg-gray-50 print:bg-transparent">
                  Total<br /><span className="text-[10px] text-gray-400">Before</span>
                </th>
                <th className="py-4 text-xs font-bold uppercase text-right w-24 text-gray-600 bg-gray-50 print:bg-transparent">
                  Total<br /><span className="text-[10px] text-gray-400">After</span>
                </th>
                <th className="py-4 text-xs font-bold uppercase w-8 print:hidden"></th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id} className="border-b border-gray-200 group hover:bg-gray-50 transition-colors print:hover:bg-transparent">
                  <td className="py-4 align-top">
                    <input
                      className="w-full bg-transparent outline-none text-xs font-mono text-gray-500"
                      value={item.sn}
                      onChange={(e) => handleItemChange(item.id, 'sn', e.target.value)}
                    />
                  </td>
                  <td className="py-4 align-top">
                    <div
                      className="w-20 h-20 bg-gray-100 border border-dashed border-gray-300 flex flex-col items-center justify-center cursor-pointer relative overflow-hidden group/image hover:border-black transition-colors print:border-none print:bg-transparent"
                      onClick={() => document.getElementById(`file-${item.id}`)?.click()}
                    >
                      {item.image ? (
                        <>
                          <img src={item.image} alt="Item" className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-opacity print:hidden">
                            <span className="text-white text-[10px] font-bold">Change</span>
                          </div>
                        </>
                      ) : (
                        <div className="text-center text-gray-400 group-hover/image:text-gray-600 print:hidden">
                          <ImageIcon size={16} className="mx-auto mb-1" />
                          <span className="text-[8px] font-bold uppercase">Add Photo</span>
                        </div>
                      )}
                      <input
                        id={`file-${item.id}`}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleImageUpload(item.id, e)}
                      />
                    </div>
                  </td>
                  <td className="py-4 align-top px-4">
                    <input
                      className="w-full bg-transparent outline-none text-sm font-bold uppercase mb-1 placeholder-gray-300"
                      placeholder="ITEM NAME"
                      value={item.name}
                      onChange={(e) => handleItemChange(item.id, 'name', e.target.value)}
                    />
                    <textarea
                      className="w-full bg-transparent outline-none text-xs text-gray-500 resize-none overflow-hidden h-auto placeholder-gray-200"
                      placeholder="Optional description..."
                      rows={1}
                      value={item.description}
                      onChange={(e) => handleItemChange(item.id, 'description', e.target.value)}
                      onInput={(e) => {
                        const target = e.target as HTMLTextAreaElement;
                        target.style.height = 'auto';
                        target.style.height = target.scrollHeight + 'px';
                      }}
                    />
                  </td>
                  <td className="py-4 align-top text-center">
                    <input
                      type="number"
                      min="1"
                      className="w-full bg-transparent outline-none text-sm text-center border-b border-transparent hover:border-gray-300 focus:border-black"
                      value={item.qty}
                      onChange={(e) => handleItemChange(item.id, 'qty', parseInt(e.target.value) || 0)}
                    />
                  </td>
                  <td className="py-4 align-top text-right font-mono text-sm">
                    <input
                      type="number"
                      className="w-full bg-transparent outline-none text-right border-b border-transparent hover:border-gray-300 focus:border-black"
                      value={item.unitPriceBefore}
                      onChange={(e) => handleItemChange(item.id, 'unitPriceBefore', parseFloat(e.target.value) || 0)}
                    />
                  </td>
                  <td className="py-4 align-top text-right font-mono text-sm font-bold">
                    <input
                      type="number"
                      className="w-full bg-transparent outline-none text-right border-b border-transparent hover:border-gray-300 focus:border-black"
                      value={item.unitPriceAfter}
                      onChange={(e) => handleItemChange(item.id, 'unitPriceAfter', parseFloat(e.target.value) || 0)}
                    />
                  </td>
                  <td className="py-4 align-top text-right font-mono text-sm text-gray-400 bg-gray-50 print:bg-transparent pr-2">
                    {formatCurrency(calculateLineTotalBefore(item))}
                  </td>
                  <td className="py-4 align-top text-right font-mono text-sm font-bold bg-gray-50 print:bg-transparent pr-2">
                    {formatCurrency(calculateLineTotalAfter(item))}
                  </td>
                  <td className="py-4 align-top text-right print:hidden">
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-gray-300 hover:text-red-500 transition-colors p-1"
                    >
                      <Trash2 size={14} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Add Item Button */}
          <div className="mt-4 print:hidden">
            <button
              onClick={handleAddItem}
              className="flex items-center text-xs font-bold uppercase tracking-wider bg-black text-white px-4 py-2 hover:bg-gray-800 transition rounded-sm"
            >
              <Plus size={14} className="mr-2" /> Add Item
            </button>
          </div>
        </div>

        {/* Totals */}
        <div className="flex justify-end mb-16 break-inside-avoid">
          <div className="w-64 border-t-2 border-black pt-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs uppercase font-bold text-gray-500">Total Before Discount</span>
              <span className="font-mono text-sm">{formatCurrency(totalBeforeDiscount)} EGP</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs uppercase font-bold text-gray-500">Discount Amount</span>
              <span className="font-mono text-sm text-green-600">- {formatCurrency(totalDiscountAmount)} EGP</span>
            </div>
            <div className="flex justify-between items-center pt-4 border-t border-gray-200 mt-2">
              <span className="text-sm uppercase font-bold">Total After Discount</span>
              <span className="font-mono text-xl font-bold">{formatCurrency(totalAfterDiscount)} EGP</span>
            </div>
          </div>
        </div>

        {/* Footer - Terms */}
        <footer className="border-t-2 border-black pt-8 break-inside-avoid">
          <div className="grid grid-cols-2 gap-8 text-[10px] leading-relaxed text-gray-600">
            <div>
              <h3 className="font-bold uppercase text-black mb-2">Terms & Conditions</h3>
              <ul className="list-disc pl-3 space-y-1">
                <li>Prices not including VAT.</li>
                <li>Delivery time 45-60 Days from confirmation on technical drawings.</li>
                <li>Prices include delivery and site installation inside Cairo Regions.</li>
                <li>Quotation Valid for 5 Days Only.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold uppercase text-black mb-2">Payment Conditions</h3>
              <ul className="list-disc pl-3 space-y-1">
                <li>60% down payment to start production.</li>
                <li>40% min. one week before delivery.</li>
                <li>Quality check before shipping is available upon request in warehouse.</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex justify-between items-end">
            <div className="text-[10px] uppercase font-bold tracking-widest text-gray-400">
              Prepared by Vivara.Home
            </div>
            <div className="text-center">
              <div className="h-12 border-b border-black w-48 mb-2"></div>
              <p className="text-[10px] uppercase font-bold">(Client Signature)</p>
            </div>
          </div>
        </footer>

        {/* Page 2 - Terms of Agreement */}
        <div className="mt-24 pt-8 border-t-4 border-black print:break-before-page print:border-t-0 print:mt-0 print:pt-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold uppercase tracking-widest mb-2">Terms of Agreement</h2>
            <p className="text-xs uppercase text-gray-500 font-bold">
              Agreement Details (Vivara Home – Furniture Design, Making, Warranty & Maintenance)
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 text-[10px] text-justify leading-relaxed text-gray-700">
            <p><strong className="uppercase text-black">1. Scope of Work:</strong> This Agreement includes only the deliverables stated in the proposal/quotation for custom furniture design and making (and installation if included). If new deliverables are requested (additional pieces, new areas, major changes in dimensions/materials, extra iterations, or new services), a new agreement / change order will be proposed (fees and due dates may differ).</p>

            <p><strong className="uppercase text-black">2. Working Hours:</strong> Vivara Home operates from Sunday to Thursday, 10:00 AM to 7:00 PM.</p>

            <p><strong className="uppercase text-black">3. Deliverables:</strong> Fees include the agreed furniture service, as specified in the proposal/quotation, which may include: Furniture concept/design development (if included), 2D shop drawings (DWG/CAD) and PDF drawing set (dimensions/details), 3D views and/or renders (if included), Materials/finishes specifications (wood/veneer/paint/fabric/hardware), Fabrication of the approved furniture pieces, Delivery and installation (if included).</p>

            <p><strong className="uppercase text-black">4. Intellectual Property:</strong> All drawings, models, renders, and design details remain the intellectual property of Vivara Home. Deliverables are for the Client's exclusive use for this project and may not be shared, distributed, reproduced, or altered without prior written consent.</p>

            <p><strong className="uppercase text-black">5. Portfolio Rights:</strong> Vivara Home reserves the right to showcase the project on its portfolio/website and social media unless the Client has purchased a license to restrict this use (in writing).</p>

            <p><strong className="uppercase text-black">6. Additional Services:</strong> Services beyond the agreed scope—such as additional furniture items, re-design after approvals, extra 3D modifications beyond included revisions, custom prototypes, urgent requests, or material upgrades—will incur additional fees.</p>

            <p><strong className="uppercase text-black">7. Project Timeline:</strong> The project timeline is based on delivering the agreed furniture scope within sixty (60) calendar days from the official start date. The start date begins once the agreed installment payment has been transferred and all required site measurements/approvals are confirmed. Please allow a buffer of 2–5 working days after confirmation for production scheduling to begin. Note: The 60-day timeline may be affected by: (a) delayed Client approvals/feedback, (b) changes requested after approval, (c) delayed payments, (d) site readiness issues, or (e) material/hardware availability beyond Vivara Home's control.</p>

            <p><strong className="uppercase text-black">8. Client Feedback:</strong> To maintain timelines and avoid delays, the Client agrees to provide feedback/approvals on each deliverable within 7 business days.</p>

            <p><strong className="uppercase text-black">9. Revisions & Change Impact:</strong> If the furniture making process is extended due to Client revisions or changes after approvals (especially changes affecting dimensions, structure, materials, finishes, or hardware), Vivara Home reserves the right to request an additional payment before proceeding with major modifications, rework, or re-production.</p>

            <p><strong className="uppercase text-black">10. Pause Fee:</strong> For project holds exceeding one (1) month, a pause fee of 10% of the total project cost per month will be applied to ensure resource allocation and to prevent scheduling conflicts.</p>

            <p><strong className="uppercase text-black">11. Payment & Scheduling:</strong> Installment payments are due as per the agreed schedule. Delays in payments may affect production start, delivery timeline, and completion.</p>

            <p><strong className="uppercase text-black">12. Post-Delivery Support:</strong> Vivara Home provides post-delivery support for a duration of two (2) years following project delivery/installation. Support includes reasonable guidance and issue reporting coordination related to the delivered furniture (subject to the Warranty and Maintenance terms below).</p>

            <p><strong className="uppercase text-black">13. Free Maintenance:</strong> Vivara Home provides free maintenance for six (6) months from the delivery/installation date for furniture-related adjustments and servicing that fall under normal use and workmanship-related needs. Examples may include: hinge/runner alignment, door/drawer adjustments, minor tightening, and fitment calibration.</p>

            <div className="bg-gray-50 p-4 border border-gray-200 mt-2">
              <p><strong className="uppercase text-black">14. Warranty:</strong> Vivara Home provides a two (2) year warranty from the delivery/installation date against defects that are the result of Vivara Home's workmanship. This warranty covers repair or replacement (at Vivara Home's discretion) of the affected component(s) where the defect is confirmed to be caused by manufacturing/installation workmanship.</p>
              <p className="mt-2 text-gray-500 italic">Warranty does not cover: Misuse, abuse, negligence, accidents, or intentional damage; Water leakage, humidity, heat exposure, direct sunlight damage beyond normal expectations, or chemical cleaning damage; Normal wear and tear (scratches, dents, fading, fabric wear); Improper use; Third-party modifications, repairs, relocation, or re-installation by others; Site conditions beyond Vivara Home control; Materials supplied/selected by Client outside recommendations.</p>
            </div>
          </div>

          <div className="mt-12 flex justify-end items-end">
            <div className="text-center">
              <div className="h-12 border-b border-black w-64 mb-2"></div>
              <p className="text-[10px] uppercase font-bold">Client Signature (Terms Acceptance)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          @page { margin: 0; size: auto; }
          body { background: white; }
          .print\\:hidden { display: none !important; }
          .print\\:shadow-none { box-shadow: none !important; }
          .print\\:bg-transparent { background: transparent !important; }
          .print\\:border-none { border: none !important; }
          .print\\:break-before-page { page-break-before: always; }
          input, textarea { border: none !important; resize: none; }
          input[type="text"], input[type="number"], textarea {
            -webkit-print-color-adjust: exact;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
