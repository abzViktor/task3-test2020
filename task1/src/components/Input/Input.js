import React from 'react';
import TextField from '@material-ui/core/TextField';


export default function InputComponent(props) {
    const { placeholder, type, onBlur, onChange, error,
        helperText, label, value, required } = props;

    return (
        <TextField
            placeholder={placeholder}
            type={type}
            onBlur={onBlur}
            onChange={onChange}
            error={error}
            helperText={helperText}
            label={label}
            value={value}
            required={required}
        />
    );
}
