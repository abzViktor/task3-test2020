import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function InputComponent(props) {
  const {
    // eslint-disable-next-line no-unused-vars,react/prop-types
    placeholder, type, onBlur, onChange, error,
    // eslint-disable-next-line no-unused-vars,react/prop-types
    helperText, label, value, required,
  } = props;

  return (
    <TextField
        /* eslint-disable-next-line react/jsx-props-no-spreading */
      {...props}
    />
  );
}
