import './_banner.scss'

export const Banner = () => {
    return (
        <section className='banner'>
            <h1 className='bannerTitle'>ESEA N° 1 – Polivalente de Arte</h1>
            <h2 className='bannerSubtitle'>Formando artistas desde 1985</h2>
            <p className='bannerDescription'>Bienvenidos a nuestra escuela dedicada a las artes visuales, la música y la danza. Un espacio para descubrir y desarrollar el talento artístico.</p>
            <picture>
                <img src="/logoPolivalenteDeArteSinFondo.webp" alt="Logo Polivalente de Arte" />
            </picture>
        </section>
    )
}
