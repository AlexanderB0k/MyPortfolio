import { useEffect, useRef } from "react";
import "../stylesheets/Skills.css";
import {
    DiHtml5,
    DiCss3,
    DiJavascript1,
    DiReact,
    DiPhotoshop,
    DiVisualstudio,
    DiPostgresql,

} from "react-icons/di";
import { SiAwsorganizations, SiCplusplus, SiFigma, SiGodotengine, SiJira, SiPostgresql, SiUnity } from "react-icons/si";

const skills = [
    { id: "HTML", icon: <DiHtml5 /> },
    { id: "CSS", icon: <DiCss3 /> },
    { id: "JavaScript", icon: <DiJavascript1 /> },
    { id: "C++", icon: <SiCplusplus /> },
    { id: "C#", icon: <DiVisualstudio /> },
    { id: "React", icon: <DiReact /> },
    { id: "Photoshop", icon: <DiPhotoshop /> },
    { id: "Figma", icon: <SiFigma /> },
    { id: "SQL", icon: <SiPostgresql /> },
    { id: "AWS", icon: <SiAwsorganizations /> },
    { id: "Unity", icon: <SiUnity /> },
    { id: "Godot", icon: <SiGodotengine /> },
];

export const Skills = () => {
    const titleRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    titleRef.current.classList.add("visible");
                }
            },
            { threshold: 0.5 }
        );

        if (titleRef.current) observer.observe(titleRef.current);

        return () => {
            if (titleRef.current) observer.unobserve(titleRef.current);
        };
    }, []);

    return (
        <div section id="skills" className="skill-container">
            <div className="skill-title" ref={titleRef}>
                <h1>Skills</h1>
            </div>
            <div className="skills-items">
                {skills.map((skill) => (
                    <div key={skill.id} className="skill">
                        <div className="skill-icon">{skill.icon}</div>
                        <p className="skill-name">{skill.id}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};