import React from "react";
import Layout from "../../components/layout/Layout";
import Slider from "react-slick";
import "./Home.css";
import { SiNextra } from "react-icons/si";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";

function Home() {
  console.log("Rendering Home");
  var settings = {
    dots: false,
    infinite: true,
    vertical: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
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
                    We belive in the worth of each of our pupils and through all
                    our educational programs and services, we seek to develop
                    human potential and to create a brighter future for each of
                    them.
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

      <section className="container-fluid about-section-main">
        <div className="about-section container">
          <div className="about-left col">
            <h1>About Our School</h1>
            <img
              height="300"
              width="400"
              src="https://www.quickanddirtytips.com/wp-content/uploads/2022/05/ezgif.com-gif-maker-3.jpg"
            />
            <p>Left</p>
          </div>
          <div className="about-right col">
            <p>
              Kitende Modern Nursery and Primary School is a privately owned
              primary school dedicated to providing affordable eduction with
              excellent behavioural and academic excellence
            </p>
            <p>
              We are located 16kmsalong Kampala - Entebbe Road in Kitende. It is
              located afew metres off Entebbe road after Stabex petrol Station
              in Kitende
            </p>
          </div>
        </div>
      </section>

      <section className="container-fluid"></section>
    </Layout>
  );
}

export default Home;
