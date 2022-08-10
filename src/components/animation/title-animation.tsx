import { LawIcon } from '@primer/octicons-react'
import particleJson from '@src/assets/particle-config'
import { AnimatePresence, motion } from 'framer-motion'
import { useCallback, useState } from 'react'
import Particles from 'react-particles'
import { loadFull } from 'tsparticles'
import { Container, Engine } from 'tsparticles-engine'
import Layout from '../layout'

interface Props {
  children: React.ReactNode
  isVisible: boolean
}

const TitleAnimation: React.VFC<Props> = ({ children, isVisible }) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine)

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container)
    },
    []
  )
  return (
    <Layout isVisible={!isVisible}>
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 1 }} // 初期状態
            exit={{ opacity: 0 }} // アンマウント時
            transition={{
              duration: 0.5,
            }}
          >
            <Particles
              id="tsparticles"
              options={particleJson as any}
              init={particlesInit}
              loaded={particlesLoaded}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  )
}

export default TitleAnimation
