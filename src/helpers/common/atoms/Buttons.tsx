import { Button, ButtonProps } from '@mui/material';

export const OutlinedButton = (props: ButtonProps) => (
  <Button
    variant="outlined"
    className="text-resume-900"
    {...props} // spread all props including `onClick`, `type`, `disabled`, etc.
  >
    {props.children}
  </Button>
);

export const TextButton = (props: ButtonProps) => (
  <Button variant="text" className="text-resume-900" {...props}>
    {props.children}
  </Button>
);
