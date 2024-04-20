import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    readersReviews: [],
    userReview: "",
    userRating: "",
    userName: "",
    reload: false,
}

export const reviewsSlice = createSlice({
    name: "reviews",
    initialState,
    reducers: {
        setReadersReviews: (state, action) => {
            state.readersReviews = action.payload;
        },
        setUserReview: (state, action) => {
            state.userReview = action.payload;
        },
        setUserRating: (state, action) => {
            state.userRating = action.payload;
        },
        setUserName: (state, action) => {
            state.userName = action.payload;
        },
        setReload: (state, action) => {
            state.reload = action.payload;
        },
    }
})

export const { setReadersReviews, setUserReview, setUserRating, setUserName, setReload} = reviewsSlice.actions;

export default reviewsSlice.reducer;