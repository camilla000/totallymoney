import React from "react";
import "./NewCostumerForm.css";
import { useFormik } from "formik";
import StudentLifeCard from "../Cards/StudentLifeCard";
import AnywhereCard from "../Cards/AnywhereCard";
import LiquidCard from "../Cards/LiquidCard";

function NewCostumerForm() {
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
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <div className="NewCostumerForm">
        <h1>Check your eligibility </h1>

        <form className="formData" onSubmit={formik.handleSubmit}>
          <label>Title </label>
          <select
            className="selectInput"
            id="title"
            name="title"
            onChange={formik.handleChange}
            value={formik.values.title}
          >
            <option value="Mr.">Mr.</option>
            <option value="Mrs.">Mrs.</option>
            <option value="Miss">Miss</option>
            <option value="Ds.">Ms.</option>
            <option value="Dr.">Dr.</option>
          </select>
          <br />
          <label>First Name</label>
          <br />
          <input
            id="firstName"
            type="text"
            name="firstName"
            placeholder="First name"
            className="formInput"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          <br />
          <label>Middle Name</label>
          <br />
          <input
            id="middleName"
            type="text"
            name="middleName"
            className="formInput"
            placeholder="Middle Name"
            onChange={formik.handleChange}
            value={formik.values.middleName}
          />
          <br />
          <label>Last Name</label>
          <br />
          <input
            id="lastName"
            type="text"
            name="lastName"
            className="formInput"
            placeholder="Last Name"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
          <br />
          <label>Date of Birth</label>
          <br />
          <input
            id="dob"
            type="date"
            name="dob"
            className="formInput"
            onChange={formik.handleChange}
            value={formik.values.dob}
          />
          <br />
          <label>Job Status</label>
          <br />
          <select
            id="jobStatus"
            name="jobStatus"
            className="formInput"
            onChange={formik.handleChange}
            value={formik.values.jobStatus}
          >
            <option value="Employed">Employed Full Time</option>
            <option value="Employed">Employed Part Time</option>
            <option value="Self-Employed">Self-Employed</option>
            <option value="Student">Student</option>
            <option value="Unemployed">Unemployed</option>
          </select>
          <br />
          <label>Annual Income Before Tax:</label>
          <br />
          <input
            type="text"
            id="income"
            name="income"
            placeholder="£"
            className="formInput"
            onChange={formik.handleChange}
            value={formik.values.income}
          />
          <br />
          <br />

          <button type="submit" className="submitButton">
            Submit
          </button>

          <br />
        </form>
      </div>

      <br />
      <br />
    </>
  );
}

export default NewCostumerForm;
