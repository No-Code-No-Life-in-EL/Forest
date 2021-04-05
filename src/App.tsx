// import { useState } from 'react'
import './css/App.css'

import Tree from './assets/little-tree.svg'
import Background from './assets/background.jpg'

function App() {
    const clientWidth = document.documentElement.clientWidth
    const clientHeight = document.documentElement.clientHeight

    return (
        <div className="App">

            <div className={clientHeight > clientWidth ? "game-top" : "game-left"}>
                <img src={Tree} alt='Tree' style={{
                    marginTop: 550,
                    marginLeft: 500,
                    position: 'absolute'
                }} />
                <img src={Background} alt='background' />
            </div>

            <div className={clientHeight > clientWidth ? "show-root-bottom" : "show-root-right"}>
                <div className="show-content">
                    {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(((v) => <div>{v}</div>))}
                    <div>Width: {clientWidth}</div>
                    <div>Height: {clientHeight}</div>
                </div>
            </div>
        </div>
    )
}

export default App
