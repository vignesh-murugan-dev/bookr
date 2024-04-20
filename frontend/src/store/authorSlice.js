import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    authorData: [],
}

export const authorSlice = createSlice({
    name: "author",
    initialState,
    reducers: {
        setAuthorData: (state, action) => {
            state.authorData = action.payload;
        }
    }
})

export const { setAuthorData } = authorSlice.actions;

export default authorSlice.reducer;