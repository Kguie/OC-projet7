/**
 * Gestion de la page A propos
 **/
import Collapse from "../../components/collapse"
import Banner from "../../components/banner"
import { useEffect } from "react"

/**
 * Affichage de la page About
 */
function About() {
    //Titre de la page
    useEffect(() => {
        document.title = ' A propos'
    }, [])

    return (
        <section className="about">
            {/* Bannière sans texte */}
            <Banner text={null} />
            <div className="about__collapses-wrapper">
                <Collapse category="Fiabilité"
                    content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
                />
                <Collapse category="Respect"
                    content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
                />
                <Collapse category="Service"
                    content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
                />
                <Collapse category="Sécurité"
                    content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs,
                     chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire,
                      cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
                />
            </div>
        </section>
    )
}

export default About