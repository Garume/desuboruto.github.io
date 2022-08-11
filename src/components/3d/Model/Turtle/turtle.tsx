import { css } from '@emotion/react'
import { Environment, OrbitControls } from '@react-three/drei'
import { useAppSelector } from '@src/hooks/redux'
import React, { Suspense } from 'react'
import ColorController from '../../controller/controller'
import TCanvas from '../../ThreeCanvas'
import { Model } from './Model'

const TurtleModel: React.VFC = () => {
  const { material } = useAppSelector((state) => state.threeD)
  return (
    <div css={CanvasStyle}>
      <TCanvas>
        <OrbitControls enablePan={false} />
        <Suspense fallback={null}>
          <Model material={material} />
          <Environment preset="sunset" />
        </Suspense>
      </TCanvas>
      <ColorController />
    </div>
  )
}

const CanvasStyle = css`
  height: 70vh;
`

export default TurtleModel
