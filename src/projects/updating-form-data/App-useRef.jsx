import React, { useEffect, useRef, useState } from "react";

const initialFormData = {
  fname: "",
  lname: "",
  age: 0,
  height: "",
};

const App = () => {
  const formDataRef = useRef(initialFormData); // { current: initialFormData}

  console.log(formDataRef);

  const handleChange = (e) => {
    const dynVal = e.target.name;
    const value = e.target.value;

    formDataRef.current = {
      ...formDataRef.current,
      [dynVal]: value,
    };

    console.log("formDataRef.current", formDataRef.current);
  };

  useEffect(() => {
    console.log("COMPONENT RENDERED");
  });

  const submitForm = (e) => {
    e.preventDefault();

    // Here you can handle form submission, e.g., send data to server
    console.log(formDataRef.current);
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="fname">
        <span>First Name</span>
        <input onChange={handleChange} type="text" name="fname" />
      </label>
      <br />
      <label htmlFor="lname">
        <span>Last Name</span>
        <input onChange={handleChange} type="text" name="lname" />
      </label>
      <br />
      <label htmlFor="age">
        <span>Age</span>
        <input onChange={handleChange} type="number" name="age" />
      </label>
      <br />
      <button>Submit</button>
    </form>
  );
};

export default App;
