import { useEffect, useState } from 'react';
import { Navbar } from '../Navbar/Navbar'
import { MenuHamburguesa } from '../MenuHamburguesa/MenuHamburguesa'
import { MdOutlineClose } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import './_header.scss'

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isTabletOrMobile, setIsTabletOrMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsTabletOrMobile(window.innerWidth <= 1024);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <header className='header'>
            <div className="headerContainerLogo">
                <picture className="containerLogo">
                    <img src="/images/logo.png" alt="Logo" loading='lazy' />
                </picture>
                <h1 className="headerTitle">Polivalente de Arte</h1>
            </div>
            {isTabletOrMobile ? (
                <>
                    <button
                        className="menuToggle"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
                    >
                        {isMenuOpen ? <MdOutlineClose /> : <GiHamburgerMenu />}
                    </button>
                    <MenuHamburguesa isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
                </>
            ) : (
                <Navbar />
            )}
        </header>
    )
}
