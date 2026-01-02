import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const DeleteModel = ({ isOpen, onClose, onConfirm, title = "this item" }) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
                {/* Backdrop / Overlay */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                />

                {/* Modal Content */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    className="relative w-full max-w-md bg-[#181818] border border-white/5 rounded-2xl shadow-2xl overflow-hidden"
                >
                    {/* Header */}
                    <div className="flex items-center justify-between p-5 border-b border-white/5">
                        <h2 className="text-xl font-medium text-white">Delete Confirmation</h2>
                        <button
                            onClick={onClose}
                            className="p-1 hover:bg-white/5 rounded-full transition-colors text-gray-400 hover:text-white"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Body */}
                    <div className="p-6 space-y-5 text-center border-t border-[#505050]">
                        <h3 className="text-2xl font-medium text-white leading-tight">
                            Are you sure you want to delete {title}?
                        </h3>

                        {/* Warning Box 1 */}
                        <div className="py-3 px-4 rounded-xl border border-[#FF5959] bg-[#3E2E2E] text-[#FF5959] font-medium">
                            This action is permanent and cannot be undone.
                        </div>

                        {/* Warning Box 2 */}
                        <div className="py-3 px-4 rounded-xl bg-[#3D312A] text-[#D4D4D4] text-sm leading-relaxed">
                            Once deleted, the content will be removed from the system and will no longer be visible to users.
                        </div>
                    </div>

                    {/* Footer Buttons */}
                    <div className="p-4 border-t border-[#505050] grid grid-cols-2 gap-4">
                        <button
                            onClick={onClose}
                            className="py-2 px-4 rounded-xl bg-white/10 text-white font-medium hover:bg-white/15 transition-all active:scale-95"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={onConfirm}
                            className="py-3 px-6 rounded-xl bg-[#FF5959] text-white font-medium hover:bg-red-600 shadow-lg shadow-red-500/20 transition-all active:scale-95"
                        >
                            Delete
                        </button>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default DeleteModel;