import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';

export default function SearchBar({filterName}) {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 }}}>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField   id="input-with-sx" label="Search a pacient..." variant="standard" sx={{width: '100%'}} />
      </Box>
    </Box>
  );
}
