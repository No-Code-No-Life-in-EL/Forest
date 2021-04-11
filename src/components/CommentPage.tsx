
import Button from '@material-ui/core/Button'

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
            <br />
            <Button onClick={props.onCancel} variant="outlined" color="primary">返回</Button>
        </div>
    )
}

export default CommentPage
