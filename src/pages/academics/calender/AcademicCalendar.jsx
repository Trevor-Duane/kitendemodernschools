import React from 'react';
import './AcademicCalendar.css';
import Layout from '../../../components/layout/Layout';
import BreadcrumbComponent from '../../../components/breadcrumb/BreadcrumbComponent';

const AcademicCalendar = () => {
  return (
    <Layout>
      <div>
      {/* Hero Section */}
      <section className="container-flui g-0">
        <div className="container">
          <BreadcrumbComponent/>
         <div className='academic-hero-section text-center py-5'>
         <h1>Yearly Academic Calendar</h1>
         <p className="lead">Stay up to date with our academic schedule for the year.</p>
         </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="calendar-section py-5">
        <div className="container">
          <h2>2024 Academic Schedule</h2>
          <p>Our academic year is divided into three terms with designated holidays and examination periods.</p>
          
          <div className="calendar-table">
            <table>
              <thead>
                <tr>
                  <th>Term</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Holidays</th>
                  <th>Exams</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Term 1</td>
                  <td>January 15, 2024</td>
                  <td>April 5, 2024</td>
                  <td>April 6 - April 21</td>
                  <td>April 1 - April 5</td>
                </tr>
                <tr>
                  <td>Term 2</td>
                  <td>May 2, 2024</td>
                  <td>August 8, 2024</td>
                  <td>August 9 - August 25</td>
                  <td>August 5 - August 8</td>
                </tr>
                <tr>
                  <td>Term 3</td>
                  <td>September 2, 2024</td>
                  <td>November 28, 2024</td>
                  <td>December 1 - January 14, 2025</td>
                  <td>November 25 - November 28</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
    </Layout>
  );
};

export default AcademicCalendar;
