import React from 'react';
import { Box, Typography, TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import Header from '../components/Header';
import { useStore } from '../store';
import { useNavigate } from 'react-router-dom';

export default function MileagePage() {
  const { patients, selectedPatientId, mileage, setMileage } = useStore();
  const navigate = useNavigate();
  const patient = patients.find(p => p.id === selectedPatientId);

  if (!patient) return <Typography>Patient not found</Typography>;

  return (
    <Box sx={{ height: '100vh', bgcolor: '#333', color: 'white' }}>
      <Header title={`${patient.location} - ${patient.name}`} subtitle="Mileage Tracking Method" showBack />
      
      <Box sx={{ p: 2 }}>
        <FormControl fullWidth sx={{ mb: 2, bgcolor: '#424242' }}>
            <Select value="ACTUAL MILEAGE" sx={{ color: 'white' }}>
                <MenuItem value="ACTUAL MILEAGE">ACTUAL MILEAGE</MenuItem>
            </Select>
        </FormControl>

        <Typography variant="subtitle2" sx={{ color: '#ffeb3b', mb: 1 }}>Odometer Mileage Reading</Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Typography sx={{ width: 100, color: '#ffeb3b' }}>Starting</Typography>
            <TextField 
                variant="outlined" 
                size="small" 
                sx={{ bgcolor: 'white', borderRadius: 1 }} 
                value={mileage.start}
                onChange={(e) => setMileage({ start: e.target.value })}
            />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Typography sx={{ width: 100, color: '#ffeb3b' }}>Ending</Typography>
            <TextField 
                variant="outlined" 
                size="small" 
                sx={{ bgcolor: 'white', borderRadius: 1 }} 
                value={mileage.end}
                onChange={(e) => setMileage({ end: e.target.value })}
            />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Typography sx={{ width: 100, color: '#ffeb3b' }}>Total</Typography>
            <Typography>{mileage.total}</Typography>
        </Box>

        <Typography variant="subtitle2" sx={{ color: '#ffeb3b', mb: 1 }}>Drive Time</Typography>
        {/* Mock Drive Time List */}
        <Box sx={{ bgcolor: '#424242', p: 1, mb: 1 }}>
            <Typography variant="body2">2/25/2025 12:45 PM</Typography>
        </Box>
        <Box sx={{ bgcolor: '#424242', p: 1, mb: 2 }}>
            <Typography variant="body2">2/25/2025 1:06 PM</Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Typography sx={{ width: 100, color: '#ffeb3b' }}>Total</Typography>
            <TextField 
                variant="outlined" 
                size="small" 
                sx={{ bgcolor: 'white', borderRadius: 1, width: 100 }} 
                value={mileage.driveTime}
                onChange={(e) => setMileage({ driveTime: e.target.value })}
            />
            <Typography sx={{ ml: 1 }}>(minutes)</Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
            <Button variant="contained" color="inherit" sx={{ bgcolor: '#e0e0e0', color: 'black' }} onClick={() => navigate(-1)}>Save</Button>
            <Button variant="contained" color="inherit" sx={{ bgcolor: '#e0e0e0', color: 'black' }} onClick={() => navigate(-1)}>Cancel</Button>
        </Box>
      </Box>
    </Box>
  );
}
