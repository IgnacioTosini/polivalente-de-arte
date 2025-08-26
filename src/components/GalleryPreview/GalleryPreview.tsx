import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Gallery } from '../Gallery/Gallery'
import { imageGallery } from '../../utils/imageGallery'
import { useGsapFadeInUp } from '../../hooks/useGsapFadeInUp'
import './_galleryPreview.scss'

export const GalleryPreview = () => {
    const galleryRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const imageGalleryRandom = imageGallery.sort(() => 0.5 - Math.random()).slice(0, 3);

    useGsapFadeInUp(galleryRef, 0.2);
    useGsapFadeInUp(titleRef, 0.4);
    return (
        <div className="galleryPreview" ref={galleryRef}>
            <h2 className="galleryTitle" ref={titleRef}>Galería de Trabajos</h2>
            <Gallery images={imageGalleryRandom} />
            <Link
                to="/galeria"
                className="galleryLink"
                onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
            >
                <span>Ver toda la galería</span>
            </Link>
        </div>
    )
}
