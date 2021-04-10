import { useEffect } from 'react'

// import interface
import { Item } from '../typings/template'

interface Props {
    onInitial: (item: Item) => void
    onSuccess: () => void
    onCancel: () => void
}

function PublishPage(props: Props) {

    // Initial
    useEffect(() => {props.onInitial({
        type: 'tree',
        x: 200,
        y: 850,
        author: 'OrangeX4',
        comment: 'Hello Publish!'
        // eslint-disable-next-line
    })}, [])

    return (
        <div>
            Publish.
            <br />
            <button onClick={props.onSuccess}>Success</button>
            <button onClick={props.onCancel}>Cancel</button>
        </div>
    )
}

export default PublishPage
