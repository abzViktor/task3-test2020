import React from 'react';
import './Typography.css';

export const Typography = ({ tag, text, className }) => {
    return (
         React.createElement(tag, {className: className}, text)
    );
};

Typography.defaultProps = {
    text: 'The quick brown fox jumps over the lazy dog.'
};
