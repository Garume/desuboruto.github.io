import { css } from '@emotion/react'
import { useAppDispatch, useAppSelector } from '@src/hooks/redux'
import { Typography } from 'antd'
import ColorPicker from './colorPicker'
import CustomCheckbox from './customCheckbox'
import CustomSlider from './customSlider'

const { Text } = Typography

const ColorController: React.VFC = () => {
  const { material } = useAppSelector((state) => state.threeD)

  return (
    <div css={ContainerStyle}>
      <ColorPicker material={material} />
      <div css={SliderStyle}>
        <Text css={TextStyle}>Roughness </Text>
        <CustomSlider name="roughness" material={material} />
      </div>
      <div css={SliderStyle}>
        <Text css={TextStyle}>Metalness </Text>
        <CustomSlider name="metalness" material={material} />
      </div>
      <div css={CheckboxStyle}>
        <CustomCheckbox material={material} />
      </div>
    </div>
  )
}

const ContainerStyle = css`
  position: absolute;
  top: 20vh;
  left: 20px;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`
const SliderStyle = css`
  margin-top: 30px;
  display: grid;
  grid-template-rows: auto auto;
  row-gap: 10px;
`
const TextStyle = css`
  color: white;
`

const CheckboxStyle = css`
  margin-top: 30px;
  display: grid;
  grid-template-rows: auto auto;
`

export default ColorController
