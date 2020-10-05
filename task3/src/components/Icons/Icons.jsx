import React from 'react';
import './Icons.css';

export default function Icon(props) {
  // eslint-disable-next-line react/prop-types
  const { src } = props;

  return (

  // eslint-disable-next-line jsx-a11y/control-has-associated-label
    <a id="icon-link" href="https://abz.agency"><img src={src} alt="" /></a>
  );
}
