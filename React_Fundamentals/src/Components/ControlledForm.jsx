import React, { useState } from 'react';

function ControlledForm(props) {

const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    let newErrors = {
      name: "",
      email: "",
      password: "",
    };

    const isValid = true;

    // Name Validation
    if (formData.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters.";
      isValid = false;
    }

    // Email Validation
    if (!formData.email.includes("@")) {
      newErrors.email = "Enter a valid email.";
      isValid = false;
    }

    // Password Validation
    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      console.log(formData);

      alert("Signup Successful!");

      setFormData({
        name: "",
        email: "",
        password: "",
      });

      setErrors({
        name: "",
        email: "",
        password: "",
      });
    }
  }

  return (
    <div style={{ padding: "20px",border:"black solid 2px" }}>
      <h2>Signup Form</h2>

      <form onSubmit={handleSubmit}>

        <label>Name: </label>
        <input type="text" name="name" value={formData.name} onChange={handleChange}/>
        <br />
        <span style={{ color: "red" }}>{errors.name}</span>

        <br />

        <label>Email: </label>
        <input type="email" name="email" value={formData.email} onChange={handleChange}/>
        <br />

        <span style={{ color: "red" }}>{errors.email}</span>

        <br />

        <label>Password: </label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
        <br />

        <span style={{ color: "red" }}>{errors.password}</span>

        <br />

        <button type="submit">Signup</button>

      </form>
    </div>
  );
}


export default ControlledForm;