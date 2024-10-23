import React, { useState } from "react";

const initialFormData = {
  fname: "",
  lname: "",
  age: 0,
  height: "",
};

const App = () => {
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const dynVal = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [dynVal]: value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const { fname, lname, age } = formData;

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="fname">
        <span>First Name</span>
        <input onChange={handleChange} type="text" name="fname" value={fname} />
      </label>
      <br />
      <label htmlFor="lname">
        <span>Last Name</span>
        <input onChange={handleChange} type="text" name="lname" value={lname} />
      </label>
      <br />
      <label htmlFor="age">
        <span>Age</span>
        <input onChange={handleChange} type="number" name="age" value={age} />
      </label>
      <br />
      <button>Submit</button>
    </form>
  );
};

export default App;
