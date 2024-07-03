import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import useAxios from '../Hooks/useAxios';

const axios = useAxios();


export const fetchArtist = createAsyncThunk('artist/fetchArtist', async ({ page, limit }) => {
    const response = await axios.get(`artist?page=${page}&limit=${limit}`);
    console.log(response.data);
    return response.data;
  });

export const createArtist = createAsyncThunk('artist/createArtist', async (artistData) => {
  try {
    const formData = new FormData();
    formData.append('artistname', artistData.artistname);
    formData.append('biography', artistData.biography);
    formData.append('artistroles', artistData.artistroles);
    if (artistData.image) {
      formData.append('image', artistData.image);
    }

    const response = await axios.post('artist', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log("Create response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error creating Artist:", error.response ? error.response.data : error.message);
    throw error;
  }
});

export const updateArtist = createAsyncThunk('artist/updateArtist', async ({ _id, artistData }) => {
  try {
    const response = await axios.put(`artist/${_id}`, artistData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log("Update response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error updating Artist:", error.response ? error.response.data : error.message);
    throw error;
  }
});

export const deleteArtist = createAsyncThunk('artist/deleteArtist', async (_id) => {
  await axios.delete(`artist/${_id}`);
  return _id;
});

const artistSlice = createSlice({
  name: 'artist',
  initialState: {
    artist: [],
    loading: false,
    error: null,
    currentPage: 1,
    totalPage: 1,
    totalRecords: 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArtist.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchArtist.fulfilled, (state, action) => {
        state.loading = false;
        state.artist = action.payload.data;
        state.currentPage = action.payload.currentPage;
        state.totalPage = action.payload.totalPage;
        state.totalRecords = action.payload.totalRecords;
      })
      .addCase(fetchArtist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createArtist.fulfilled, (state, action) => {
        state.artist.push(action.payload);
      })
      .addCase(updateArtist.fulfilled, (state, action) => {
        const index = state.artist.findIndex(artist => artist._id === action.payload.data._id);
        if (index !== -1) {
          state.artist[index] = action.payload.data;
        }
      })
      .addCase(deleteArtist.fulfilled, (state, action) => {
        state.artist = state.artist.filter(artist => artist._id !== action.payload);
      });
  },
});

export default artistSlice.reducer;