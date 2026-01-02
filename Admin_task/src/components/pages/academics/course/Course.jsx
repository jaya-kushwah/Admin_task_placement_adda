import React, { useState } from 'react'; // 1. useState import kiya
import { Search, Plus, ChevronDown, Edit2, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PNG } from '../../../../utils/Images'
import DeleteModel from '../../../reusable/DeleteModel';

const Course = ({ activeTab = "Courses" }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [courses, setCourses] = useState([
    { id: 1, title: "Full Stack Development", duration: "6 Months", subjects: "8", createdOn: "10 Jan 2025", status: true },
    { id: 2, title: "Python Data Science", duration: "4 Months", subjects: "6", createdOn: "12 Jan 2025", status: false },
    { id: 3, title: "UI/UX Design", duration: "3 Months", subjects: "10", createdOn: "15 Jan 2025", status: true },
    { id: 4, title: "Digital Marketing", duration: "2 Months", subjects: "4", createdOn: "18 Jan 2025", status: true },
    { id: 5, title: "Cyber Security", duration: "5 Months", subjects: "12", createdOn: "20 Jan 2025", status: false },
    { id: 6, title: "Mobile App Dev", duration: "6 Months", subjects: "9", createdOn: "22 Jan 2025", status: true },
  ]);

  // 3. Status toggle karne ka function
  const handleToggleStatus = (id) => {
    setCourses(prevCourses =>
      prevCourses.map(course =>
        // Agar ID match karti hai, toh status ko ulta (!status) kar do
        course.id === id ? { ...course, status: !course.status } : course
      )
    );
  };

const handleDeleteClick = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  // 4. Confirm Delete Logic
  const handleConfirmDelete = () => {
    // courses state ko filter karein
    setCourses(prev => prev.filter(item => item.id !== selectedCourse.id));
    setIsModalOpen(false);
    setSelectedCourse(null);
  };


  return (
    <div className="w-full transition-colors duration-300">
      {/* Header Section (Same as before) */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <h2 className="text-2xl font-bold tracking-tight text-gray-800 dark:text-white transition-colors">
          {activeTab}
        </h2>

        <div className="flex flex-wrap items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" size={16} />
            <input
              type="text"
              placeholder="Search"
              className="bg-white dark:bg-[#121212] text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800 rounded-full py-1.5 pl-10 pr-4 outline-none focus:border-orange-500 w-full sm:w-48 text-sm transition-all"
            />
          </div>

          <button className="flex items-center gap-2 bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 px-4 py-2 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300 hover:border-orange-500 transition-all">
            Active <ChevronDown size={16} className="text-gray-500" />
          </button>

          <Link to="/add_course">
            <button className="flex items-center gap-1 bg-[#f97316] hover:bg-orange-600 text-white px-3 py-1.5 rounded-lg font-medium shadow-lg shadow-orange-500/10 active:scale-95 transition-all">
              <Plus size={20} />
              Add {activeTab === "Courses" ? "Course" : activeTab.slice(0, -1)}
            </button>
          </Link>
        </div>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {courses.map((course) => ( // 4. map courses state se ho raha hai
          <div
            key={course.id}
            className={`
              relative group overflow-hidden rounded-[6px] border transition-all duration-500 p-4
              bg-white border-[#555555] shadow-md hover:shadow-xl
              dark:border-[#555555] dark:shadow-2xl
            `}
            style={{
              background: document.documentElement.classList.contains('dark')
                ? 'linear-gradient(190deg, #543421 0%, #121212 50%, #000000 100%)'
                : 'linear-gradient(190deg, #543421 10%, #121212 50%, #000000 100%)'
            }}
          >
            {/* Decoration Vector Stack */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-30 dark:opacity-20 group-hover:opacity-30 transition-opacity pointer-events-none">
              <img src={PNG.vector} alt="Deco" className="absolute inset-0 object-cover mix-blend-overlay" />
              <img src={PNG.group} alt="Deco" className="absolute inset-0 object-cover mix-blend-overlay" />
            </div>

            <div>
              <img src={PNG.java} className="w-14 h-14 mb-3" alt="Java" />
            </div>

            <h3 className="text-xl font-bold text-white mb-4 truncate relative z-10">
              {course.title}
            </h3>

            {/* Course Details Grid */}
            <div className="grid grid-cols-3 gap-[12px] mb-4 relative z-10">
              <div>
                <p className="text-[13px] text-[#D1CECC] mb-1">Duration</p>
                <p className="text-sm text-white truncate">{course.duration}</p>
              </div>
              <div>
                <p className="text-[13px] text-[#D1CECC] mb-1">Subjects</p>
                <p className="text-sm text-white">{course.subjects}</p>
              </div>
              <div>
                <p className="text-[13px] text-[#D1CECC] mb-1">Created</p>
                <p className="text-sm text-white whitespace-nowrap truncate">{course.createdOn}</p>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="flex items-center justify-between relative z-10">
              {/* STATUS TOGGLE LOGIC */}
              <div
                onClick={() => handleToggleStatus(course.id)}
                className={`w-11 h-6 rounded-full p-1 cursor-pointer transition-all flex items-center ${course.status ? 'bg-orange-500' : 'bg-gray-300 dark:bg-gray-800'}`}
              >
                <div className={`w-4 h-4 bg-white rounded-full transition-transform duration-300 shadow-sm ${course.status ? 'translate-x-5' : 'translate-x-0'}`} />
              </div>

              <div className="flex items-center gap-3">
                <button className="p-2 rounded-lg bg-gray-50 dark:bg-[#222] border border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-400 hover:text-orange-600 transition-all">
                  <Edit2 size={16} />
                </button>
                <button
                  onClick={() => handleDeleteClick(course)}
                  className="p-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-all"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <DeleteModel 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onConfirm={handleConfirmDelete}
        title={selectedCourse ? selectedCourse.title : "this course"} 
      />
    </div>

  );
};

export default Course;