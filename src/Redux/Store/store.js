import { configureStore } from '@reduxjs/toolkit'
import Position, { positionSlice } from '../feature/Position'


export default configureStore({

    reducer: {
        position : Position
    }

})