'use client';

import { useState } from 'react';

import { TextField } from '@mui/material';

import useUserData from '@/hooks/useUserData';

import type { ChangeEvent } from '../models/types';

const EditableUser = () => {
  const userData = useUserData();

  const [name, setName] = useState(userData.name);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // You can add your save logic here, e.g., sending the updated name to a server
  };

  const handleChange: ChangeEvent = (event) => {
    setName(event.target.value);
  };

  return <TextField label="Name" value={name} onChange={handleChange} fullWidth sx={{ mb: 2 }} />;
};

export default EditableUser;
