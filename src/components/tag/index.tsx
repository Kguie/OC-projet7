/**
 * Gestion du component Tag
 **/

type props = {
    title: string,
}

/**
 * Affiche le tag avec son titre au centre
 * @params {string} titre du tag
 */
function Tag({ title }: props) {

    return (
        <div className="tag">
            <span className="tag__title">
                {title}
            </span>
        </div>
    )

}

export default Tag