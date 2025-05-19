import { authorities } from '../../utils/authority'
import { AuthorityCard } from '../AuthorityCard/AuthorityCard'
import './_authorityContent.scss'

export const AuthorityContent = () => {
    return (
        <>
            <h1>Nuestras Autoridades</h1>
            <section className='institutionalPageAuthorities'>
                {authorities.map((authority) => (
                    <AuthorityCard
                        key={authority.id}
                        name={authority.name}
                        role={authority.role}
                        description={authority.description}
                    />
                ))}
            </section>
        </>
    )
}
