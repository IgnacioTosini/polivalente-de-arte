import './_authorityCard.scss'

type AuthorityCardProps = {
    image: string;
    name: string;
    role: string;
    description: string;
};

export const AuthorityCard = ({ image, name, role, description }: AuthorityCardProps) => {
    return (
        <div className='authorityCard'>
            <img className='authorityCardImage' src={image} alt={name} />
            <h2 className='authorityCardName'>{name}</h2>
            <p className='authorityCardRole'>{role}</p>
            <p className='authorityCardDescription'>{description}</p>
        </div>
    )
}
