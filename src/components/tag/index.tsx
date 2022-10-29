/**
 * Gestion du component Tag
 **/

type props = {
    title: string,
}

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