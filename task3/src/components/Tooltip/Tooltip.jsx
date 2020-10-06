import React from 'react';
import './Tooltip.css';

export default function Button(props) {
  // eslint-disable-next-line react/prop-types
  const { className } = props;

  return (
  // eslint-disable-next-line jsx-a11y/control-has-associated-label
    <div/* eslint-disable-next-line react/jsx-props-no-spreading */
      className={className}
    />
  );
}
