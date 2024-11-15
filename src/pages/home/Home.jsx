import React from "react";
import Layout from "../../components/layout/Layout";
import {
  ash,
  equator,
  independence,
  crafting,
  community,
} from "../../assets/assets";
import Slider from "react-slick";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { daycare, nursery } from "../../assets/assets";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import MyTabs from "../../components/tabs/MyTabs";
import EventGrid from "../../components/events/EventGrid";

function Home() {
  const navigate = useNavigate();

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const events = [
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

  const handleButtonClick = () => {
    navigate("/about/meet_our_teachers");
  };

  return (
    <Layout>
      <section className="carousel-section container-fluid g-0">
        <Slider {...settings}>
          <div className="slide slider1">
            <div className="slide-overlay">
              <div className="container hero-text-wrapper">
                <div className="home-hero-text">
                  <h1>Preparing for the future</h1>
                  <p>
                    We believe in the worth of each of our pupils and through
                    all our educational programs and services, we seek to
                    develop human potential and to create a brighter future for
                    each of them.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="slide slider2">
            <div className="slide-overlay">
              <div className="container hero-text-wrapper">
                <div className="home-hero-text">
                  <h1>Preparing for the future</h1>
                  <p>
                    We belive in the worth of each of our pupils and through all
                    our educational programs and services, we seek to develop
                    human potential and to create a brighter future for each of
                    them.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="slide slider3">
            <div className="slide-overlay">
              <div className="container hero-text-wrapper">
                <div className="home-hero-text">
                  <h1>Preparing for the future</h1>
                  <p>
                    We belive in the worth of each of our pupils and through all
                    our educational programs and services, we seek to develop
                    human potential and to create a brighter future for each of
                    them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </section>

      <section className="container-fluid aboutus-sections-main">
        <div className="aboutus-sections container g-0 p-0">
          <div className="row aboutus-row p-0 g-0">
            <div className="col-sm-6 col-xs-12 aboutus-col1">
              <div className="aboutus-header">
                <h1>Who we are</h1>
                <p>
                  Kitende Modern Nursery and Primary School is a privately owned
                  primary school dedicated to providing affordable education
                  with excellent behavioural and academic excellence. Kitende
                  Modern i located 16kms along kampala- Entebbe Road in kitende.
                  It is located afew metres off Entebbe road after Stabex Petro
                  Station in Kitende. We are fully registered by the ministry of
                  Education and Sports as a Day and Boarding Primary School.
                </p>
              </div>
              <div className="aboutus-button">
                <button onClick={handleButtonClick}>
                  Director's Welcome
                  <span className="aboutus-button-span">
                    <FaMessage size={18} color="#1f1d35" />
                  </span>
                </button>
              </div>
            </div>
            <div className="col-sm-6" id="aboutus-col2">
              <MyTabs />
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid school-sections-main">
        <div className="school-sections container">
          <div className="section-header">
            <h1>Our School Sections</h1>
            <p>
              Kitende Modern has various sections from Nursery, Day Care, Lower
              Primary and Upper Primary. We are also a day and boarding school
              with our boarding section covering classes P.1 to P.7{" "}
            </p>
          </div>

          <div className="school-study-sections">
            <div className="section-card">
              <div>
                <img
                  className="img-fluid img-thumbnail"
                  height="200"
                  width="200"
                  src={daycare}
                  alt=""
                />
              </div>
              <div>
                <h4>Day care</h4>
              </div>
            </div>

            <div className="section-card">
              <div>
                <img
                  className="img-fluid img-thumbnail"
                  height="200"
                  width="200"
                  src={nursery}
                  alt=""
                />
              </div>
              <div>
                <h4>Nursery</h4>
              </div>
            </div>

            <div className="section-card">
              <div>
                <img
                  className="img-fluid img-thumbnail"
                  height="200"
                  width="200"
                  src={nursery}
                  alt=""
                />
              </div>
              <div>
                <h4>Lower Primary(D & B)</h4>
              </div>
            </div>

            <div className="section-card">
              <div>
                <img
                  className="img-fluid img-thumbnail"
                  height="200"
                  width="200"
                  src={nursery}
                  alt=""
                />
              </div>
              <div>
                <h4>Upper Primary(D & B)</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid newz-section-main">
        <div className="newz-section container g-0 p-0">
          <div className="newz-header">
            <h1>Latest Events</h1>
            <p>Current happenings at Kitende Modern</p>
          </div>

          <div className="event-grid">
            {events.map((event, index) => (
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
    </Layout>
  );
}

export default Home;
