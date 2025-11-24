import React from 'react';
import { List, ListItem, ListItemText, Typography, Box, Paper, ListItemIcon } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';
import { useStore } from '../store';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

export default function SchedulePage() {
  const { patients, selectPatient } = useStore();
  const navigate = useNavigate();

  const handlePatientClick = (id: string) => {
    selectPatient(id);
    navigate('/dashboard');
  };

  const days = ['Today (0)', 'Fri (0)', 'Sat (0)', 'Sun (0)', 'Mon (0)', 'Tue (0)', 'Wed (0)'];

  return (
    <Box sx={{ height: '100vh', bgcolor: '#333' }}>
      <Header title="PointCare Manager" subtitle="Last synced: 02/27 12:23" />
      
      <List sx={{ p: 0 }}>
        {days.map((day, index) => (
          <ListItem key={index} sx={{ bgcolor: index === 0 ? '#4caf50' : '#424242', borderBottom: '1px solid #555', py: 1 }}>
            <ListItemText 
              primary={day} 
              primaryTypographyProps={{ color: 'white', fontWeight: 'bold' }}
              secondary={index === 0 ? '2/27' : ''}
              secondaryTypographyProps={{ color: 'white', textAlign: 'right' }}
            />
            <Typography sx={{ color: 'white', ml: 'auto' }}>
                {/* Date placeholder logic */}
            </Typography>
          </ListItem>
        ))}
        
        <ListItem sx={{ bgcolor: '#d32f2f', borderBottom: '1px solid #555', py: 1 }}>
          <ListItemText 
            primary="Overdue Visits (2)" 
            primaryTypographyProps={{ color: 'white', fontWeight: 'bold' }}
          />
        </ListItem>

        {patients.filter(p => p.isOverdue).map((patient) => (
          <ListItem 
            key={patient.id} 
            button 
            onClick={() => handlePatientClick(patient.id)}
            sx={{ bgcolor: '#424242', borderBottom: '1px solid #555' }}
          >
            <ListItemIcon sx={{ minWidth: 40 }}>
               <WarningIcon sx={{ color: '#ff9800', bgcolor: '#5d4037', p: 0.5, borderRadius: 1 }} />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="body2" color="white" fontWeight="bold">
                  {patient.location} <span style={{color: 'red'}}>!</span>
                </Typography>
              }
              secondary={
                <React.Fragment>
                  <Typography variant="body1" color="white">
                    {patient.name}
                  </Typography>
                  <Typography variant="caption" color="#bdbdbd">
                    {patient.mrn}
                  </Typography>
                </React.Fragment>
              }
            />
            <Typography color="white" variant="body2">{patient.visitDate}</Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
