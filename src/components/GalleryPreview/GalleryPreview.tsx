import { Link } from 'react-router-dom'
import { Gallery } from '../Gallery/Gallery'
import { imageGallery } from '../../utils/imageGallery'
import './_galleryPreview.scss'

export const GalleryPreview = () => {
    return (
        <div className="galleryPreview">
            <h2 className="galleryTitle">Galería de Trabajos</h2>
            <Gallery images={imageGallery.slice(0, 3)} />
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
