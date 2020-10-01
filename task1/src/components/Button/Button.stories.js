import React from 'react';
import {
  text, boolean, select,
} from '@storybook/addon-knobs';
import Button from '@material-ui/core/Button';

// eslint-disable-next-line import/prefer-default-export
export const Primary = () => (
  // eslint-disable-next-line react/jsx-filename-extension
  <Button
    disabled={boolean('Disabled', false)}
    color={select('Color', { Primary: 'primary', Secondary: 'secondary' }, 'primary')}
    variant={select('Background', { Outlined: 'outlined', Contained: 'contained', Text: 'text' }, 'outlined')}
  >
    {text('Text', 'Submit')}
  </Button>
);
