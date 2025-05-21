import { useRef, useEffect } from 'react';
import { featured } from '../../types/featured'
import { FeaturedCard } from '../FeaturedCard/FeaturedCard'
import { useGsapFadeInUp } from '../../hooks/useGsapFadeInUp';
import gsap from 'gsap';
import './_featured.scss'

export const Featured = () => {
    const featuredRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    useGsapFadeInUp(featuredRef, 0.2);
    useGsapFadeInUp(titleRef, 0.4);

    useEffect(() => {
        const cards = cardRefs.current.filter(Boolean); // Filtrar nulls
        if (cards.length) {
            gsap.from(cards, {
                opacity: 0,
                y: 40,
                stagger: 0.12,
                duration: 0.6,
                ease: 'power2.out',
                clearProps: 'all',
            });
        }
        // Limpieza para evitar bugs al cambiar de página
        return () => {
            if (cards.length) {
                gsap.set(cards, { clearProps: 'all' });
            }
        };
    }, []);

    return (
        <div className="featured" ref={featuredRef}>
            <h2 className="featuredTitle" ref={titleRef}>Nuestras Especialidades</h2>
            <section className='featuredCards'>
                {featured.map((feature, index) => (
                    <div
                        key={index}
                        ref={el => { cardRefs.current[index] = el; }}
                    >
                        <FeaturedCard feature={feature} />
                    </div>
                ))}
            </section>
        </div>
    )
}
