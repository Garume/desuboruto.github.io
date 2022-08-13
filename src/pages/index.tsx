import { SendOutlined } from '@ant-design/icons'
import { css } from '@emotion/react'
import { MortarBoardIcon } from '@primer/octicons-react'
import TitleAnimation from '@src/components/animation/title-animation'
import TitleAbout from '@src/components/title/about'
import TitleHobby from '@src/components/title/hobby'
import TitleWorks from '@src/components/title/works'
import { motion } from 'framer-motion'
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
        {!isVisible && (
          <motion.div
            animate={{
              y: [20, -20, 20],
              x: [-50, -50],
            }}
            transition={{ repeat: Infinity, duration: 2 }}
            css={IconStyle}
          >
            <SendOutlined rotate={90} />
          </motion.div>
        )}
      </div>
      {!isVisible && (
        <>
          <TitleAbout />
          <TitleWorks />
          <TitleHobby />
        </>
      )}
    </TitleAnimation>
  )
}

const TextStyle = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -80%);
  font-size: 120px;
  white-space: nowrap;
  user-select: none;
`

const TitleStyle = css`
  position: relative;
  height: 100vh;
  background: #f0f0f0;
`

const IconStyle = css`
  font-size: 90px;
  position: absolute;
  top: 80%;
  left: 50%;
`

export default App
