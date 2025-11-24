import React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { Button, Container, Typography, Box } from '@mui/material';
import { useStore } from './store';

const queryClient = new QueryClient();

function ExampleComponent() {
  const { count, increment } = useStore();

  const { isPending, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('https://api.github.com/repos/tannerlinsley/react-query').then((res) =>
        res.json()
      ),
  });

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Nurse Charting App Landing Page
        </Typography>
        <Typography variant="body1" gutterBottom>
          Welcome to the Nurse Charting Application.
        </Typography>
        <Box sx={{ my: 2 }}>
          <Typography variant="h6">Zustand Counter: {count}</Typography>
          <Button variant="contained" onClick={increment}>
            Increment
          </Button>
        </Box>
        <Box sx={{ my: 2 }}>
          <Typography variant="h6">React Query Data:</Typography>
          {isPending && <Typography>Loading...</Typography>}
          {error && <Typography>Error: {error ? error.message : 'Unknown error'}</Typography>}
          {data && <Typography>Name: {data.name}</Typography>}
        </Box>
      </Box>
    </Container>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ExampleComponent />
    </QueryClientProvider>
  );
}
