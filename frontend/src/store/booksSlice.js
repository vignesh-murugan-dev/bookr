import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    books: [],
    bookData: [],
    isLoading: true,
}

export const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        setBooks: (state, action) => {
            state.books = action.payload;
        },
        setBookData: (state, action) => {
            state.bookData = action.payload;
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        }
    }
})

export const { setBooks, setBookData, setIsLoading } = booksSlice.actions;

export default booksSlice.reducer;