/**
 * Gestion du component footer
 **/
import darkLogo from '../../assets/dark-logo.svg';

/**
 * Affiche le footer avec le logo et le texte
 */
function Footer() {

    return (
        <footer className="footer">
            <img className="footer__logo" src={darkLogo} alt="logo de Kasa" />
            <p className="footer__text">© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer