import { useAppDispatch } from '@src/hooks/redux'
import {
  MaterialState,
  toggleMaterialinitialize,
} from '@src/module/features/3d/threeDSlice'
import { Checkbox } from 'antd'
import { CheckboxChangeEvent } from 'antd/lib/checkbox'

interface Props {
  material: MaterialState
}

const CustomCheckbox: React.VFC<Props> = ({ material }) => {
  const dispatch = useAppDispatch()
  const handleChange = (e: CheckboxChangeEvent) => {
    dispatch(toggleMaterialinitialize(e.target.checked))
  }

  return (
    <Checkbox onChange={handleChange} defaultChecked={true}>
      Initialize
    </Checkbox>
  )
}

export default CustomCheckbox
