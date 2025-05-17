import { useState } from 'react';
import { ModalImage } from '../ModalImage/ModalImage';
import './_gallery.scss';

export const Gallery = () => {
    const [modalImg, setModalImg] = useState<string|null>(null);
    return (
        <>
            <section className="gallery">
                <picture className="galleryImage" onClick={() => setModalImg('https://placehold.co/300')}>
                    <img src="https://placehold.co/300" alt="Imagen 1" />
                </picture>
                <picture className="galleryImage" onClick={() => setModalImg('https://placehold.co/300')}>
                    <img src="https://placehold.co/300" alt="Imagen 2" />
                </picture>
                <picture className="galleryImage" onClick={() => setModalImg('https://placehold.co/300')}>
                    <img src="https://placehold.co/300" alt="Imagen 3" />
                </picture>
            </section>
            {modalImg && (
                <ModalImage src={modalImg} onClose={() => setModalImg(null)} />
            )}
        </>
    );
}
