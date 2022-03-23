import React, { useState, useEffect } from "react";
import "./NewCostumerForm.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import Card from "../Cards/Card";
import {
  Col,
  Container,
  Row
} from "react-bootstrap";




function NewCostumerForm() {

  const data = {
    customerTitle: ["Mr.", "Mrs.", "Miss", "Ms.", "Dr."],
    jobsStatus: [
      "Employed Full Time",
      "Employed Part Time",
      "Self-Employed",
      "Student",
      "Unemployed",
    ],
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      firstName: "",
      middleName: "",
      lastName: "",
      dob: "",
      jobStatus: "",
      income: "",
    },

    validationSchema: Yup.object({
      firstName: Yup.string().required("First Name is Required"),
      lastName: Yup.string().required("Last Name is Required"),
      dob: Yup.string().required("Date of Birth is Required"),
      jobStatus: Yup.string().required("Job Status is Required"),
      income: Yup.number().required("Annual Income is Required"),
    }),

    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <Container>
        <Row>
          <Col xs lg="1">
            <form className="formData" onSubmit={formik.handleSubmit}>
              <div className="NewCostumerForm">
                <h1>Check your eligibility </h1>
                <label>Title</label>
                <select
                  className="selectInput"
                  id="title"
                  name="title"
                  onChange={formik.handleChange}
                  value={formik.values.title}
                >
                  {data.customerTitle.map((title) => (
                    <option value={title}>{title}</option>
                  ))}
                </select>

                <label>First Name</label>

                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  className="formInput"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                />
                {formik.errors.firstName ? (
                  <p className="formError">{formik.errors.firstName}</p>
                ) : null}

                <label>Middle Name</label>
                <input
                  id="middleName"
                  type="text"
                  name="middleName"
                  className="formInput"
                  placeholder="Middle Name"
                  onChange={formik.handleChange}
                  value={formik.values.middleName}
                />
                <label>Last Name</label>
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  className="formInput"
                  placeholder="Last Name"
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                />
                {formik.errors.lastName ? (
                  <p className="formError">{formik.errors.lastName}</p>
                ) : null}
                <label>Date of Birth</label>
                <input
                  id="dob"
                  type="date"
                  name="dob"
                  className="formInput"
                  onChange={formik.handleChange}
                  value={formik.values.dob}
                />
                {formik.errors.dob ? (
                  <p className="formError">{formik.errors.dob}</p>
                ) : null}
                <label>Job Status</label>
                <select
                  id="jobStatus"
                  name="jobStatus"
                  className="formInput"
                  onChange={formik.handleChange}
                  value={formik.values.jobStatus}
                >
                  <option value="Employed">Choose One</option>
                  {data.jobsStatus.map((job) => (
                    <option value={job}>{job}</option>
                  ))}
                </select>
                {formik.errors.jobStatus ? (
                  <p className="formError">{formik.errors.jobStatus}</p>
                ) : null}
                <label>Annual Income Before Tax:</label>
                <input
                  type="number"
                  id="income"
                  name="income"
                  placeholder="£"
                  className="formInput"
                  onChange={formik.handleChange}
                  value={formik.values.income}
                />
                {formik.errors.income ? (
                  <p className="formError">{formik.errors.income}</p>
                ) : null}
                <button type="submit" className="submitButton">
                  Submit
                </button>
                <br />
                <br />
              </div>

              {formik.isSubmitting && (
                <>
                  <br />
                  <br />
                  <div className="cardsDisplay">
                    <h3>
                      {" "}
                      Hello,
                      {formik.values.title}
                      {formik.values.firstName} {formik.values.lastName}!
                    </h3>
                    <p>Here are the cards we found for you:</p>
                  </div>

                  <Card selectCard="Anywhere" />
                  {formik.values.jobStatus === "Student" && (
                    <Card selectCard="Student" />
                  )}
                  {formik.values.income >= 16000 && (
                    <Card selectCard="Liquid" />
                  )}
                </>
              )}
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default NewCostumerForm;

