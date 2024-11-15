import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./NewzDetails.css"; 
import Layout from "../../components/layout/Layout";
import {
    ash,
    equator,
    independence,
    crafting,
    community,
  } from "../../assets/assets";
import BreadcrumbComponent from "../../components/breadcrumb/BreadcrumbComponent";


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
  

const NewzDetails = () => {
  const { id } = useParams(); // Get the id from URL
  const [news, setNews] = useState(null);

  useEffect(() => {
    // Fetch news details by id (replace with an API call if needed)
    const selectedNews = newsData.find((newsItem) => newsItem.id == id);
    setNews(selectedNews);
  }, [id]);

  if (!news) {
    return <p>Loading...</p>; // Show loading until news data is fetched
  }

  return (
   <Layout>
     <section className="newz-details">
      <div className="container">
      <BreadcrumbComponent   />

        <div className="hero-section text-center">
          <img src={news.image} alt={news.title} className="newz-detail-image" />
          <h1>{news.title}</h1>
          <p className="newz-subtitle">{news.subtitle}</p>
          <p className="newz-meta">
            <span>{news.date}</span> • <span>{news.author}</span>
          </p>
        </div>

        <div className="newz-content">
          <p>{news.content}</p>
        </div>
      </div>
    </section>
   </Layout>
  );
};

export default NewzDetails;
