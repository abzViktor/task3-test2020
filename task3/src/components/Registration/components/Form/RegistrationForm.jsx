import React from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputMask from 'react-input-mask';
import { useTranslation } from 'react-i18next';
import Dialog from '@material-ui/core/Dialog';
import {
  Formik, Field, Form, FieldArray,
} from 'formik';
import * as yup from 'yup';
// import InputLabel from '@material-ui/core/InputLabel';
// import { FormControl } from '@material-ui/core';
import { CircularProgress } from '@material-ui/core';
import { ArrowIcon } from '../../../Input/Input';
import '../../../Input/Input.css';

export default function RegistrationForm() {
  // const [value, setValue] = React.useState(1);
  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };
  const { t } = useTranslation();

  const [open, setOpen] = React.useState(false);
  const [isValidFile, setValidFile] = React.useState(false);
  const [fetchError, setFetchError] = React.useState(true);
  const [isSending, setSending] = React.useState(false);

  const initialValues = {
    name: '',
    email: '',
    phone: '',
    position: '-1',
    file: '',
  };

  const [positions, setPositions] = React.useState([]);

  React.useEffect(() => {
    window.fetch('https://frontend-test-assignment-api.abz.agency/api/v1/positions')
      .then((response) => {
        // eslint-disable-next-line react/prop-types
        response.json().then((data) => {
          if (data.success) {
            setPositions(data.positions);
            setFetchError(false);
          } else {
          }
        });
      });
  }, []);

  const validateNumberMask = (value) => {
    let error;
    if (value === '+38(0__)___-__-__' || !value) {
      error = '';
    } else if (!value.match(/^\+38\(0\d{2}\)\d{3}-\d{2}-\d{2}$/)) {
      error = 'Phone number should be in +38(0XX)XXX-XX-XX format!';
    }
    return error;
  };

  const validationSchema = yup.object().shape({
    name: yup.string()
      .min(2, 'Name should be at least 2 characters!')
      .max(60, 'Name should be less than 128 characters!')
      .matches(/^[A-Za-z\s]+$/g, 'Name should contain only latin letters!'),
    email: yup.string()
      .max(254, 'Email should be less than 254 characters!')
      .matches(/^[\w-.]{1,64}?@[\w-]+\.[\w-]{2,}/, 'Invalid Email!'),
  });
  const hiddenFileInput = React.useRef(null);
  const handleUpload = (ev) => {
    ev.preventDefault();
    hiddenFileInput.current.click();
  };

  const [fileValue, setFileValue] = React.useState('');

  //
  // const handleSubmit = (ev) => {
  //   ev.preventDefault();
  //   console.log(ev.target.value);
  // };

  const trimDoubleSpaces = (value) => {
    const newValue = value.replace(/\s{2,}/g, ' ');
    return newValue;
  };

  const trimSpaces = (value) => value.replace(/\s+/g, '');

  const trimSideSpaces = (value) => value.replace(/^\s+|\s+$|^\n+|\n+$/g, '');

  return (
    !fetchError && (
    <div id="form" className="form">
      <div className="container">
        <h1 className="heading-2-desktop">{t('form.heading')}</h1>
        <div><p className="paragraph-1">{t('form.attention')}</p></div>
        <Formik
          initialValues={initialValues}
          onSubmit={(data) => {
            setSending(true);

            window.fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')
              .then((response) => response.json())
              .then((res) => {
                const formData = new FormData();
                const fileField = document.querySelector('input[type="file"]');
                formData.append('position_id', data.position);
                formData.append('name', data.name);
                formData.append('email', data.email);
                formData.append('phone', data.phone.replace(/[()-]/g, ''));
                formData.append('photo', fileField.files[0]);

                window.fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
                  method: 'POST',
                  body: formData,
                  headers: {
                    Token: res.token, // get token with GET api/v1/token method
                  },
                })
                  .then((response) => response.json())
                  .then((postResponse) => {
                    console.log(postResponse);
                    if (postResponse.success) {
                      setTimeout(() => {
                        setSending(false);
                        setOpen(true);
                      }, 2000);
                    } else {
                      // proccess server errors
                    }
                  })
                  .catch((error) => {
                    // proccess network errors
                  });
              })
              .catch((e) => {
                console.log(e);
              });
          }}
          validationSchema={validationSchema}
        >
          {({
            values,
            setFieldValue,
            setFieldTouched,
            // dirty,
            isValid,
            errors,
            touched,
            resetForm,
          }) => (
            <Form>
              <Dialog open={open}>
                <div className="modal">
                  <h4 className="heading-4-desktop">Congratulations</h4>
                  <p className="paragraph-2">
                    {' '}
                    You have successfully passed
                    <br />
                    {' '}
                    the registration
                  </p>
                  <button
                    type="button"
                    className="text-link"
                    onClick={() => {
                      setOpen(false);
                      resetForm();
                      setFieldValue('file', '');
                      setFileValue('');
                    }}
                  >
                    OK
                  </button>
                </div>
              </Dialog>
              <div className="firstFormRow">
                <div>
                  <Field
                    required
                    name="name"
                    type="input"
                    as={TextField}
                    label={t('form.name.1')}
                    placeholder={t('form.name.2')}
                    variant="outlined"
                    onChange={({ target }) => {
                      setFieldValue(target.name, trimDoubleSpaces(target.value));
                    }}
                    onBlur={({ target }) => {
                      setFieldValue(target.name, trimSideSpaces(target.value));
                      if (target.value !== '') {
                        setFieldTouched(target.name, true);
                      }
                    }}
                    helperText={touched.name ? errors.name : ''}
                    error={touched.name && (!!errors.name)}
                  />
                </div>
                <div>
                  <Field
                    required
                    name="email"
                    label={t('form.email.1')}
                    placeholder={t('form.email.2')}
                    variant="outlined"
                    as={TextField}
                    helperText={touched.email ? errors.email : ''}
                    error={touched.email && (!!errors.email)}
                    onChange={({ target }) => {
                      setFieldValue(target.name, trimSpaces(target.value));
                    }}
                  />
                </div>
                <div>
                  <Field
                    name="phone"
                    validate={validateNumberMask}
                  >
                    {() => (
                      <InputMask
                        value={values.phone}
                        mask="+38(099)999-99-99"
                        onChange={({ target }) => {
                          setFieldValue('phone', target.value);
                        }}
                        onBlur={() => {
                          setFieldTouched('phone', true);
                        }}
                        onPaste={(e) => {
                          console.log(e.clipboardData.getData('Text'));
                        }}
                      >
                        {() => (
                          <TextField
                            variant="outlined"
                            type="tel"
                            required
                            label={t('form.phone.1')}
                            helperText={touched.phone ? errors.phone : ''}
                            error={touched.phone && (!!errors.phone)}
                            onP
                          />
                        )}
                      </InputMask>
                    )}
                  </Field>
                </div>
              </div>
              <div className="secondFormRow">

                <div className="select-component">
                  {
                    positions.length !== 0 && (
                    <FieldArray
                      name="position"
                    >
                      {() => (
                        <div>
                          <Field
                            className="selectedItem formSelect"
                            variant="outlined"
                            fullWidth
                            autoWidth
                            IconComponent={ArrowIcon}
                            name="position"
                            type="select"
                            as={Select}
                          >
                            <MenuItem value="-1" disabled>
                              {t('form.select')}
                            </MenuItem>
                            {positions.map((pos) => (
                              <MenuItem key={pos.id} value={pos.id}>{pos.name}</MenuItem>
                            ))}

                          </Field>
                        </div>
                      )}
                    </FieldArray>
                    )
}
                </div>
                <div>
                  <div className="fileFieldHolder">
                    <TextField
                      required
                      className="border-1"
                      inputProps={{ readOnly: 'readonly', tabIndex: '-1' }}
                      helperText={t('form.upload.3')}
                      placeholder={t('form.upload.1')}
                      onClick={handleUpload}
                      ref={hiddenFileInput}
                      value={fileValue}
                      variant="outlined"
                      error={!isValidFile && touched.file}
                      tabIndex="-1"
                    />
                    <button type="button" onClick={handleUpload} className="secondary desktop-upload-btn">{t('form.upload.2')}</button>
                    <button type="button" onClick={handleUpload} className="secondary mob-upload-btn">
                      <svg width="20px" height="24px" viewBox="0 0 20 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <title>upload</title>
                        <desc>Created with Sketch.</desc>
                        <defs />
                        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                          <g id="upload" fill="#EF6C00" fillRule="nonzero">
                            <path d="M18.12,14.2 C18.0551642,14.222096 17.9848358,14.222096 17.92,14.2 C17.86,14.2 17.81,14.2 17.78,14.31 C17.75,14.42 17.71,14.43 17.69,14.43 C17.67,14.43 17.69,14.49 17.69,14.61 L17.69,14.79 L17.69,19.56 C17.6847889,20.2177137 17.4164079,20.8459493 16.9447897,21.3044148 C16.4731715,21.7628804 15.837598,22.0133892 15.18,22 L4.41,22 C3.75845014,22.0102355 3.13190144,21.7494753 2.68,21.28 C2.23532929,20.8310068 1.99022381,20.2218476 2,19.59 L2,14.69 C2.00654693,14.5778048 1.97087459,14.4672205 1.9,14.38 C1.82129123,14.2955515 1.71478409,14.2422979 1.6,14.23 C1.48132462,14.2048911 1.3610262,14.188183 1.24,14.18 L0.49,14.18 C0.360349482,14.1786835 0.236431451,14.2333533 0.15,14.33 C0.0544088005,14.4171944 -4.1366484e-05,14.5406148 2.03938429e-16,14.67 L2.03938429e-16,19.57 C-0.0168652328,20.7430529 0.449651354,21.8713721 1.29,22.69 C2.1052145,23.5377036 3.23397252,24.0116372 4.41,24 L15.18,24 C16.3504191,24.0026631 17.4736678,23.5388946 18.3012812,22.7112812 C19.1288946,21.8836678 19.5926631,20.7604191 19.59,19.59 L19.59,14.69 C19.5965469,14.5778048 19.5608746,14.4672205 19.49,14.38 C19.4144273,14.2914523 19.3061818,14.2373295 19.19,14.23 C19.0713246,14.2048911 18.9510262,14.188183 18.83,14.18 L18.12,14.18 L18.12,14.2 Z" id="Shape" />
                            <path d="M9.11,0.29 L0.78,8.62 C0.411745823,9.00629829 0.411745823,9.61370171 0.78,10 C0.956726196,10.1937775 1.20775326,10.3029197 1.47,10.3 L5.88,10.3 L5.88,17.15 C5.88,17.7022847 6.32771525,18.15 6.88,18.15 L12.75,18.15 C13.3022847,18.15 13.75,17.7022847 13.75,17.15 L13.75,10.29 L18.16,10.29 C18.4222467,10.2929197 18.6732738,10.1837775 18.85,9.99 C19.2119426,9.60504999 19.2119426,9.00495001 18.85,8.62 L10.48,0.29 C10.09505,-0.0719425778 9.49495001,-0.0719425778 9.11,0.29 Z" id="Shape" />
                          </g>
                        </g>
                      </svg>
                    </button>
                  </div>
                  <>
                    <input
                      accept="image/jpeg, image/jpg"
                      onChange={({ target }) => {
                        if (target.files[0]) {
                          setFileValue(target.files[0].name);
                          setFieldValue('file', target.value);
                          setFieldTouched('file', true);

                          const { URL } = window;
                          const img = new Image();
                          const file = target.files[0];
                          img.src = URL.createObjectURL(file);
                          img.onload = function () {
                            if (img.width < 75 || img.height < 75) {
                              console.log('wrong wh', target.files[0]);
                              setValidFile(false);
                            }
                          };
                          if (target.files[0].type !== 'image/jpeg' && target.files[0].type !== 'image/jpg') {
                            console.log('wrong format', target.files[0]);
                            setValidFile(false);
                          } else if (target.files[0].size > 5e+6) {
                            console.log('wrong size', target.files[0]);

                            setValidFile(false);
                          } else {
                            setValidFile(true);
                          }
                        }
                      }}
                      type="file"
                      name="file"
                      required
                      value={values.file}
                      ref={hiddenFileInput}
                      style={{ display: 'none' }}
                    />
                  </>
                </div>
              </div>
              <div className="submit-holder">
                {isSending
                  && (<CircularProgress />)}
                {!isSending && (
                  <button
                    disabled={!(isValid && values.name !== '' && values.position !== '-1' && values.email !== '' && values.phone !== '' && values.phone !== '+38(0__)___-__-__' && isValidFile && touched.file)}
                    className="primary submit-btn"
                    type="submit"
                  >
                      {t('form.submit')}
                  </button>
                )}

              </div>
              <pre>{JSON.stringify(values, null, 2)}</pre>
              <pre>{JSON.stringify(errors, null, 2)}</pre>
              <pre>{JSON.stringify(values.name.touched, null, 2)}</pre>
              {/* <pre>{JSON.stringify(dirty, null, 2)}</pre> */}
              <pre>{JSON.stringify(touched, null, 2)}</pre>
            </Form>
          )}
        </Formik>
      </div>
    </div>
    )
  );
}
