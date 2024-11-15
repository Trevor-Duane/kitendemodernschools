import React from "react";
import "./MeetTeachers.css";
import Layout from "../../../components/layout/Layout";
import BreadcrumbComponent from "../../../components/breadcrumb/BreadcrumbComponent";

const MeetTeachers = () => {
  // Sample data for the teachers
  const daycareTeachers = [
    {
      name: "John Doe",
      image:
        "https://st4.depositphotos.com/9998432/22597/v/450/depositphotos_225976914-stock-illustration-person-gray-photo-placeholder-man.jpg",
      role: "Daycare Teacher",
    },
    {
      name: "Jane Smith",
      image:
        "https://st4.depositphotos.com/9998432/22597/v/450/depositphotos_225976914-stock-illustration-person-gray-photo-placeholder-man.jpg",
      role: "Daycare Teacher",
    },
    {
      name: "Mary Johnson",
      image:
        "https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133351974-stock-illustration-default-placeholder-woman.jpg",
      role: "Daycare Teacher",
    },
    {
      name: "William Brown",
      image:
        "https://st4.depositphotos.com/9998432/22597/v/450/depositphotos_225976914-stock-illustration-person-gray-photo-placeholder-man.jpg",
      role: "Daycare Teacher",
    },
  ];

  const nurseryTeachers = [
    {
      name: "Alice White",
      image:
        "https://st4.depositphotos.com/9998432/22597/v/450/depositphotos_225976914-stock-illustration-person-gray-photo-placeholder-man.jpg",
      role: "Nursery Teacher",
    },
    {
      name: "Bob Green",
      image:
        "https://st4.depositphotos.com/9998432/22597/v/450/depositphotos_225976914-stock-illustration-person-gray-photo-placeholder-man.jpg",
      role: "Nursery Teacher",
    },
    {
      name: "Carol Adams",
      image:
        "https://st4.depositphotos.com/9998432/22597/v/450/depositphotos_225976914-stock-illustration-person-gray-photo-placeholder-man.jpg",
      role: "Nursery Teacher",
    },
    {
      name: "David Evans",
      image:
        "https://st4.depositphotos.com/9998432/22597/v/450/depositphotos_225976914-stock-illustration-person-gray-photo-placeholder-man.jpg",
      role: "Nursery Teacher",
    },
  ];

  const primaryTeachers = [
    {
      name: "Emily Clark",
      image:
        "https://st4.depositphotos.com/9998432/22597/v/450/depositphotos_225976914-stock-illustration-person-gray-photo-placeholder-man.jpg",
      role: "Primary Teacher",
    },
    {
      name: "Frank Moore",
      image:
        "https://st4.depositphotos.com/9998432/22597/v/450/depositphotos_225976914-stock-illustration-person-gray-photo-placeholder-man.jpg",
      role: "Primary Teacher",
    },
    {
      name: "Grace Taylor",
      image:
        "https://st4.depositphotos.com/9998432/22597/v/450/depositphotos_225976914-stock-illustration-person-gray-photo-placeholder-man.jpg",
      role: "Primary Teacher",
    },
    {
      name: "Henry Lewis",
      image:
        "https://st4.depositphotos.com/9998432/22597/v/450/depositphotos_225976914-stock-illustration-person-gray-photo-placeholder-man.jpg",
      role: "Primary Teacher",
    },
  ];

  const staffMembers = [
    {
      name: "Mr. Mark Wright",
      image:
        "https://st4.depositphotos.com/9998432/22597/v/450/depositphotos_225976914-stock-illustration-person-gray-photo-placeholder-man.jpg",
      role: "Head Teacher",
    },
    {
      name: "Ms. Sarah King",
      image:
        "https://st4.depositphotos.com/9998432/22597/v/450/depositphotos_225976914-stock-illustration-person-gray-photo-placeholder-man.jpg",
      role: "Director",
    },
    {
      name: "Mr. James Miller",
      image:
        "https://st4.depositphotos.com/9998432/22597/v/450/depositphotos_225976914-stock-illustration-person-gray-photo-placeholder-man.jpg",
      role: "Principal",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="container-fluid g-0">
        <div className="container">
          <BreadcrumbComponent />
          <div className="teacher-hero-section text-center text-white py-5">
            <h1>Meet Our Teachers</h1>
            <p className="lead">
              Get to know the amazing individuals who help shape our students'
              futures.
            </p>
          </div>
        </div>
      </section>

      {/* Daycare Teachers Section */}
      <section className="container-fluid daycare-teachers py-5">
        <div className="container">
          <h2 className="teacher-section-label">Daycare Teachers</h2>
          <div className="teacher-grid">
            {daycareTeachers.map((teacher, index) => (
              <div className="teacher-card" key={index}>
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="teacher-image"
                />
                <h5 className="teacher-name">{teacher.name}</h5>
                <p className="teacher-role">{teacher.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nursery Teachers Section */}
      <section className="container-fluid nursery-teachers py-5">
        <div className="container">
          <h2 className="teacher-section-label">Nursery Teachers</h2>
          <div className="teacher-grid">
            {nurseryTeachers.map((teacher, index) => (
              <div className="teacher-card" key={index}>
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="teacher-image"
                />
                <h5 className="teacher-name">{teacher.name}</h5>
                <p className="teacher-role">{teacher.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Primary Teachers Section */}
      <section className="container-fluid primary-teachers py-5">
        <div className="container">
          <h2 className="teacher-section-label">Primary Teachers</h2>
          <div className="teacher-grid">
            {primaryTeachers.map((teacher, index) => (
              <div className="teacher-card" key={index}>
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="teacher-image"
                />
                <h5 className="teacher-name">{teacher.name}</h5>
                <p className="teacher-role">{teacher.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Staff Section (Head Teacher, Director, Principal) */}
      <section className="container-fluid staff-section py-5">
        <div className="container">
          <h2 className="teacher-section-label">Meet Our Staff</h2>
          <div className="teacher-grid">
            {staffMembers.map((staff, index) => (
              <div className="teacher-card" key={index}>
                <img
                  src={staff.image}
                  alt={staff.name}
                  className="teacher-image"
                />
                <h5 className="teacher-name">{staff.name}</h5>
                <p className="teacher-role">{staff.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MeetTeachers;
