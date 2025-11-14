import { useState, useRef, useEffect } from 'react';
import './header.scss';
import logo from '../../assets/logo/logo.png';
import burguerIcon from '../../assets/icons/burguer-icon.png';
import closeButton from '../../assets/icons/close.png';

function Header() {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const navRef = useRef(null);
    const burgerRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            const clickedOutside =
                navRef.current &&
                !navRef.current.contains(event.target) &&
                burgerRef.current &&
                !burgerRef.current.contains(event.target);

            if (clickedOutside) setIsNavbarOpen(false);
        }

        function handleEscapeKey(event) {
            if (event.key === 'Escape') setIsNavbarOpen(false);
        }

        function handleResize() {
            if (window.innerWidth >= 768) setIsNavbarOpen(false);
        }

        document.addEventListener("click", handleClickOutside);
        document.addEventListener("keydown", handleEscapeKey);
        window.addEventListener("resize", handleResize);
        
        return () => {
            document.removeEventListener("click", handleClickOutside);
            document.removeEventListener("keydown", handleEscapeKey);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className='container header-container'>
            <header className='content-between header'>
                <img className='logo-img' src={logo} alt="Logo da marca da página" />

                <img
                    ref={burgerRef}
                    className='burguer-icon'
                    src={burguerIcon}
                    alt="Open menu"
                    onClick={() => setIsNavbarOpen(prev => !prev)}
                />
            </header>

            <nav
                ref={navRef}
                className={`navbar ${isNavbarOpen ? 'open' : ''}`}
            >
                <img
                    className='close-button'
                    src={closeButton}
                    alt="Close menu"
                    onClick={() => setIsNavbarOpen(false)}
                />

                <ul className='nav-link'>
                    <li>LOOKS</li>
                    <li>LANÇAMENTOS</li>
                    <li>NOVIDADES</li>
                </ul>
            </nav>

            {isNavbarOpen && (
                <div
                    className="overlay"
                    onClick={() => setIsNavbarOpen(false)}
                ></div>
            )}
        </div>
    )
}

export default Header;