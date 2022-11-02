/**
 * Gestion du component Accordion
 **/
import { useState } from 'react';

//props pour la fonction accordion
type props = {
    category: string,
    content: string | Array<string> | null | undefined,
}

function Accordion({ category, content }: props) {

    //State de l'ouverture de l'accordion
    const [isOpen, setIsOpen] = useState(false);

    /**
     * Si l'accordion est fermé ,toggle l'ouvre,sinon il le ferme 
     */
    const toggle = () => isOpen ? setIsOpen(false) : setIsOpen(true)

    return (
        <div className="accordion">
            {/* Titre de l'accordion avec la catégorie présentée */}
            <div className={isOpen ? 'accordion__header--opened' : 'accordion__header'} onClick={toggle} data-testid='header'>
                <span className="accordion__header__category" data-testid='category'>{category}</span>
                {/* <img className="accordion__header__icon" src={arrowDown} alt='icône de flèche' /> */}
            </div>

            {/* Contenu présenté en fonction de la catégorie */}
            {isOpen && <div className="accordion__content " data-testid='content'   >
                {category && category === 'Équipements' && Array.isArray(content) ?
                    <ul className="accordion__content__list">
                        {content &&
                            //Pour la catégorie équipements,une liste est créée après vérification que le contenu est bien un array
                            content.map((equipment: string, index: number) => (
                                <li key={`equipment-${equipment}-index${index}`}                                                                    >
                                    {equipment}
                                </li>
                            ))

                        }
                    </ul>
                    : <span className="accordion__content__text " data-testid='accordion'>
                        {content && content}
                    </span>
                }
            </div>}
        </div>
    )

}

export default Accordion