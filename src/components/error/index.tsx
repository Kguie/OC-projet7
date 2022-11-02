/**
 * Gestion  de la page erreur
 **/
import { Link } from "react-router-dom"
import { useEffect } from "react"

/**
 * Affiche la page erreur pour chaque route inexistante, ou si une valeur présente dans l’URL ne fait pas partie des données renseignées
 */
function Error() {

    //Titre de la page
    useEffect(() => {
        document.title = ' Erreur'
    }, [])

    return (
        <section className='error'>
            <span className="error__number">404</span>
            <p className="error__text"><span className="error__text__head">Oups! La page que </span> vous demandez n'existe pas.</p>
            <Link to="/" className="error__link">Retourner sur la page d’accueil</Link>
        </section>
    )

}

export default Error