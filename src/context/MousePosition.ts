import { createContext } from 'react'
import { Vector } from '../components/Draggable'

const MousePosition = createContext<Vector>({
    x: 0,
    y: 0,
})

export default MousePosition
