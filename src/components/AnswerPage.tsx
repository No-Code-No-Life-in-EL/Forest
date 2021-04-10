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
            <button onClick={props.onSuccess}>Success</button>
            <button onClick={props.onCancel}>Cancel</button>
        </div>
    )
}

export default AnswerPage
