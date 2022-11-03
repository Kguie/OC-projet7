/**
 * Gestion de la page lodging 
 **/
import { useParams } from "react-router-dom"
import star from "../../assets/star.svg"
import greyStar from "../../assets/starG.svg"
import Carousel from "../../components/carousel"
import Accordion from "../../components/accordion"
import Tag from "../../components/tag"
import { useGetLodgingById } from "../../utils/hooks"
import { useEffect } from "react"

/**
 * Affiche la page lodging qui présente un seul logement 
 */
function Lodging() {
    //Récupération de l'id   
    const { id } = useParams()

    //Récupération des données du logement recherché avec l'id et redirection vers la page d'erreur si l'id n'est pas retrouvé
    const lodgingFound = useGetLodgingById(id)

    //Titre de la page
    useEffect(() => {
        document.title = lodgingFound ? lodgingFound.title : 'Titre de la location'
    }, [lodgingFound])

    return (

        <section className="lodging">

            {/* Intégration du Component Carousel */}
            <Carousel pictures={lodgingFound && lodgingFound.pictures ? lodgingFound.pictures : []} />

            <div className="lodging__header">
                <div className="lodging__header__presentation">
                    <span className="lodging__header__presentation__title">
                        {lodgingFound && lodgingFound.title}
                    </span>
                    <span className="lodging__header__presentation__location">
                        {lodgingFound && lodgingFound.location}
                    </span>
                    <span className="lodging__header__presentation__tags-wrapper">
                        {lodgingFound && lodgingFound.tags.map((tag, index) => (
                            <Tag title={tag} key={`tag-${tag}-index${index}`} />
                        ))}
                    </span>
                </div>
                <div className="lodging__header__informations" >

                    {/* Information sur l'hôte */}
                    <div className="lodging__header__informations__host">
                        <span className="lodging__header__informations__host__name" >
                            {lodgingFound && lodgingFound.host.name}
                        </span>
                        <span className="lodging__header__informations__host__picture-wrapper">
                            {lodgingFound && lodgingFound.host.picture && <img className="lodging__header__informations__host__picture-wrapper__picture"
                                alt={"Photo de l'hôte " + (lodgingFound && lodgingFound.host.name)}
                                src={lodgingFound && lodgingFound.host.picture} />}
                        </span>
                    </div>

                    {/* Notation */}
                    <div className="lodging__header__informations__rating">
                        <img className="lodging__header__informations__rating__icon"
                            alt="icône d'étoile de notation"
                            src={lodgingFound && parseInt(lodgingFound.rating) > 0 ? star : greyStar}
                        />
                        <img className="lodging__header__informations__rating__icon"
                            alt="icône d'étoile de notation"
                            src={lodgingFound && parseInt(lodgingFound.rating) > 1 ? star : greyStar}
                        />
                        <img className="lodging__header__informations__rating__icon"
                            alt="icône d'étoile de notation"
                            src={lodgingFound && parseInt(lodgingFound.rating) > 2 ? star : greyStar}
                        />
                        <img className="lodging__header__informations__rating__icon"
                            alt="icône d'étoile de notation"
                            src={lodgingFound && parseInt(lodgingFound.rating) > 3 ? star : greyStar}
                        />
                        <img className="lodging__header__informations__rating__icon"
                            alt="icône d'étoile de notation"
                            src={lodgingFound && parseInt(lodgingFound.rating) > 4 ? star : greyStar}
                        />
                    </div>
                </div>
            </div>

            {/* Utilisation des accordions avec une liste pour équipements gérée dans le component  */}
            <div className="lodging__accordions-wrapper">
                <Accordion category="Description" content={lodgingFound && lodgingFound.description} />
                <Accordion category="Équipements" content={lodgingFound && lodgingFound.equipments} />
            </div>
        </section>
    )
}
export default Lodging