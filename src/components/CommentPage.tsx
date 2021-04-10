// import interface
import { Item } from '../typings/template'

interface Props {
    item: Item
    onCancel: () => void
}

function CommentPage(props: Props) {

    return (
        <div>
            <h2>{props.item.author}</h2>
            {props.item.comment}
            <br />
            <button onClick={props.onCancel}>Return</button>
        </div>
    )
}

export default CommentPage
