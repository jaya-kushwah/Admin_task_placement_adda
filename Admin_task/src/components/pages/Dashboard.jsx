import React from 'react';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import { motion } from 'framer-motion';
import { BookOpen, Clock } from 'lucide-react'; // Icons import kiye
import { useTheme } from '../context/ThemeContext';

// Tooltip Component
const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-black/90 border border-gray-800 p-3 rounded-xl shadow-2xl text-center">
                <p className="text-[10px] text-gray-400">Peak Learning Time</p>
                <p className="text-[10px] text-white font-bold">4-6 PM</p>
                <p className="text-[14px] text-white font-black">{payload[0].value.toLocaleString()} min</p>
            </div>
        );
    }
    return null;
};

const growthData = [
    { name: 'Mar', active: 300, joined: 200 },
    { name: 'Apr', active: 600, joined: 450 },
    { name: 'May', active: 500, joined: 700 },
    { name: 'Jun', active: 800, joined: 600 },
    { name: 'Jul', active: 650, joined: 400 },
    { name: 'Aug', active: 1100, joined: 900 },
    { name: 'Sep', active: 700, joined: 400 },
    { name: 'Oct', active: 900, joined: 800 },
];

const enrollmentData = [
    { name: "Java Programming", value: 220, max: 250 },
    { name: "Full Stack Development", value: 190, max: 250 },
    { name: "HTML & CSS", value: 160, max: 250 },
    { name: "Python Programming", value: 140, max: 250 },
    { name: "React JS", value: 126, max: 250 },
    { name: "UI/UX Design", value: 100, max: 250 },
];

const engagementData = [
    { time: '6-8 AM', val: 900 }, { time: '10-12 PM', val: 950 },
    { time: '12-2 PM', val: 1100 }, { time: '4-6 PM', val: 1450 },
    { time: '6-8 PM', val: 1100 }, { time: '10-12 AM', val: 1050 },
];

