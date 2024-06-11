import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { Post, SocialState } from '@/models/post/types';

export const initialSocialState: SocialState = {
  posts: [],
  page: 1,
  hasNext: true,
};

const socialSlice = createSlice({
  name: 'social',
  initialState: initialSocialState,
  reducers: {
    toggleLoading: (state) => {
      state.submitingPost = !state.submitingPost;
    },
    toggleFetchingData: (state) => {
      state.fetchingData = !state.fetchingData;
    },
    submitPost: (state, action: PayloadAction<Post>) => {
      state.submitingPost = true;
      state.posts = [action.payload, ...state.posts];
    },
    initializePost: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload;
    },
    appendPost: (state, action: PayloadAction<{ posts: Post[]; hasNext: boolean }>) => {
      state.page = (state.page || 1) + 1;
      state.posts = [...state.posts, ...action.payload.posts];
      state.hasNext = action.payload.hasNext;
    },
  },
});

export const { submitPost, initializePost, toggleFetchingData, toggleLoading, appendPost } = socialSlice.actions;

export default socialSlice.reducer;
