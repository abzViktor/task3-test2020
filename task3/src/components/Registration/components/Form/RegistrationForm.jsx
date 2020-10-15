import React from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputMask from 'react-input-mask';
import {
  Formik, Field, Form, FieldArray,
} from 'formik';
import * as yup from 'yup';
// import InputLabel from '@material-ui/core/InputLabel';
// import { FormControl } from '@material-ui/core';
import { ArrowIcon } from '../../../Input/Input';
import '../../../Input/Input.css';

export default function RegistrationForm() {
  // const [value, setValue] = React.useState(1);
  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    // position: 1,
    // file: '',
  };

  const validateNumberMask = (value) => {
    let error;
    if (value === '+38(0__)___-__-__' || !value) {
      error = '';
    } else if (!value.match(/^\+38\(0\d{2}\)\d{3}-\d{2}-\d{2}$/)) {
      error = 'Phone number should be in +38(0XX)XXX-XX-XX format!';
    }
    return error;
  };

  const validationSchema = yup.object({
    name: yup.string()
      .min(2, 'Name should be at least 2 characters!')
      .max(60, 'Name should be less than 128 characters!')
      .matches(/^[A-Za-z\s]+$/g, 'Name should contain only latin letters!'),
    email: yup.string()
      .max(254, 'Email should be less than 254 characters!')
      .matches(/^[\w-]{1,64}?@[\w-]+\.[\w-]{2,}/, 'Invalid Email!'),
  });
  // const hiddenFileInput = React.useRef(null);
  // const handleUpload = (ev) => {
  //   ev.preventDefault();
  //   hiddenFileInput.current.click();
  // };

  // const [fileValue, setFileValue] = React.useState('Upload your photo');
  //
  // const handleUp = (event) => {
  //   if (event.target.value !== '') {
  //     setFileValue(event.target.value.split('\\')[event.target.value.split('\\').length - 1]);
  //   }
  // };
  //
  // const handleSubmit = (ev) => {
  //   ev.preventDefault();
  //   console.log(ev.target.value);
  // };

  return (
    <div className="form">
      <div className="container">
        <h1 className="heading-2-desktop">Register to get a work</h1>
        <p className="paragraph-1">Attention! After successful registration and alert, update the list of users in the block from the top</p>
        <Formik
          initialValues={initialValues}
          onSubmit={(data, { setSubmitting }) => {
            setSubmitting(true);
            console.log(data);
            setSubmitting(false);
          }}
          validationSchema={validationSchema}
        >
          {({
            values,
            setFieldValue,
            setFieldTouched,
            dirty,
            isValid,
            errors,
            touched,
          }) => (
            <Form>
              <div className="firstFormRow">
                <div>
                  <Field
                    required
                    name="name"
                    type="input"
                    as={TextField}
                    label="Name"
                    placeholder="Your name"
                    variant="outlined"
                    helperText={touched.name ? errors.name : ''}
                    error={touched.name && (!!errors.name)}
                  />
                </div>
                <div>
                  <Field
                    required
                    name="email"
                    label="Email"
                    placeholder="Your email"
                    variant="outlined"
                    as={TextField}
                    helperText={touched.email ? errors.email : ''}
                    error={touched.email && (!!errors.email)}
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
                      >
                        {() => (
                          <TextField
                            variant="outlined"
                            type="tel"
                            required
                            label="Phone"
                            helperText={touched.phone ? errors.phone : ''}
                            error={touched.phone && (!!errors.phone)}
                          />
                        )}
                      </InputMask>
                    )}
                  </Field>
                </div>
              </div>
              <div className="secondFormRow">

                {/* <div className="select-component"> */}
                {/*  <FieldArray name="position"> */}
                {/*    {() => { */}

                {/*    }} */}
                {/*  </FieldArray> */}
                {/*  <Select */}
                {/*    name="position" */}
                {/*    className="selectedItem formSelect" */}
                {/*    variant="outlined" */}
                {/*    value={values.position} */}
                {/*    onChange={handleChange} */}
                {/*    fullWidth */}
                {/*    autoWidth */}
                {/*    IconComponent={ArrowIcon} */}
                {/*  > */}
                {/*    <MenuItem value={1}>First item</MenuItem> */}
                {/*    <MenuItem value={2}>Second item</MenuItem> */}
                {/*    <MenuItem value={3}>Third item</MenuItem> */}
                {/*  </Select> */}
                {/* </div> */}
                {/* <div> */}
                {/*  <div className="fileFieldHolder"> */}
                {/*    <TextField */}
                {/*      inputProps={{ readOnly: 'readonly' }} */}
                {/*      helperText="File format jpg  up to 5 MB, the minimum size of 70x70px" */}
                {/*      onClick={handleUpload} */}
                {/*      ref={hiddenFileInput} */}
                {/*      value={fileValue} */}
                {/*      variant="outlined" */}
                {/*    /> */}
                {/*    <button type="button" onClick={handleUpload} className="secondary">Upload</button> */}
                {/*  </div> */}
                {/*  <> */}
                {/*    <input onChange={handleUp} type="file" name="file" ref={hiddenFileInput} style={{ display: 'none' }} /> */}
                {/*  </> */}
                {/* </div> */}
              </div>
              <div className="submit-holder">
                <button disabled={!(isValid && values.name !== '' && values.email !== '' && values.phone !== '' && values.phone !== '+38(0__)___-__-__')} className="primary" type="submit">Submit</button>
              </div>
              <pre>{JSON.stringify(values, null, 2)}</pre>
              <pre>{JSON.stringify(errors, null, 2)}</pre>
              <pre>{JSON.stringify(dirty, null, 2)}</pre>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
