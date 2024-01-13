import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import projeler from "./Projects";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AppNavbar from "./Topbar";
import Footer from "./Footer";

function AnaSayfa() {
  const [popoverContent, setPopoverContent] = useState(null);

  const handlePopoverOpen = (proje) => {
    const content = (
      <div className="popover-content">
        <div className="popover-header">
          <button
            type="button"
            className="btn-close overlay popover "
            aria-label="Close"
            onClick={handlePopoverClose}
          />
          <br />
        </div>
        <div className="popover-body">
          <div
            id={`carouselExample-${proje.id}`}
            className="carousel slide "
            data-bs-ride="carousel"
          >
            <div className="carousel-inner ">
              {proje.resimler.map((resim, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                  <img
                    src={resim}
                    className="d-block w-100 "
                    alt={`Proje Resmi ${index + 1}`}
                    style={{ maxWidth: '200%', maxHeight: '400px', objectFit: 'fill' }}
                  />
                </div>
              ))}
            </div>
            <button
              className="btn btn-dark carousel-control-prev"
              
              type="button"
              data-bs-target={`#carouselExample-${proje.id}`}
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon "
                aria-hidden="true"
              ></span>

              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="btn btn-dark carousel-control-next"
              type="button"
              data-bs-target={`#carouselExample-${proje.id}`}
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon "
                aria-hidden="true"
                
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <br />
           <div className="scrollable-text" style={{ maxHeight: '200px', overflowY: 'auto' }}>
          <p>- {proje.aciklama}</p>
        </div>
        </div>
      </div>
    );
    setPopoverContent(content);
  };

  const handlePopoverClose = () => {
    setPopoverContent(null);
  };

  const handleImageClick = (proje) => {
    handlePopoverOpen(proje);
  };

  useEffect(() => {
    // Bootstrap Carousel'ı başlat
    const carousels = document.querySelectorAll(".carousel");
    carousels.forEach((carousel) => {
      new window.bootstrap.Carousel(carousel);
    });
  }, []);

  return (
    <>
      <AppNavbar />

      <div className="container mt-5">
        <h1 className="text-center">Projelerimiz</h1>
        <br />
        <br />
        <div className="row">
          {projeler.map((proje) => (
            <div key={proje.id} className="col-md-4">
              <div className="card mb-4">
                <img
                  src={proje.resimler[0]}
                  className="card-img-top"
                  alt={`Proje ${proje.id}`}
                  onClick={() => handleImageClick(proje)}
                />
                <div className="card-body">
                  <br />
                  <h2 className="card-title h6">{proje.baslik}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {popoverContent && (
        <>
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Opaklık ekledik
              zIndex: 999,
            }}
            onClick={handlePopoverClose}
          ></div>
          <div
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 1000,
              backgroundColor: "white",
              padding: "15px",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
            }}
          >
            {popoverContent}
          </div>
        </>
      )}
      <br />
      <Footer/>
    </>
  );
}

export default AnaSayfa;
