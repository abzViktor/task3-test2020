import React from 'react';
import {
  Formik, Field, Form,
} from 'formik';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputMask from 'react-input-mask';
import Card from '@material-ui/core/Card';
import * as Yup from 'yup';

export default function FormComponent() {
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
      .matches(/^\d{4}-\d{4}$/, 'Password should be XXXX-XXXX format!'),
    // passwordMask: Yup.string()
    //   .required('This field is required!')
    //   .matches(/^\d{4}-\d{4}$/, 'Password should be XXXX-XXXX format!'),
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
    // passwordMask: '',
    textarea: '',
  };

  const validateNumberMask = (value) => {
    let error;
    if (value === '+38(0__)___-__-__') {
      error = 'This field is required!';
    } else if (!value.match(/^\+38\(0\d{2}\)\d{3}-\d{2}-\d{2}$/)) {
      error = 'Phone number should be in +38(0XX)XXX-XX-XX format!';
    }
    return error;
  };
  //
  // const trimDoubleSpaces = (value) => {
  //   const newValue = value.replace(/\s{2,}/g, ' ');
  //   return newValue;
  // };
  //
  // const trimSpaces = (value) => value.replace(/\s+/g, '');
  // const formatTextarea = (value) => value.replace(/\n{2,}\s*\n+|\n+\s*\n{2,}/g, '\n\n\n')
  //   .substr(0, 500);
  //
  // const trimShort = (value) => value.substr(0, 128);
  // const trimLong = (value) => value.substr(0, 256);

  return (
    <div>
      <Card>
        <h1>Form task1.test2020</h1>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, options) => {
            options.setSubmitting(true);
            console.log(values);
            options.resetForm();
          }}
          validationSchema={validationSchema}
        >
          {
            ({
              values,
              handleChange,
              errors,
              touched,
              isValid,
              handleBlur,
              dirty,
            }) => (
              <Form>
                <Field
                  label="Name"
                  name="firstName"
                  type="input"
                  as={TextField}
                  helperText={touched.firstName ? errors.firstName : ''}
                  error={touched.firstName && (!!errors.firstName)}
                  // value={trimDoubleSpaces(values.firstName)}
                />

                <Field
                  // value={trimSpaces(values.email)}
                  label="Email"
                  name="email"
                  type="input"
                  as={TextField}
                  helperText={touched.email ? errors.email : ''}
                  error={touched.email && (!!errors.email)}
                />

                <Field
                  // value={trimSpaces(values.liteEmail)}
                  label="Lite email"
                  name="liteEmail"
                  type="input"
                  as={TextField}
                  helperText={touched.liteEmail ? errors.liteEmail : ''}
                  error={touched.liteEmail && (!!errors.liteEmail)}
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
                  // value={trimShort(values.idMask)}
                  name="idMask"
                  type="input"
                  as={TextField}
                  helperText={touched.idMask ? errors.idMask : ''}
                  error={touched.idMask && (!!errors.idMask)}
                />

                <Field
                  label="Phone number"
                  name="number"
                  type="input"
                  as={TextField}
                  helperText={touched.number ? errors.number : ''}
                  error={touched.number && (!!errors.number)}
                />

                <InputMask mask="+38(099)999-99-99" values={values} onChange={handleChange} onBlur={handleBlur} touched={touched} errors={errors}>
                  {() => (
                    <Field
                      validate={validateNumberMask}
                      label="Phone number mask"
                      name="numberMask"
                      type="input"
                      as={TextField}
                      helperText={touched.numberMask ? errors.numberMask : ''}
                      error={touched.numberMask && (!!errors.numberMask)}
                    />
                  )}
                </InputMask>

                <Field
                  label="Additional number"
                  name="additionalNumber"
                  type="input"
                  as={TextField}
                  helperText={touched.additionalNumber ? errors.additionalNumber : ''}
                  error={touched.additionalNumber && (!!errors.additionalNumber)}
                />

                <Field
                  // value={trimLong(values.additionalNumberMask)}
                  label="Additional number mask"
                  name="additionalNumberMask"
                  type="input"
                  as={TextField}
                  helperText={touched.additionalNumberMask ? errors.additionalNumberMask : ''}
                  error={touched.additionalNumberMask && (!!errors.additionalNumberMask)}
                />

                <Field
                  label="Password"
                  name="password"
                  type="input"
                  as={TextField}
                  helperText={touched.password ? errors.password : ''}
                  error={touched.password && (!!errors.password)}
                />

                {/* <InputMask mask="9999-9999" values={values} onChange={handleChange} onBlur={handleBlur} touched={touched} errors={errors}> */}
                {/*  {() => ( */}
                {/*    <Field */}
                {/*      label="Password mask" */}
                {/*      name="passwordMask" */}
                {/*      type="input" */}
                {/*      as={TextField} */}
                {/*      helperText={touched.passwordMask ? errors.passwordMask : ''} */}
                {/*      error={touched.passwordMask && (!!errors.passwordMask)} */}
                {/*    /> */}
                {/*  )} */}
                {/* </InputMask> */}

                <Field
                  multiline
                  rows="10"
                  label="Textarea just for you"
                  name="textarea"
                  type="input"
                  as={TextField}
                />
                <div className="button-holder">
                  <Button color="primary" variant="contained" type="submit">Submit</Button>
                </div>
              </Form>
            )
}
        </Formik>
      </Card>
    </div>
  );
}
