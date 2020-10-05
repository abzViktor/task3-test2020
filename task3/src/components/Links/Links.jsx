import React from 'react';
import './Links.css';

export default function Links(props) {
  const { className } = props;

  return (
    <a
            /* eslint-disable-next-line react/jsx-props-no-spreading */
      className={className}
    />
  );
}
