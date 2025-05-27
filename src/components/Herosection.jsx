import '../stylesheets/HeroSection.css';
import logo from '../assets/IMG_1185.jpg';


export const HeroSection = () => {
    return (
        <section id="hero" className="hero-section">                   
         {/* Background lines that span the screen */}
         
            <div className="hero-image-lines">
                <div className="hero-line"></div>
                <div className="hero-line"></div>
                <div className="hero-line"></div>
                <div className="hero-line"></div>
            </div>
            <div className="hero-container">
                <div className="hero-image-section">
                    {/* Image with border */}
                    <div className="hero-image-wrapper">
                        <img src={logo} alt="Logo" />
                    </div>
                </div>

                <div className="hero-text-section">
                    <div className="typewriter">
                        <h1>
                            Hi, my name is <span className="gradient-text">Alexander Bok</span>
                        </h1>
                    </div>
                    <p className="hero-subtext">
                        I'm a game design student passionate in UI/UX design, web design and development, and making games.
                    </p>
                </div>
            </div>
        </section>
    );
};
