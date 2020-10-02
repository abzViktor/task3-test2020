import React from 'react';
import {withKnobs, select, text} from '@storybook/addon-knobs';
import {Typography} from './index';
import './Typography.css';

export default {
    component: Typography,
    title: 'Typography',
    decorators: [withKnobs],
};

export const Heading1 = () => (
    // eslint-disable-next-line react/jsx-filename-extension
    <h1
        className={select('Size',{Desktop: 'heading-1-desktop', Tablet: 'heading-1-tablet', Mobile: 'heading-1-mobile'}, 'heading-1-desktop')}
    >{text('Text', 'The quick brown fox jumps over the lazy dog.')}</h1>
);

export const Heading2 = () => (
    // eslint-disable-next-line react/jsx-filename-extension
    <h1
        className={select('Size',{'Desktop/Tablet': 'heading-2-desktop', Mobile: 'heading-2-mobile'}, 'heading-2-desktop')}
    >{text('Text', 'The quick brown fox jumps over the lazy dog.')}</h1>
);

export const Heading3 = () => (
    // eslint-disable-next-line react/jsx-filename-extension
    <h1
        className={select('Size',{'Desktop/Tablet': 'heading-3-desktop', Mobile: 'heading-3-mobile'}, 'heading-3-desktop')}
    >{text('Text', 'The quick brown fox jumps over the lazy dog.')}</h1>
);

export const Heading4 = () => (
    // eslint-disable-next-line react/jsx-filename-extension
    <h1
        className={select('Size',{'Desktop/Tablet/Mobile': 'heading-4-desktop'}, 'heading-4-desktop')}
    >{text('Text', 'The quick brown fox jumps over the lazy dog.')}</h1>
);

export const Heading5 = () => (
    // eslint-disable-next-line react/jsx-filename-extension
    <h1
        className={select('Size',{'Desktop/Tablet': 'heading-5-desktop', Mobile: 'heading-5-mobile'}, 'heading-5-desktop')}
    >{text('Text', 'The quick brown fox jumps over the lazy dog.')}</h1>
);

export const Paragraph = () => (
    // eslint-disable-next-line react/jsx-filename-extension
    <h1
        className={select('Size',{'Paragraph 1': 'paragraph-1', 'Paragraph 2': 'paragraph-2', 'Paragraph 3': 'paragraph-3'}, 'paragraph-1')}
    >{text('Text', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et ' +
        'dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ' +
        'ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate ' +
        'velit esse cillum dolore eu fugiat nulla pariatur. ')}</h1>
);
