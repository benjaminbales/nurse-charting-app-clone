import React from 'react';
import { Box, Typography, TextField, Button, Checkbox, FormControlLabel } from '@mui/material';
import Header from '../components/Header';
import { useStore } from '../store';
import { useNavigate } from 'react-router-dom';

export default function NewOrderPage() {
  const { patients, selectedPatientId } = useStore();
  const navigate = useNavigate();
  const patient = patients.find(p => p.id === selectedPatientId);

  if (!patient) return <Typography>Patient not found</Typography>;

  return (
    <Box sx={{ height: '100vh', bgcolor: '#333', color: 'white', overflow: 'auto' }}>
      <Header title={`${patient.location} - ${patient.name}`} subtitle="Physicians" showBack />
      
      <Box sx={{ p: 2 }}>
        <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle2" sx={{ color: '#ffeb3b' }}>Send to Physician</Typography>
            <TextField fullWidth variant="outlined" size="small" sx={{ bgcolor: 'white', borderRadius: 1 }} />
        </Box>
        <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle2" sx={{ color: '#ffeb3b' }}>Copy to Physician</Typography>
            <TextField fullWidth variant="outlined" size="small" sx={{ bgcolor: 'white', borderRadius: 1 }} />
        </Box>
        
        <FormControlLabel 
            control={<Checkbox defaultChecked sx={{ color: '#76ff03', '&.Mui-checked': { color: '#76ff03' } }} />} 
            label="Send Order to Physician" 
        />

        <Box sx={{ mt: 2, mb: 2 }}>
            <Typography variant="subtitle2" sx={{ color: '#ffeb3b' }}>Order Read Back</Typography>
            <TextField select fullWidth value="YES" variant="outlined" size="small" sx={{ bgcolor: 'white', borderRadius: 1 }}>
                <option value="YES">YES</option>
            </TextField>
        </Box>

        <Typography variant="subtitle1" sx={{ bgcolor: '#424242', p: 1, mb: 2 }}>Instructions</Typography>

        <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle2" sx={{ color: '#ffeb3b' }}>Order Date</Typography>
            <TextField fullWidth value="2/25/25 1:06 PM" variant="outlined" size="small" sx={{ bgcolor: 'white', borderRadius: 1 }} />
        </Box>

        <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle2" sx={{ color: '#ffeb3b' }}>Instructions</Typography>
            <TextField multiline rows={4} fullWidth variant="outlined" sx={{ bgcolor: 'white', borderRadius: 1 }} />
        </Box>

        <Box sx={{ display: 'flex', gap: 2, mt: 4, mb: 4 }}>
            <Button variant="contained" color="inherit" sx={{ bgcolor: '#e0e0e0', color: 'black' }} onClick={() => navigate(-1)}>Save</Button>
            <Button variant="contained" color="inherit" sx={{ bgcolor: '#e0e0e0', color: 'black' }} onClick={() => navigate(-1)}>Discard</Button>
        </Box>
      </Box>
    </Box>
  );
}
