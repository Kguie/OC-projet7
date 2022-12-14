/**
 * Gestion du Component Banner 
 **/

type Props = {
    text: string | null | undefined
}


/**
 * Affiche la bannière avec la photo ajouté en background via le css ,avec un texte si présent 
 * @param {string|null} texte à afficher ou rien 
 */
function Banner({ text }: Props) {

    return (
        <div className="banner">
            {text && <h1 className="banner__title">{text}</h1>}
        </div>
    )
}

export default Banner