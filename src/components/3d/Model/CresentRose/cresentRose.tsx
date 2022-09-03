import { css } from '@emotion/react'
import { Environment, OrbitControls } from '@react-three/drei'
import { useAppSelector } from '@src/hooks/redux'
import React, { Suspense } from 'react'
import ColorController from '../../controller/controller'
import TCanvas from '../../ThreeCanvas'
import { Model } from './Model'

const CresentRoseModel: React.VFC = () => {
  return (
    <div css={CanvasStyle}>
      <TCanvas>
        <OrbitControls enablePan={false} />
        <Suspense fallback={null}>
          <Model />
          <Environment preset="sunset" />
        </Suspense>
      </TCanvas>
    </div>
  )
}

const CanvasStyle = css`
  height: 70vh;
`

export default CresentRoseModel
