import React, { useContext, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Router from 'next/router';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputMask from 'react-input-mask';
import { useTranslation } from 'react-i18next';
import {
  Formik, Field, Form, FieldArray,
} from 'formik';
import * as yup from 'yup';
import { CircularProgress } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import { trimDoubleSpaces, trimSideSpaces, trimSpaces } from '../../../../utils/formatText';
import styles from './form.module.scss';
import ArrowIcon from '../../../../assets/caret-down.svg';
import UploadIcon from '../../../../assets/upload.svg';
import { RootStore } from '../../../root.context';

export default function RegistrationForm(props) {
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);
  const [isValidFile, setValidFile] = React.useState(false);
  const [isSending, setSending] = React.useState(false);
  const [positions, setPositions] = React.useState(props.positions.positions);
  const positionsLoaded = props.apiStatus === 200;
  const { dispatch } = useContext(RootStore);
  const [sendSuccess, setSendSuccess] = React.useState({
    validationSuccess: true,
    serverSuccess: true,
  });
  const [fileValue, setFileValue] = React.useState('');

  const initialValues = {
    name: '',
    email: '',
    phone: '',
    position_id: '-1',
    file: '',
  };

  useEffect(() => {
    if (!positionsLoaded || positions.length === 0) {
      Router.push('/');
      dispatch({
        type: 'API_ERROR',
        payload: {
          state: true,
          messageId: 2,
        },
      });
    }
  }, []);

  const validateNumberMask = (value) => {
    let error = '';
    if (value === '+38(0__)___-__-__' || !value) {
      error = '';
    } else if (!value.match(/^\+38\(0\d{2}\)\d{3}-\d{2}-\d{2}$/) && !value.match(/^\+\d{10}/)) {
      error = 'Phone number should be in +38(0XX)XXX-XX-XX format!';
    }
    return error;
  };

  const validateImage = (target) => {
    if (target.files[0]) {
      setFileValue(target.files[0].name);
      const { URL } = window;
      const img = new Image();
      const file = target.files[0];
      img.src = URL.createObjectURL(file);
      img.onload = function () {
        if (img.width < 70 || img.height < 70) {
          setValidFile(false);
        }
      };
      if (target.files[0].type !== 'image/jpeg' && target.files[0].type !== 'image/jpg') {
        setValidFile(false);
      } else if (target.files[0].size > 5e+6) {
        setValidFile(false);
      } else {
        setValidFile(true);
      }
    }
  };

  const validationSchema = yup.object().shape({
    name: yup.string()
      .min(2, 'Name should be at least 2 characters!')
      .max(60, 'Name should be less than 60 characters!')
      .matches(/^[A-Za-z\s]+$/g, 'Name should contain only latin letters!'),
    email: yup.string()
      .max(254, 'Email should be less than 254 characters!')
      .matches(/^[\w-.]{1,64}?@[\w-]+\.[\w-]{2,}/, 'Invalid Email!'),
  });
  const hiddenFileInput = React.useRef(null);

  // left this functionality to trigger on button click, TextField triggers modal window with label
  const handleUpload = (event) => {
    event.preventDefault();
    hiddenFileInput.current.click();
  };

  const submitForm = (data) => {
    setSending(true);
    fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')
      .then((response) => response.json())
      .then((res) => {
        const formData = new FormData();
        const fileField = document.querySelector('input[type="file"]');
        console.log(data);
        ['position_id', 'name', 'email'].map((key) => {
          formData.append(key, data[key]);
        });
        formData.append('phone', data.phone.replace(/[()-]/g, ''));
        formData.append('photo', fileField.files[0]);

        fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
          method: 'POST',
          body: formData,
          headers: {
            Token: res.token, // get token with GET api/v1/token method
          },
        })
          .then((response) => response.json())
          .then((postResponse) => {
            if (postResponse.success) {
              setTimeout(() => {
                setSending(false);
                setOpen(true);
                setSendSuccess({
                  serverSuccess: true,
                  validationSuccess: true,
                });
              }, 2000);
            } else {
              setSending(false);
              setOpen(true);
              setSendSuccess({
                serverSuccess: true,
                validationSuccess: false,
              });
            }
          })
          .catch(() => {
            setSending(false);
            setOpen(true);
            setSendSuccess({
              validationSuccess: true,
              serverSuccess: false,
            });
          });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div id="form" className="form">
      <div className="container">
        <h1 className={`heading-2-desktop ${styles.formHeading}`}>{t('form.heading')}</h1>
        <div><p className={`paragraph-1 ${styles.formSubheading}`}>{t('form.attention')}</p></div>
        {positionsLoaded && (
        <Formik
          initialValues={initialValues}
          onSubmit={(data) => {
            submitForm(data);
          }}
          validationSchema={validationSchema}
        >
          {({
            values,
            setFieldValue,
            setFieldTouched,
            isValid,
            errors,
            touched,
            resetForm,
          }) => (
            <Form className={styles.registrationForm}>
              <Dialog open={open}>
                {sendSuccess.serverSuccess && sendSuccess.validationSuccess && (
                <div className={styles.modal}>
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
                )}
                {!sendSuccess.validationSuccess && (
                <div className={styles.modal}>
                  <h4 className="heading-4-desktop">Something went wrong</h4>
                  <p className="paragraph-2">
                    {' '}
                    Server validation failed,
                    <br />
                    {' '}
                    try again
                  </p>
                  <button
                    type="button"
                    className="text-link"
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    OK
                  </button>
                </div>
                )}
                {!sendSuccess.serverSuccess && (
                <div className={styles.modal}>
                  <h4 className="heading-4-desktop">Something went wrong</h4>
                  <p className="paragraph-2">
                    {' '}
                    Server response failed,
                    <br />
                    {' '}
                    try again later
                  </p>
                  <button
                    type="button"
                    className="text-link"
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    OK
                  </button>
                </div>
                )}
              </Dialog>
              <div className={styles.firstFormRow}>
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
                          e.preventDefault();
                          setFieldValue('phone', e.clipboardData.getData('Text'));
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
                          />
                        )}
                      </InputMask>
                    )}
                  </Field>
                </div>
              </div>
              <div className={styles.secondFormRow}>
                <div className={`select-component ${styles.selectComponent}`}>
                  <FieldArray
                    name="position_id"
                  >
                    {() => (
                      <div>
                        <Field
                          className={`${styles.selectedItem} ${styles.formSelect}`}
                          variant="outlined"
                          fullWidth
                          autoWidth
                          IconComponent={ArrowIcon}
                          name="position_id"
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
                </div>
                <div>
                  <label htmlFor="file" className={styles.fileFieldHolder}>
                    <TextField
                      required
                      inputProps={{ readOnly: 'readonly', tabIndex: '-1' }}
                      helperText={t('form.upload.3')}
                      placeholder={t('form.upload.1')}
                      value={fileValue}
                      variant="outlined"
                      error={!isValidFile && touched.file}
                      tabIndex="-1"
                    />
                    <button type="button" onClick={handleUpload} className={`secondary ${styles.desktopUploadBtn}`}>{t('form.upload.2')}</button>
                    <button type="button" onClick={handleUpload} className={`secondary ${styles.mobUploadBtn}`}><UploadIcon /></button>
                  </label>
                  <input
                    accept="image/jpeg, image/jpg"
                    onChange={({ target }) => {
                      if (target.files[0]) {
                        setFieldValue('file', target.value);
                        setFieldTouched('file', true);
                        validateImage(target);
                      }
                    }}
                    type="file"
                    name="file"
                    id="file"
                    required
                    ref={hiddenFileInput}
                    value={values.file}
                    style={{ display: 'none' }}
                  />
                </div>
              </div>
              <div className={styles.submitHolder}>
                {isSending
                  && (<CircularProgress />)}
                {!isSending && (
                <button
                  disabled={!(isValid && values.name !== '' && values.position_id !== '-1' && values.email !== '' && values.phone !== '' && values.phone !== '+38(0__)___-__-__' && isValidFile && touched.file)}
                  className={`primary ${styles.submitBtn}`}
                  type="submit"
                >
                  {t('form.submit')}
                </button>
                )}
              </div>
              {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
              {/* <pre>{JSON.stringify(errors, null, 2)}</pre> */}
              {/* <pre>{JSON.stringify(values.name.touched, null, 2)}</pre> */}
              {/* /!* <pre>{JSON.stringify(dirty, null, 2)}</pre> *!/ */}
              {/* <pre>{JSON.stringify(touched, null, 2)}</pre> */}
            </Form>
          )}
        </Formik>
        )}
        {!positionsLoaded && (
        <div className={styles.formPlaceholder}>
          <div className={styles.firstFormRow}>
            <div className={styles.fieldPlaceholder} />
            <div className={styles.fieldPlaceholder} />
            <div className={styles.fieldPlaceholder} />
          </div>
          <div className={styles.secondFormRow}>

            <div className={styles.selectComponent} />
            <div />
          </div>
          <div className={styles.submitHolder}>
            <div className={styles.buttonPlaceholder} />
          </div>
        </div>
        )}
      </div>
    </div>
  );
}
