import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { Post, SocialState } from '@/models/post/types';

export const initialSocialState: SocialState = {
  posts: [],
};

const socialSlice = createSlice({
  name: 'social',
  initialState: initialSocialState,
  reducers: {
    toggleLoading: (state) => {
      state.submitingPost = !state.submitingPost;
    },
    submitPost: (state, action: PayloadAction<Post>) => {
      state.submitingPost = true;
      state.posts = [action.payload, ...state.posts];
    },
    initializePost: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload;
    },
  },
});

export const { submitPost, initializePost, toggleLoading } = socialSlice.actions;

export default socialSlice.reducer;
