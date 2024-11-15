import React, { useState } from "react";
import BreadcrumbComponent from "../../components/breadcrumb/BreadcrumbComponent";
import Layout from "../../components/layout/Layout";
import "./Contact.css";

function Contact() {
  const [activeFaq, setActiveFaq] = useState(null);

  // Function to toggle FAQ answer visibility
  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <Layout>
      <section className="container-fluid g-0">
        <div className="container">
          <BreadcrumbComponent />
          <div className="contact-hero-section text-center text-white py-5">
            <div className="container hero-text">
              <h1>Contact Us</h1>
              <p className="lead">
                We're here to answer all your questions and help you with
                admissions, academics, and more.
              </p>
            </div>

            <div className="container">
              <div className="row">
                <div className="col contact-info-grid">
                  <h3>Phone Numbers</h3>
                  <span>+256 (0) 772-440114</span>
                  <br></br>
                  <span>+256 (0) 782-848588</span>
                  <br></br>
                  <span>+256 (0) 703-834408</span>
                </div>

                <div className="col contact-info-grid">
                  <h3>Email</h3>
                  <span>info@kitendemodernschools.com</span>
                  <br></br>
                  <span>kitendemodernprimaryschool@gmail.com</span>
                </div>

                <div className="col contact-info-grid">
                  <h3>Follow Us</h3>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-block"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-block"
                  >
                    Twitter
                  </a>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="d-block"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and FAQ Section */}
      <section className="container-fluid">
        <div className="contact-section-form py-5">
          <div className="row justify-content-center">
            {/* Contact Form Column */}
            <div className="col-6 mx-2  ">
              <h3 className="text-center">Send us a Message</h3>
              <form>
                <div className="mb-3">
                  <label htmlFor="formName" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="formName"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="formEmail" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="formEmail"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="formMessage" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="formMessage"
                    rows="5"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button type="submit" className="btn contact-form-button">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid contact-faq">
        <div className="container">
          {/* FAQ Column */}
          <div className="row">
            <div className="col">
              <h3>Frequently Asked Questions</h3>
              <div className="accordion" id="faqAccordion">
                {faqData.map((faq, index) => (
                  <div key={index} className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button ${
                          activeFaq === index ? "" : "collapsed"
                        }`}
                        type="button"
                        onClick={() => toggleFaq(index)}
                      >
                        {faq.question}
                      </button>
                    </h2>
                    <div
                      className={`accordion-collapse collapse ${
                        activeFaq === index ? "show" : ""
                      }`}
                    >
                      <div className="accordion-body">{faq.answer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="container-fluid">
        <div className="container map-section py-5">
          <h3 className="text-left mb-4">Find Us Here</h3>
          <p>
            Kitende Modern Nursery and Primary School is located 16 kms along
            Kampala - Entebbe Road in Kitende. It is located a few metres off
            Entebbe road after Stabex Petrol Station in Kitende
          </p>
          <div style={{ border: "1px solid #ddd" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7970447724347!2d32.53012437576984!3d0.18711209981105376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177d90aa7c41409d%3A0x7e385d304fe7088e!2sKitende%20Modern%20Nursery%20and%20Primary%20School!5e0!3m2!1sen!2sug!4v1731599502605!5m2!1sen!2sug"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </section>
      {/* </div> */}
    </Layout>
  );
}

// Sample FAQ Data
const faqData = [
  {
    question: "How can I apply for admissions?",
    answer:
      "You can apply online via our Admissions page or visit our campus for in-person assistance.",
  },
  {
    question: "What are the school hours?",
    answer: "Our school operates from 8 AM to 3 PM, Monday through Friday.",
  },
  {
    question: "Is there transportation available?",
    answer:
      "Yes, we provide school bus services. You can find more details under the Transport section.",
  },
  {
    question:
      "How can I get more information about extracurricular activities?",
    answer:
      "Please check our Events page or contact us directly for more information about our programs.",
  },
];

export default Contact;
