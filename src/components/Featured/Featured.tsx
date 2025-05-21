import { useRef } from 'react';
import { featured } from '../../types/featured'
import { FeaturedCard } from '../FeaturedCard/FeaturedCard'
import { useGsapFadeInUp } from '../../hooks/useGsapFadeInUp';
import './_featured.scss'

export const Featured = () => {
    const featuredRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);

    useGsapFadeInUp(featuredRef, 0.2);
    useGsapFadeInUp(titleRef, 0.4);
    return (
        <div className="featured" ref={featuredRef}>
            <h2 className="featuredTitle" ref={titleRef}>Nuestras Especialidades</h2>
            <section className='featuredCards'>
                {featured.map((feature, index) => (
                    <FeaturedCard key={index} feature={feature} />
                ))}
            </section>
        </div>
    )
}
