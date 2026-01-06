import React, { useState } from 'react';
import { X } from 'lucide-react';

const ReissueCertificateModel = ({ isOpen, onClose }) => {
  // Checkbox states as per image_1a8c8d.png
  const [options, setOptions] = useState({
    useTemplate: false,
    regeneratePdf: true,
    updateDate: true
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-[2px] ">
      {/* Modal Container */}
      <div className="w-full max-w-[440px] bg-[#1C1C1C] border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        
        {/* Header Section */}


        {/* Body Section */}
        <div className="p-4 space-y-3">
                    <div className="flex justify-between items-center ">
          <h2 className="text-xl font-medium text-white tracking-tight">Reissue Certificate</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>

        {/* Top Divider */}
        <div className="h-[1px] bg-white/10 w-full" />
          <div className="space-y-1">
            <p className="text-gray-200 text-[14px]">You are about to reissue this certificate.</p>
            <p className="text-gray-200 text-[14px]">Please choose how you want to proceed.</p>
          </div>
              <div className="h-[1px] bg-white/10 w-full" />

          {/* Reissue Options - Checkboxes Match image_1a8c8d.png */}
          <div className="space-y-4">
            <h3 className="text-white font-medium text-[15px]">Reissue Options</h3>
            <div className="space-y-3">
              {/* Option 1 */}
              <label className="flex items-center gap-3 cursor-pointer group">
                <input 
                  type="checkbox" 
                  checked={options.useTemplate}
                  onChange={() => setOptions({...options, useTemplate: !options.useTemplate})}
                  className="w-4 h-4 rounded border-gray-600 bg-transparent text-[#F37021] focus:ring-0 focus:ring-offset-0"
                />
                <span className="text-gray-300 text-sm group-hover:text-white transition-colors">Use updated certificate template</span>
              </label>
              

              {/* Option 2 */}
              <label className="flex items-center gap-3 cursor-pointer group">
                <input 
                  type="checkbox" 
                  checked={options.regeneratePdf}
                  onChange={() => setOptions({...options, regeneratePdf: !options.regeneratePdf})}
                  className="w-4 h-4 rounded border-gray-600 bg-transparent accent-[#F37021] focus:ring-0"
                />
                <span className="text-gray-300 text-sm group-hover:text-white transition-colors">Regenerate PDF file</span>
              </label>

              {/* Option 3 */}
              <label className="flex items-center gap-3 cursor-pointer group">
                <input 
                  type="checkbox" 
                  checked={options.updateDate}
                  onChange={() => setOptions({...options, updateDate: !options.updateDate})}
                  className="w-4 h-4 rounded border-gray-600 bg-transparent accent-[#F37021] focus:ring-0"
                />
                <span className="text-gray-300 text-sm group-hover:text-white transition-colors">Update completion date (optional)</span>
              </label>
            </div>
          </div>

              <div className="h-[1px] bg-white/10 w-full" />

          {/* What will happen - Brown Box Match image_1a8c8d.png */}
          <div className="bg-[#2D241F] rounded-lg p-3 border border-white/5">
            <p className="text-[#E2E2E2] text-sm font-medium mb-3">What will happen</p>
            <ul className="list-disc pl-5 space-y-2 text-[#C4C4C4] text-[13px] leading-relaxed">
              <li>A new certificate PDF will be generated</li>
              <li>Verification ID will remain the same</li>
              <li>Previous revoked certificate will stay inactive</li>
            </ul>
          </div>
              <div className="h-[1px] bg-white/10 w-full" />

          {/* Action Buttons */}
          <div className="flex gap-4 pt-2">
            <button
              onClick={onClose}
              className="flex-1 py-3 bg-[#424242] text-white rounded-xl text-sm font-bold hover:bg-[#4d4d4d] transition-all"
            >
              Cancel
            </button>
            <button
              className="flex-1 py-3 bg-[#F37021] text-white rounded-xl text-sm font-bold hover:bg-orange-600 transition-all shadow-lg shadow-orange-600/20"
            >
              Reissue Certificate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReissueCertificateModel;