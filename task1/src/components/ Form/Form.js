import React, {useState} from 'react';
import InputComponent from "../Input/Input.js"
import {Card} from "@material-ui/core";
import {Button} from '@material-ui/core';
import {FormControl} from "@material-ui/core";
import TextMaskCustom, {PasswordMaskCustom} from '../Input/NumberMask';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';

export default function FormComponent() {

    const [ inputState, setInputState] = useState({
        error: {
            nameError: false,
            emailError: false,
            liteEmailError: false,
            idError: false,
            idMaskError: false,
            phoneError: false,
            additionalNumberError: false,
            additionalNumberMaskError: false,
            passwordError: false
        },
        errorMessage: {
            nameErrMess: '',
            emailErrMess: '',
            liteEmailErrMess: '',
            idErrMess:'',
            idMaskErrMess: '',
            phoneErrMess: '',
            additionalNumberErrMess: '',
            additionalNumberMaskErrMess: '',
            passwordErrMess: ''
        },
        value: {
            nameValue: '',
            liteEmailValue: '',
            emailValue: '',
            idValue: '',
            idMaskValue: '',
            phoneValue: '',
            additionalNumberValue: '',
            additionalNumberMaskValue: '',
            passwordValue: ''
        }
    });

    const customTrim = (val) => {
        val = val.replace(/^\s+/g,'');
        val = val.replace(/\s{2,}/, ' ');
        return val;
    }
    const lengthMask = (val, length) => {
        return val.substr(0, length);
    }

    const validateName = (ev) => {
        if(ev.target.value.match(/[^A-Za-z\s]/g)) {
            setInputState({
                ...inputState,
                error: {
                    ...inputState.error,
                    nameError: true
                },
                errorMessage: {
                    ...inputState.errorMessage,
                    nameErrMess: "Name should contain only latin letters!"
                }
            });
        } else if(!ev.target.value.match(/.{2,}/g)) {
            setInputState({
                ...inputState,
                error: {
                    ...inputState.error,
                    nameError: true
                },
                errorMessage: {
                    ...inputState.errorMessage,
                    nameErrMess: "Name should be at least 2 characters!"
                }
            });
        } else if(ev.target.value.match(/.{128}/g)) {
            setInputState({
                ...inputState,
                error: {
                    ...inputState.error,
                    nameError: true
                },
                errorMessage: {
                    ...inputState.errorMessage,
                    nameErrMess: "Name should be less than 128 characters!"
                }
            });
        } else if(ev.target.value.match(/^\s+$/)) {
            setInputState({
                ...inputState,
                error: {
                    ...inputState.error,
                    nameError: true
                },
                errorMessage: {
                    ...inputState.errorMessage,
                    nameErrMess: "Name can't consist only from spaces!"
                }
            });
        } else {
            changeHandler('name');
        }
    }
    const validateEmail = (ev) => {
        if(!ev.target.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g)) {
            setInputState({
                ...inputState,
                error: {
                    ...inputState.error,
                    emailError: true
                },
                errorMessage: {
                    ...inputState.errorMessage,
                    emailErrMess: "Email is not valid"
                }
            });
        } else {
            changeHandler('name');
        }
    }
    const validateLiteEmail = (ev) => {
        if(!ev.target.value.match(/[\w-]{1,64}@[\w-]+\.[\w-]{2,}/)) {
            setInputState({
                ...inputState,
                error: {
                    ...inputState.error,
                    liteEmailError: true
                },
                errorMessage: {
                    ...inputState.errorMessage,
                    liteEmailErrMess: "Invalid email!"
                }
            });
        } else if(ev.target.value.match(/.{254}/)) {
            setInputState({
                ...inputState,
                error: {
                    ...inputState.error,
                    liteEmailError: true
                },
                errorMessage: {
                    ...inputState.errorMessage,
                    liteEmailErrMess: "Email can't be more than 254 characters!"
                }
            });
        } else {
            changeHandler('liteEmail');
        }
    }
    const validateId = (ev) => {
        if(ev.target.value.match(/[^a-z0-9_]/g)) {
            setInputState({
                ...inputState,
                error: {
                    ...inputState.error,
                    idError: true
                },
                errorMessage: {
                    ...inputState.errorMessage,
                    idErrMess: "Number can contain only numbers, lowercase latin letters and _!"
                }
            });
        } else if(!ev.target.value.match(/.{2,}/g)) {
            setInputState({
                ...inputState,
                error: {
                    ...inputState.error,
                    idError: true
                },
                errorMessage: {
                    ...inputState.errorMessage,
                    idErrMess: "Number should be at least 2 characters!"
                }
            });
        } else if(ev.target.value.match(/.{128}/g)) {
            setInputState({
                ...inputState,
                error: {
                    ...inputState.error,
                    idError: true
                },
                errorMessage: {
                    ...inputState.errorMessage,
                    idErrMess: "Number should be less than 128 characters!"
                }
            });
        } else {
            changeHandler('id');
        }
    }
    const validateNumber = (ev) => {
        if(!ev.target.value.match(/\+38\(0\d{2}\)\s\d{3}\-\d{2}\-\d{2}/)) {
            setInputState({
                ...inputState,
                error: {
                    ...inputState.error,
                    phoneError: true
                },
                errorMessage: {
                    ...inputState.errorMessage,
                    phoneErrMess: "Phone number is not valid!"
                }
            });
        } else {
            changeHandler('phone');
        }
    }
    const validateAdditionalNumber =(ev) => {
        if(!ev.target.value.match(/\+|\,|\(|\)|\;|[0-9]/)) {
            setInputState({
                ...inputState,
                error: {
                    ...inputState.error,
                    additionalNumberError: true
                },
                errorMessage: {
                    ...inputState.errorMessage,
                    additionalNumberErrMess: "You can use only ',', ';', '(', ')', '+' and numbers 0-9"
                }
            });
        } else if(!ev.target.value.match(/.{7,}/g)) {
            setInputState({
                ...inputState,
                error: {
                    ...inputState.error,
                    additionalNumberError: true
                },
                errorMessage: {
                    ...inputState.errorMessage,
                    additionalNumberErrMess: "Additional numbers should be al least 7 characters!"
                }
            });
        } else if(!ev.target.value.match(/.{256}/g)) {
            setInputState({
                ...inputState,
                error: {
                    ...inputState.error,
                    additionalNumberError: true
                },
                errorMessage: {
                    ...inputState.errorMessage,
                    additionalNumberErrMess: "Additional numbers should be less than 128 characters!"
                }
            });
        } else {
            changeHandler('additionalNumber');
        }
    }
    const validatePassword = (ev) => {
        if(!ev.target.value.match(/\d{4}\-\d{4}/)) {
            setInputState({
                ...inputState,
                error: {
                    ...inputState.error,
                    passwordError: true
                },
                errorMessage: {
                    ...inputState.errorMessage,
                    passwordErrMess: "Password should be 8 symbols long!"
                }
            });
        } else {
            changeHandler('phone');
        }
    }
    const validateTextarea = (ev) => {
        ev.target.value = ev.target.value.replace(/^\s+|\s+$|^\n+|\n+$/g,'');
        ev.target.value = ev.target.value.replace(/\n{2,}\s*\n+|\n+\s*\n{2,}/g, '\n\n\n');
        ev.target.value = ev.target.value.substr(0, 500);
    }


    const changeHandler = (type) => (ev) => {
        if(type === 'name') {
            ev.target.value = customTrim(ev.target.value);
        }

        if(type === 'idMask') {
            ev.target.value = lengthMask(ev.target.value, 128);
        }

        if(type === 'additionalNumberMask') {
            ev.target.value = lengthMask(ev.target.value, 256);
        }

        const err = type+'Error';
        const mes = type+'ErrMess';
        const val = type+'Value';
            setInputState({
                ...inputState,
                error: {
                    ...inputState.error,
                    [err]: false
                },
                errorMessage: {
                    ...inputState.errorMessage,
                    [mes]: ""
                },
                value: {
                    ...inputState.value,
                    [val]: ev.target.value
                }
            });
    }

    const submitForm = (ev) => {
        console.log(inputState.value);
        // ev.preventDefault();
        setInputState({
            ...inputState,
            value: {
                nameValue: '',
                emailValue: '',
                liteEmailValue: '',
                idValue: '',
                phoneValue: ''
            }
        })
    }

        return (
        <Card>
            <form noValidate>
                <div>
                    <FormControl>
                        <InputComponent label="Enter your name" type="text" placeholder="First Name"
                                        onBlur={validateName} onChange={changeHandler('name')}
                                        error={inputState.error.nameError}
                                        helperText={inputState.errorMessage.nameErrMess}
                                        value={inputState.value.nameValue}
                        />
                    </FormControl>
                </div>
                <div>
                    <FormControl>
                        <InputComponent label="Enter your email" type="text" placeholder="Email"
                                        onBlur={validateEmail} onChange={changeHandler('email')}
                                        error={inputState.error.emailError}
                                        helperText={inputState.errorMessage.emailErrMess}
                                        value={inputState.value.emailValue}
                        />
                    </FormControl>
                </div>
                <div>
                    <FormControl>
                        <InputComponent label="Enter your lite email" type="text" placeholder="Lite Email"
                                        onBlur={validateLiteEmail} onChange={changeHandler('liteEmail')}
                                        error={inputState.error.liteEmailError}
                                        helperText={inputState.errorMessage.liteEmailErrMess}
                                        value={inputState.value.liteEmailValue}

                        />
                    </FormControl>
                </div>
                <div>
                    <FormControl>
                        <InputComponent label="Enter worker ID" type="text" placeholder="Id"
                                        onBlur={validateId} onChange={changeHandler('id')}
                                        error={inputState.error.idError}
                                        helperText={inputState.errorMessage.idErrMess}
                                        value={inputState.value.idValue}
                        />
                    </FormControl>
                </div>
                <div>
                    <FormControl>
                        <InputComponent label="Enter worker ID(Mask)" type="text" placeholder="Id"
                                        onBlur={validateId} onChange={changeHandler('idMask')}
                                        error={inputState.error.idMaskError}
                                        helperText={inputState.errorMessage.idErrMess}
                                        value={inputState.value.idMaskValue}
                        />
                    </FormControl>
                </div>
                <div className='mb-1'>
                    <FormControl>
                        <InputLabel htmlFor="number">Enter your phone number</InputLabel>
                        <Input
                            id='number'
                            inputComponent={TextMaskCustom}
                            onBlur={validateNumber} onChange={changeHandler('phone')}
                            error={inputState.error.phoneError}
                            value={inputState.value.phoneValue}
                        />
                        <FormHelperText error={inputState.error.phoneError}>
                            {inputState.errorMessage.phoneErrMess}
                        </FormHelperText>
                    </FormControl>
                </div>
                <div>
                    <FormControl>
                        <InputComponent label="Enter additional numbers" type="text" placeholder="Additional numbers"
                                        onBlur={validateAdditionalNumber} onChange={changeHandler('additionalNumber')}
                                        error={inputState.error.additionalNumberError}
                                        helperText={inputState.errorMessage.additionalNumberErrMess}
                                        value={inputState.value.additionalNumberValue}
                        />
                    </FormControl>
                </div>
                <div>
                    <FormControl>
                        <InputComponent label="Enter additional numbers(Mask)" type="text" placeholder="Additional numbers"
                                        onBlur={validateAdditionalNumber} onChange={changeHandler('additionalNumberMask')}
                                        value={inputState.value.additionalNumberMaskValue}
                        />
                    </FormControl>
                </div>
                <div className='mb-1'>
                    <FormControl>
                        <InputLabel htmlFor="password">Enter your password</InputLabel>
                        <Input
                            id="password"
                            inputComponent={PasswordMaskCustom}
                            onBlur={validatePassword} onChange={changeHandler('password')}
                            error={inputState.error.passwordError}
                            value={inputState.value.passwordValue}
                        />
                        <FormHelperText error={inputState.error.passwordError}>
                            {inputState.errorMessage.passwordErrMess}
                        </FormHelperText>
                    </FormControl>
                </div>
                <div>
                    <TextField multiline={true}
                               rows='10'
                               onBlur={validateTextarea}
                               onChange={changeHandler('textarea')}
                    />
                </div>
            </form>
            <Button variant="contained" onClick={submitForm} color="primary">Submit</Button>
        </Card>
    )
}


