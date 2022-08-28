import { createSlice } from '@reduxjs/toolkit'


export const positionSlice = createSlice({
    name: 'position',
    initialState: {
        coords: {},
        mocked: {},
        message: ''
    },
    reducers: {
        update: (state,action) => {
            state.coords = action.payload.coords,
            state.mocked = action.payload.mocked
            state.message = action.payload.message
        },
        error: (state, action) => {
            state.message = action.payload.message
        }
    }
})

export const { update, error } = positionSlice.actions
export default positionSlice.reducer