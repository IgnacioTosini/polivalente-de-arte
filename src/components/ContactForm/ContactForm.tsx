import './_contactForm.scss';

export const ContactForm = () => {
    return (
        <form className="contactForm">
            <div className="formGroup">
                <label htmlFor="name">Nombre Completo *</label>
                <input type="text" id="name" name="name" required />
            </div>
            <div className="formGroup">
                <label htmlFor="email">Email *</label>
                <input type="email" id="email" name="email" required />
            </div>
            <div className="formGroup">
                <label htmlFor="subject">Asunto</label>
                <input type="text" id="subject" name="subject" />
            </div>
            <div className="formGroup">
                <label htmlFor="message">Mensaje *</label>
                <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit">Enviar Mensaje</button>
        </form>
    )
}
