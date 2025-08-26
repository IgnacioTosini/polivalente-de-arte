import { useRef, useState } from 'react';
import { ModalImage } from '../ModalImage/ModalImage';
import { useGsapFadeInUp } from '../../hooks/useGsapFadeInUp';
import { useGsapStaggeredFadeIn } from '../../hooks/useGsapStaggeredFadeIn';
import './_gallery.scss';

type GalleryProps = {
    images: { src: string; alt: string }[];
}

export const Gallery = ({ images }: GalleryProps) => {
    const [modalImg, setModalImg] = useState<string | null>(null);
    const galleryRef = useRef<HTMLDivElement | null>(null);
    const imageRefs = useRef<(HTMLElement | null)[]>([]);

    useGsapFadeInUp(galleryRef, 0.5);
    useGsapStaggeredFadeIn(imageRefs, [images]);

    return (
        <>
            <section className="gallery" ref={galleryRef}>
                {images.map((image, index) => (
                    <picture
                        key={index}
                        className="galleryImage"
                        onClick={() => setModalImg(image.src)}
                        ref={el => { imageRefs.current[index] = el as HTMLElement | null; }}
                    >
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
