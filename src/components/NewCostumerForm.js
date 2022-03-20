import React from 'react'

function NewCostumerForm() {
  return (
    <form action="">
      <label>Title: </label>
      {/* select options for title */}
      <select name="title" id="">
        <option value="Mr.">Mr.</option>
        <option value="Mrs.">Mrs.</option>
        <option value="Miss">Miss.</option>
        <option value="Ds.">Ms.</option>
        <option value="Dr.">Dr.</option>
      </select>
      <br />
      <label>First Name:</label>
      <br />
      <input type="text" name="firstName" />
      <br />
      <label>Middle Name:</label>
      <br />
      <input type="text" name="middleName" />
      <br />
      <label>Last Name:</label>
      <br />
      <input type="text" name="lastName" />
      <br />
      <label>Date of Birth:</label>
      <br />
      <input type="date" name="dob" />
      <br />
      <label>Job Status:</label>
      <br />
      <select name="jobStatus" id="">
        <option value="Employed">Employed Full Time</option>
        <option value="Employed">Employed Part Time</option>
        <option value="Self-Employed">Self-Employed</option>
        <option value="Student">Student</option>
        <option value="Unemployed">Unemployed</option>
      </select>
      <br />
      <label>Annual Income Before Tax:</label>
      <br />
      <input type="text" name="annualIncomeBeforeTax" placeholder='£' />
      <br />
      {/* Submit button */}
      <input type="submit" value="Submit" />
    </form>
  );
}

export default NewCostumerForm