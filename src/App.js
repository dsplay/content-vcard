import './App.css';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import UserAvatar from './components/useravatar/UserAvatar';
import Infos from './components/infos/Infos';
import Fab from '@mui/material/Fab';
import PersonIcon from '@mui/icons-material/Person';

function App() {
  return (
    <div className="App">
      <Box
        sx={{
          position: 'relative',
          width: 'auto',
          height: 6,
          backgroundColor: 'primary.light',
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      />
      <Container maxWidth="sm" maxHeight="sm">
        <UserAvatar />
        <Infos />
      </Container>
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <Fab color="primary" aria-label="add" variant="extended"
          sx={{
            position: 'relative',
            bottom: (theme) => theme.spacing(2),
            top: (theme) => theme.spacing(2),
          }}>
          <PersonIcon sx={{ mr: 1 }} />
          Salvar na agenda
        </Fab>
      </Box>
    </div>
  );
}

export default App;
