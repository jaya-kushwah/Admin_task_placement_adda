// import React, { useState } from 'react';
// import CourseCards from '../academics/course/Course';
// import Subject from '../academics/subject/Subject';
// import StudyMaterial from './study/StudyMaterial';
// import RecordLecture from './lecture/RecordLectures';
// import ClassNotes from './class/ClassNotes';
// import TestAndQuiz from './test/TestAndQuiz';
// import Assignment from './assignment/Assignment';

// const Academics = () => { 
//   const [activeTab, setActiveTab] = useState("Courses");

//   const tabs = [
//     "Courses", "Subjects", "Study Materials", "Recorded Lectures",
//     "Class Notes", "Tests & Quizzes", "Assignments"
//   ];

//   const renderComponent = () => {
//     switch (activeTab) {
//       case "Courses":
//         return <CourseCards />;
//       case "Subjects":
//         return <Subject />;
//       case "Study Materials":
//         return <StudyMaterial></StudyMaterial>;
//       case "Recorded Lectures":
//         return <RecordLecture></RecordLecture>;
//       case "Class Notes":
//         return <ClassNotes></ClassNotes>;
//       case "Tests & Quizzes":
//         return <TestAndQuiz></TestAndQuiz>;
//       case "Assignments":
//         return <Assignment></Assignment>;
//       default:
//         return (
//           <div className="flex flex-col items-center justify-center h-64 border-2 border-dashed border-gray-800 rounded-3xl bg-[#0d0d0d]">
//             <p className="text-gray-500 font-medium text-center px-4">
//               Content for {activeTab} is under development.
//             </p>
//           </div>
//         );
//     }
//   };

//   return (
//     <div className="w-full pb-10 transition-colors duration-300">
//       <div className="flex items-center gap-2 text-sm mb-4">
//         <span className="text-gray-400">Academics</span>
//         <span className="text-gray-600 text-xs">»</span>
//         <span className="text-white font-medium">{activeTab}</span>
//       </div>

//       {/* --- Tabs Container (Responsive & Scrollable) --- */}
//       <div className="w-full overflow-x-auto no-scrollbar mb-8">
//         <div className="flex items-center bg-[#1A1A1A] p-0.5 rounded-xl border border-white/5 w-max min-w-full md:w-fit shadow-2xl">
//           {tabs.map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap ${activeTab === tab
//                   ? 'bg-[#4A4A4A] text-white shadow-inner'
//                   : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'
//                 }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>
//       </div>

//       <div className="mt-6 animate-in fade-in duration-500">
//         {renderComponent()}
//       </div>
//     </div>
//   );
// };

// export default Academics;





import React from 'react';
import { NavLink, Outlet, useLocation, Link } from 'react-router-dom';

const Academics = () => {
  const location = useLocation();
  
  const pathnames = location.pathname.split('/').filter((x) => x);

  const tabs = [
    { name: "Courses", path: "course" },
    { name: "Subjects", path: "subject" },
    { name: "Study Materials", path: "study-materials" },
    { name: "Recorded Lectures", path: "recorded-lectures" },
    { name: "Class Notes", path: "class-notes" },
    { name: "Tests & Quizzes", path: "test-quiz" },
    { name: "Assignments", path: "assignments" }
  ];

  return (
    <div className="w-full pb-10 transition-colors duration-300">
      
      {/* --- Dynamic Breadcrumbs (Figma Style) --- */}
      <div className="flex items-center gap-2 text-sm mb-4">
        <Link to="/academics" className="text-gray-400 hover:text-white transition-colors">Academics</Link>
        
        {pathnames.map((value, index) => {
          if (value === "academics") return null; // Academics humne pehle hi likh diya hai
          
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;

          return (
            <React.Fragment key={to}>
              <span className="text-gray-600 text-xs">»</span>
              {last ? (
                <span className="text-white font-medium capitalize">{value.replace(/_/g, ' ')}</span>
              ) : (
                <Link to={to} className="text-gray-400 hover:text-white capitalize">
                  {value.replace(/_/g, ' ')}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* --- Tabs Container (Sirf main list pages par dikhega) --- */}
      {!location.pathname.includes('/add') && (
        <div className="w-full overflow-x-auto no-scrollbar mb-8">
          <div className="flex items-center bg-[#1A1A1A] p-0.5 rounded-xl border border-white/5 w-max min-w-full md:w-fit shadow-2xl">
            {tabs.map((tab) => (
              <NavLink
                key={tab.path}
                to={tab.path}
                className={({ isActive }) =>
                  `px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                    isActive
                      ? 'bg-[#4A4A4A] text-white shadow-inner'
                      : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'
                  }`
                }
              >
                {tab.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}

      {/* --- Main Content Area (Yahan components render honge) --- */}
      <div className="mt-6 animate-in fade-in duration-500">
        <Outlet /> 
      </div>
    </div>
  );
};

export default Academics;