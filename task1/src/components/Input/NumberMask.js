import {makeStyles} from "@material-ui/core/styles";
import MaskedInput from "react-text-mask";
import PropTypes from "prop-types";
import NumberFormat from "react-number-format";
import React from "react";
import {FormControl, Input} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export function PasswordMaskCustom(props) {
    const { inputRef, helpertext, ...other } = props;

    return (
        <MaskedInput
            {...other}
            ref={(ref) => {
                inputRef(ref ? ref.inputElement : null);
            }}
            mask={[/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
            placeholderChar={'\u2000'}
            showMask
            helpertext={helpertext}
        />
    );
}

export default function TextMaskCustom(props) {
    const { inputRef, helpertext, ...other } = props;

    return (
        <MaskedInput
            {...other}
            ref={(ref) => {
                inputRef(ref ? ref.inputElement : null);
            }}
            mask={['+', '3', '8', '(', '0', /[1-9]/, /[1-9]/,')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}
            placeholderChar={'\u2000'}
            showMask
            helpertext={helpertext}
        />
    );
}


