'use client';

import { ChangeEventHandler, useState } from 'react';

import { SendOutlined } from '@mui/icons-material';
import { Box, Button, TextField } from '@mui/material';

const InputSection = () => {
  const [postText, setPostText] = useState('');
  const [posts, setPosts] = useState([
    { id: 1, name: 'John Doe', pictureUrl: 'url_to_image', timestamp: '2024-06-11T12:00:00Z', text: 'Hello World!' },
    {
      id: 2,
      name: 'Jane Smith',
      pictureUrl: 'url_to_image',
      timestamp: '2024-06-10T12:00:00Z',
      text: 'This is a post!',
    },
  ]);

  const handlePostChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setPostText(event.target.value);
  };

  const handlePostSubmit = () => {
    const newPost = {
      id: posts.length + 1,
      name: 'Your Name',
      pictureUrl: 'url_to_your_picture',
      timestamp: new Date().toISOString(),
      text: postText,
    };
    setPosts([...posts, newPost]);
    setPostText('');
  };

  return (
    <Box sx={{ width: '100%' }}>
      <TextField
        multiline
        rows={4}
        variant="outlined"
        placeholder="Write something..."
        value={postText}
        onChange={handlePostChange}
        sx={{ width: '100%' }}
      />
      <div style={{ textAlign: 'right', marginTop: 20 }}>
        <Button variant="contained" color="primary" onClick={handlePostSubmit}>
          <SendOutlined fontSize="inherit" />
          Post
        </Button>
      </div>
    </Box>
  );
};

export default InputSection;
