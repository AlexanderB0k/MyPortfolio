// Slide.jsx
import React from 'react';

export const Slide = ({ project }) => (
    <div id="projects" className="slide">
        <div className="slide__image-wrapper">
            <img className="slide__image" src={project.src} alt={project.headline} />
        </div>
        <article className="slide__content">
            <h2 className="slide__headline">{project.headline}</h2>
            <p className="slide__description">{project.description}</p>
            {project.tags.length > 0 && (
                <div className="slide__tags">
                    {project.tags.map((tag, idx) => (
                        <span key={idx} className="tag">{tag}</span>
                    ))}
                </div>
            )}
            <a href={project.link} target="_blank" rel="noopener noreferrer">
                <button className="slide__action btn">{project.button}</button>
            </a>
        </article>
    </div>
);
