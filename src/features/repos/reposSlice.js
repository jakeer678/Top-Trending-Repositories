import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  repos: [],
  selecteRepo: null,
};

export const reposSlice = createSlice({
  name: "repos",
  initialState,

  reducers: {
    setRepos: (state, action) => {
      state.repos = action.payload;
    },
    selectedRepoList: (state, action) => {
      state.selecteRepo = action.payload;
    },
  },
});




export const fetchTrendingRepos = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://api.github.com/search/repositories?q=created:%3E2023-01-01&sort=stars&order=desc`
    );
    dispatch(setRepos(response.data.items));
    console.log(response, "fetchTrendingRepos");
  } catch (error) {
    console.error("Failed to fetch trending repos", error);
  }
};


export const { setRepos, selectedRepoList } = reposSlice.actions;
export default reposSlice.reducer;