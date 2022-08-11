import { css } from '@emotion/react'
import { Canvas } from '@react-three/fiber'
import ColorController from './controller/controller'

interface Props {
  children: React.ReactNode
}
const TCanvas: React.VFC<Props> = ({ children }) => {
  return (
    <Canvas camera={{ fov: 30, position: [0, 3, 10] }} shadows>
      {children}
    </Canvas>
  )
}

export default TCanvas
