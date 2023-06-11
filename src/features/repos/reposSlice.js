import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTrendingRepos = createAsyncThunk(
  "repos/fetchTrendingRepos",
  async ({ date }, { rejectWithValue }) => {
    try {
      const userLogin = localStorage.getItem("idToken")
      const response = await axios.get(
        `https://api.github.com/search/repositories?q=created:%3E${date}&sort=stars&order=desc/${userLogin}`
      );
      const list = response.data.items;
      return list
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchRepoDetails = createAsyncThunk(
  "repos/fetchRepoDetails",
  async (repoId, { rejectWithValue }) => {
    console.log(repoId, "uuuu");
    try {
      const response = await axios.get(
        `https://api.github.com/repositories/${repoId}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const reposSlice = createSlice({
  name: "repos",
  initialState: {
    repos: [],
    selectedRepo: null,
    loading: false,
    error: null,
  },
  reducers: {
    setSelectedRepo: (state, action) => {
      state.selectedRepo = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrendingRepos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTrendingRepos.fulfilled, (state, action) => {
        state.repos = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchTrendingRepos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchRepoDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRepoDetails.fulfilled, (state, action) => {
        state.selectedRepo = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchRepoDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setSelectedRepo } = reposSlice.actions;
export default reposSlice.reducer;
