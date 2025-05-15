import './_gallery.scss'

export const Gallery = () => {
    return (
        <section className="gallery">
            <picture className="galleryImage">
                <img src="https://placehold.co/300" alt="Imagen 1" />
            </picture>
            <picture className="galleryImage">
                <img src="https://placehold.co/300" alt="Imagen 2" />
            </picture>
            <picture className="galleryImage">
                <img src="https://placehold.co/300" alt="Imagen 3" />
            </picture>
        </section>
    )
}
