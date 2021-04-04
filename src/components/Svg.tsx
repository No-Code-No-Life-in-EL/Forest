import '../css/little-tree.css'

// import { useState } from 'react'
import { ReactSVG } from 'react-svg'

import LittleTree from '../assets/little-tree.svg'
// import { ReactComponent as LittleTree } from '../assets/little-tree.svg'

const Svg = () => {
    // const [animate, setAnimate] = useState(false)

    return (
        <ReactSVG
            className="spirit"
            afterInjection={(_err, svg) => {
                // if (animate && svg) {
                //     svg.classList.add('is-clicked')
                // }
                if (svg) {
                    svg.classList.add('is-clicked')
                }
            }}
            src={LittleTree}
        />
        // <LittleTree className="spirit" style={{marginTop: "-2%"}} />
    )
}

export default Svg