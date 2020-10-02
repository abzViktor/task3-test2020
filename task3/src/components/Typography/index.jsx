import React from 'react';
import PropTypes from 'prop-types';

export const Typography = ({ tag, text }) => {
    return (
         React.createElement(tag, {color: 'red'}, text)
    );
};

// Button.propTypes = {
//     /**
//      * Is this the principal call to action on the page?
//      */
//     primary: PropTypes.bool,
//     /**
//      * What background color to use
//      */
//     backgroundColor: PropTypes.string,
//     /**
//      * How large should the button be?
//      */
//     size: PropTypes.oneOf(['small', 'medium', 'large']),
//     /**
//      * Button contents
//      */
//     label: PropTypes.string.isRequired,
//     /**
//      * Optional click handler
//      */
//     onClick: PropTypes.func,
// };

Typography.defaultProps = {
    tag: 'h2',
    text: 'The quick brown fox jumps over the lazy dog.'
};
