import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CreateNotification = () => {
    // useState ka use karke form ka data handle karna
    const [formData, setFormData] = useState({
        title: "Java Basics Quiz Reminder",
        message: "Your Java Basics quiz is scheduled for tomorrow. Please revise OOP concepts and attempt the quiz within the given time.",
        type: "Test Reminder",
        channel: "In-App",
        schedule: "Schedule for Later",
        date: "12 Mar 2025",
        time: "10:30 PM"
    });

    const notificationTypes = ["Test Reminder", "Assignment Deadline", "New Material", "Score Update", "Job Alert", "Custom"];

    return (
        <div>
            <div className="flex items-center gap-2 text-sm mb-4">
                <Link
                    to="/notifications"
                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                    Notification
                </Link>

                <span className="text-gray-600 text-lg">»</span>

                <span className="text-white font-medium">
                    Create Notification
                </span>
            </div>

            <h1 className="text-xl font-bold text-white mb-8">Create Notification</h1>

            <div className="space-y-6">
                {/* Title Input */}
                <div>
                    <label className="block text-xs mb-2 text-gray-400">Title</label>
                    <input
                        type="text"
                        value={formData.title}
                        className="w-full bg-[#111] border border-orange-500/30 rounded-lg p-3 text-sm outline-none focus:border-orange-500 transition-all"
                    />
                </div>

                {/* Message Body */}
                <div>
                    <label className="block text-xs mb-2 text-gray-400">Message Body</label>
                    <textarea
                        rows="4"
                        value={formData.message}
                        className="w-full bg-[#111] border border-gray-800 rounded-lg p-3 text-sm outline-none focus:border-gray-600 transition-all resize-none"
                    />
                </div>

                <div>
                    <label className="block text-xs mb-4 text-gray-400">Notification Type</label>
                    <div className="space-y-3">
                        {notificationTypes.map((type) => (
                            <label key={type} className="flex items-center gap-3 cursor-pointer group">
                                <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${formData.type === type ? 'border-orange-500' : 'border-gray-600'}`}>
                                    {formData.type === type && <div className="w-2 h-2 rounded-full bg-orange-500" />}
                                </div>
                                <input
                                    type="radio"
                                    className="hidden"
                                    name="type"
                                    checked={formData.type === type}
                                    onChange={() => setFormData({ ...formData, type })}
                                />
                                <span className={`text-sm ${formData.type === type ? 'text-white' : 'text-gray-500'}`}>{type}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Channel Selection */}
                <div className="pt-4">
                    <label className="block text-xs mb-4 text-gray-400">Channel</label>
                    <div className="flex flex-col gap-3">
                        {["In-App", "Email (Optional)"].map((ch) => (
                            <label key={ch} className="flex items-center gap-3 cursor-pointer">
                                <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${formData.channel === ch ? 'border-orange-500' : 'border-gray-600'}`}>
                                    {formData.channel === ch && <div className="w-2 h-2 rounded-full bg-orange-500" />}
                                </div>
                                <span className="text-sm text-gray-400">{ch}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Date & Time Inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                    <div>
                        <label className="block text-xs mb-2 text-gray-400">Date</label>
                        <input type="text" value={formData.date} className="w-full bg-[#111] border border-gray-800 rounded-lg p-3 text-sm" />
                    </div>
                    <div>
                        <label className="block text-xs mb-2 text-gray-400">Time</label>
                        <input type="text" value={formData.time} className="w-full bg-[#111] border border-gray-800 rounded-lg p-3 text-sm" />
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-6">
                    <button className="px-8 py-2 bg-[#222] text-white rounded-lg text-sm hover:bg-[#333] transition-all">Cancel</button>
                    <button className="px-8 py-2 bg-orange-600 text-white rounded-lg text-sm font-bold hover:bg-orange-700 transition-all shadow-lg shadow-orange-600/20">Send</button>
                </div>

            </div>
        </div>
    );
};

export default CreateNotification;