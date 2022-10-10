import {configureStore,createAsyncThunk,createSlice} from "@reduxjs/toolkit"
const initialstate={
    movies: [],
    genresLoaded:false,
    genres: []
}
const NetflixSlice= createSlice({
     name: "Netflix",
     initialState,
    extraReducers:(builder)=>{},

    })
export const store= configureStore({
    reducer:{
        netflix: NetflixSlice.reducer,
    }
})