import { GithubOutlined, TwitterOutlined } from '@ant-design/icons'
import { css } from '@emotion/react'
import { Menu, MenuProps } from 'antd'
import { Footer } from 'antd/lib/layout/layout'
import TextLink from './atoms/molecules/textlink'

const items: MenuProps['items'] = [
  {
    label: <TextLink href="/">Main</TextLink>,
    key: 'main',
  },
  {
    label: <TextLink href="/about">About</TextLink>,
    key: 'about',
  },
  {
    label: <TextLink href="/works">Works</TextLink>,
    key: 'works',
  },
  {
    label: <TextLink href="/github">Github</TextLink>,
    key: 'github',
  },
  {
    label: <TextLink href="/contact">Contact</TextLink>,
    key: 'contact',
  },
]

interface Props {}

const GlobalFooter: React.VFC<Props> = (props) => {
  return (
    <Footer>
      <div css={FooterStyle}>
        <Menu mode="horizontal" items={items} css={MenuStyle} />
        <div css={IconStyle}>
          <TwitterOutlined />
          <GithubOutlined />
        </div>
        <p>© All rights reserved by Garume.</p>
      </div>
    </Footer>
  )
}

const FooterStyle = css`
  text-align: center;
`

const IconStyle = css`
  font-size: 24px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  margin: 10px;
`
const MenuStyle = css`
  background-color: #f0f2f5;
  display: flex;
  justify-content: center;
`

export default GlobalFooter
