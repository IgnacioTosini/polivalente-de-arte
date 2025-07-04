import { useRef } from 'react';
import { ContactForm } from '../../components/ContactForm/ContactForm'
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { useGsapFadeInUp } from '../../hooks/useGsapFadeInUp';
import './_contactoPage.scss'

export const ContactoPage = () => {
    const contentRef = useRef<HTMLDivElement>(null);
    const formRef = useRef<HTMLDivElement>(null);
    const mapRef = useRef<HTMLIFrameElement>(null);
    const infoRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

    useGsapFadeInUp(contentRef, 0.5);
    useGsapFadeInUp(formRef, 0.5);
    useGsapFadeInUp(mapRef, 0.5);
    useGsapFadeInUp(infoRef, 0.5);
    useGsapFadeInUp(contactRef, 0.5);

    return (
        <div className="contactoPage" ref={contentRef}>
            <section className='contactoPageContainer' ref={infoRef}>
                <section>
                    <h2>Información de Contacto</h2>
                    <div className='infoContainer'>
                        <picture>
                            <IoLocationOutline />
                        </picture>
                        <div className='contactoPageInfo'>
                            <h3>Dirección</h3>
                            <p>Diagonal Alberdi 2428</p>
                        </div>
                    </div>
                    <div className='infoContainer'>
                        <picture>
                            <FiPhone />
                        </picture>
                        <div className='contactoPageInfo'>
                            <h3>Teléfono</h3>
                            <p>+54 0223 495-6079</p>
                        </div>
                    </div>
                    <div className='infoContainer'>
                        <picture>
                            <MdOutlineMailOutline />
                        </picture>
                        <div className='contactoPageInfo'>
                            <h3>Email</h3>
                            <p>info@ejemplo.com</p>
                        </div>
                    </div>
                    <div className='infoContainer'>
                        <picture>
                            <FaRegClock />
                        </picture>
                        <div className='contactoPageInfo'>
                            <h3>Horario de Atención</h3>
                            <p>Lunes a Viernes 9:00 - 18:00</p>
                        </div>
                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.0681345285875!2d-57.5439083!3d-37.998871199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584dc1acdb67b05%3A0xd459d4ed1e645f34!2sPolivalente%20de%20Arte%20LA!5e0!3m2!1ses!2sar!4v1747453907436!5m2!1ses!2sar"
                        width="500"
                        height="350"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Ubicación Polivalente de Arte"
                        ref={mapRef}
                    ></iframe>
                </section>
            </section>

            <section className='contactoPageForm' ref={formRef}>
                <h2 className="contactoPageTitle">Envíanos un Mensaje</h2>
                <ContactForm />
            </section>
        </div>
    )
}
