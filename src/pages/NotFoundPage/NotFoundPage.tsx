import { Link } from 'react-router'
import './_notFoundPage.scss'

export const NotFoundPage = () => {
    return (
        <div className="notFoundPageWrapper">
            <h1 className="notFoundPageTitle">404</h1>
            <h2 className="notFoundPageSubtitle">Página no encontrada</h2>
            <p className="notFoundPageText">Lo sentimos, la página que estás buscando no existe.</p>
            <Link to="/" className="notFoundPageLink">Volver a la página principal</Link>
            <img src="https://placehold.co/800" alt="Polivalente de Arte" className="notFoundPageLogo" loading="lazy" />
            <p className="notFoundPageText">Desarrollado por Ignacio Tosini</p>
        </div>
    )
}
