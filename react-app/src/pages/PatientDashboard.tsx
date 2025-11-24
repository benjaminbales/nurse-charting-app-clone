import React from 'react';
import { Box, Grid, Typography, Paper, Button } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import FolderIcon from '@mui/icons-material/Folder';
import NoteIcon from '@mui/icons-material/Note';
import BookIcon from '@mui/icons-material/Book';
import InfoIcon from '@mui/icons-material/Info';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import Header from '../components/Header';
import { useStore } from '../store';
import { useNavigate } from 'react-router-dom';

export default function PatientDashboard() {
  const { patients, selectedPatientId } = useStore();
  const navigate = useNavigate();
  const patient = patients.find(p => p.id === selectedPatientId);

  if (!patient) return <Typography>Patient not found</Typography>;

  const menuItems = [
    { label: 'Visit Actions', icon: <AssignmentIcon sx={{ fontSize: 40, color: '#ff9800' }} />, path: '/visit-actions' },
    { label: 'Medical Records', icon: <FolderIcon sx={{ fontSize: 40, color: '#ffeb3b' }} />, path: '#' },
    { label: 'Notes', icon: <NoteIcon sx={{ fontSize: 40, color: '#2196f3' }} />, path: '#' },
    { label: 'PRN', icon: <BookIcon sx={{ fontSize: 40, color: '#ff5722' }} />, path: '#' },
    { label: 'Reference', icon: <InfoIcon sx={{ fontSize: 40, color: '#03a9f4' }} />, path: '#' },
  ];

  return (
    <Box sx={{ height: '100vh', bgcolor: '#333', display: 'flex', flexDirection: 'column' }}>
      <Header title="PointCare Manager" />
      
      <Box sx={{ bgcolor: '#424242', p: 2, borderBottom: '1px solid #555' }}>
        <Typography variant="h6" color="white">{patient.name} - {patient.mrn}</Typography>
        <Typography variant="body2" color="#bdbdbd">{patient.location}</Typography>
        <Typography variant="body2" color="#bdbdbd">{patient.phone}</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
            <Typography color="#bdbdbd">{patient.visitDate}</Typography>
            <Typography color="#ff9800" fontWeight="bold">Visit {patient.visitNumber} !</Typography>
        </Box>
      </Box>

      <Box sx={{ flexGrow: 1, p: 2 }}>
        <Grid container spacing={2}>
          {menuItems.map((item) => (
            <Grid item xs={6} key={item.label}>
              <Paper 
                sx={{ 
                  bgcolor: '#424242', 
                  color: 'white', 
                  p: 2, 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center',
                  cursor: 'pointer',
                  height: 120,
                  justifyContent: 'center'
                }}
                onClick={() => item.path !== '#' && navigate(item.path)}
              >
                {item.icon}
                <Typography variant="body2" sx={{ mt: 1 }}>{item.label}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
         <Button 
            startIcon={<DirectionsRunIcon />} 
            sx={{ color: '#76ff03', textTransform: 'none' }}
            onClick={() => navigate('/')}
         >
            Sign Out
         </Button>
      </Box>
    </Box>
  );
}
