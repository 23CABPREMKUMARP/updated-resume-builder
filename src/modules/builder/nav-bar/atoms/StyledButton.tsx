import { Button, styled, alpha } from '@mui/material';

export const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? '#E91E63' : '#E91E63', // example use
  borderColor: alpha('#00FF00', 0.8),
  fontWeight: 600,
  textTransform: 'none',
  ':hover': {
    borderColor: '#00FF00',
    backgroundColor: alpha('#00FF00', 0.04),
  },
}));
