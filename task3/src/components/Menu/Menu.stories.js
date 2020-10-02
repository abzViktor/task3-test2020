import React from 'react';
import {withKnobs, text} from '@storybook/addon-knobs';
import Menu from './Menu';
import './Menu.css';



export default {
    component: Menu,
    title: 'Menu',
    decorators: [withKnobs],
};

export function MenuList() {
    const initialState = {
        firstItem: 'inactive',
        secondItem: 'inactive',
        thirdItem: 'inactive',
        fourthItem: 'inactive',
        fifthItem: 'inactive',
    }

    const [state, setState] = React.useState({
        ...initialState,
        firstItem: 'active',
    });
    return(
        // eslint-disable-next-line react/jsx-filename-extension
        <ul className='menu'>
            <li className={state.firstItem} onClick={() => {
                setState({
                    ...initialState,
                firstItem:'active'});
            }}>{text('First Item', 'First item')}</li>
            <li className={state.secondItem} onClick={() => {
                setState({
                    ...initialState,
                    secondItem:'active'});
            }}>{text('Second Item', 'Second item')}</li>
            <li className={state.thirdItem} onClick={() => {
                setState({
                    ...initialState,
                    thirdItem:'active'});
            }}>{text('Third Item', 'Third item')}</li>
            <li className={state.fourthItem} onClick={() => {
                setState({
                    ...initialState,
                    fourthItem:'active'});
            }}>{text('Fourth Item', 'Fourth item')}</li>
            <li className={state.fifthItem} onClick={() => {
                setState({
                    ...initialState,
                    fifthItem:'active'});
            }}>{text('Fifth Item', 'Fifth item')}</li>
        </ul>
    );
}
