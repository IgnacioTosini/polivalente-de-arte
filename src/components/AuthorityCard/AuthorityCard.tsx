import { useRef } from 'react';
import { useGsapFadeInUp } from '../../hooks/useGsapFadeInUp';
import './_authorityCard.scss'

type AuthorityCardProps = {
    image?: string;
    name: string;
    role: string;
    description: string;
};

export const AuthorityCard = ({ image, name, role, description }: AuthorityCardProps) => {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const roleRef = useRef<HTMLParagraphElement>(null);
    const descriptionRef = useRef<HTMLParagraphElement>(null);

    useGsapFadeInUp(titleRef, 0.5);
    useGsapFadeInUp(roleRef, 0.5);
    useGsapFadeInUp(descriptionRef, 0.5);
    return (
        <div className='authorityCard'>
            {image && <img className='authorityCardImage' src={image} alt={name} loading='lazy' />}
            <h2 className='authorityCardName' ref={titleRef}>{name}</h2>
            <p className='authorityCardRole' ref={roleRef}>{role}</p>
            <p className='authorityCardDescription' ref={descriptionRef}>{description}</p>
        </div>
    )
}
