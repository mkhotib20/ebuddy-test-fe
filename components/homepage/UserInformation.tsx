'use client';

import { useState } from 'react';

import { Button, TextField, Typography } from '@mui/material';
import Image from 'next/image';

import useUserData from '@/hooks/useUserData';

const UserInformation = () => {
  const [name, setName] = useState('Muhammad Khotib');
  const [isEditing, setIsEditing] = useState(false);
  const userData = useUserData();

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // You can add your save logic here, e.g., sending the updated name to a server
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <>
      <Image
        src="https://lh3.googleusercontent.com/a/ACg8ocKS6jNEQ4B0QGWzb1VuiH6NdJmwO15VE8WIyJqFZpB3JylR0YMhNA=s96-c"
        width={96}
        height={96}
        alt={userData?.name || 'no-image'}
      />
      {isEditing ? (
        <TextField label="Name" value={name} onChange={handleChange} fullWidth sx={{ mb: 2 }} />
      ) : (
        <Typography variant="h5" sx={{ mb: 2 }}>
          {name}
        </Typography>
      )}
      <Typography variant="body1" sx={{ mb: 1 }}>
        Email: mkhotib20@gmail.com
      </Typography>
      <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
        Updated At: 2024-06-10T09:29:01.848Z
      </Typography>
      {isEditing ? (
        <Button variant="contained" color="primary" onClick={handleSaveClick}>
          Save
        </Button>
      ) : (
        <Button variant="outlined" onClick={handleEditClick}>
          Edit
        </Button>
      )}
    </>
  );
};

export default UserInformation;