const Dashboard = () => {
    const { theme } = useTheme();

    const stats = [
        { title: "Total Students", subtitle: "Active learners enrolled across all courses", value: "1,248", trend: "+8% this month", color: "#4E9627", },
        { title: "Active Courses", subtitle: "Courses currently running", value: "18", trend: "Updated weekly", color: "#4E9627", },
        { title: "Course Completions", subtitle: "Students who completed their courses", value: "426", trend: "+32 completions this month", color: "#4E9627", },
        { title: "Pending Assignments", subtitle: "Assignments awaiting submission", value: "92", trend: "Needs attention", color: "#ef4444", },
        { title: "Quizzes Attempted", subtitle: "Total quiz attempts by students", value: "3,560", trend: "Avg score: 72%", color: "#4E9627", },
        { title: "Certificates Issued", subtitle: "Certificates successfully generated", value: "312", trend: "Verified & downloadable", color: "#4E9627", },
    ];

    return (
        <div className="w-full space-y-8 pb-10 px-2 transition-colors duration-300">
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-xl font-bold text-gray-900 dark:text-white truncate"
            >
                Dashboard Overview
            </motion.h2>

            {/* Top Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {stats.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        className="bg-white dark:bg-[#111111] border border-gray-200 dark:border-gray-800 p-6 rounded-2xl relative overflow-hidden group transition-all shadow-sm dark:shadow-none"
                    >
                        <div className="relative z-10">
                            <p className="text-black dark:text-white text-[18px] font-medium truncate">{item.title}</p>
                            <p className="text-gray-600 dark:text-[#BDBDBD] text-[12px] leading-tight truncate">{item.subtitle}</p>
                            <h3 className="text-[20px] font-medium text-gray-900 dark:text-white mt-4">{item.value}</h3>
                            <p className="text-[12px] font-medium" style={{ color: item.color }}>{item.trend}</p>
                        </div>
                        <div className="absolute bottom-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                            <TrendingUp size={45} style={{ color: item.color }} />
                        </div>
                    </motion.div>
                ))}
            </div>


            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="lg:col-span-2 bg-white dark:bg-[#111111] border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-sm dark:shadow-none"
                >
                    <div className="flex justify-between items-center mb-8">
                        <h3 className="text-gray-900 dark:text-white font-bold text-md truncate">Student Growth Trend</h3>
                        <select className="bg-gray-50 dark:bg-black text-white text-[10px] border border-[#3E3E3E]#3E3E3E dark:border-gray-800 rounded-full px-2 py-1 outline-none">
                            <option>Last 6 Months</option>
                        </select>
                    </div>


                    <div className="h-72 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={growthData}>
                                <defs>
                                    <linearGradient id="colorActive" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#f97316" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid
                                    strokeDasharray="3 3"
                                    stroke={theme === 'dark' ? "#222" : "#eee"}
                                    vertical={false}
                                />
                                <XAxis
                                    dataKey="name"
                                    stroke={theme === 'dark' ? "#444" : "#999"}
                                    fontSize={10}
                                    tickLine={false}
                                    axisLine={false}
                                    dy={10}
                                />
                                <YAxis
                                    stroke={theme === 'dark' ? "#444" : "#999"}
                                    fontSize={10}
                                    tickLine={false}
                                    axisLine={false}
                                    dx={-10}
                                />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: theme === 'dark' ? '#000' : '#fff',
                                        border: theme === 'dark' ? '1px solid #333' : '1px solid #ddd',
                                        borderRadius: '8px',
                                        fontSize: '12px',
                                        color: theme === 'dark' ? '#fff' : '#000'
                                    }}
                                    itemStyle={{ color: theme === 'dark' ? '#fff' : '#000' }}
                                />
                                <Area
                                    type="monotone"
                                    dataKey="active"
                                    stroke="#f97316"
                                    strokeWidth={4}
                                    fillOpacity={1}
                                    fill="url(#colorActive)"
                                />
                                <Area
                                    type="monotone"
                                    dataKey="joined"
                                    stroke="#22c55e"
                                    strokeWidth={2}
                                    strokeDasharray="6 6"
                                    fill="none"
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="flex justify-center gap-8 mt-6">
                        <div className="flex items-center gap-2">
                            <div className="w-2.5 h-2.5 rounded-full bg-orange-500 shadow-[0_0_8px_#f97316]"></div>
                            <span className="text-[12px] text-white font-medium tracking-tight">Total Active Students</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                            <span className="text-[12px] text-white font-medium tracking-tight">New Students Joined</span>
                        </div>
                    </div>
                </motion.div>

                <div className="bg-white dark:bg-[#111111] border border-gray-200 dark:border-gray-800 rounded-3xl p-6 flex flex-col w-full h-full min-h-[450px] shadow-sm dark:shadow-none">
                    <div className="flex justify-between items-center mb-10">
                        <h3 className="text-gray-900 dark:text-white font-bold text-sm tracking-wide truncate">Course Completion Ratio</h3>
                        <select className="bg-gray-50 dark:bg-black text-white text-[10px] border border-[#3E3E3E]#3E3E3E dark:border-gray-800 rounded-full px-2 py-1 outline-none">
                            <option>ALL</option>
                        </select>
                    </div>

                    <div className="relative flex items-end justify-around gap-4 h-[300px] w-full px-2 border-b border-gray-200 dark:border-gray-800/30">
                        {[
                            { label: "Total Students", val: 1200, color: "from-orange-600 to-orange-400", h: "90%", glow: "rgba(234, 88, 12, 0.2)" },
                            { label: "Completed", val: 800, color: "from-green-600 to-green-400", h: "65%", glow: "rgba(34, 197, 94, 0.2)" },
                            { label: "In Progress", val: 400, color: "from-red-600 to-red-400", h: "45%", glow: "rgba(239, 68, 68, 0.2)" }
                        ].map((bar, i) => (
                            <div key={i} className="flex flex-col items-center w-full max-w-[50px] relative h-full justify-end">
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: bar.h }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                    style={{ boxShadow: theme === 'dark' ? `0 -4px 15px ${bar.glow}` : 'none' }}
                                    className={`w-full bg-gradient-to-t ${bar.color} rounded-t-xl relative group`}
                                >
                                    <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-gray-700 dark:text-white text-[10px] font-bold">
                                        {bar.val}
                                    </span>
                                </motion.div>

                                <div className="absolute -bottom-14 text-center w-full">
                                    <p className="text-[12px] text-gray-500 dark:text-[#D4D4D4] font-medium tracking-tighter leading-tight whitespace-nowrap truncate">
                                        {bar.label}
                                    </p>
                                    <p className="text-xs text-gray-900 dark:text-white font-black mt-1 ">
                                        {bar.val}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="h-16"></div>
                </div>
            </div>


            {/* --- BOTTOM SECTION: Vertical Stacked Charts --- */}
            <div className="flex flex-col gap-8">

                {/* 1. Course Enrollment Distribution (Full Width) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white dark:bg-[#111111] border border-gray-200 dark:border-gray-800 rounded-3xl p-6 shadow-sm"
                >
                    <div className="flex justify-between items-center mb-8">
                        <h3 className="text-gray-900 dark:text-white font-bold text-md truncate">Course Enrollment Distribution</h3>
                        <select className="bg-gray-50 dark:bg-black text-white text-[10px] border border-[#3E3E3E]#3E3E3E dark:border-gray-800 rounded-full px-2 py-1 outline-none">
                            <option>Last 30 Days</option>
                        </select>
                    </div>

                    <div className="space-y-6">
                        {enrollmentData.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-4">
                                <span className="text-[12px] text-gray-700 dark:text-gray-400 w-40 truncate">{item.name}</span>
                                <div className="flex-1 h-3 bg-gray-100 dark:bg-gray-900 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${(item.value / item.max) * 100}%` }}
                                        transition={{ duration: 1, delay: idx * 0.1 }}
                                        className="h-full bg-gradient-to-r from-orange-900 via-orange-600 to-orange-500 rounded-full"
                                    />
                                </div>
                                <span className="text-[12px] text-gray-900 dark:text-white font-bold w-8">{item.value}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* 2. Peak Video Engagement Time (Full Width) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white dark:bg-[#111111] border border-gray-200 dark:border-gray-800 rounded-3xl p-6 shadow-sm"
                >
                    <div className="flex justify-between items-center mb-8">
                        <h3 className="text-gray-900 dark:text-white font-bold text-md truncate">Peak Video Engagement Time</h3>
                        <select className="bg-gray-50 dark:bg-black text-white text-[10px] border border-[#3E3E3E] dark:border-gray-800 rounded-full px-2 py-1 outline-none">
                            <option>Today</option>
                        </select>
                    </div>

                    <div className="h-[350px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={engagementData}>
                                <defs>
                                    <linearGradient id="colorEngage" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#f97316" stopOpacity={0.2} />
                                        <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={theme === 'dark' ? "#222" : "#eee"} />
                                <XAxis dataKey="time" fontSize={10} axisLine={false} tickLine={false} stroke="#ffffffff" dy={10} />
                                <YAxis fontSize={10} axisLine={false} tickLine={false} stroke="#ffffffff" />
                                <Tooltip content={<CustomTooltip />} />
                                <Area
                                    type="monotone"
                                    dataKey="val"
                                    stroke="#f97316"
                                    strokeWidth={4}
                                    fill="url(#colorEngage)"
                                    activeDot={{ r: 8, fill: "#fff", stroke: "#f97316", strokeWidth: 2 }}
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

// TrendingUp Icon Component
const TrendingUp = ({ size, style }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={style}>
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
        <polyline points="17 6 23 6 23 12"></polyline>
    </svg>
);

export default Dashboard;