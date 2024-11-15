import React from 'react';
import './Admissions.css';
import Layout from '../../../components/layout/Layout';
import BreadcrumbComponent from '../../../components/breadcrumb/BreadcrumbComponent';

const Admissions = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="container-fluid g-0">
        <div className="container">
          <BreadcrumbComponent/>
          <div className='admission-hero-section text-center text-white py-5'>
          <h1>Welcome to Our School</h1>
          <p className="lead-text">Join us today! Learn about our admission process and requirements for the 2024 academic year.</p>
          </div>
          
        </div>
      </section>

      {/* Admission Process Section */}
      <section className="admission-process">
        <div className="container">
          <h2>Admission Process</h2>
          <ol>
            <li><strong>Step 1:</strong> Review the admission requirements and fees above.</li>
            <li><strong>Step 2:</strong> Fill out the online admission form.</li>
            <li><strong>Step 3:</strong> Pay the interview fee and submit the proof of payment.</li>
            <li><strong>Step 4:</strong> Attend the interview and orientation session.</li>
            <li><strong>Step 5:</strong> Complete the necessary documents for final admission.</li>
          </ol>
        </div>
      </section>

      {/* Admission Requirements Section */}
      <section className="admission-requirements">
        <div className="container">
          <h2>Admission Requirements for 2024</h2>

          {/* Fees Table */}
          <div className="table-container">
            <h3>Fees</h3>
            <table>
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Amount (UGX)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Interview Fee</td><td>50,000</td></tr>
                <tr><td>Admission & Development (Paid once for new entrants)</td><td>100,000</td></tr>
                <tr><td>Nursery Section (Termly)</td><td>650,000</td></tr>
                <tr><td>Day Care (Termly)</td><td>Negotiable</td></tr>
                <tr><td>P.1 to P.6 (Termly)</td><td>800,000</td></tr>
                <tr><td>P.7 Boarding (Termly - Boarding is compulsory)</td><td>1,200,000</td></tr>
                <tr><td>Swimming (Termly)</td><td>80,000</td></tr>
              </tbody>
            </table>
          </div>

          {/* Uniform Fees Table */}
          <div className="table-container">
            <h3>Uniform Fees</h3>
            <table>
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Description</th>
                  <th>Amount (UGX)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Boys</td><td>2 Class uniforms, 1 Sportswear, 2 pairs of stockings, 1 Sweater</td><td>250,000</td></tr>
                <tr><td>Girls</td><td>2 Class uniforms, 1 Sweater, 1 Sportswear, 2 pairs of stockings</td><td>250,000</td></tr>
              </tbody>
            </table>
          </div>

          {/* Download Requirements Document Section */}
          <div className="download-section">
            <h3>Download Admission Requirements</h3>
            <p>For a detailed list of admission requirements, fees, and documents needed, click below to download the full requirements document:</p>
            <a href="/path/to/admission-requirements.pdf" className="download-btn" download>
              Download Requirements Document
            </a>
          </div>

          {/* Payment Instructions */}
          <div className="payment-instructions">
            <h3>Payment Instructions</h3>
            <p>All payments must be strictly made to the following bank accounts:</p>
            <ul>
              <li>DFCU Bank A/C No. 01673655570647</li>
              <li>Stanbic Bank A/C No. 9030020195931</li>
              <li>Centenary Bank A/C No. 3100100400</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Admissions;
