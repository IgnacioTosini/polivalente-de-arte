import { FaFacebook, FaInstagram } from 'react-icons/fa'
import './_socialLinkList.scss'

export const SocialLinkList = () => {
    return (
        <div className='socialLinkList'>
            <a href="https://www.facebook.com/PolivalentedeArteMdq" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
            </a>
            <a href="https://www.instagram.com/polivalentemdp.oficial/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
            </a>
        </div>
    )
}
