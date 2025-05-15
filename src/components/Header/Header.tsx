import { Navbar } from '../Navbar/Navbar'
import './_header.scss'

export const Header = () => {
    return (
        <header className='header'>
            <div className="headerContainerLogo">
                <picture className="containerLogo">
                    <img src="/images/logo.png" alt="Logo" />
                </picture>
                <h1 className="headerTitle">Polivalente de Arte</h1>
            </div>
            <Navbar />
        </header>
    )
}
