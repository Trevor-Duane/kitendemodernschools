import React from 'react';
import './StudentLife.css';
import {
  ash,
  equator,
  independence,
  crafting,
  community,
} from "../../assets/assets";
import Layout from '../../components/layout/Layout';
import BreadcrumbComponent from '../../components/breadcrumb/BreadcrumbComponent';

const StudentLife = () => {
  const activities = [
    { src: ash, caption: 'Sports Day Fun' },
    { src: equator, caption: 'Science Fair' },
    { src: independence, caption: 'Cultural Day' },
    { src: crafting, caption: 'Art Exhibition' },
    { src: community, caption: 'Library Time' },
    { src: community, caption: 'Community Outreach' }
  ];

  return (
    <Layout>
      <section className="container-fluid g-0">
        <div className="container">
          <BreadcrumbComponent/>
          <div className='life-hero-section text-center text-white py-5'>
          <h1>Student Life at Kitende Modern Nursery and Primary School</h1>
          <p className="lead">Discover the vibrant life beyond academics</p>
          </div>
        </div>
      </section>

      {/* Student Life Gallery Section */}
      <section className="student-life-gallery py-5">
        <div className="container">
          <h2>Explore Student Life</h2>
          <div className="grid-gallery">
            {activities.map((activity, index) => (
              <div key={index} className="gallery-item">
                <img src={activity.src} alt={activity.caption} className="gallery-image" />
                <div className="gallery-caption">{activity.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default StudentLife;
