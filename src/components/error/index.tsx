/**
 * Gestion  de la page erreur
 **/
import { Link } from "react-router-dom"

/**
 * Affiche la page erreur pour chaque route inexistante, ou si une valeur présente dans l’URL ne fait pas partie des données renseignées
 */
function Error() {

    return (
        <section className='error'>
            <span className="error__number">404</span>
            <span className="error__text">Oups! La page que vous demandez n'existe pas.</span>
            <Link to="/" className="error__link">Retourner sur la page d’accueil</Link>
        </section>
    )

}

export default Error