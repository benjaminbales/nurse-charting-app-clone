import React from 'react';
import { Box, List, ListItem, ListItemText, ListItemIcon, Checkbox, Typography } from '@mui/material';
import Header from '../components/Header';
import { useStore } from '../store';

export default function PhysicalAssessmentPage() {
  const { patients, selectedPatientId } = useStore();
  const patient = patients.find(p => p.id === selectedPatientId);

  if (!patient) return <Typography>Patient not found</Typography>;

  const systems = [
    'PATIENT IDENTIFIER', 'HEAD/NECK', 'EYES/EARS/NOSE/THROAT', 'PAIN',
    'INTEGUMENTARY - [ICC]', 'CARDIOVASCULAR', 'RESPIRATORY', 'GENITOURINARY',
    'GASTROINTESTINAL', 'NUTRITIONAL', 'NEUROLOGIC', 'ENDOCRINE/HEMATOPOIETIC',
    'MEDICATIONS', 'FUNCTIONAL', 'DISCHARGE PLANNING', 'CARE COORDINATION', 'HOMEBOUND STATUS'
  ];

  return (
    <Box sx={{ height: '100vh', bgcolor: '#333' }}>
      <Header title={`${patient.location} - ${patient.name}`} subtitle="Physical Assessment" showBack />
      
      <List>
        {systems.map((system) => (
          <ListItem key={system} sx={{ borderBottom: '1px solid #555' }}>
            <ListItemIcon>
              <Checkbox edge="start" sx={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText 
              primary={
                <Typography color="white">
                    {system.includes('[ICC]') ? (
                        <>INTEGUMENTARY - <span style={{color: 'red'}}>[ICC]</span></>
                    ) : system}
                </Typography>
              } 
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
