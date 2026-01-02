import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
})














// import React from 'react';
// import {
//     AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
// } from 'recharts';
// import { motion } from 'framer-motion';
// import { useTheme } from '../context/ThemeContext';

// const growthData = [
//     { name: 'Mar', active: 300, joined: 200 },
//     { name: 'Apr', active: 600, joined: 450 },
//     { name: 'May', active: 500, joined: 700 },
//     { name: 'Jun', active: 800, joined: 600 },
//     { name: 'Jul', active: 650, joined: 400 },
//     { name: 'Aug', active: 1100, joined: 900 },
//     { name: 'Sep', active: 700, joined: 400 },
//     { name: 'Oct', active: 900, joined: 800 },
// ];

// const Dashboard = () => {
//     const { theme } = useTheme();

//     const stats = [
//         { title: "Total Students", subtitle: "Active learners enrolled across all courses", value: "1,248", trend: "+8% this month", color: "#4E9627", },
//         { title: "Active Courses", subtitle: "Courses currently running", value: "18", trend: "Updated weekly", color: "#4E9627", },
//         { title: "Course Completions", subtitle: "Students who completed their courses", value: "426", trend: "+32 completions this month", color: "#4E9627", },
//         { title: "Pending Assignments", subtitle: "Assignments awaiting submission", value: "92", trend: "Needs attention", color: "#ef4444", },
//         { title: "Quizzes Attempted", subtitle: "Total quiz attempts by students", value: "3,560", trend: "Avg score: 72%", color: "#4E9627", },
//         { title: "Certificates Issued", subtitle: "Certificates successfully generated", value: "312", trend: "Verified & downloadable", color: "#4E9627", },
//     ];

//     return (
//         <div className="w-full space-y-8 pb-10 px-2 transition-colors duration-300">
//             <motion.h2
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 className="text-xl font-bold text-gray-900 dark:text-white"
//             >
//                 Dashboard Overview
//             </motion.h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {stats.map((item, index) => (
//                     <motion.div
//                         key={index}
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ delay: index * 0.1 }}
//                         whileHover={{ scale: 1.02 }}
//                         className="bg-white dark:bg-[#111111] border border-gray-200 dark:border-gray-800 p-6 rounded-2xl relative overflow-hidden group transition-all shadow-sm dark:shadow-none"
//                     >
//                         <div className="flex justify-between items-start mb-4 relative z-10">
//                             <div>
//                                 <p className="text-black dark:text-white text-[18px] font-medium ">{item.title}</p>
//                                 <p className="text-gray-600 dark:text-[#BDBDBD] text-[12px] leading-tight">{item.subtitle}</p>
//                             </div>
//                         </div>
//                         <h3 className="text-2xl font-medium text-gray-900 dark:text-white mt-4">{item.value}</h3>
//                         <p className="text-[12px] font-medium" style={{ color: item.color }}>{item.trend}</p>
//                         <div className="absolute bottom-4 right-4 opacity-20 group-hover:opacity-4 transition-opacity">
//                             <TrendingUp size={45} style={{ color: item.color }} />
//                         </div>
//                     </motion.div>
//                 ))}
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

//                 <motion.div
//                     initial={{ opacity: 0, scale: 0.95 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     className="lg:col-span-2 bg-white dark:bg-[#111111] border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-sm dark:shadow-none"
//                 >
//                     <div className="flex justify-between items-center mb-8">
//                         <h3 className="text-gray-900 dark:text-white font-bold text-md">Student Growth Trend</h3>
//                         <select className="bg-gray-50 dark:bg-black text-gray-600 dark:text-gray-500 text-[10px] border border-gray-200 dark:border-gray-800 rounded-md px-2 py-1 outline-none">
//                             <option>Last 6 Months</option>
//                         </select>
//                     </div>

