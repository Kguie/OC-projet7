/**
 * Gestion du component card
 */
import { Link } from "react-router-dom"
import cardDefault from '../../assets/card-default.png'

type props = {
    cover: string,
    title: string,
    id: string
}

/**
 * Affiche le component Card,constitué du titre de la location, et de sa photo
 */
function Card({ cover = `${cardDefault}`, title = `Titre de la location`, id }: props) {


    return (
        // Affiche la carte avec son titre,si il n'ya pas de cover,le background avec la couleur primaire est visible,si pas de titre "titre de la location" apparaît par défaut
        <Link to={'/lodging/' + id} className="card">
            <img className="card__picture" src={cover} alt={'Photo de couverture du logement ' + id} />
            <h2 className="card__title">{title}</h2>
        </Link>
    )
}

export default Card