import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const BreadcrumbComponent = () => {
  const location = useLocation();
  const paths = location.pathname.split('/').filter(Boolean);

  const breadcrumbItems = paths.map((path, index) => {
    const routeLabels = {
      'about': 'About',
      'meet_our_teachers': 'Meet Our Teachers',
      'school_transport': 'School Transport',
      'gallery': 'Gallery',
      'academics': 'Academics',
      'admissions': 'Admissions',
      'academic_calendar': 'Academic Calendar',
      'classes': 'Classes',
      'newz': 'News',
      'events': 'Events',
      'contact': 'Contact',
    };

    const label = routeLabels[path] || path.charAt(0).toUpperCase() + path.slice(1).replace('_', ' ');
    const fullPath = `/${paths.slice(0, index + 1).join('/')}`;

    return {
      label,
      path: fullPath,
      isActive: index === paths.length - 1, // Determine if this is the last breadcrumb item
    };
  });

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/" style={{color:"#1f1d35 !important"}}>Home</Link>
        </li>
        {breadcrumbItems.map((item, index) => (
          <li
            key={index}
            className={`breadcrumb-item ${item.isActive ? 'active' : ''}`}
            aria-current={item.isActive ? 'page' : undefined}
          >
            {item.isActive ? (
              <span style={{ color: 'red' }}>{item.label}</span> // Active link in red
            ) : (
              <Link to={item.path}>{item.label}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default BreadcrumbComponent;
