// import { useState } from 'react'

// import interface
import { Item } from '../typings/template'

interface Props {
    data: Item[]
    onAnswer: () => void
    // onCancel: () => void
}

function WelcomePage(props: Props) {

    return (
        <div>
            Welcome.
            <br />
            <button onClick={props.onAnswer}>Answer</button>
        </div>
    )
}

export default WelcomePage
