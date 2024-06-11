'use client';

import { ChangeEventHandler, useState } from 'react';

import { SendOutlined } from '@mui/icons-material';
import { Box, Button, CircularProgress, TextField } from '@mui/material';
import dayjs from 'dayjs';

import postMutation from '@/apis/postMutation';
import useProfileState from '@/hooks/useProfileState';
import useSocialState from '@/hooks/useSocialState';
import { Post } from '@/models/post/types';
import { submitPost, toggleLoading } from '@/store/feature/socialSlice';
import { useAppDispatch } from '@/store/hooks';

const InputSection = () => {
  const { submitingPost } = useSocialState();
  const dispatch = useAppDispatch();
  const { userData } = useProfileState();

  // local state
  const [postText, setPostText] = useState('');

  const handlePostChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setPostText(event.target.value);
  };

  const handlePostSubmit = async () => {
    if (!postText) return;

    const newPost: Post = {
      name: userData.name,
      authorEmail: userData.email,
      pictureUrl: `${userData.picture}`,
      // format to locale string
      timestamp: dayjs().format(''),
      text: postText.trim(),
    };
    dispatch(submitPost(newPost));
    setPostText('');
    try {
      await postMutation(newPost);
    } catch (error) {
    } finally {
      dispatch(toggleLoading());
      document.getElementById('postInput')?.focus();
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <TextField
        disabled={!userData?.id}
        multiline
        rows={4}
        id="postInput"
        variant="outlined"
        placeholder={userData?.id ? 'Write something...' : 'Login to write post...'}
        value={postText}
        onChange={handlePostChange}
        sx={{ width: '100%' }}
      />
      <div style={{ textAlign: 'right', marginTop: 20 }}>
        <Button disabled={!postText.trim()} variant="contained" color="primary" onClick={handlePostSubmit}>
          {submitingPost ? <CircularProgress color="inherit" size={16} /> : <SendOutlined fontSize="inherit" />}
          Post
        </Button>
      </div>
    </Box>
  );
};

export default InputSection;
