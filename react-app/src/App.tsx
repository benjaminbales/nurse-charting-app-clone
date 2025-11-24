import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import SchedulePage from './pages/SchedulePage';
import PatientDashboard from './pages/PatientDashboard';
import VisitActionsPage from './pages/VisitActionsPage';
import MileagePage from './pages/MileagePage';
import PhysicalAssessmentPage from './pages/PhysicalAssessmentPage';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<SchedulePage />} />
          <Route path="/dashboard" element={<PatientDashboard />} />
          <Route path="/visit-actions" element={<VisitActionsPage />} />
          <Route path="/mileage" element={<MileagePage />} />
          <Route path="/physical-assessment" element={<PhysicalAssessmentPage />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

