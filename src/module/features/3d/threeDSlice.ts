import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { rgb } from 'csx'
import build from 'next/dist/build'
import { RgbaColor } from 'react-colorful'

export interface ThreeDState {
  material: MaterialState
}

export interface MaterialState {
  hexColor: string
  alpha: number
  roughness: number
  matelness: number
  initialize: boolean
}

const initialMaterial: MaterialState = {
  hexColor: '#fff',
  alpha: 1,
  roughness: 0,
  matelness: 1,
  initialize: true,
}

const initialState: ThreeDState = {
  material: initialMaterial,
}

export const updateMaterialColor = createAsyncThunk(
  'threeD/updateMaterialColor',
  (newColor: RgbaColor) => {
    return {
      rgb: rgb(newColor.r, newColor.g, newColor.b).toHexString(),
      alpha: newColor.a,
    }
  }
)

export interface UpdateMaterialOther {
  type: 'roughness' | 'metalness'
  value: number
}

export const updateMaterialOther = createAsyncThunk(
  'threeD/updateMaterialOther',
  ({ type, value }: UpdateMaterialOther) => {
    const date: UpdateMaterialOther = {
      type: type,
      value: value,
    }
    return date
  }
)

export const toggleMaterialinitialize = createAsyncThunk(
  'threeD/toggleMaterialinitialize',
  (initialize: boolean) => {
    return initialize
  }
)

export const threeDSlice = createSlice({
  name: 'threeD',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updateMaterialColor.fulfilled, (state, action) => {
      state.material.hexColor = action.payload.rgb
      state.material.alpha = action.payload.alpha
    })
    builder.addCase(updateMaterialOther.fulfilled, (state, action) => {
      action.payload.type === 'metalness'
        ? (state.material.matelness = action.payload.value)
        : (state.material.roughness = action.payload.value)
    })
    builder.addCase(toggleMaterialinitialize.fulfilled, (state, action) => {
      state.material.initialize = action.payload.valueOf()
    })
  },
})

export default threeDSlice.reducer
