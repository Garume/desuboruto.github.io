import { CaretRightOutlined, MenuOutlined } from '@ant-design/icons'
import { css } from '@emotion/react'
import { Button, Drawer } from 'antd'
import { useState } from 'react'
import TextLink from '../atoms/molecules/textlink'

const HamburgerManu = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [workDrawer, setWorkDrawer] = useState<boolean>(false)

  const showDrawer = () => {
    setIsVisible(true)
  }

  const closeDrawer = () => {
    setIsVisible(false)
  }

  const showWorkDrawer = () => {
    setWorkDrawer(true)
  }

  const onWorkDrawerClose = () => {
    setWorkDrawer(false)
  }

  return (
    <>
      <Button onClick={showDrawer}>
        <MenuOutlined />
      </Button>
      <Drawer
        visible={isVisible}
        onClose={closeDrawer}
        placement="right"
        closable={false}
        css={FontStyle}
        width={256}
      >
        <TextLink href="/" scroll={false}>
          <h1>Main</h1>
        </TextLink>
        <TextLink href="/about" scroll={false}>
          <h1>About</h1>
        </TextLink>
        <h1 onClick={showWorkDrawer}>
          Works
          <CaretRightOutlined />
        </h1>

        <Drawer
          title="Works"
          closable={false}
          onClose={onWorkDrawerClose}
          visible={workDrawer}
          width={256}
        >
          <TextLink href="/works" scroll={false}>
            <h1>Works</h1>
          </TextLink>
          <TextLink href="/works/software" scroll={false}>
            <h1>Software</h1>
          </TextLink>
          <TextLink href="/works/game" scroll={false}>
            <h1>Game</h1>
          </TextLink>
          <TextLink href="/works/3d" scroll={false}>
            <h1>3D</h1>
          </TextLink>
        </Drawer>

        <TextLink href={'/github'} scroll={false}>
          <h1>Github</h1>
        </TextLink>

        <TextLink href="/contact" scroll={false}>
          <h1>Contact</h1>
        </TextLink>
      </Drawer>
    </>
  )
}

const FontStyle = css`
  font-size: 38px;
`

export default HamburgerManu
