import { HeroSection } from "../components/Herosection";
import { Navbar } from "../components/Navbar";
import { Skills } from "../components/Skills";
import "../stylesheets/index.css";
import "../stylesheets/App.css"
import { ProjectSection } from "../components/ProjectSection";

export const Home = () => {
    return (
        <div className="home-container">
            {/* NavBar */}
            <div className="navbar">
                <Navbar />
            </div>

            {/* Main Content */}
            <HeroSection></HeroSection>

            {/* Skills Section*/}
            <Skills></Skills>

            {/* Project Section*/}
            <ProjectSection></ProjectSection>

            {/* Footer */}

        </div>
    );
};