import { css } from '@emotion/react'
import { Card } from 'antd'

const BirdCard: React.FC = () => {
  const { Meta } = Card

  return (
    <Card css={CardStyle} cover={<img alt="Bird to Turtle" src="/bird.jpg" />}>
      <Meta title={<p css={TitleStyle}>Bird to Turtle</p>} />
    </Card>
  )
}

const CardStyle = css`
  width: 40vw;
  margin-left: 5vw;
  border-radius: 20px;
  overflow: hidden;
`
const TitleStyle = css`
  display: flex;
  justify-content: center;
`
export default BirdCard
