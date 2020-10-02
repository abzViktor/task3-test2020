import React from 'react';
import './Button.css';

export default function Button(props) {
    const {className } = props;

    return (
        <button
            /* eslint-disable-next-line react/jsx-props-no-spreading */
            className={className}
        />
    );
};


