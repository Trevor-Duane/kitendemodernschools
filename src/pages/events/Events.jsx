import React, { useState } from "react";
import { Link } from "react-router-dom";
import BreadcrumbComponent from "../../components/breadcrumb/BreadcrumbComponent";
import Layout from "../../components/layout/Layout";
import {
  ash,
  equator,
  independence,
  crafting,
  community,
} from "../../assets/assets";
import "./EventPage.css";
import EventGrid from "../../components/events/EventGrid";
import NewzGrid from "../../components/newz/NewzGrid";

function Events() {
  const [activeTab, setActiveTab] = useState("events");

  const newsData = [
    {
      id: 1,
      title: 'New Playground Opened',
      subtitle: 'New facility for students to enjoy sports and games',
      date: 'September 15, 2024',
      summary: 'We have opened a new playground for students...',
      image: crafting,
    },
    {
      id: 2,
      title: 'School Wins Sports Award',
      subtitle: 'Recognition for outstanding athletic performance',
      date: 'September 18, 2024',
      summary: 'Our school won the regional sports award...',
      image: community,
    },
    {
      id: 3,
      title: 'New Library Opening',
      subtitle: 'Expanding our resources for student learning',
      date: 'October 1, 2024',
      summary: 'A brand new library facility has been launched...',
      image: independence,
    },
    {
      id: 4,
      title: 'Annual Science Fair',
      subtitle: 'Showcasing the best student projects',
      date: 'November 5, 2024',
      summary: 'The annual science fair is a huge success...',
      image: ash,
    },
  ];
  

  const eventsData = [
    {
      image: ash,
      title: "Ash Wednesday",
      subtitle: "CommemoratingAsh Wednesday at Kitende",
      date: "Feb 14, 2024",
      author: "Admin",
    },
    {
      image: independence,
      title: "Independence Day",
      subtitle: "Celebrating Independence day at Kitende Modern",
      date: "Oct 09, 2024",
      author: "Admin",
    },
    {
      image: crafting,
      title: "Crafting classes",
      subtitle: "Students learning how to make hand crafts",
      date: "Oct 01, 2024",
      author: "Admin",
    },
    {
      image: equator,
      title: "School Tour",
      subtitle: "Our students touring western uganda",
      date: "Nov 18, 2024",
      author: "Admin",
    },
    {
      image: community,
      title: "Community Service",
      subtitle: "Helping the community is at the heart of our students",
      date: "Nov 12, 2024",
      author: "Admin",
    },
  ];
  // const eventsData = [
  //   {
  //     id: 1,
  //     title: "Science Expo",
  //     description: "A showcase of projects from our talented science students.",
  //   },
  //   {
  //     id: 2,
  //     title: "Sports Day",
  //     description: "Come support our teams and enjoy a day of athletics.",
  //   },
  // ];
  return (
    <Layout>
      <div>
        <section className="container-fluid g-0">
          <div className="container">
            <BreadcrumbComponent />

            {/* Hero Section */}
            <div className="events-hero-section text-center text-white py-5">
              <h1>Events & News</h1>
              <p className="lead">Stay updated on our latest events and news</p>
            </div>
          </div>
        </section>

        {/* Tab Navigation */}
        <section className="container-fluid g-0">
          <div className="container">
            <ul className="nav nav-tabs mt-4" role="tablist">
              <li className="nav-item">
                <button
                  className={`nav-link ${
                    activeTab === "events" ? "active" : ""
                  }`}
                  onClick={() => setActiveTab("events")}
                >
                  Events
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${activeTab === "news" ? "active" : ""}`}
                  onClick={() => setActiveTab("news")}
                >
                  News
                </button>
              </li>
            </ul>
          </div>
        </section>

        {/* Events Section */}
        {activeTab === "events" && (
          <section className="container-fluid g-0">
            <div className="container py-4">
              <div className="event-grid">
                {eventsData.map((event, index) => (
                  <EventGrid
                    index={index}
                    image={event.image}
                    title={event.title}
                    date={event.date}
                    subtitle={event.subtitle}
                    author={event.author}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* News Section */}
        {activeTab === "news" && (
          <section className="container-fluid g-0">
            <div className="container py-4">
              <div className="newz-grid">
                {newsData.map((news, index) => (
                  <NewzGrid
                  index={news.id}
                  id={news.id}
                  title={news.title}
                  subtitle={news.subtitle}
                  date={news.date}
                  image={news.image}
                  />
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </Layout>
  );
}

export default Events;
