import React from "react";
import { Link } from "react-router-dom";
import {
  GoogleMap,
  LoadScript,
  Marker,
  Polyline,
} from "@react-google-maps/api";
import "./Transport.css";
import Layout from "../../../components/layout/Layout";
import BreadcrumbComponent from "../../../components/breadcrumb/BreadcrumbComponent";

const Transport = () => {
  const routes = [
    {
      id: 1,
      name: "Route A",
      stops: ["Main Street", "Elm Road", "Park Avenue", "School Lane"],
      driver: "John Doe",
      busNumber: "45A",
      startTime: "7:30 AM",
      coordinates: [
        { lat: 12.9716, lng: 77.5946 }, // Example stop coordinates
        { lat: 12.9736, lng: 77.5966 },
        { lat: 12.9756, lng: 77.5986 },
        { lat: 12.9776, lng: 77.6006 },
      ],
    },
    {
      id: 2,
      name: "Route B",
      stops: ["Central Avenue", "Greenwich Park", "Sunset Blvd", "School Lane"],
      driver: "Jane Smith",
      busNumber: "78B",
      startTime: "7:45 AM",
      coordinates: [
        { lat: 12.9916, lng: 77.6126 },
        { lat: 12.9936, lng: 77.6146 },
        { lat: 12.9956, lng: 77.6166 },
        { lat: 12.9976, lng: 77.6186 },
      ],
    },
    {
      id: 3,
      name: "Route C",
      stops: ["Broadway", "Lakeview Crescent", "Sunset Park", "School Lane"],
      driver: "Mark Johnson",
      busNumber: "12C",
      startTime: "8:00 AM",
      coordinates: [
        { lat: 12.9516, lng: 77.5646 },
        { lat: 12.9536, lng: 77.5666 },
        { lat: 12.9556, lng: 77.5686 },
        { lat: 12.9576, lng: 77.5706 },
      ],
    },
  ];

  return (
    <Layout>
      <section className="container-fluid g-0">
        <div className="container">
          <BreadcrumbComponent />
          <div className="transport-hero-section text-center py-5">
            <h1>School Transport Routes</h1>
            <p className="lead">Find your school transport route</p>
          </div>
        </div>
      </section>

      <section className="routes-section">
        <div className="container">
          <h2>Available Routes</h2>
          <div className="routes-list">
            {routes.map((route) => (
              <div className="route-card" key={route.id}>
                <div className="route-details">
                  <h3>{route.name}</h3>
                  <p>
                    <strong>Driver:</strong> {route.driver}
                  </p>
                  <p>
                    <strong>Bus Number:</strong> {route.busNumber}
                  </p>
                  <p>
                    <strong>Start Time:</strong> {route.startTime}
                  </p>
                  <h4>Stops:</h4>
                  <ul>
                    {route.stops.map((stop, index) => (
                      <li key={index}>{stop}</li>
                    ))}
                  </ul>
                  <Link to={`/routes/${route.id}`} className="btn btn-primary">
                    View Details
                  </Link>
                </div>

                <div className="route-map">
                  <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
                    <GoogleMap
                      center={route.coordinates[0]}
                      zoom={13}
                      mapContainerStyle={{
                        height: "300px",
                        width: "100%",
                        borderRadius: "10px",
                      }}
                    >
                      <Polyline
                        path={route.coordinates}
                        options={{
                          strokeColor: "#0000FF",
                          strokeOpacity: 1.0,
                          strokeWeight: 4,
                        }}
                      />
                      {route.coordinates.map((coordinate, index) => (
                        <Marker key={index} position={coordinate} />
                      ))}
                    </GoogleMap>
                  </LoadScript>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Transport;
