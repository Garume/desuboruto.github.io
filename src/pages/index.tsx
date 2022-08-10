import { css } from '@emotion/react'
import TitleAnimation from '@src/components/animation/title-animation'
import { useState, VFC } from 'react'

const App: VFC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true)

  const handleUnShowParticle = () => {
    setIsVisible(false)
  }

  return (
    <TitleAnimation isVisible={isVisible}>
      <div css={TitleStyle} onClick={handleUnShowParticle}>
        <h1 css={TextStyle}>Hi Garume`s portfolio</h1>
      </div>
    </TitleAnimation>
  )
}

const TextStyle = css`
  font-size: 120px;
  text-align: center;
  margin-top: 12.5%;
`

const TitleStyle = css`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`

export default App
