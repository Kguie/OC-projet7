/**
 * Gestion du component Header
 **/
import { Link } from "react-router-dom"
import lightLogo from '../../assets/light-logo.svg'

/**
 * Affiche le header avec son logo et le navigateur menant vers l'accueil et la page a propos
 */
function Header() {

    return (
        <header className="header">
            <img className="header__logo" src={lightLogo} alt="logo de Kasa" />
            <nav className="header__nav">
                <Link className="header__nav__link" to='/'>accueil</Link>
                <Link className="header__nav__link" to='/about'>a propos</Link>
            </nav>
        </header>
    )
}

export default Header