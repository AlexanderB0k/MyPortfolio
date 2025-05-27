import React, { useState } from 'react';
import { Slide } from './slide';
import '../stylesheets/Project.css';

const projects = [
    {
        headline: "Quoth of Raven",
        button: "Learn more",
        src: "https://via.placeholder.com/600x400?text=Quoth+of+Raven",
        description: "A 2.5D endless shooter built in Godot. Equipped with your camcorder and gun, you must navigate a lab to find your dad.",
        tags: ["Godot", "C#", "Adobe Photoshop"],
        link: "#"
    },
    {
        headline: "Looking for Group",
        button: "Visit site",
        src: "https://via.placeholder.com/600x400?text=Looking+for+Group",
        description: "A platform to connect designers and programmers. I designed the UI/UX and developed it using React and Firebase.",
        tags: ["React", "HTML", "CSS", "Firebase"],
        link: "#"
    },
    {
        headline: "Mystic Mayhem",
        button: "Coming soon",
        src: "https://via.placeholder.com/600x400?text=Mystic+Mayhem",
        description: "A magical adventure game currently under development. More details coming soon!",
        tags: [],
        link: "#"
    }
];

export const ProjectSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const maxIndex = projects.length - 1;

    const goToPrevious = () => {
        if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
    };

    const goToNext = () => {
        if (currentIndex < maxIndex) setCurrentIndex(currentIndex + 1);
    };

    return (
        <section id="Projects" className="projects-container">
            <h2 className="project-title">Projects</h2>

            <div className="slider">
                <div
                    className="slider__wrapper"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {projects.map((project, idx) => (
                        <Slide key={idx} project={project} />
                    ))}
                </div>

                <div className="slider__controls">
                    <button className="btn" onClick={goToPrevious} disabled={currentIndex === 0}>
                        &#8592;
                    </button>
                    <button className="btn" onClick={goToNext} disabled={currentIndex === maxIndex}>
                        &#8594;
                    </button>
                </div>
            </div>
        </section>
    );
};
