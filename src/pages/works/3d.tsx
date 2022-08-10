import { css } from '@emotion/react'
import BirdCard from '@src/components/3d/card/tori'
import Layout from '@src/components/layout'
import { Typography } from 'antd'

const { Title } = Typography

interface Props {}

const ThreeD: React.FC<Props> = () => {
  return (
    <Layout>
      <div>
        <Title css={TitleStyle}>Works 3D Page</Title>
      </div>
      <BirdCard />
    </Layout>
  )
}

const TitleStyle = css`
  text-align: center;
`
export default ThreeD
