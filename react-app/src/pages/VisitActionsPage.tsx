import React from 'react';
import { Box, List, ListItem, ListItemText, ListItemIcon, Checkbox, Typography } from '@mui/material';
import Header from '../components/Header';
import { useStore } from '../store';
import { useNavigate } from 'react-router-dom';

export default function VisitActionsPage() {
  const { patients, selectedPatientId, visitActions, toggleVisitAction } = useStore();
  const navigate = useNavigate();
  const patient = patients.find(p => p.id === selectedPatientId);

  if (!patient) return <Typography>Patient not found</Typography>;

  const handleActionClick = (action: string) => {
    if (action === 'Mileage/Drive Time') navigate('/mileage');
    if (action === 'Demographics') navigate('/demographics');
    if (action === 'Physical Assessment') navigate('/physical-assessment');
    if (action === 'New Order') navigate('/new-order');
    // Add other navigations
  };

  return (
    <Box sx={{ height: '100vh', bgcolor: '#333' }}>
      <Header title={`${patient.location} - ${patient.name}`} subtitle="Visit Actions" showBack />
      
      <List>
        {Object.entries(visitActions).map(([action, checked]) => (
          <ListItem 
            key={action} 
            button 
            onClick={() => handleActionClick(action)}
            sx={{ borderBottom: '1px solid #555' }}
          >
            <ListItemIcon>
              <Checkbox 
                edge="start" 
                checked={checked} 
                tabIndex={-1} 
                disableRipple 
                sx={{ color: '#76ff03', '&.Mui-checked': { color: '#76ff03' } }}
                onClick={(e) => {
                    e.stopPropagation();
                    toggleVisitAction(action);
                }}
              />
            </ListItemIcon>
            <ListItemText 
              primary={
                <Typography color="white">
                    {action}
                    {['Mileage/Drive Time', 'Demographics', 'Vital Signs & Measures', 'Physical Assessment', 'Interventions/Goals'].includes(action) && <span style={{color: 'red'}}>*</span>}
                </Typography>
              } 
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
