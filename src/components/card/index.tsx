/**
 * Gestion du component card
 */
import { Link } from "react-router-dom"

interface props {
    cover: string,
    title: string,
    id: string
}

/**
 * Affiche le component Card
 */
function Card({ cover, title = `Titre de la location`, id }: props) {


    return (
        <Link to={'/lodging/' + id} className="card">
            <img className="card__picture" src={cover} alt={'Photo de couverture du logement ' + id} />
            <h2 className="card__title">{title}</h2>
        </Link>
    )
}

export default Card