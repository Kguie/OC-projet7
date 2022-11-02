/**
 * Gestion du component Carousel
 **/
import arrowLeft from '../../assets/arrow-left.svg'
import arrowRight from '../../assets/arrow-right.svg'
import { useState } from 'react'



type props = {
    pictures: Array<string>
}



/**
 * Affiche le component Carousel avec ces photos ainsi que les icônes de navigation, et l'affichage du numéro de photo
 */
function Carousel({ pictures }: props) {

    //State pour le numéro de la photo qui sera affichée
    const [pictureNumber, setPictureNumber] = useState(0)

    //State pour les animations du carousel,une pour le slide vers la gauche,l'autre pour le slide vers la droite
    const [leftTransition, setLeftTransition] = useState(false)
    const [rightTransition, setRightTransition] = useState(false)


    /**
     * Permet le changement de photo selon le sens indiqué,mais gère aussi le lancement et l’arrêt du state de transition, permettant d'afficher l'animation entre les 2 photos pendant le changement
     * @param {string} next ou previous
     */
    function changePicture(direction: string) {

        //Timer qui donne au bout de 600ms, la valeur false a un des states de transition, selon la valeur de direction
        const timer = () => {
            setTimeout(() => {
                direction === 'next' ? setRightTransition(false) : setLeftTransition(false)
            }, 600);
        }

        //Si une transition est déjà en cours,la fonction s'arrête
        if (leftTransition || rightTransition) {
            return
        }
        //Changement vers la photo suivante dans le carousel
        if (direction === 'next') {
            //Si le numéro de la photo est supérieur au nombre de photos(-1) 
            if (pictureNumber >= pictures.length - 1) {
                setRightTransition(true);
                setPictureNumber(0)
                timer()

            }
            else {
                setRightTransition(true);
                setPictureNumber(pictureNumber + 1)
                timer()
            }
        }
        if (direction === 'previous') {
            if (pictureNumber <= 0) {
                setLeftTransition(true);
                setPictureNumber(pictures.length - 1)
                timer()
            }
            else {
                setLeftTransition(true);
                setPictureNumber(pictureNumber - 1)
                timer()
            }
        }
        else {
            return
        }
    }


    return (
        <div className="carousel">
            {pictures.length > 1 &&
                <span className='carousel__navigation'>
                    < img className='carousel__navigation--icon' src={arrowLeft} alt='icône de flèche vers la gauche' onClick={() => changePicture('previous')} />
                    <span className='carousel__navigation__number' data-testid="numbers" >{`${pictureNumber + 1}/${pictures.length}`}</span>
                    <img className='carousel__navigation--icon' src={arrowRight} alt='icône de flèche vers la droite' onClick={() => changePicture('next')} />
                </span>}

            {/* Mise en place des animation pour le carrousel vers la gauche */}
            {leftTransition && <span className='carousel__transition'>

                {/* Ante est la photo avant le changement et post celle apres le changement */}
                <img className='carousel__transition__pictureL--ante'
                    src={pictureNumber >= (pictures.length - 1) ? pictures[0] : pictures[pictureNumber + 1]}
                    alt='Galerie' />
                <img className='carousel__transition__pictureL--post'
                    src={pictures[pictureNumber]}
                    alt='Galerie' />
            </span>}

            {/* Mise en place des animation pour le carrousel vers la droite */}
            {rightTransition && <span className='carousel__transition'>
                <img className='carousel__transition__pictureR--ante'
                    src={pictureNumber <= 0 ? pictures[(pictures.length - 1)] : pictures[pictureNumber - 1]}
                    alt='Galerie' />
                <img className='carousel__transition__pictureR--post'
                    src={pictures[pictureNumber]}
                    alt='Galerie' />
            </span>}

            {/* Image principale affichée si aucune transition n'est en cours */}
            {!leftTransition && !rightTransition && pictures[pictureNumber] && <img className='carousel__picture' src={pictures[pictureNumber]} alt='Galerie' />}
        </div>
    )
}

export default Carousel