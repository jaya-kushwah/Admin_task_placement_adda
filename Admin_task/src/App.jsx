import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/context/ThemeContext";
import MainLayout from "./components/layout/MainLayout";
import Students from "./components/pages/student/Student";
import Dashboard from "./components/pages/Dashboard";
import Academics from "./components/pages/academics/Academics";
import Engagement from "../src/components/pages/engagement/Engagement";
import JobAlert from "../src/components/pages/jobAlert/Job";
import Certificates from "../src/components/pages/certificates/Certification";
import Notification from "./components/pages/notification/Notification";
import AddCourse from "./components/pages/academics/course/AddCourse";
import Course from "./components/pages/academics/course/Course";
import CreateNotification from "./components/pages/notification/CreateNotification";
import AddStudent from "./components/pages/student/addStudent";
import AddSubject from "./components/pages/academics/subject/AddSubject";
import Subject from "./components/pages/academics/subject/Subject";
import AddJob from "./components/pages/jobAlert/AddJob";
import StudyMaterial from "./components/pages/academics/study/StudyMaterial";
import RecordLecture from "./components/pages/academics/lecture/RecordLectures";
import ClassNotes from "./components/pages/academics/class/ClassNotes";
import TestAndQuiz from "./components/pages/academics/test/TestAndQuiz";
import Assignment from "./components/pages/academics/assignment/Assignment";
import AddStudyMaterial from "./components/pages/academics/study/AddStudyMaterial";
import AddRecorededLectures from "./components/pages/academics/lecture/AddRecordedLectures";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-[#000000] text-black dark:text-white transition-colors duration-300">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="student" element={<Students />} />
              <Route path="addStudent" element={<AddStudent />} />

              {/* App.js */}
              <Route path="/academics" element={<Academics />}>
                {/* Index route: Jab koi sirf /academics par ho */}
                <Route index element={<Course />} />
                {/* Nested Routes: Ye Academics ke andar hi rahenge */}
                <Route path="add_course" element={<AddCourse />} />
                <Route path="add_subject" element={<AddSubject />} />
                <Route
                  path="add_study_material"
                  element={<AddStudyMaterial></AddStudyMaterial>}
                />
                <Route
                  path="add_lecture"
                  element={<AddRecorededLectures></AddRecorededLectures>}
                />

                {/* Baki tab components yahan add karein */}
                <Route path="course" element={<Course />} />
                <Route path="subject" element={<Subject />} />
                <Route path="study-materials" element={<StudyMaterial />} />
                <Route path="recorded-lectures" element={<RecordLecture />} />
                <Route path="class-notes" element={<ClassNotes />} />
                <Route path="test-quiz" element={<TestAndQuiz />} />
                <Route path="assignments" element={<Assignment />} />
              </Route>

              {/* Baaki Routes */}
              <Route path="engagement" element={<Engagement />} />
              <Route path="jobs" element={<JobAlert />} />
              <Route path="addJob" element={<AddJob />} />
              <Route path="certificates" element={<Certificates />} />
              <Route path="notifications" element={<Notification />} />
              <Route path="create_notify" element={<CreateNotification />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
