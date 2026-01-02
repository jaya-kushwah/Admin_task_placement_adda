import React from 'react';
import { PNG } from "../../../utils/Images";
import { Download, Printer } from 'lucide-react';

const CertificateTemplate = () => {
    return (
        <div className="w-full min-h-[500px] bg-[#0D0D0D] rounded-2xl border border-white/5 p-6 md:p-10 flex flex-col items-center justify-center animate-in fade-in duration-700">

            <div className="relative group max-w-4xl w-full shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-lg overflow-hidden border border-white/10">
                <img
                    src={PNG.Certificate}
                    alt="Certificate Template"
                    className="w-full h-auto object-contain transition-transform duration-700 "
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
        </div>
    );
};

export default CertificateTemplate;