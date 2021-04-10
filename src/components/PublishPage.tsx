
import Button from '@material-ui/core/Button'

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
            <Button onClick={props.onSuccess} variant="outlined" color="primary">Success</Button>
            <Button onClick={props.onCancel} variant="outlined" color="primary">Cancel</Button>
        </div>
    )
}

export default PublishPage
