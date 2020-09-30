import React from 'react';
import {
  Formik, Field, Form,
} from 'formik';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputMask from 'react-input-mask';
import Card from '@material-ui/core/Card';
import Dialog from '@material-ui/core/Dialog';
import * as Yup from 'yup';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

export default function FormComponent() {
  const [open, setOpen] = React.useState(false);
  const validationSchema = Yup.object({
    firstName: Yup.string()
      .required('This field is required!')
      .trim('')
      .min(2, 'Name should be at least 2 characters!')
      .max(128, 'Name should be less than 128 characters!')
      .matches(/^[A-Za-z\s]+$/g, 'Name should contain only latin letters!'),
    email: Yup.string()
      .email('Invalid Email!')
      .required('This field is required!'),
    liteEmail: Yup.string()
      .required('This field is required!')
      .max(254, 'Email should be less than 254 characters!')
      .matches(/^[\w-]{1,64}?@[\w-]+\.[\w-]{2,}/, 'Invalid Email!'),
    id: Yup.string()
      .required('This field is required!')
      .min(2, 'Id should be at least 2 characters!')
      .max(128, 'Id should be less than 128 characters!')
      .matches(/^[a-z0-9_]+$/g, 'Id can contain only numbers, lowercase latin letters and _!'),
    idMask: Yup.string()
      .required('This field is required!')
      .min(2, 'Id should be at least 2 characters!')
      .matches(/^[a-z0-9_]+$/g, 'Id can contain only numbers, lowercase latin letters and _!'),
    number: Yup.string()
      .required('This field is required!')
      .matches(/^\+38\(0\d{2}\)\d{3}-\d{2}-\d{2}$/, 'Phone number should be in +38(0XX)XXX-XX-XX format!'),
    additionalNumber: Yup.string()
      .required('This field is required!')
      .matches(/^[-,;()+0-9\s]+$/g, 'Additional number should contain only \',\', \';\', \'(\', \')\', \'+\' and numbers 0-9')
      .min(7, 'Additional number should be at least 7 characters!')
      .max(256, 'Additional number should be less than 256 characters!'),
    additionalNumberMask: Yup.string()
      .required('This field is required!')
      .matches(/^[-,;()+0-9\s]+$/g, 'Additional number should contain only \',\', \';\', \'(\', \')\', \'+\' and numbers 0-9')
      .min(7, 'Additional number should be at least 7 characters!'),
    password: Yup.string()
      .required('This field is required!')
      .matches(/^\d{4}-\d{4}$/, 'Password should be in XXXX-XXXX format and contain only numbers!'),
  });

  const initialValues = {
    firstName: '',
    email: '',
    liteEmail: '',
    id: '',
    idMask: '',
    number: '',
    numberMask: '',
    additionalNumber: '',
    additionalNumberMask: '',
    password: '',
    passwordMask: '',
    textarea: '',
  };

  const validateNumberMask = (value) => {
    let error;
    if (value === '+38(0__)___-__-__' || !value) {
      error = 'This field is required!';
    } else if (!value.match(/^\+38\(0\d{2}\)\d{3}-\d{2}-\d{2}$/)) {
      error = 'Phone number should be in +38(0XX)XXX-XX-XX format!';
    }
    return error;
  };

  const validatePasswordMask = (value) => {
    let error;
    if (value === '____-____' || !value) {
      error = 'This field is required!';
    } else if (!value.match(/\d{4}-\d{4}/)) {
      error = 'Password should be in XXXX-XXXX format and contain only numbers!';
    }
    return error;
  };

  const trimDoubleSpaces = (value) => {
    const newValue = value.replace(/\s{2,}/g, ' ');
    return newValue;
  };

  const trimSpaces = (value) => value.replace(/\s+/g, '');
  const formatTextarea = (value) => value.replace(/\n{2,}\s*\n+|\n+\s*\n{2,}/g, '\n\n\n')
    .replace(/^\s+|\s+$|^\n+|\n+$/g, '')
    .substr(0, 500);

  const cutShort = (value) => value.substr(0, 128);
  const cutLong = (value) => value.substr(0, 256);

  return (
    <div>
      <Card>
        <h1>Form task1.test2020</h1>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, options) => {
            options.setSubmitting(true);
            setOpen(true);
            options.setSubmitting(false);
          }}
          validationSchema={validationSchema}
        >
          {
            ({
              values,
              errors,
              touched,
              isValid,
              dirty,
              setFieldValue,
              setFieldTouched,
              resetForm,
            }) => (
              <Form>
                <Dialog open={open}>
                  <DialogTitle id="simple-dialog-title">Submission confirmed!</DialogTitle>
                  <Card>
                    <div>
                      Firstname:&nbsp;
                      {values.firstName}
                      Email:&nbsp;
                      {values.email}
                      <br />
                      Lite Email:&nbsp;
                      {values.liteEmail}
                      <br />
                      Id:&nbsp;
                      {values.id}
                      <br />
                      Id mask:&nbsp;
                      {values.idMask}
                      <br />
                      Phone:&nbsp;
                      {values.number}
                      <br />
                      Phone mask:&nbsp;
                      {values.numberMask}
                      <br />
                      Additional numbers:&nbsp;
                      {values.additionalNumber}
                      <br />
                      Additional numbers mask:&nbsp;
                      {values.additionalNumberMask}
                      <br />
                      Password:&nbsp;
                      {values.password}
                      <br />
                      Password mask:&nbsp;
                      {values.passwordMask}
                      <br />
                      Textarea:
                      {' '}
                      <br />
                      {values.textarea}
                    </div>
                    <div className="button-holder">
                      <Button
                        color="secondary"
                        variant="contained"
                        onClick={() => {
                          setOpen(false);
                          resetForm();
                        }}
                      >
                        Close
                      </Button>
                    </div>
                  </Card>
                </Dialog>
                <Field
                  label="Name"
                  name="firstName"
                  type="input"
                  as={TextField}
                  helperText={touched.firstName ? errors.firstName : ''}
                  error={touched.firstName && (!!errors.firstName)}
                  onChange={({ target }) => {
                    setFieldValue(target.name, trimDoubleSpaces(target.value));
                  }}
                />

                <Field
                  label="Email"
                  name="email"
                  type="input"
                  as={TextField}
                  helperText={touched.email ? errors.email : ''}
                  error={touched.email && (!!errors.email)}
                  onChange={({ target }) => {
                    setFieldValue(target.name, trimSpaces(target.value));
                  }}
                />

                <Field
                  label="Lite email"
                  name="liteEmail"
                  type="input"
                  as={TextField}
                  helperText={touched.liteEmail ? errors.liteEmail : ''}
                  error={touched.liteEmail && (!!errors.liteEmail)}
                  onChange={({ target }) => {
                    setFieldValue(target.name, trimSpaces(target.value));
                  }}
                />

                <Field
                  label="Worker ID"
                  name="id"
                  type="input"
                  as={TextField}
                  helperText={touched.id ? errors.id : ''}
                  error={touched.id && (!!errors.id)}
                />

                <Field
                  label="Worker ID mask"
                  name="idMask"
                  type="input"
                  as={TextField}
                  helperText={touched.idMask ? errors.idMask : ''}
                  error={touched.idMask && (!!errors.idMask)}
                  onChange={({ target }) => {
                    setFieldValue(target.name, cutShort(target.value));
                  }}
                />

                <Field
                  label="Phone number"
                  name="number"
                  type="input"
                  as={TextField}
                  helperText={touched.number ? errors.number : ''}
                  error={touched.number && (!!errors.number)}
                />

                <Field
                  name="numberMask"
                  validate={validateNumberMask}
                >
                  {() => (
                    <InputMask
                      value={values.numberMask}
                      mask="+38(099)999-99-99"
                      onChange={({ target }) => {
                        setFieldValue('numberMask', target.value);
                      }}
                      onBlur={() => {
                        setFieldTouched('numberMask', true);
                      }}
                    >
                      {() => (
                        <TextField
                          label="Phone number mask"
                          helperText={touched.numberMask ? errors.numberMask : ''}
                          error={touched.numberMask && (!!errors.numberMask)}
                        />
                      )}
                    </InputMask>
                  )}
                </Field>

                <Field
                  label="Additional number"
                  name="additionalNumber"
                  type="input"
                  as={TextField}
                  helperText={touched.additionalNumber ? errors.additionalNumber : ''}
                  error={touched.additionalNumber && (!!errors.additionalNumber)}
                />

                <Field
                  label="Additional number mask"
                  name="additionalNumberMask"
                  type="input"
                  as={TextField}
                  helperText={touched.additionalNumberMask ? errors.additionalNumberMask : ''}
                  error={touched.additionalNumberMask && (!!errors.additionalNumberMask)}
                  onChange={({ target }) => {
                    setFieldValue(target.name, cutLong(target.value));
                  }}
                />

                <Field
                  label="Password"
                  name="password"
                  type="input"
                  as={TextField}
                  helperText={touched.password ? errors.password : ''}
                  error={touched.password && (!!errors.password)}
                />

                <Field
                  name="passwordMask"
                  validate={validatePasswordMask}
                >
                  {() => (
                    <InputMask
                      value={values.passwordMask}
                      mask="9999-9999"
                      onChange={({ target }) => {
                        setFieldValue('passwordMask', target.value);
                      }}
                      onBlur={() => {
                        setFieldTouched('passwordMask', true);
                      }}
                    >
                      {() => (
                        <TextField
                          label="Password mask"
                          helperText={touched.passwordMask ? errors.passwordMask : ''}
                          error={touched.passwordMask && (!!errors.passwordMask)}
                        />
                      )}
                    </InputMask>
                  )}
                </Field>

                <Field
                  multiline
                  rows="10"
                  label="Textarea just for you"
                  name="textarea"
                  type="input"
                  as={TextField}
                  onBlur={({ target }) => {
                    setFieldValue(target.name, formatTextarea(target.value));
                  }}
                />
                <div className="button-holder">
                  <Button disabled={!(isValid && dirty)} color="primary" variant="contained" type="submit">Submit</Button>
                </div>
                {/* <pre> */}
                {/*  {JSON.stringify(values, null, 2)} */}
                {/*  {JSON.stringify(errors, null, 2)} */}
                {/*  <br /> */}
                {/*  {JSON.stringify(dirty, null, 2)} */}
                {/* </pre> */}
              </Form>
            )
          }

        </Formik>

      </Card>
    </div>
  );
}
