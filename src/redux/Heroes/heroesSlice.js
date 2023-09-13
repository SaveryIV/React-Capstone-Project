import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=03248abd63964b8cda72cfeaaf01a1eb&hash=76ffadfa117d76db60ef47d6f1409938

// publicKey = 03248abd63964b8cda72cfeaaf01a1eb

// privateKey = 1bfc6125eb63af1110b765d2036f68505f725f43

// hash = 76ffadfa117d76db60ef47d6f1409938

const initialState = {
  loading: false,
  error: null,
  heroes: [],
};

const URL = 'https://gateway.marvel.com:443/v1/public/characters?limit=100&ts=1&apikey=03248abd63964b8cda72cfeaaf01a1eb&hash=76ffadfa117d76db60ef47d6f1409938';

export const fetchHeroes = createAsyncThunk('heroes/fetchHeroes', async () => {
  const resp = await axios(URL);
  return resp.data.data.results;
});
// fijarse video en mi whatsapp
const heroesSlice = createSlice({
  name: 'heroes',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchHeroes.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchHeroes.fulfilled, (state, action) => {
      state.loading = false;
      state.heroes = action.payload;
    });
    builder.addCase(fetchHeroes.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },

});

export default heroesSlice.reducer;
