import { Typography } from '@mui/material';

import EndGrid from '../../components/login/EndGrid';
import LoginForm from '../../components/login/LoginForm';
import StartGrid from '../../components/login/StartGrid';

const LoginPage = () => {
  return (
    <>
      <StartGrid item xs={12} sm={6}>
        <Typography variant="h3" gutterBottom>
          Welcome Back!
        </Typography>
        <Typography variant="body1">Please login to your account</Typography>
      </StartGrid>
      <EndGrid item xs={12} sm={6}>
        <LoginForm />
      </EndGrid>
    </>
  );
};

export default LoginPage;
