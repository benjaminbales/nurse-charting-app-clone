import React from 'react';
import { Box, List, ListItem, ListItemText, Typography, Button } from '@mui/material';
import Header from '../components/Header';
import { useStore } from '../store';
import { useNavigate } from 'react-router-dom';

export default function DemographicsPage() {
  const { patients, selectedPatientId } = useStore();
  const navigate = useNavigate();
  const patient = patients.find(p => p.id === selectedPatientId);

  if (!patient) return <Typography>Patient not found</Typography>;

  const sections = [
    'Patient Contact Information', 'Address', 'Advance Directives', 'Contacts',
    'Coordination Notes', 'Diagnoses', 'Directions', 'Emergency Preparedness',
    'Episode', 'Facilities', 'Inpatient Events', 'Medical Release Code',
    'Payor Source', 'Personal'
  ];

  return (
    <Box sx={{ height: '100vh', bgcolor: '#333', display: 'flex', flexDirection: 'column' }}>
      <Header title={`${patient.location} - ${patient.name}`} subtitle="Demographics" showBack />
      
      <List sx={{ flexGrow: 1, overflow: 'auto' }}>
        {sections.map((section) => (
          <ListItem key={section} sx={{ borderBottom: '1px solid #555' }}>
            <ListItemText 
              primary={<Typography color="white" fontWeight="bold">{section}</Typography>} 
            />
          </ListItem>
        ))}
      </List>

      <Box sx={{ p: 2, display: 'flex', gap: 2, bgcolor: '#424242' }}>
        <Button variant="contained" fullWidth sx={{ bgcolor: '#e0e0e0', color: 'black' }} onClick={() => navigate(-1)}>Save</Button>
        <Button variant="contained" fullWidth sx={{ bgcolor: '#e0e0e0', color: 'black' }} onClick={() => navigate(-1)}>Cancel</Button>
      </Box>
    </Box>
  );
}
