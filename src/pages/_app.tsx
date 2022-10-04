import '../styles/globals.css'
import type { AppType } from 'next/dist/shared/lib/utils'
import MousePosition from '../context/MousePosition'
import { useEffect, useState } from 'react'
import { Vector } from '../components/Draggable'

const MyApp: AppType = ({ Component, pageProps }) => {
    const [mousePosition, setMousePosition] = useState<Vector>({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setMousePosition({ x: event.clientX, y: event.clientY })
        }
        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    })

    return (
        <MousePosition.Provider value={mousePosition}>
            <Component {...pageProps} />
        </MousePosition.Provider>
    )
}

export default MyApp
