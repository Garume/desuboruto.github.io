import { css } from '@emotion/react'
import { Layout, Typography } from 'antd'

const { Text, Title } = Typography

interface Props {}

const TitleWorks: React.VFC<Props> = (props) => {
  return (
    <div css={ContentStyle}>
      <Title css={TitleStyle}>Works</Title>
      <Text css={TextStyle}>茨城在住の学生エンジニア。</Text>
    </div>
  )
}

const ContentStyle = css`
  position: relative;
  height: 100vh;
  background: #f0f0f0;
`

const TitleStyle = css`
  top: 20%;
  font-size: 56px !important ;
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
`

const TextStyle = css`
  top: 30%;
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
`
export default TitleWorks
