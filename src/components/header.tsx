import { css } from '@emotion/react'
import { Header } from 'antd/lib/layout/layout'
import HamburgerManu from './manu/hamburgermanu'

interface Props {}

const GlobalHeader: React.VFC<Props> = (props) => {
  return (
    <Header css={HeaderStyle}>
      <div css={MenuStyle}>
        <HamburgerManu />
      </div>
    </Header>
  )
}

const HeaderStyle = css`
  background-color: #ffffff00;
  position: fixed;
  right: 30px !important ;
  z-index: 100;
`
const MenuStyle = css``

export default GlobalHeader
