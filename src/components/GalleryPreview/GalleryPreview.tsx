import { Link } from 'react-router-dom'
import { Gallery } from '../Gallery/Gallery'
import './_galleryPreview.scss'

export const GalleryPreview = () => {
    return (
        <div className="galleryPreview">
            <h2 className="galleryTitle">Galería de Trabajos</h2>
            <Gallery />
            <Link to="/gallery" className="galleryLink">
                <span>Ver toda la galería</span>
            </Link>
        </div>
    )
}
