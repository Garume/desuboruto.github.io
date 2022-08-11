import Layout from '@src/components/layout'
import { Typography } from 'antd'
import { TitleStyle } from '.'
import TurtleModel from '@src/components/3d/Model/Turtle/turtle'

const { Title } = Typography

interface Props {}

const Turtle: React.FC<Props> = () => {
  return (
    <Layout>
      <div>
        <Title css={TitleStyle}>Works 3D Page</Title>
        <h1 css={TitleStyle}>Turtle to Bird</h1>
        <TurtleModel />
      </div>
    </Layout>
  )
}

export default Turtle
