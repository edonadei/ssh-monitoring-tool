import "./helper.css";
import './App.css';
import logo from './logo.svg';
import { MoreResources, DisplayFormikState } from "./helper";
import React from "react";
import { render } from "react-dom";
import { Formik, withFormik } from "formik";
import * as Yup from "yup";
import classnames from 'classnames';

const formikEnhancer = withFormik({
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .min(2, "The url is probably longer than that !")
      .required("Url is required"),
    port: Yup.string()
      .min(2, "The port number is probably longer than that !")
      .required("Port number is required."),
    username: Yup.string()
      .min(2, "The username is probably longer than that !")
      .required("Username is required"),
    key: Yup.string().required("SSH Key is required")
  }),

  mapPropsToValues: ({ user }) => ({
    ...user
  }),
  handleSubmit: (payload, { setSubmitting }) => {
    alert(payload.port);
    alert(payload.name);
    alert(payload.username);
    alert(payload.key);

    setSubmitting(true);
  },
  displayName: "SSH Monitoring tool"
});

const InputFeedback = ({ error }) =>
  error ? <div className="input-feedback">{error}</div> : null;

const Label = ({ error, className, children, ...props }) => {
  return (
    <label className="label" {...props}>
      {children}
    </label>
  );
};

const TextInput = ({ type, id, label, error, value, onChange, className, ...props }) => {
  const classes = classnames(
    'input-group',
    {
      'animated shake error': !!error,
    },
    className
  );
  return (
    <div className={classes}>
      <Label htmlFor={id} error={error}>
        {label}
      </Label>
      <input
        id={id}
        className="text-input"
        type={type}
        value={value}
        onChange={onChange}
        {...props}
      />
      <InputFeedback error={error} />
    </div>
  );
};

const formSSHMonitoringtool = props => {
  const {
    values,
    touched,
    errors,
    dirty,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        id="name"
        type="text"
        label="URL"
        placeholder="URL of the client"
        error={touched.name && errors.name}
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <TextInput
        id="port"
        type="text"
        label="Port"
        min="1"
        max="99999"
        placeholder="Port name: exemple 23"
        error={touched.port && errors.port}
        value={values.port}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <TextInput
        id="username"
        type="text"
        label="Username"
        min="1"
        max="99999"
        placeholder="Enter your username"
        error={touched.username && errors.username}
        value={values.username}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <label htmlFor="port" style={{ display: "block" }}>
              SSH Key
      </label>
      <input
        id="key"
        placeholder="Select your key location"
        type="file"
        label= "SSH Key"
        value={values.key}
        onChange={handleChange}
        onBlur={handleBlur}
        className={
          errors.key && touched.key ? "text-input error" : "text-input"
        }
      />
      {errors.key && touched.key && (
        <div className="input-feedback">{errors.key}</div>
      )}

      <button
        type="button"
        className="outline"
        onClick={handleReset}
        disabled={!dirty || isSubmitting}
      >
        Reset
      </button>
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </form>
  );
};

const MyEnhancedForm = formikEnhancer(formSSHMonitoringtool);

const Form = () => (
  <div className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <MyEnhancedForm user={{ name: '', port: '', username: '', key: '' }} />
  </div>
);

export default Form;