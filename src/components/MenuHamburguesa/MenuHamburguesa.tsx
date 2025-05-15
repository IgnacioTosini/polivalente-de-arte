import { Link } from 'react-router';
import { memo } from 'react';
import { links } from '../../types/links';
import './_menuHamburguesa.scss';

type MenuHamburguesaProps = {
    isOpen: boolean;
    onClose: () => void;
};

export const MenuHamburguesa = memo(({ isOpen, onClose }: MenuHamburguesaProps) => {
    return (
        <div className={`menuHamburguesa ${isOpen ? 'open' : ''}`} onClick={onClose}>
            <ul className="menuHamburguesaList">
                {links.map((link, index) => (
                    <li key={index} className="menuHamburguesaItem">
                        <Link
                            to={link.to.toLowerCase()}
                            className="menuHamburguesaLink"
                            onClick={() => {
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                                onClose();
                            }}
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
});