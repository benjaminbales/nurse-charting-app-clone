import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate, useLocation } from 'react-router-dom';

interface HeaderProps {
  title: string;
  subtitle?: string;
  showBack?: boolean;
}

export default function Header({ title, subtitle, showBack }: HeaderProps) {
  const navigate = useNavigate();

  return (
    <AppBar position="static" sx={{ bgcolor: '#e0e0e0', color: 'black', boxShadow: 'none', borderBottom: '1px solid #ccc' }}>
      <Toolbar variant="dense">
        {showBack && (
          <IconButton edge="start" color="inherit" onClick={() => navigate(-1)} aria-label="back">
            <ArrowBackIcon />
          </IconButton>
        )}
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="subtitle1" component="div" sx={{ fontWeight: 'bold' }}>
            {title}
          </Typography>
          {subtitle && (
            <Typography variant="caption" component="div">
              {subtitle}
            </Typography>
          )}
        </Box>
        <IconButton color="inherit">
          <RefreshIcon />
        </IconButton>
        <IconButton edge="end" color="inherit">
          <MoreVertIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
