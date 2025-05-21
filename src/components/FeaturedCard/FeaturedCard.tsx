import { Link } from 'react-router-dom'
import type { Feature } from '../../types'
import { FaMusic } from "react-icons/fa6";
import { FaPaintBrush } from "react-icons/fa";
import { IoFootstepsOutline } from "react-icons/io5";
import './_featuredCard.scss'

type FeaturedCardProps = {
    feature: Feature
}

export const FeaturedCard = ({ feature }: FeaturedCardProps) => {
    const getIcon = (name: string) => {
        switch (name) {
            case 'Música':
                return <FaMusic />;
            case 'Artes Visuales':
                return <FaPaintBrush />;
            case 'Danza':
                return <IoFootstepsOutline />;
            default:
                return null;
        }
    }
    return (
        <div className="featuredCard">
            <picture className='featuredCardImage'>
                {getIcon(feature.name)}
            </picture>
            <h3 className='featuredCardTitle'>{feature.name}</h3>
            <p className='featuredCardDescription'>{feature.description}</p>
            <Link to={'/especialidades'} className="featuredCardLink" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}>
                <span>Conocer más</span>
            </Link>
        </div>
    )
}
