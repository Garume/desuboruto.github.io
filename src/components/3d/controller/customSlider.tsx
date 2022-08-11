import { css } from '@emotion/react'
import { useAppDispatch } from '@src/hooks/redux'
import {
  MaterialState,
  updateMaterialOther,
} from '@src/module/features/3d/threeDSlice'
import { Slider } from 'antd'
import { SliderMarks } from 'antd/lib/slider'

interface Props {
  name: 'roughness' | 'metalness'
  material: MaterialState
}

const CustomSlider: React.VFC<Props> = ({ name, material }) => {
  const dispatch = useAppDispatch()

  const valueChangeHandler = (value: number) => {
    dispatch(updateMaterialOther({ type: name, value: value }))
  }

  return (
    <Slider
      trackStyle={{ backgroundColor: material.hexColor }}
      handleStyle={{ borderColor: material.hexColor }}
      aria-label={name}
      defaultValue={
        name === 'roughness' ? material.roughness : material.matelness
      }
      step={0.1}
      min={0}
      max={1}
      onChange={valueChangeHandler}
    />
  )
}

export default CustomSlider
