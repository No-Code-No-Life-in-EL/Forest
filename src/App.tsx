import { useState } from 'react'
import './css/App.css'

import WelcomePage from './components/WelcomePage'
import AnswerPage from './components/AnswerPage'
import PublishPage from './components/PublishPage'
import CommentPage from './components/CommentPage'

import Background from './assets/background.jpg'
import Tree from './assets/little-tree.svg'

// import interface
import { Item } from './typings/template'

const itemMap = { 'tree': Tree }

const defaultItem = {
    type: 'tree',
    x: 250,
    y: 850,
    author: 'OrangeX4',
    comment: 'Hello World!'
} as Item

function App() {
    const clientWidth = document.documentElement.clientWidth
    const clientHeight = document.documentElement.clientHeight

    // Cloud data
    const [data, setData] = useState([
        {
            type: 'tree',
            x: 200,
            y: 800,
            author: 'XiaoMing',
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
    const [currentItemIndex, setCurrentItemIndex] = useState(-1)

    // Native data
    const [nativeItem, setNativeItem] = useState(null as Item | null)


    // State Machine
    const [page, setPage] = useState('WELCOME')

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
                            key={index}
                            alt={item.author + '\'s ' + item.type}
                            onClick={(e) => {
                                setCurrentItemIndex(index)
                                setPage('COMMENT')
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
                    {(() => {
                        switch (page) {
                            case 'WELCOME':
                                return (
                                    <WelcomePage data={data}
                                        onAnswer={() => { setPage('ANSWER') }} />
                                )
                            case 'ANSWER':
                                return (
                                    <AnswerPage onSuccess={() => {
                                        setPage('PUBLISH')
                                    }}
                                        onCancel={() => {
                                            setPage('WELCOME')
                                        }} />
                                )
                            case 'PUBLISH':
                                return (
                                    <PublishPage item={nativeItem ? nativeItem : defaultItem}
                                        onChange={(item) => {
                                            setNativeItem(item)
                                        }}
                                        onSuccess={(name, comment) => {
                                            if (nativeItem) {
                                                setData([...data, {
                                                    ...nativeItem,
                                                    author: name,
                                                    comment
                                                } as Item])
                                            }
                                            setNativeItem(null)
                                            setPage('WELCOME')
                                        }}
                                        onCancel={() => {
                                            setNativeItem(null)
                                            setPage('WELCOME')
                                        }} />

                                )
                            case 'COMMENT':
                                return (
                                    <CommentPage item={data[currentItemIndex]}
                                        onCancel={() => {
                                            setNativeItem(null)
                                            setPage('WELCOME')
                                        }} />

                                )
                            default:
                                return (
                                    <WelcomePage data={data}
                                        onAnswer={() => { setPage('ANSWER') }} />
                                )
                        }
                    })()}
                </div>
            </div>
        </div>
    )
}

export default App
