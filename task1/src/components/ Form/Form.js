import React, {useState} from 'react';
import InputComponent from "../Input/Input.js"
import {Card} from "@material-ui/core";
import {Button} from '@material-ui/core';
import {FormControl} from "@material-ui/core";
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import InputMask from 'react-input-mask';


export default function FormComponent() {
    const [inputState, setInputState] = useState({
        error: {
            nameError: false,
            emailError: false,
            liteEmailError: false,
            idError: false,
            idMaskError: false,
            phoneError: false,
            phoneMaskError: false,
            additionalNumberError: true,
            additionalNumberMaskError: true,
            passwordError: false,
            passwordMaskError: false
        },
        isValid: {
            nameIsInvalid: true,
            emailIsInvalid: true,
            liteEmailIsInvalid: true,
            idIsInvalid: true,
            phoneIsInvalid: true,
            phoneMaskIsInvalid: true,
            additionalNumberIsInvalid: true,
            additionalNumberMaskIsInvalid: true,
            idMaskIsInvalid: true,
            passwordIsInvalid: true,
            passwordMaskIsInvalid: true
        },
        errorMessage: {
            nameErrMess: '',
            emailErrMess: '',
            liteEmailErrMess: '',
            idErrMess:'',
            idMaskErrMess: '',
            phoneErrMess: '',
            phoneMaskErrMess: '',
            additionalNumberErrMess: '',
            additionalNumberMaskErrMess: '',
            passwordErrMess: '',
            passwordMaskErrMess: '',

        },
        value: {
            nameValue: '',
            liteEmailValue: '',
            emailValue: '',
            idValue: '',
            idMaskValue: '',
            phoneValue: '',
            phoneMaskValue: '',
            additionalNumberValue: '',
            additionalNumberMaskValue: '',
            passwordValue: '',
            passwordMaskValue: '',
            textareaValue: ''
        }
    });



    const customTrim = (val) => {
        val = val.replace(/^\s+/g,'');
        val = val.replace(/\s{2,}/, ' ');
        return val;
    }

    const trimSpaces = (val) => {
        return val.replace(/\s*/g, '');
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
                },
                isValid: {
                    ...inputState.isValid,
                    nameIsInvalid: true
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
                },
                isValid: {
                    ...inputState.isValid,
                    nameIsInvalid: true
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
                },
                isValid: {
                    ...inputState.isValid,
                    nameIsInvalid: true
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
                },
                isValid: {
                    ...inputState.isValid,
                    nameIsInvalid: true
                }
            });
        } else {
            console.log('else block start');
            setInputState({
                ...inputState,
                isValid: {
                    ...inputState.isValid,
                    nameIsInvalid: false
                }
            });
            changeHandler('name');
        }
    }
    const validateEmail = (ev) => {
        if(!ev.target.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {

            setInputState({
                ...inputState,
                error: {
                    ...inputState.error,
                    emailError: true
                },
                errorMessage: {
                    ...inputState.errorMessage,
                    emailErrMess: "Invalid email address. Valid e-mail can contain only latin letters, numbers, '@' and '."
                },
                isValid: {
                    ...inputState.isValid,
                    emailIsInvalid: true
                }
            });
        } else {
            setInputState({
                ...inputState,
                isValid: {
                    ...inputState.isValid,
                    emailIsInvalid: false
                }
            });
            changeHandler('email');
        }
    }
    const validateLiteEmail = (ev) => {
        if(!ev.target.value.match(/^[\w-]{1,64}?@[\w-]+\.[\w-]{2,}/)) {
            setInputState({
                ...inputState,
                error: {
                    ...inputState.error,
                    liteEmailError: true
                },
                errorMessage: {
                    ...inputState.errorMessage,
                    liteEmailErrMess: "Invalid email address. Valid e-mail can contain only latin letters, numbers, '@' and '."
                },
                isValid: {
                    ...inputState.isValid,
                    liteEmailIsInvalid: true
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
                },
                isValid: {
                    ...inputState.isValid,
                    liteEmailIsInvalid: true
                }
            });
        } else {
            setInputState({
                ...inputState,
                isValid: {
                    ...inputState.isValid,
                    liteEmailIsInvalid: false
                }
            });
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
                },
                isValid: {
                    ...inputState.isValid,
                    idIsInvalid: true
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
                },
                isValid: {
                    ...inputState.isValid,
                    idIsInvalid: true
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
                },
                isValid: {
                    ...inputState.isValid,
                    idIsInvalid: true
                }
            });
        } else {
            setInputState({
                ...inputState,
                isValid: {
                    ...inputState.isValid,
                    idIsInvalid: false
                }
            });
            changeHandler('id');
        }
    }
    const validateIdMask = (ev) => {
        if(ev.target.value.match(/[^a-z0-9_]/g)) {
            setInputState({
                ...inputState,
                error: {
                    ...inputState.error,
                    idMaskError: true
                },
                errorMessage: {
                    ...inputState.errorMessage,
                    idMaskErrMess: "Number can contain only numbers, lowercase latin letters and _!"
                },
                isValid: {
                    ...inputState.isValid,
                    idMaskIsInvalid: true
                }
            });
        } else if(!ev.target.value.match(/.{2,}/g)) {
            setInputState({
                ...inputState,
                error: {
                    ...inputState.error,
                    idMaskError: true
                },
                errorMessage: {
                    ...inputState.errorMessage,
                    idMaskErrMess: "Number should be at least 2 characters!"
                },
                isValid: {
                    ...inputState.isValid,
                    idMaskIsInvalid: true
                }
            });
        } else {
            setInputState({
                ...inputState,
                isValid: {
                    ...inputState.isValid,
                    idMaskIsInvalid: false
                }
            });
            changeHandler('idMask');
        }
    }
    const validateNumber = (ev) => {
        if(!ev.target.value.match(/^\+38\(0\d{2}\)\d{3}\-\d{2}\-\d{2}$/)) {
            setInputState({
                ...inputState,
                error: {
                    ...inputState.error,
                    phoneError: true
                },
                errorMessage: {
                    ...inputState.errorMessage,
                    phoneErrMess: "Phone number should be in +38(0XX)XXX-XX-XX format!"
                },
                isValid: {
                    ...inputState.isValid,
                    phoneIsInvalid: true
                }
            });
            console.log()
        } else {
            setInputState({
                ...inputState,
                isValid: {
                    ...inputState.isValid,
                    phoneIsInvalid: false
                }
            });
            changeHandler('phone');
        }
    }
    const validateNumberMask = (ev) => {
        const number = ev.target.value.replace(/\D/g, '');
        if(!number.match(/.{12}/)) {
            setInputState({
                ...inputState,
                error: {
                    ...inputState.error,
                    phoneMaskError: true
                },
                errorMessage: {
                    ...inputState.errorMessage,
                    phoneMaskErrMess: "Fill all empty spaces!"
                },
                isValid: {
                    ...inputState.isValid,
                    phoneMaskIsInvalid: true
                }
            });
        } else {
            setInputState({
                ...inputState,
                isValid: {
                    ...inputState.isValid,
                    phoneMaskIsInvalid: false
                }
            });
            changeHandler('phoneMask');
        }
    }
    const validateAdditionalNumber = (ev) => {
        if(ev.target.value.match(/[^-,;()+0-9\s]+/g)) {
            setInputState({
                ...inputState,
                error: {
                    ...inputState.error,
                    additionalNumberError: true
                },
                errorMessage: {
                    ...inputState.errorMessage,
                    additionalNumberErrMess: "You can use only ',', ';', '(', ')', '+' and numbers 0-9"
                },
                isValid: {
                    ...inputState.isValid,
                    additionalNumberIsInvalid: true
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
                },
                isValid: {
                    ...inputState.isValid,
                    additionalNumberIsInvalid: true
                }
            });
        } else if(ev.target.value.match(/.{256}/g)) {
            setInputState({
                ...inputState,
                error: {
                    ...inputState.error,
                    additionalNumberError: true
                },
                errorMessage: {
                    ...inputState.errorMessage,
                    additionalNumberErrMess: "Additional numbers should be less than 256 characters!"
                },
                isValid: {
                    ...inputState.isValid,
                    additionalNumberIsInvalid: true
                }
            });
        } else {
            setInputState({
                ...inputState,
                isValid: {
                    ...inputState.isValid,
                    additionalNumberIsInvalid: false
                }
            });
            changeHandler('additionalNumber');
        }
    }
    const validateAdditionalNumberMask = (ev) => {
        if(!ev.target.value.match(/[^-,;()+0-9\s]+/g)) {
            setInputState({
                ...inputState,
                error: {
                    ...inputState.error,
                    additionalNumberMaskError: true
                },
                errorMessage: {
                    ...inputState.errorMessage,
                    additionalNumberMaskErrMess: "You can use only ',', ';', '(', ')', '+' and numbers 0-9"
                },
                isValid: {
                    ...inputState.isValid,
                    additionalNumberMaskIsInvalid: true
                }
            });
        } else if(!ev.target.value.match(/.{7,}/g)) {
            setInputState({
                ...inputState,
                error: {
                    ...inputState.error,
                    additionalNumberMaskError: true
                },
                errorMessage: {
                    ...inputState.errorMessage,
                    additionalNumberMaskErrMess: "Additional numbers should be al least 7 characters!"
                },
                isValid: {
                    ...inputState.isValid,
                    additionalNumberMaskIsInvalid: true
                }
            });
        } else {
            setInputState({
                ...inputState,
                isValid: {
                    ...inputState.isValid,
                    additionalNumberMaskIsInvalid: false
                }
            });
            changeHandler('additionalNumberMask');
        }
    }
    const validatePassword = (ev) => {
        if(!ev.target.value.match(/^\d{4}\-\d{4}$/)) {
            setInputState({
                ...inputState,
                error: {
                    ...inputState.error,
                    passwordError: true
                },
                errorMessage: {
                    ...inputState.errorMessage,
                    passwordErrMess: "Password should be XXXX-XXXX format!"
                },
                isValid: {
                    ...inputState.isValid,
                    passwordIsInvalid: true
                }
            });
        } else {
            setInputState({
                ...inputState,
                isValid: {
                    ...inputState.isValid,
                    passwordIsInvalid: false
                }
            });
            changeHandler('password');
        }
    }
    const validatePasswordMask = (ev) => {
        const password = ev.target.value.replace(/\D/g, '');
        if(!password.match(/.{8}/)) {
            setInputState({
                ...inputState,
                error: {
                    ...inputState.error,
                    passwordMaskError: true
                },
                errorMessage: {
                    ...inputState.errorMessage,
                    passwordMaskErrMess: "Fill all the empty spaces!"
                },
                isValid: {
                    ...inputState.isValid,
                    passwordMaskIsInvalid: true
                }
            });
        } else {
            setInputState({
                ...inputState,
                isValid: {
                    ...inputState.isValid,
                    passwordMaskIsInvalid: false
                }
            });
            changeHandler('passwordMask');
        }
    }
    const validateTextarea = (ev) => {
        ev.target.value = ev.target.value.replace(/^\s+|\s+$|^\n+|\n+$/g,'');
        ev.target.value = ev.target.value.replace(/\n{2,}\s*\n+|\n+\s*\n{2,}/g, '\n\n\n');
        ev.target.value = ev.target.value.substr(0, 500);
    }

    const changeHandler = (type) => (ev) => {
        if(type === 'name' || type === 'textarea'
            || type ==='additionalNumber'  || type === 'additionalNumberMask') {
            ev.target.value = customTrim(ev.target.value);
        } else {
            ev.target.value = trimSpaces(ev.target.value);
        }




        if(type === 'idMask') {
            ev.target.value = lengthMask(ev.target.value, 128);
        }

        if(type === 'additionalNumberMask') {
            ev.target.value = lengthMask(ev.target.value, 256);
        }




        const value = type+'Value';
        if(type !== 'textarea') {
            const err = type+'Error';
            const mes = type+'ErrMess';
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
                    [value]: ev.target.value
                }
            });
        } else {
            setInputState({
                ...inputState,
                value: {
                    ...inputState.value,
                    [value]: ev.target.value
                }
            })
        }

    }

    const submitForm = (ev) => {
        console.log(inputState.value);
        // ev.preventDefault();
        setInputState({
            ...inputState,
            value: {
                nameValue: '',
                liteEmailValue: '',
                emailValue: '',
                idValue: '',
                idMaskValue: '',
                phoneMaskValue: '',
                phoneValue: '',
                additionalNumberValue: '',
                additionalNumberMaskValue: '',
                passwordValue: '',
                passwordMaskValue: '',
                textareaValue: ''
            }
        })
    }

        return (
        <Card>
            <form noValidate title='Task 1 2020test Form'>
                <div>
                    <FormControl>
                        <InputComponent label="Name" type="text"
                                        onBlur={validateName} onChange={changeHandler('name')}
                                        error={inputState.error.nameError}
                                        helperText={inputState.errorMessage.nameErrMess}
                                        value={inputState.value.nameValue}
                                        required
                        />
                    </FormControl>
                </div>
                <div>
                    <FormControl>
                        <InputComponent label="Email" type="text"
                                        onBlur={validateEmail} onChange={changeHandler('email')}
                                        error={inputState.error.emailError}
                                        helperText={inputState.errorMessage.emailErrMess}
                                        value={inputState.value.emailValue} required
                        />
                    </FormControl>
                </div>
                <div>
                    <FormControl>
                        <InputComponent label="Lite email" type="text"
                                        onBlur={validateLiteEmail} onChange={changeHandler('liteEmail')}
                                        error={inputState.error.liteEmailError}
                                        helperText={inputState.errorMessage.liteEmailErrMess}
                                        value={inputState.value.liteEmailValue}
                                        required
                        />
                    </FormControl>
                </div>
                <div>
                    <FormControl>
                        <InputComponent label="Worker ID" type="text"
                                        onBlur={validateId} onChange={changeHandler('id')}
                                        error={inputState.error.idError}
                                        helperText={inputState.errorMessage.idErrMess}
                                        value={inputState.value.idValue} required
                        />
                    </FormControl>
                </div>
                <div>
                    <FormControl>
                        <InputComponent label="Worker ID mask" type="text"
                                        onBlur={validateIdMask} onChange={changeHandler('idMask')}
                                        error={inputState.error.idMaskError}
                                        helperText={inputState.errorMessage.idMaskErrMess}
                                        value={inputState.value.idMaskValue} required
                        />
                    </FormControl>
                </div>
                <div>
                    <FormControl>
                        <InputComponent label="Phone number" type="text"
                                        onBlur={validateNumber} onChange={changeHandler('phone')}
                                        error={inputState.error.phoneError}
                                        helperText={inputState.errorMessage.phoneErrMess}
                                        value={inputState.value.phoneValue}
                        />
                    </FormControl>
                </div>
                <div className='mb-1'>
                    <FormControl>
                        <InputLabel required htmlFor="number">Phone number mask</InputLabel>
                        <InputMask mask="+38(099)999-99-99" onBlur={validateNumberMask}
                                   onChange={changeHandler('phoneMask')} value={inputState.value.phoneMaskValue}
                                   id='number' required='true'>

                            {() => <Input error={inputState.error.phoneMaskError} />}
                        </InputMask>
                        <FormHelperText error={inputState.error.phoneMaskError}>
                                       {inputState.errorMessage.phoneMaskErrMess}
                                    </FormHelperText>
                    </FormControl>
                </div>
                <div>
                    <FormControl>
                        <InputComponent label="Additional numbers" type="text"
                                        onBlur={validateAdditionalNumber} onChange={changeHandler('additionalNumber')}
                                        error={inputState.error.additionalNumberError}
                                        helperText={inputState.errorMessage.additionalNumberErrMess}
                                        value={inputState.value.additionalNumberValue}
                                        required
                        />
                    </FormControl>
                </div>
                <div>
                    <FormControl>
                        <InputComponent label="Additional number mask" type="text"
                                        onBlur={validateAdditionalNumberMask}
                                        onChange={changeHandler('additionalNumberMask')}
                                        error={inputState.error.additionalNumberMaskError}
                                        helperText={inputState.errorMessage.additionalNumberMaskErrMess}
                                        value={inputState.value.additionalNumberMaskValue}
                                        required
                        />
                    </FormControl>
                </div>
                <div>
                    <FormControl>
                        <InputComponent label="Password" type="text"
                                        onBlur={validatePassword}
                                        onChange={changeHandler('password')}
                                        error={inputState.error.passwordError}
                                        helperText={inputState.errorMessage.passwordErrMess}
                                        value={inputState.value.passwordValue}
                        />
                    </FormControl>
                </div>
                <div className='mb-1'>
                    <FormControl>
                        <InputLabel required htmlFor="password">Password mask</InputLabel>
                        <InputMask mask="9999-9999" onBlur={validatePasswordMask}
                                   onChange={changeHandler('passwordMask')} value={inputState.value.passwordMaskValue}
                                   id='password' required='true'>

                            {() => <Input error={inputState.error.passwordMaskError} />}
                        </InputMask>
                        <FormHelperText error={inputState.error.passwordMaskError}>
                            {inputState.errorMessage.passwordMaskErrMess}
                        </FormHelperText>
                    </FormControl>
                </div>
                <div>
                    <TextField multiline={true}
                               rows='10'
                               onBlur={validateTextarea}
                               onChange={changeHandler('textarea')}
                               placeholder={'Textarea'}
                               label={'Textarea just for you'}
                               value={inputState.value.textareaValue}
                    />
                </div>
            </form>
            <div className='button-holder'><Button disabled={(inputState.isValid.additionalNumberIsInvalid || inputState.isValid.emailIsInvalid
            || inputState.isValid.nameIsInvalid
            || inputState.isValid.emailIsInvalid || inputState.isValid.idIsInvalid || inputState.isValid.liteEmailIsInvalid
            || inputState.isValid.passwordIsInvalid || inputState.isValid.phoneIsInvalid)
            } variant="contained" onClick={submitForm} color="primary">Submit</Button></div>
        </Card>
    )
}


