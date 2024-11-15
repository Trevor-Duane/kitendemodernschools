import React, { useState } from "react";
import "./MyTabs.css"; // Import your custom CSS styles

const MyTabs = () => {
  const [activeTab, setActiveTab] = useState("vision");

  return (
    <>
      <ul className="nav nav-tabs" id="myTab">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "vision" ? "active" : ""}`}
            onClick={() => setActiveTab("vision")}
          >
            Vision
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "mission" ? "active" : ""}`}
            onClick={() => setActiveTab("mission")}
          >
            Mission
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "philosophy" ? "active" : ""}`}
            onClick={() => setActiveTab("philosophy")}
          >
            Philosophy
          </button>
        </li>
      </ul>

      <div className="tab-content mt-3" id="myTabContent">
        {activeTab === "vision" && (
          <div className="tab-pane fade show active" id="vision">
            <p className="tab-text">
              Educating and nurturing the whole child,providing opportunities
              for each child to discover and develop their unique talents and
              abalities
            </p>
          </div>
        )}
        {activeTab === "mission" && (
          <div className="tab-pane fade show active" id="mission">
            <p className="tab-text">
              To empower all pupils to embrace learning, achieve their personal
              best and build their emotional, social and physical well-being
            </p>
          </div>
        )}
        {activeTab === "philosophy" && (
          <div className="tab-pane fade show active" id="philosophy">
            <p className="tab-text">
              Kitende Modern Nursery and Primary School children should be able
              to stand on their own as lifelong learners, growing in confidence
              and independenc, prepared to be major contributors to our global
              challenges.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default MyTabs;
