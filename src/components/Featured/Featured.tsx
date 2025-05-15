import { featured } from '../../types/featured'
import { FeaturedCard } from '../FeaturedCard/FeaturedCard'
import './_featured.scss'

export const Featured = () => {
    return (
        <div className="featured">
            <h2 className="featuredTitle">Nuestras Especialidades</h2>
            <section className='featuredCards'>
            {featured.map((feature, index) => (
                <FeaturedCard key={index} feature={feature} />
            ))}
            </section>
        </div>
    )
}
