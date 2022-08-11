import { useAppDispatch } from '@src/hooks/redux'
import {
  MaterialState,
  updateMaterialColor,
} from '@src/module/features/3d/threeDSlice'
import { color } from 'csx'
import { RgbaColor, RgbaColorPicker } from 'react-colorful'

interface Props {
  material: MaterialState
}

const ColorPicker: React.VFC<Props> = ({ material }) => {
  const dispatch = useAppDispatch()

  const colorRgba = () => {
    const convertedColor = color(material.hexColor).fade(material.alpha)
    return {
      r: convertedColor.red(),
      g: convertedColor.green(),
      b: convertedColor.blue(),
      a: convertedColor.alpha(),
    }
  }

  const handleColor = (necColor: RgbaColor) => {
    dispatch(updateMaterialColor(necColor))
  }

  return <RgbaColorPicker color={colorRgba()} onChange={handleColor} />
}

export default ColorPicker
