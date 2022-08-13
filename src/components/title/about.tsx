import { css } from '@emotion/react'
import { Layout, Typography } from 'antd'

const { Text, Title } = Typography

interface Props {}

const TitleAbout: React.VFC<Props> = (props) => {
  return (
    <div css={ContentStyle}>
      <Title css={TitleStyle}>About me</Title>
      <Text css={TextStyle}>
        茨城在住の学生エンジニア。東京電機大学在学中。 Minecraft
        Mod開発に興味がわき、プログラミングを
        始める。Pythonを主に使用し、様々なツールを作成。
        不動産系企業のインターンに参加しバックエンド、フ
        ロンドエンド等の幅広い業務を経験。競技プログラミ
        ングやセキュリティに興味があり、AtcoderやCTFに 趣味で参加している。
      </Text>
    </div>
  )
}

const ContentStyle = css`
  position: relative;
  height: 100vh;
  background: #ffffff;
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
export default TitleAbout
