import React, { useState } from "react";
import "./Gallery.css";
import Layout from "../../../components/layout/Layout";
import BreadcrumbComponent from "../../../components/breadcrumb/BreadcrumbComponent";

const Gallery = () => {
  const [isLightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  // Sample data for gallery images
  const galleryImages = [
    { src: "https://via.placeholder.com/600x400", caption: "Image 1" },
    { src: "https://via.placeholder.com/600x400", caption: "Image 2" },
    { src: "https://via.placeholder.com/600x400", caption: "Image 3" },
    { src: "https://via.placeholder.com/600x400", caption: "Image 4" },
    { src: "https://via.placeholder.com/600x400", caption: "Image 5" },
    { src: "https://via.placeholder.com/600x400", caption: "Image 6" },
  ];

  const openLightbox = (src) => {
    setCurrentImage(src);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage("");
  };

  return (
    <Layout>
      <div>
        {/* Hero Section */}
        <section className="container-fluid g-0">
          <div className="container">
            <BreadcrumbComponent />
            <div className="gallery-hero-section text-center text-white py-5">
                <h1>Gallery</h1>
                <p className="lead">Explore our collection of images</p>
            </div>
          </div>
        </section>

        {/* Image Grid Section */}
        <section className="gallery-section">
          <div className="container">
            <div className="gallery-grid">
              {galleryImages.map((image, index) => (
                <div
                  className="gallery-card"
                  key={index}
                  onClick={() => openLightbox(image.src)}
                >
                  <img
                    src={image.src}
                    alt={image.caption}
                    className="gallery-image"
                  />
                  <p className="image-caption">{image.caption}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox Section */}
        {isLightboxOpen && (
          <div className="lightbox-overlay" onClick={closeLightbox}>
            <div className="lightbox-content">
              <img
                src={currentImage}
                alt="Lightbox"
                className="lightbox-image"
              />
              <button className="close-button" onClick={closeLightbox}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Gallery;
