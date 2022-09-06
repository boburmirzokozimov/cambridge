import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isOpen: true
}

export const openSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        toggle: (state) => {
            state.isOpen = !state.isOpen
        }

    },
})

export const { toggle } = openSlice.actions

export default openSlice.reducer