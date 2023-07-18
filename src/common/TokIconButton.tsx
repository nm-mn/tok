import * as React from 'react';
import MessageIcon from '@mui/icons-material/Message';
import Button from "@mui/material/Button"

interface Props {
    icon: string;
    onClick: (e: any) => void;
    isDisabled?: boolean;
    color?: "primary" | "secondary" | "success" | "error";
    type?: "text" | "contained" | "outlined";
}

const TokIconButton: React.FC<Props> = ({ isDisabled = false, color = "primary", type = "contained", onClick }) => {
    return (
        <Button variant={type} disabled={isDisabled} color={color} onClick={e => onClick(e)}>
            <MessageIcon sx={{ width: '32px', height: '32px' }} />
        </Button>)
}

export default TokIconButton;