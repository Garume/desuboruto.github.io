import { css } from '@emotion/react'
import GameCard from '@src/components/game/card/card'
import Layout from '@src/components/layout'
import { Typography } from 'antd'

const { Title } = Typography

interface Props {}

const ThreeD: React.FC<Props> = () => {
  return (
    <Layout>
      <div>
        <Title css={TitleStyle}>Works Game Page</Title>
      </div>
      <div css={CardListStyle}>
        <GameCard
          namelink="BlackJack/"
          imgPath="/blackjack.jpg"
          imgAlt="blackjack"
          title="BlackJack"
          new={true}
        />
        <GameCard
          namelink="gravityball"
          imgPath="/gravityball.jpg"
          imgAlt="gravityball"
          title="GravityBall"
          new={false}
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
`
export default ThreeD
