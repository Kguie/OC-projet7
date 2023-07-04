/**
 * Gestion du component Collapse
 **/
import { useState } from 'react';

//props pour la fonction collapse
type Props = {
    category: string,
    content: string | Array<string> | null | undefined,
}

function Collapse({ category, content }: Props) {

    //State de l'ouverture de Collapse
    const [isOpen, setIsOpen] = useState(false);

    /**
   * Si Collapse est fermé ,toggle l'ouvre,sinon il le ferme 
   */
    const toggle = () => isOpen ? setIsOpen(false) : setIsOpen(true)


    return (
        <div className="collapse">
            {/* Titre de Collapse avec la catégorie présentée */}
            <div className={isOpen ? 'collapse__header--opened' : 'collapse__header'} onClick={toggle} data-testid='header'>
                <span className="collapse__header__category" data-testid='category'>{category}</span>
                {/* <img className="collapse__header__icon" src={arrowDown} alt='icône de flèche' /> */}
            </div>

            {/* Contenu présenté en fonction de la catégorie */}
            {isOpen && <div className="collapse__content " data-testid='content' >
                {category === 'Équipements' && Array.isArray(content) ?
                    <ul className="collapse__content__list">
                        {
                            //Pour la catégorie équipements,une liste est créée après vérification que le contenu est bien un array
                            content.map((equipment: string, index: number) => (
                                <li key={`equipment-${equipment}-index${index}`}                                                                    >
                                    {equipment}
                                </li>
                            ))

                        }
                    </ul>
                    : <span className="collapse__content__text " data-testid='collapse'>
                        {content && content}
                    </span>
                }
            </div>}
        </div>
    )

}

export default Collapse