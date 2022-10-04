import React, { useContext, useEffect, useState } from 'react'
import MousePosition from '../context/MousePosition'

type Props = {
    children: React.ReactNode
    className?: string
}
export type Vector = {
    x: number
    y: number
}
const Draggable = (props: Props) => {
    const mousePosition = useContext(MousePosition)
    const [position, setPosition] = useState<Vector>({ x: 0, y: 0 })
    const [isDragging, setIsDragging] = useState(false)

    const box_ref = React.createRef<HTMLDivElement>()

    useEffect(() => {
        if (isDragging) {
            if (box_ref.current) {
                setPosition({
                    x: mousePosition.x,
                    y: mousePosition.y,
                })
            }
        }
    }, [isDragging, mousePosition, position, box_ref])

    return (
        <div
            ref={box_ref}
            className={`absolute cursor-pointer ${props.className}`}
            onMouseDown={() => {
                setIsDragging(true)
            }}
            onMouseUp={() => {
                setIsDragging(false)
            }}
            style={{ left: position.x, top: position.y }}
        >
            {props.children}
        </div>
    )
}

export default Draggable
