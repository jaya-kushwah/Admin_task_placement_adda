import React from 'react';
import { NavLink, Outlet, useLocation, Link } from 'react-router-dom';

const Academics = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // 1. Mapping: Konsa "Add" page kis "Parent" ke andar aata hai
  const breadcrumbMap = {
    "add_course": { label: "Course", path: "/academics/course" },
    "add_subject": { label: "Subject", path: "/academics/subject" },
    "add_study_material": { label: "Study Materials", path: "/academics/study-materials" },
    "add_job": { label: "Job Alerts", path: "/jobs" },
  };

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
      
      {/* --- Dynamic Breadcrumbs --- */}
      <div className="flex items-center gap-2 text-sm mb-4">
        <Link to="/academics" className="text-white hover:text-white transition-colors">Academics</Link>
        
        {pathnames.map((value, index) => {
          if (value === "academics") return null;
          
          const isAddPage = breadcrumbMap[value];
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;

          return (
            <React.Fragment key={to}>
              {/* Agar ye Add page hai, toh pehle uska parent dikhao */}
              {isAddPage && (
                <>
                     <span className="text-white text-sm">»</span>
                  <Link to={isAddPage.path} className="text-white hover:text-white capitalize">
                    {isAddPage.label}
                  </Link>
                </>
              )}

             <span className="text-white text-sm">»</span>
              {last ? (
                <span className="text-white font-medium capitalize">
                  {value.replace(/_/g, ' ').replace(/-/g, ' ')}
                </span>
              ) : (
                <Link to={to} className="text-gray-400 hover:text-white capitalize">
                  {value.replace(/_/g, ' ').replace(/-/g, ' ')}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* --- Tabs Container --- */}
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

      {/* --- Main Content Area --- */}
      <div className="mt-6 animate-in fade-in duration-500">
        <Outlet /> 
      </div>
    </div>
  );
};

export default Academics;