//                     <div className="h-72 w-full">
//                         <ResponsiveContainer width="100%" height="100%">
//                             <AreaChart data={growthData}>
//                                 <defs>
//                                     <linearGradient id="colorActive" x1="0" y1="0" x2="0" y2="1">
//                                         <stop offset="5%" stopColor="#f97316" stopOpacity={0.3} />
//                                         <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
//                                     </linearGradient>
//                                 </defs>
//                                 <CartesianGrid
//                                     strokeDasharray="3 3"
//                                     stroke={theme === 'dark' ? "#222" : "#eee"}
//                                     vertical={false}
//                                 />
//                                 <XAxis
//                                     dataKey="name"
//                                     stroke={theme === 'dark' ? "#444" : "#999"}
//                                     fontSize={10}
//                                     tickLine={false}
//                                     axisLine={false}
//                                     dy={10}
//                                 />
//                                 <YAxis
//                                     stroke={theme === 'dark' ? "#444" : "#999"}
//                                     fontSize={10}
//                                     tickLine={false}
//                                     axisLine={false}
//                                     dx={-10}
//                                 />
//                                 <Tooltip
//                                     contentStyle={{
//                                         backgroundColor: theme === 'dark' ? '#000' : '#fff',
//                                         border: theme === 'dark' ? '1px solid #333' : '1px solid #ddd',
//                                         borderRadius: '8px',
//                                         fontSize: '12px',
//                                         color: theme === 'dark' ? '#fff' : '#000'
//                                     }}
//                                     itemStyle={{ color: theme === 'dark' ? '#fff' : '#000' }}
//                                 />
//                                 <Area
//                                     type="monotone"
//                                     dataKey="active"
//                                     stroke="#f97316"
//                                     strokeWidth={4}
//                                     fillOpacity={1}
//                                     fill="url(#colorActive)"
//                                 />
//                                 <Area
//                                     type="monotone"
//                                     dataKey="joined"
//                                     stroke="#22c55e"
//                                     strokeWidth={2}
//                                     strokeDasharray="6 6"
//                                     fill="none"
//                                 />
//                             </AreaChart>
//                         </ResponsiveContainer>
//                     </div>
//                     <div className="flex justify-center gap-8 mt-6">
//                         <div className="flex items-center gap-2">
//                             <div className="w-2.5 h-2.5 rounded-full bg-orange-500 shadow-[0_0_8px_#f97316]"></div>
//                             <span className="text-[12px] text-white font-medium tracking-tight">Total Active Students</span>
//                         </div>
//                         <div className="flex items-center gap-2">
//                             <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
//                             <span className="text-[12px] text-white font-medium tracking-tight">New Students Joined</span>
//                         </div>
//                     </div>
//                 </motion.div>

//                 <div className="bg-white dark:bg-[#111111] border border-gray-200 dark:border-gray-800 rounded-3xl p-6 flex flex-col w-full h-full min-h-[450px] shadow-sm dark:shadow-none">
//                     <div className="flex justify-between items-center mb-10">
//                         <h3 className="text-gray-900 dark:text-white font-bold text-sm tracking-wide">Course Completion Ratio</h3>
//                         <div className="bg-gray-50 dark:bg-black border border-gray-200 dark:border-gray-800 px-3 py-1 rounded-lg text-gray-500 text-[10px]">
//                             All
//                         </div>
//                     </div>

//                     <div className="relative flex items-end justify-around gap-4 h-[300px] w-full px-2 border-b border-gray-200 dark:border-gray-800/30">
//                         {[
//                             { label: "Total Students", val: 1200, color: "from-orange-600 to-orange-400", h: "90%", glow: "rgba(234, 88, 12, 0.2)" },
//                             { label: "Completed", val: 800, color: "from-green-600 to-green-400", h: "65%", glow: "rgba(34, 197, 94, 0.2)" },
//                             { label: "In Progress", val: 400, color: "from-red-600 to-red-400", h: "45%", glow: "rgba(239, 68, 68, 0.2)" }
//                         ].map((bar, i) => (
//                             <div key={i} className="flex flex-col items-center w-full max-w-[50px] relative h-full justify-end">
//                                 <motion.div
//                                     initial={{ height: 0 }}
//                                     animate={{ height: bar.h }}
//                                     transition={{ duration: 1.5, ease: "easeOut" }}
//                                     style={{ boxShadow: theme === 'dark' ? `0 -4px 15px ${bar.glow}` : 'none' }}
//                                     className={`w-full bg-gradient-to-t ${bar.color} rounded-t-xl relative group`}
//                                 >
//                                     <span className="absolute -top-7 left-1/2 -translate-x-1/2 text-gray-700 dark:text-white text-[10px] font-bold">
//                                         {bar.val}
//                                     </span>
//                                 </motion.div>

//                                 <div className="absolute -bottom-14 text-center w-full">
//                                     <p className="text-[12px] text-gray-500 dark:text-[#D4D4D4] font-medium tracking-tighter leading-tight whitespace-nowrap">
//                                         {bar.label}
//                                     </p>
//                                     <p className="text-xs text-gray-900 dark:text-white font-black mt-1">
//                                         {bar.val}
//                                     </p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                     <div className="h-16"></div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// const TrendingUp = ({ size, style }) => (
//     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={style}>
//         <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
//         <polyline points="17 6 23 6 23 12"></polyline>
//     </svg>
// );

// export default Dashboard;




