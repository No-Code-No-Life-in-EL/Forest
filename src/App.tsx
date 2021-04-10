import { useState } from 'react'
import './css/App.css'

import Tree from './assets/little-tree.svg'
import Background from './assets/background.jpg'

interface Item {
    type: 'tree'
    x: number
    y: number
    author: string
    comment: string
}

const itemMap = { 'tree': Tree }

function App() {
    const clientWidth = document.documentElement.clientWidth
    const clientHeight = document.documentElement.clientHeight

    // Cloud data
    const [data, setData] = useState([
        {
            type: 'tree',
            x: 200,
            y: 800,
            author: 'OrangeX4',
            comment: 'Hello World!'
        },
        {
            type: 'tree',
            x: 250,
            y: 800,
            author: 'OrangeX4',
            comment: 'Hello Forest!'
        }
    ] as Item[])
    // Native data
    const [nativeItem, setNativeItem] = useState(null as Item | null)

    function handleGameClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        if (nativeItem) {
            setNativeItem({ ...nativeItem, x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY })
        }
    }

    return (
        <div className="App">
            <div onClick={handleGameClick} className={clientHeight > clientWidth ? "game-top" : "game-left"}>
                {
                    data.map((item, index) =>
                        <img src={itemMap[item.type]}
                            alt={item.author + '\'s ' + item.type}
                            onClick={(e) => {
                                alert(index + ' ' + item.author + ' say: "' + item.comment + '"')
                                e.stopPropagation()
                            }}
                            style={{
                                marginTop: item.y,
                                marginLeft: item.x,
                                position: 'absolute'
                            }} />
                    )
                }
                {
                    nativeItem ?
                        <img src={itemMap[nativeItem.type]}
                            alt={nativeItem.author + '\'s ' + nativeItem.type}
                            onClick={(e) => { e.stopPropagation() }}
                            style={{
                                marginTop: nativeItem.y,
                                marginLeft: nativeItem.x,
                                position: 'absolute',
                                border: '2px solid #FC0'
                            }} />
                        : null
                }
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
