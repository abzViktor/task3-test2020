import React from 'react';
import './Colors.css';

export default function Colors(props) {
  const { className } = props;

  return (
    <div
            /* eslint-disable-next-line react/jsx-props-no-spreading */
      className={className}
    />
  );
}
