import { css } from '@emotion/react'
import Layout from '@src/components/layout'
import { Typography } from 'antd'
import ThreeDCard from '@src/components/3d/card/card'

const { Title } = Typography

interface Props {}

const ThreeD: React.FC<Props> = () => {
  return (
    <Layout>
      <div>
        <Title css={TitleStyle}>Works 3D Page</Title>
      </div>
      <div css={CardListStyle}>
        <ThreeDCard
          namelink="kame"
          imgPath="/bird.jpg"
          imgAlt="bird to turtle"
          title="Bird to Turtle"
        />
        <ThreeDCard
          namelink="kame"
          imgPath="/turtle.jpg"
          imgAlt="turtle to bird"
          title="Turtle to Bird"
        />
        <ThreeDCard
          namelink="cresentRose"
          imgPath="/cresentRose.jpg"
          imgAlt="cresentRose"
          title="CresentRose by RWBY"
        />
      </div>
    </Layout>
  )
}

export const TitleStyle = css`
  text-align: center;
`

const CardListStyle = css`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`
export default ThreeD
