import React from 'react';
import './Portfolio.css';
import Layout from '../../../components/layout/Layout';
import { director } from '../../../assets/assets';
import BreadcrumbComponent from '../../../components/breadcrumb/BreadcrumbComponent';

const Portfolio = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="conatiner-fluid g-0">
        <div className="container">
          <BreadcrumbComponent/>
          <div className='portfolio-hero-section text-center text-white py-5'>
          <h1>Welcome to Kitende Modern Nursery and Primary School</h1>
          <p className="lead">Providing Affordable Education with Academic and Behavioral Excellence</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-school py-5 section-alternate">
        <div className="container">
          <h2>About Us</h2>
          <p>
            Kitende Modern Nursery and Primary School is a privately-owned institution, dedicated to providing affordable
            education with a focus on both behavioral and academic excellence. Located just 16 km along the Kampala - Entebbe 
            Road, the school was founded in 2001 as a nursery school and is now fully registered with the Ministry of Education 
            as a mixed day and boarding school.
          </p>
          <p>
            Working in partnership with the Ministry of Education and Sports, the school offers a comprehensive range of 
            educational opportunities to support the development of Uganda and the East African region.
          </p>
        </div>
      </section>    

      {/* Welcome Message with Principal Photo in Row with Two Columns */}
      <section className="welcome-message py-5" style={{ backgroundColor: '#f9f9f9' }}>
        <div className="container flex-container">
          <div className="welcome-text-column">
            <h2>Welcome from the School Principal</h2>
            <p>
              Welcome to Kitende Modern Nursery and Primary School, where our commitment to holistic education and values 
              empowers children to embrace learning, achieve their personal best, and build their well-being.
            </p>
          </div>
          <div className="welcome-photo-column">
            <img className="img-fluid img-thumbnail" src={director} alt="Principal of Kitende Modern Nursery and Primary School" />
          </div>
        </div>
      </section>

      

      {/* Enrollment Section */}
      <section className="enrollment py-5">
        <div className="container">
          <h2>Enrollment Over the Years</h2>
          <p>As of the end of Term 1, 2023, the school had an enrollment of 1,703 pupils. Enrollment has been growing steadily each year:</p>
          <table className="info-table">
            <thead>
              <tr>
                <th>Year</th>
                <th>Enrollment</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2023</td>
                <td>1,703</td>
              </tr>
              <tr>
                <td>2022</td>
                <td>1,562</td>
              </tr>
              <tr>
                <td>2021</td>
                <td>1,458</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Academic Performance Section */}
      <section className="academic-performance py-5 section-alternate">
        <div className="container">
          <h2>Academic Performance at UNEB Level</h2>
          <table className="info-table">
            <thead>
              <tr>
                <th>Year</th>
                <th>First Grades</th>
                <th>Second Grades</th>
                <th>Third Grades</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2022</td>
                <td>14</td>
                <td>97</td>
                <td>8</td>
              </tr>
              <tr>
                <td>2020-2021</td>
                <td>16</td>
                <td>32</td>
                <td>23</td>
              </tr>
              <tr>
                <td>2019</td>
                <td>32</td>
                <td>47</td>
                <td>7</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="facilities py-5">
        <div className="container">
          <h2>Our Facilities</h2>
          <ul>
            <li>Modern classrooms equipped with digital learning tools</li>
            <li>Library with a wide range of books and learning resources</li>
            <li>Sports fields for various physical activities and events</li>
            <li>Computer lab with internet access for digital literacy</li>
            <li>Boarding facilities for pupils who need it</li>
            <li>Health and counseling services to support student well-being</li>
          </ul>
        </div>
      </section>

      {/* Mission, Vision, and Values - Tabbed Section */}
      <section className="mission-vision-values py-5 section-alternate">
        <div className="container">
          <h2>More About Kitende Modern</h2>
          <div className="tabs">
            <input type="radio" name="tab" id="tab1" defaultChecked />
            <label htmlFor="tab1">School Motto</label>
            <input type="radio" name="tab" id="tab2" />
            <label htmlFor="tab2">Mission</label>
            <input type="radio" name="tab" id="tab3" />
            <label htmlFor="tab3">Vision</label>
            <input type="radio" name="tab" id="tab4" />
            <label htmlFor="tab4">Values</label>

            <div className="tab-content" id="content1">
              <h3>School Motto:</h3>
              <p>"Preparing for the Future"</p>
            </div>
            <div className="tab-content" id="content2">
              <h3>Mission Statement:</h3>
              <p>
                To empower all pupils to embrace learning, achieve their personal best, and build their emotional, social, and 
                physical well-being.
              </p>
            </div>
            <div className="tab-content" id="content3">
              <h3>Vision Statement:</h3>
              <p>
                Educating and nurturing the whole child, providing opportunities for each child to discover and develop their unique 
                talents and abilities.
              </p>
            </div>
            <div className="tab-content" id="content4">
              <h3>Our Values</h3>
              <ul>
                <li>Excellence: Striving for the highest quality in education and service.</li>
                <li>Integrity: Encouraging honesty, fairness, and responsibility.</li>
                <li>Respect: Fostering politeness and thoughtful interactions.</li>
                {/* Additional values here */}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
