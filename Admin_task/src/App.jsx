import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ThemeProvider } from './components/context/ThemeContext';
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

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-[#000000] text-black dark:text-white transition-colors duration-300">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="/" element={<Dashboard></Dashboard>} />
              <Route path="/student" element={<Students></Students>} />
              <Route path="/addStudent" element={<AddStudent></AddStudent>} />
              <Route path="/academics" element={<Academics></Academics>} />
              <Route path="/engagement" element={<Engagement></Engagement>} />
              <Route path="/jobs" element={<JobAlert></JobAlert>} />
              <Route path="/addJob" element={<AddJob></AddJob>} />
              <Route path="/certificates" element={<Certificates></Certificates>} />
              <Route path="/notifications" element={<Notification></Notification>} />
              <Route path="/course" element={<Course></Course>} />
              <Route path="/add_course" element={<AddCourse></AddCourse>} />
              <Route path="/create_notify" element={<CreateNotification></CreateNotification>} />
              <Route path="/subject" element={<Subject></Subject>} />
              <Route path="/add_subject" element={<AddSubject></AddSubject>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;




