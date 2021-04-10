// import { useState } from 'react'

interface Item {
    type: 'tree'
    x: number
    y: number
    author: string
    comment: string
}

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
