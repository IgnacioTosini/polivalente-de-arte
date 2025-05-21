import { useRef, useState } from 'react';
import { ModalImage } from '../ModalImage/ModalImage';
import './_gallery.scss';
import { useGsapFadeInUp } from '../../hooks/useGsapFadeInUp';

type GalleryProps = {
    images: { src: string; alt: string }[];
}

export const Gallery = ({ images }: GalleryProps) => {
    const [modalImg, setModalImg] = useState<string | null>(null);
    const galleryRef = useRef<HTMLDivElement | null>(null);

    useGsapFadeInUp(galleryRef, 0.5);
    return (
        <>
            <section className="gallery" ref={galleryRef}>
                {images.map((image, index) => (
                    <picture key={index} className="galleryImage" onClick={() => setModalImg(image.src)}>
                        <img src={image.src} alt={image.alt} loading='lazy' />
                        <span className="galleryImageDesc">{image.alt}</span>
                    </picture>
                ))}
            </section>
            {modalImg && (
                <ModalImage src={modalImg} alt={images.find(img => img.src === modalImg)?.alt} onClose={() => setModalImg(null)} />
            )}
        </>
    );
}
