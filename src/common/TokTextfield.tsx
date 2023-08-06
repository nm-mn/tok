import * as React from 'react';
import TextField from '@mui/material/TextField';

interface Props {
    label: string;
    value: string;
    onChange: (e: string) => void;
    onKeyDown?: (e: any) => void;
    mb?: number;
    type?: "text" | "email" | "password" | "number";
    isDisabled?: boolean;
    isRequired?: boolean;
    uiStyle?: "standard" | "filled" | "outlined";
}

const TokTextfield: React.FC<Props> = ({
    label, mb = 0, type = "text", isDisabled = false, isRequired = false, uiStyle = "standard", value, onChange, onKeyDown = () => null }) => {
    return (
        <TextField
            sx={{ mb: mb }}
            label={label}
            variant={uiStyle}
            type={type}
            required={isRequired}
            disabled={isDisabled}
            value={value}
            onChange={e => onChange(e.target.value)}
            onKeyDown={e => onKeyDown(e)}
        />
    );
}

export default TokTextfield;