import Layout from '@src/components/layout'
import { Typography } from 'antd'
import { TitleStyle } from '.'
import TurtleModel from '@src/components/3d/Model/Turtle/turtle'
import CresentRoseModel from '@src/components/3d/Model/CresentRose/cresentRose'

const { Title } = Typography

interface Props {}

const Turtle: React.FC<Props> = () => {
  return (
    <Layout>
      <div>
        <Title css={TitleStyle}>Works 3D Page</Title>
        <h1 css={TitleStyle}>CresentRose by RWBY</h1>
        <CresentRoseModel />
      </div>
    </Layout>
  )
}

export default Turtle
