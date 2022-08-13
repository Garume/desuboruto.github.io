import { css } from '@emotion/react'
import { Card } from 'antd'
import { useRouter } from 'next/dist/client/router'

interface Props {
  namelink: string
  imgPath: string
  imgAlt?: string
  title: string
}

const ThreeDCard: React.VFC<Props> = ({ ...props }) => {
  const { Meta } = Card
  const router = useRouter()

  const href = '3d/' + props.namelink

  const handleClick = (e: any) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <Card
      onClick={handleClick}
      css={CardStyle}
      cover={<img alt={props.imgAlt} src={props.imgPath} />}
    >
      <Meta css={TitleStyle} title={<p css={TextStyle}>{props.title}</p>} />
    </Card>
  )
}

const CardStyle = css`
  width: 40vw;
  margin: 0px 10px;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
`
const TitleStyle = css`
  display: flex;
  justify-content: center;
`

const TextStyle = css`
  font-size: 26px;
`
export default ThreeDCard
