import * as React from 'react';
import Button from '@mui/material/Button';

interface Props {
  label: string;
  onClick: (e: any) => void;
  isDisabled?: boolean;
  type?: "text" | "contained" | "outlined";
}

const TokButton: React.FC<Props> = ({ label, onClick, isDisabled = false, type = "contained" }) => {
  return (
    <Button variant={type} disabled={isDisabled} onClick={e => onClick(e)}>{label}</Button>
  );
}

export default TokButton;