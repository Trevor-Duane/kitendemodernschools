import React from "react";
import "./Classes.css";
import Layout from "../../../components/layout/Layout";
import { daycare, nursery_level, lower_primary, upper_primary } from "../../../assets/assets";
import BreadcrumbComponent from "../../../components/breadcrumb/BreadcrumbComponent";

const Classes = () => {
  const classDetails = [
    {
      name: "Day Care",
      image: daycare,
      description:
        "Our Nursery section provides a safe, nurturing environment where young learners begin their educational journey through play and foundational skills development.",
    },
    {
      name: "Nursery",
      image: nursery_level,
      description:
        "Our Nursery section provides a safe, nurturing environment where young learners begin their educational journey through play and foundational skills development.",
    },
    {
      name: "Lower Primary (P1 - P3)",
      image: lower_primary,
      description:
        "The Lower Primary classes focus on building strong foundations in literacy, numeracy, and social skills to support students in their formative years.",
    },
    {
      name: "Upper Primary (P4 - P7)",
      image: upper_primary,
      description:
        "Upper Primary classes offer a comprehensive curriculum that prepares students for secondary education with a focus on academic achievement and personal development.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="container-fluid g-0">
        <div className="container">
          <BreadcrumbComponent />
          <div className="class-hero-section text-center text-white py-5">
            <h1>Classes at Kitende Modern Nursery and Primary School</h1>
            <p className="lead">
              From Nursery to Upper Primary, we provide an enriching learning
              environment for all levels
            </p>
          </div>
        </div>
      </section>

      {/* Class Sections */}
      <section className="classes-section py-5">
        <div className="container">
          {classDetails.map((classItem, index) => (
            <div
              key={index}
              className={`class-item ${
                index % 2 === 0 ? "bg-light" : "bg-white"
              }`}
            >
              <div className="class-content">
                <div className="class-image">
                  <img src={classItem.image} alt={`${classItem.name} Class`} />
                </div>
                <div className="class-description">
                  <h2>{classItem.name}</h2>
                  <p>{classItem.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Classes;
