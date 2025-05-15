import { LinkList } from '../LinkList/LinkList'
import { SocialLinkList } from '../SocialLinkList/SocialLinkList'
import './_footer.scss'

export const Footer = () => {
    return (
        <footer className='footer'>
            <section className='container'>
                <section className='footerContent'>
                    <div className='footerContact'>
                        <h2>ESEA N° 1 – Polivalente de Arte</h2>
                        <p>Email: info@polivalentearte.edu</p>
                        <p>Phone: +1 (555) 123-4567</p>
                    </div>
                    <div className='footerFastlinks'>
                        <h4>Enlaces Rápidos</h4>
                        <LinkList />
                    </div>
                    <div className='footerSocials'>
                        <h4>Síguenos</h4>
                        <SocialLinkList />
                    </div>
                </section>
                <p className='footerBottom'>© {new Date().getFullYear()} Polivalente de Arte. Todos los derechos reservados.</p>
            </section>
        </footer>
    )
}
