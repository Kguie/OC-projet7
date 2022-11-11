/**
 * Gestion de la page lodging 
 **/
import { useParams } from "react-router-dom"
import star from "../../assets/star.svg"
import greyStar from "../../assets/starG.svg"
import Gallery from "../../components/gallery"
import Collapse from "../../components/collapse"
import Tag from "../../components/tag"
import { useGetLodgingData } from "../../utils/hooks"
import { useEffect } from "react"
import Loader from "../../utils/style/loader"


/**
 * Affiche la page lodging qui présente un seul logement 
 */
function Lodging() {
    //Récupération de l'id   
    const { id } = useParams()

    //Récupération des données du logement recherché avec l'id et redirection vers la page d'erreur si l'id n'est pas retrouvé
    let { data, isLoading } = useGetLodgingData(`https://vercel-api-kguie.vercel.app/api/lodgings/${id}`)

    const lodgingFound: any = data && data


    //Titre de la page
    useEffect(() => {
        document.title = lodgingFound.title ? lodgingFound.title : 'Titre de la location'
    }, [lodgingFound])

    return (
        isLoading ? <Loader /> :
            <section className="lodging">

                {/* Intégration du Component Gallery */}
                <Gallery pictures={lodgingFound && lodgingFound.pictures ? lodgingFound.pictures : []} />

                <div className="lodging__header">
                    <div className="lodging__header__presentation">
                        <span className="lodging__header__presentation__title">
                            {lodgingFound && lodgingFound.title}
                        </span>
                        <span className="lodging__header__presentation__location">
                            {lodgingFound && lodgingFound.location}
                        </span>
                        <span className="lodging__header__presentation__tags-wrapper">
                            {lodgingFound && lodgingFound.tags && Array.isArray(lodgingFound.tags) && lodgingFound.tags.map((tag: string, index: number) => (
                                <Tag title={tag} key={`tag-${tag}-index${index}`} />
                            ))}
                        </span>
                    </div>
                    <div className="lodging__header__informations" >

                        {/* Information sur l'hôte */}
                        <div className="lodging__header__informations__host">
                            <span className="lodging__header__informations__host__name" >
                                {lodgingFound && lodgingFound.host && lodgingFound.host.name && lodgingFound.host.name}
                            </span>
                            <span className="lodging__header__informations__host__picture-wrapper">
                                {lodgingFound && lodgingFound.host && lodgingFound.host.picture && lodgingFound.host.picture && <img className="lodging__header__informations__host__picture-wrapper__picture"
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

                {/* Utilisation des collapses avec une liste pour équipements gérée dans le component  */}
                <div className="lodging__collapses-wrapper">
                    <Collapse category="Description" content={lodgingFound && lodgingFound.description} />
                    <Collapse category="Équipements" content={lodgingFound && lodgingFound.equipments} />
                </div>
            </section>
    )
}
export default Lodging