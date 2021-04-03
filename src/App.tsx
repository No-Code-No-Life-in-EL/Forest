import { useState } from 'react'
import './css/App.css'

interface Item {
    type: 'desert' | 'lawn'
}

const colorMap = { desert: '#f5ffaa', lawn: '#bbff88' }

function App() {
    const clientWidth = document.documentElement.clientWidth
    const clientHeight = document.documentElement.clientHeight

    // Generator data for test
    const gridData: Item[][] = []
    for (let i = 0; i < 20; i++) {
        gridData.push([])
        for (let j = 0; j < 20; j++) {
            gridData[i].push({
                type: Math.random() > 0.5 ? "desert" : "lawn"
            })
        }
    }

    // Main data
    const [grid] = useState(gridData)
    // const [grid, setGrid] = useState(gridData)

    // Radius for grid
    function getRadius(x: number, y: number): string {
        if (grid[y][x].type === 'lawn') {
            let result = ''
            // Left & top
            if (x === 0 || y === 0 || grid[y][x - 1].type === 'lawn' || grid[y - 1][x].type === 'lawn') {
                result += '0px '
            } else {
                result += '10px '
            }
            // Right & top
            if (x === 19 || y === 0 || grid[y][x + 1].type === 'lawn' || grid[y - 1][x].type === 'lawn') {
                result += '0px '
            } else {
                result += '10px '
            }
            // Right & down
            if (x === 19 || y === 19 || grid[y][x + 1].type === 'lawn' || grid[y + 1][x].type === 'lawn') {
                result += '0px '
            } else {
                result += '10px '
            }
            // Left & down
            if (x === 0 || y === 19 || grid[y][x - 1].type === 'lawn' || grid[y + 1][x].type === 'lawn') {
                result += '0px '
            } else {
                result += '10px '
            }
            
            return result
        } else {
            return '0'
        }
    }

    return (
        <div className="App">
            <div className={clientHeight > clientWidth ? "game-top" : "game-left"}>
                {grid.map((line, y) => line.map((item, x) =>
                    <div
                        style={{
                            height: "5%",
                            width: "5%",
                            borderRadius: getRadius(x, y),
                            backgroundColor: colorMap[item.type]
                        }}
                        className="item"
                    />
                ))}
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
