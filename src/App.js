import React from 'react';
import logo from './logo.svg';
import './App.css';
import "./helper.css";
import { MoreResources, DisplayFormikState } from "./helper";
import { render } from "react-dom";
import { Formik } from "formik";
import * as Yup from "yup";

function App() {
  return (
    <div className="app">
    <Formik
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 500);
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email()
          .required("Required")
      })}
    >
      {props => {
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
            <label htmlFor="name" style={{ display: "block" }}>
              URL
            </label>
            <input
              id="name"
              placeholder="URL of the client"
              type="text"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.name && touched.name ? "text-input error" : "text-input"
              }
            />
            {errors.name && touched.name && (
              <div className="input-feedback">{errors.email}</div>
            )}
            <br />
            <label htmlFor="port" style={{ display: "block" }}>
              Port
            </label>
            <input
              id="port"
              placeholder="Port name: exemple 23"
              type="number"
              min="1"
              max="99999"
              value={values.port}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.port && touched.port ? "number-input error" : "number-input"
              }
            />
            {errors.port && touched.port && (
              <div className="input-feedback">{errors.port}</div>
            )}
            <br />
            <label htmlFor="username" style={{ display: "block" }}>
              Username
            </label>
            <input
              id="username"
              placeholder="Enter your username"
              type="text"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.username && touched.username
                  ? "text-input error"
                  : "text-input"
              }
            />
            {errors.username && touched.username && (
              <div className="input-feedback">{errors.username}</div>
            )}
            <br />
            <label htmlFor="port" style={{ display: "block" }}>
              SSH Key
            </label>
            <input
              id="key"
              placeholder="Select your key location"
              type="file"
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

            <DisplayFormikState {...props} />
          </form>
        );
      }}
    </Formik>

    <MoreResources />
  </div>
);
}

export default App;
