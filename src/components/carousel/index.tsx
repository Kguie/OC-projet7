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

    const [pictureNumber, setPictureNumber] = useState(0)

    /**
     * Permet de la sélection de la prochaine image du Carousel,tout en repassant à la première image si on se trouve à la dernière
     */
    const nextPicture = () => {

        if (pictureNumber === pictures.length - 1) {
            setPictureNumber(0)
        }
        else {
            setPictureNumber(pictureNumber + 1)
        }

    }

    /**
     * Permet de la sélection de l'image précédente du Carousel,tout en repassant à la dernière image si on se trouve à la première
     */
    const previousPicture = () => {
        if (pictureNumber === 0) {
            setPictureNumber(pictures.length - 1)
        }
        else {
            setPictureNumber(pictureNumber - 1)
        }
    }


    return (
        <div className="carousel">
            {pictures.length > 1 &&
                <span className='carousel__navigation'>
                    < img className='carousel__navigation--icon' src={arrowLeft} alt='icône de flèche vers la gauche' onClick={() => previousPicture()} />
                    <span className='carousel__navigation__number' >{`${pictureNumber + 1}/${pictures.length}`}</span>
                    <img className='carousel__navigation--icon' src={arrowRight} alt='icône de flèche vers la droite' onClick={() => nextPicture()} />
                </span>}
            {pictures[pictureNumber] && <img className='carousel__picture' src={pictures[pictureNumber]} alt='Galerie' />}
        </div>
    )


}

export default Carousel