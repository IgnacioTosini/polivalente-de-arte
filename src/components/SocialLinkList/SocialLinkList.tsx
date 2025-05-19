import { FaFacebook, FaInstagram } from 'react-icons/fa'
import './_socialLinkList.scss'

export const SocialLinkList = () => {
    return (
        <div className='socialLinkList'>
            <a href="https://www.facebook.com/PolivalentedeArteMdq" target="_blank" rel="noopener noreferrer" aria-label="Facebook Polivalente de Arte">
                <FaFacebook />
            </a>
            <a href="https://www.instagram.com/polivalentemdp.oficial/" target="_blank" rel="noopener noreferrer" aria-label="Instagram Polivalente de Arte">
                <FaInstagram />
            </a>
        </div>
    )
}
