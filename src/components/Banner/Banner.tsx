import { useRef } from 'react';
import { useGsapFadeInUp } from '../../hooks/useGsapFadeInUp';
import './_banner.scss'

export const Banner = () => {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLHeadingElement>(null);
    const descriptionRef = useRef<HTMLParagraphElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);

    useGsapFadeInUp(titleRef, 0.2);
    useGsapFadeInUp(subtitleRef, 0.4);
    useGsapFadeInUp(descriptionRef, 0.6);
    useGsapFadeInUp(imageRef, 0.8);

    return (
        <section className='banner'>
            <h1 className='bannerTitle' ref={titleRef}>ESEA N° 1 – Polivalente de Arte</h1>
            <h2 className='bannerSubtitle' ref={subtitleRef}>Formando artistas desde 1985</h2>
            <p className='bannerDescription' ref={descriptionRef}>Bienvenidos a nuestra escuela dedicada a las artes visuales, la música y la danza. Un espacio para descubrir y desarrollar el talento artístico.</p>
            <picture>
                <img src="/logoPolivalenteDeArteSinFondo.webp" alt="Logo Polivalente de Arte" ref={imageRef} />
            </picture>
        </section>
    )
}
