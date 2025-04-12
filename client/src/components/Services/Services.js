import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./Services.css";

const Services = () => {
  const servicesListRef = useRef(null);

  useEffect(() => {
    const serviceList = servicesListRef.current;

    if (serviceList) {
      const listWidth = serviceList.scrollWidth; // Get the total width of the service list
      const viewportWidth = serviceList.offsetWidth; // Get the visible width of the container

      // Create a looping animation
      gsap.to(serviceList, {
        x: -listWidth, // Move to the left by the width of the list
        duration: 20, // Duration of the animation
        ease: "linear", // Linear easing for a continuous effect
        repeat: -1, // Infinite loop
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % listWidth), // Reset position to create a seamless loop
        },
      });
    }
  }, []);

  return (
    <div className="services" id="services">
      <h1>Services</h1>
      <div className="services-content">
        <h2>Web Development</h2>
        <p>We are a team of developers who are passionate about creating beautiful websites.</p>
      </div>
      <div className="services-list-wrapper">
        {/* Wrapper for seamless looping */}
        <div className="services-list" ref={servicesListRef}>
          {/* Service List Items */}
          <div className="services-list-item">
            <img src="https://via.placeholder.com/150" alt="Services" />
            <h3>Web Development</h3>
            <p>We are a team of developers who are passionate about creating beautiful websites.</p>
            <button>Learn More</button>
          </div>
          <div className="services-list-item">
            <img src="https://via.placeholder.com/150" alt="Services" />
            <h3>Java Development</h3>
            <p>We aim to provide the best Java Development services to our clients.</p>
            <button>Learn More</button>
          </div>
          <div className="services-list-item">
            <img src="https://via.placeholder.com/150" alt="Services" />
            <h3>Python Development</h3>
            <p>We at CodeX are not course creators, we are problem solvers.</p>
            <button>Learn More</button>
          </div>
          <div className="services-list-item">
            <img src="https://via.placeholder.com/150" alt="Services" />
            <h3>AI Development</h3>
            <p>AI is the future, and we are the pioneers. Join us for a brighter future.</p>
            <button>Learn More</button>
          </div>
          {/* Duplicate the list for seamless looping */}
          <div className="services-list-item">
            <img src="https://via.placeholder.com/150" alt="Services" />
            <h3>Web Development</h3>
            <p>We are a team of developers who are passionate about creating beautiful websites.</p>
            <button>Learn More</button>
          </div>
          <div className="services-list-item">
            <img src="https://via.placeholder.com/150" alt="Services" />
            <h3>Java Development</h3>
            <p>We aim to provide the best Java Development services to our clients.</p>
            <button>Learn More</button>
          </div>
          <div className="services-list-item">
            <img src="https://via.placeholder.com/150" alt="Services" />
            <h3>Python Development</h3>
            <p>We at CodeX are not course creators, we are problem solvers.</p>
            <button>Learn More</button>
          </div>
          <div className="services-list-item">
            <img src="https://via.placeholder.com/150" alt="Services" />
            <h3>AI Development</h3>
            <p>AI is the future, and we are the pioneers. Join us for a brighter future.</p>
            <button>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
