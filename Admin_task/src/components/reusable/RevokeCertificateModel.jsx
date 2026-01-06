import React from "react";
import { X } from "lucide-react";

const RevokeCertificateModel = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-[2px]">
      <div className="w-full max-w-[420px] bg-[#1C1C1C] border border-white/5 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        <div className="p-3 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-medium text-white tracking-tight ">
              Revoke Certificate
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} strokeWidth={1.5} />
            </button>
          </div>

          {/* Divider */}
          <div className="h-[1px] bg-white/10 w-full" />
          <p className="text-white text-[12px] font-medium leading-tight">
            Are you sure you want to revoke this certificate?
          </p>

          {/* Warning Brown Box - Exact Match image_198c4f.png */}
          <div className="bg-[#2D241F] rounded-lg p-3">
            <p className="text-[#E2E2E2] text-sm font-medium mb-2">
              Revoking this certificate will:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-[#C4C4C4] text-[12px] font-normal leading-relaxed">
              <li>Make the certificate invalid</li>
              <li>Disable online verification</li>
              <li>
                Prevent the student from using this certificate for official
                purposes
              </li>
            </ul>
          </div>

          <div className="h-[1px] bg-white/10 w-full" />

          {/* Certificate Details */}
          <div className="space-y-4">
            <h3 className="text-white font-medium text-[15px]">
              Certificate Details
            </h3>
            <div className="space-y-2.5">
              <div className="flex items-baseline gap-2 text-sm">
                <span className="text-[#F37021] font-medium whitespace-nowrap">
                  Student Name:
                </span>
                <span className="text-[#E2E2E2]">Rahul Verma</span>
              </div>
              <div className="flex items-baseline gap-2 text-sm">
                <span className="text-[#F37021] font-medium whitespace-nowrap">
                  Course:
                </span>
                <span className="text-[#E2E2E2]">
                  Full Stack Web Development
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Divider */}
          <div className="h-[1px] bg-white/10 w-full" />

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              onClick={onClose}
              className="flex-1 py-3   bg-[#424242] text-white rounded-xl text-sm font-bold hover:bg-[#4d4d4d] transition-all"
            >
              Cancel
            </button>
            <button className="flex-1 py-3 bg-[#FF5C5C] text-white rounded-xl text-sm font-bold hover:bg-[#ff4d4d] transition-all shadow-lg shadow-red-500/10">
              Confirm Revoke
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevokeCertificateModel;
