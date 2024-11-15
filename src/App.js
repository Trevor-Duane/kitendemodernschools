import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import MeetTeachers from "./pages/about/teachers/MeetTeachers";
import Transport from "./pages/about/transport/Transport";
import Gallery from "./pages/about/gallery/Gallery";
import Admissions from "./pages/academics/admissions/Admissions";
import AcademicCalendar from "./pages/academics/calender/AcademicCalendar";
import Classes from "./pages/academics/classes/Classes";
import Events from "./pages/events/Events";
import StudentLife from "./pages/life/StudentLife";
import NewzDetails from "./pages/newz/NewzDetails";
import Portfolio from "./pages/about/portfolio/Portfolio";

function App() {
  return (
    <Router>
      {/* <Layout> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Portfolio/>} />
          <Route path="/academics" element={<Admissions />} />
          <Route path="/about/meet_our_teachers" element={<MeetTeachers />} />
          <Route path="/about/school_transport" element={<Transport />} />
          <Route path="/about/gallery" element={<Gallery />} />
          <Route path="/about/school_portfolio" element={<Portfolio />} />
          <Route path="/academics/admissions" element={<Admissions />} />
          <Route path="/academics/academic_calendar" element={<AcademicCalendar />} />
          <Route path="/academics/classes" element={<Classes />} />
          <Route path="/student_life" element={<StudentLife />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events/:id" element={<NewzDetails/>} />
        </Routes>
      {/* </Layout> */}
    </Router>
  );
}

export default App;
