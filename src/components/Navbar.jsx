import { useEffect, useState } from "react";
import "../stylesheets/NavBar.css";

const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
            <div className="container">
                <div className="nav-left">
                    <a href="#home" className="nav-title">
                        <span><span>Alexander Bok</span> Portfolio</span>
                    </a>
                </div>

                <div
                    className={`nav-toggle hamburger1 ${menuOpen ? "open" : ""}`}
                    onClick={toggleMenu}
                >
                    <div className="top"></div>
                    <div className="meat"></div>
                    <div className="bottom"></div>
                </div>

                <div className={`nav-right nav-links ${menuOpen ? "active" : ""}`}>
                    {navItems.map((item, key) => (
                        <a key={key} href={item.href} onClick={() => setMenuOpen(false)}>
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};