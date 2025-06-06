import React, { useEffect, useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import profileImage from "../../../assets/profile.png";
import personal from "../../../data/personal";
import "./Bio.scss";


const servicesList = personal.services;
const name = personal.name;
const description = personal.description;

const Bio = () => {
    const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentServiceIndex((prev) => (prev + 1) % servicesList.length);
                setFade(true);
            }, 300);
        }, 2000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <main className="bio-container" role="main" aria-label="Personal Bio">
            <section className="profile-picture" aria-label="Profile Picture">
                <img
                    src={profileImage}
                    alt="Prakash Profile"
                    loading="lazy"
                    className="profile-img"
                />
            </section>

            <section className="bio-details">
                <h1 tabIndex="0" className="bio-name">
                    {name}
                </h1>
                <p className="bio-summary" tabIndex="0">
                    {description}
                </p>

                <div className="services" aria-live="polite" aria-atomic="true">
                    <span className="services-label">Services:</span>
                    <span
                        key={currentServiceIndex}
                        className={`services-text ${fade ? "fade-in" : "fade-out"}`}
                    >
                        {servicesList[currentServiceIndex]}
                    </span>
                </div>

                <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkedin-link"
                    aria-label="LinkedIn Profile"
                >
                    <FaLinkedin aria-hidden="true" />
                    <span>Connect on LinkedIn</span>
                </a>
            </section>
        </main>
    );
};

export default Bio;
