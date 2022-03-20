import React from "react";
import "./NewCostumerForm.css";
import StudentLifeCard from "../Cards/StudentLifeCard";
import AnywhereCard from "../Cards/AnywhereCard";
import LiquidCard from "../Cards/LiquidCard";

function NewCostumerForm() {

  return (
    <>
      <div className="NewCostumerForm">
        <h1>Check your eligibility </h1>
        <form action="" className="formData">
          <label>Title </label>
          <select
            name="title"
            id=""
            className="selectInput"
            defaultValue="Choose..."
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
            type="text"
            name="firstName"
            placeholder="First name"
            className="formInput"
            
          />
          <br />
          <label>Middle Name</label>
          <br />
          <input
            type="text"
            name="middleName"
            className="formInput"
            placeholder="Middle Name"
          />
          <br />
          <label>Last Name</label>
          <br />
          <input
            type="text"
            name="lastName"
            className="formInput"
            placeholder="Last Name"
          />
          <br />
          <label>Date of Birth</label>
          <br />
          <input type="date" name="dob" className="formInput" />
          <br />
          <label>Job Status</label>
          <br />
          <select name="jobStatus" className="formInput">
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
            name="annualIncome"
            placeholder="£"
            className="formInput"
          />
          <br />
          <br />
          
  
          <button type="submit" className="submitButton" >
            Submit
          </button>

          <br />
        </form>
      </div>
      < StudentLifeCard />
      < AnywhereCard />
      < LiquidCard />
      <br />
      <br />
    </>
  );
}

export default NewCostumerForm;
