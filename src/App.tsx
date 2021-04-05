import { useState } from 'react'
import './css/App.css'

import Tree from './assets/little-tree.svg'
import Background from './assets/background.jpg'

function App() {
    const clientWidth = document.documentElement.clientWidth
    const clientHeight = document.documentElement.clientHeight

    const [imgPos, setImgPos] = useState({x: 550, y: 500})

    return (
        <div className="App">

            <div onClick={(e) => { setImgPos({x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY}) }} className={clientHeight > clientWidth ? "game-top" : "game-left"}>
                <img src={Tree} alt='Tree' onClick={(e) => { e.stopPropagation() }} style={{
                    marginTop: imgPos.y,
                    marginLeft: imgPos.x,
                    position: 'absolute',
                    border: '2px solid #FC0',
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
