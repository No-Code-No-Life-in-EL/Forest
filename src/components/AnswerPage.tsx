
import Button from '@material-ui/core/Button'

// import { useState } from 'react'

interface Props {
    onSuccess: () => void
    onCancel: () => void
}

function AnswerPage(props: Props) {

    return (
        <div>
            Answer.
            <br />
            <Button onClick={props.onSuccess} variant="outlined" color="primary">Success</Button>
            <Button onClick={props.onCancel} variant="outlined" color="primary">Cancel</Button>
        </div>
    )
}

export default AnswerPage
