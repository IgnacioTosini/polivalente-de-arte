import { Link } from 'react-router-dom'
import { links } from '../../types/links'
import './_linkList.scss'

export const LinkList = () => {
    return (
        <div className='linkList'>
            {links.map((link) => (
                <Link key={link.label} to={link.to}>
                    {link.label}
                </Link>
            ))}
        </div>
    )
}
