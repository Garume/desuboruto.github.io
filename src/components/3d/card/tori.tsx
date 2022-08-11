import { css } from '@emotion/react'
import { Card } from 'antd'
import { useRouter } from 'next/dist/client/router'

const BirdCard: React.FC = () => {
  const { Meta } = Card
  const router = useRouter()

  const name = "kame"

  const href = "3d/" + name

  const handleClick = (e:any) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <Card onClick={handleClick} css={CardStyle} cover={<img alt="Bird to Turtle" src="/bird.jpg" />}>
      <Meta title={<p css={TitleStyle}>Bird to Turtle</p>} />
    </Card>
  )
}

const CardStyle = css`
  width: 40vw;
  margin-left: 5vw;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
`
const TitleStyle = css`
  display: flex;
  justify-content: center;
`
export default BirdCard
