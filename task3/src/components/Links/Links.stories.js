import React from 'react';
import {withKnobs, select, text} from '@storybook/addon-knobs';
import Links from './Links';
import './Links.css';

export default {
    component: Links,
    title: 'Links',
    decorators: [withKnobs],
};

export const Link = () => (
    // eslint-disable-next-line react/jsx-filename-extension
    <a
        className={select('Color',{Primary: 'primary', Secondary: 'secondary'}, 'secondary')}
    >{text('Link Text', 'Link')}</a>
);
