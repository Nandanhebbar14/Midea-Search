import { createSlice } from "@reduxjs/toolkit";
import { toast, Zoom } from "react-toastify";
const collectionSclice = createSlice({
    name: 'collections',
    initialState: {
        items: JSON.parse(localStorage.getItem('collections')) || []
    },
    reducers: {
        addCollection: (state, action) => {
            const alreadyExixts = state.items.find((item) => item.id === action.payload.id)
            if (!alreadyExixts) {
                state.items.push(action.payload)
                localStorage.setItem('collections', JSON.stringify(state.items))
            }
        },
        removeCollection: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload.id)
            localStorage.setItem('collections', JSON.stringify(state.items))
        },
        clearCollection: (state, action) => {
            state.items = []
            localStorage.removeItem('collections')

        },
        toastify: () => {
            toast.success('Added to collection!', {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                transition: Zoom,
            });
        },
        removetoastify: () => {
            toast.success('Removed from collection!', {
                position: "bottom-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                transition: Zoom,
            });
        }

    }
}
)

export const { addCollection, removeCollection,removetoastify, clearCollection, toastify } = collectionSclice.actions
export default collectionSclice.reducer