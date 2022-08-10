import { GithubOutlined, TwitterOutlined } from '@ant-design/icons'
import { css } from '@emotion/react'
import { Layout as AntLayout } from 'antd'
import { motion } from 'framer-motion'
import GlobalFooter from './footer'
import GrovalHeader from './header'

interface Props {
  children: React.ReactNode
  isVisible?: boolean
}

const { Content } = AntLayout

const Layout: React.VFC<Props> = ({ children, isVisible = true }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 500 }} // 初期状態
      animate={{ opacity: 1, x: 0 }} // マウント時
      exit={{ opacity: 0, x: -500 }} // アンマウント時
      transition={{
        duration: 0.5,
      }}
    >
      <AntLayout css={LayoutStyle}>
        {isVisible && <GrovalHeader />}
        <Content css={ContentStyle}>
          <div>{children}</div>
        </Content>
        {isVisible && <GlobalFooter />}
      </AntLayout>
    </motion.div>
  )
}

const LayoutStyle = css`
  background-color: #ffffff;
`

const ContentStyle = css`
  background-color: #ffffff;
`

export default Layout
