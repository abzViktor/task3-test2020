import React from 'react';
import TextField from '@material-ui/core/TextField';
import { FormControl, FormHelperText } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { text } from '@storybook/addon-knobs';

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

export function ArrowIcon() {
  return (
    <svg width="16px" height="9px" viewBox="0 0 16 9" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <title>caret-down</title>
      <desc>Created with Sketch.</desc>
      <defs />
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="caret-down" fill="#000000" fillRule="nonzero">
          <path d="M15.7,0.3 C15.5194393,0.105723309 15.2652077,-0.00323309512 15,4.4408921e-16 L1,4.4408921e-16 C0.734792279,-0.00323309512 0.48056067,0.105723309 0.3,0.3 C0.111585736,0.48463046 0.00375704786,0.736230733 -4.92092261e-16,1 C-0.00323309512,1.26520772 0.105723309,1.51943933 0.3,1.7 L7.3,8.7 C7.68884351,9.08114288 8.31115649,9.08114288 8.7,8.7 L15.7,1.7 C15.8942767,1.51943933 16.0032331,1.26520772 16,1 C15.996243,0.736230733 15.8884143,0.48463046 15.7,0.3 Z" id="Shape" />
        </g>
      </g>
    </svg>
  );
}

export function SelectComponent() {

}
