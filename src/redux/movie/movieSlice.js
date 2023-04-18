import {createSlice } from "@reduxjs/toolkit";

// export const fetchMovies = createAsyncThunk("movies/fetchMovies", async() => {
//     const res = await axios("https://api.themoviedb.org/3/movie/550?api_key=6f4cde2b71ab3e69600c5cc4361bfe98")
//     console.log(res.data);
//     return res.data;

// })

export const movieSlice = createSlice({
    name: "movies",
    initialState:{
        movie:[],
        status:"idle"
    },
    reducers:{},
    // extraReducers(builder)  {
    //     builder
    //     .addCase(fetchMovies.pending, (state,action) => {
    //         state.status = "loading"
    //     })
    //     .addCase(fetchMovies.fulfilled, (state,action) => {
    //         state.movie = action.payload
    //         state.status= "succeeded"
    //     })
    // }
})
// export const getstatus = (state) => state.movies.status
// export const allMovies = (state) => state.movies.movie
export default movieSlice.reducer;