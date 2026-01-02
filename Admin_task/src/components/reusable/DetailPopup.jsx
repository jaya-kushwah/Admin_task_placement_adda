import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import {PNG} from '../../utils/Images'

const DetailPopup = ({ isOpen, onClose, student }) => {
if (!isOpen || !student) return null;

  return (
   <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onClose} 
    >
        <motion.div
         onClick={(e) => e.stopPropagation()} 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="bg-[#292929] w-full max-w-md rounded-3xl border border-gray-800 overflow-hidden relative"
        >
          {/* Bottom Accent Line */}
          <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#F47D34] to-orange-400" />

          {/* Header */}
          <div className="flex justify-between items-center p-6 pb-2">
            <h2 className="text-xl font-medium text-white">Student Details</h2>
            <button onClick={onClose} className="text-white transition-colors">
              <X size={24} />
            </button>
          </div>

          <div className="p-6 space-y-8">
            {/* Profile Section */}
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 rounded-full border-2 border-black overflow-hidden bg-yellow-500">
                <img
                  src={PNG.student}
                  alt="Rahul Sharma"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-[#BEBEBE] text-s mb-1">Name</p>
                <h3 className="text-2xl font-medium text-white">{student.name}</h3>
              </div>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-y-8 gap-x-4">
              <div>
                <p className="text-[#BEBEBE] text-xs mb-1 tracking-wider">Phone</p>
                <p className="text-white font-medium">{student.phone}</p>
              </div>
              <div>
                <p className="text-[#BEBEBE] text-xs mb-1 tracking-wider">Email</p>
                <p className="text-white font-medium truncate">{student.email}</p>
              </div>
              <div>
                <p className="text-[#BEBEBE] text-xs mb-1 tracking-wider">Qualification</p>
                <p className="text-white font-medium">{student.qualification}</p>
              </div>
              <div>
                <p className="text-[#BEBEBE] text-xs mb-1 tracking-wider">Course</p>
                <p className="text-white font-medium">{student.course}</p>
              </div>
              <div>
                <p className="text-[#BEBEBE] text-xs mb-1 tracking-wider">Registered On</p>
                <p className="text-white font-medium">{student.Registered}</p>
              </div>
              <div>
                <p className="text-[#BEBEBE] text-xs mb-1 tracking-wider">Status</p>
                <div className="mt-1">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#F47D34]"></div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
  );
};

export default DetailPopup;