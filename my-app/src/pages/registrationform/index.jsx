import React, {useState} from "react";

import "./style.scss"

const RegisterUser = () => {
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", age: "", email: "", password: "", confirmPassword: "", gender: "male", specialist: ""
  });
  const [errorData, setErrorData] = useState({
    firstName: "", lastName: "", age: "", email: "", password: "", confirmPassword: "", gender: "male", specialist: ""
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    // example 1
    // setFormData((prevFormData) => ({
    //   ...prevFormData,
    //   [name]: value,
    // }));

    //  example 2
    setFormData({...formData, [name]: value})
  };


  const validation = () => {
    let isValidation = true
    const errors = {
      firstName: "",
      lastName: "",
      age: "",
      email: "",
      password: "",
      confirmPassword: "",
      gender: "male",
      specialist: ""
    }

    if (!formData.firstName.trim().length) {
      isValidation = false
      errors.firstName = 'First name is required'
    }
    if (!formData.lastName.trim().length) {
      isValidation = false
      errors.lastName = 'Last name is required'
    }
    if (!formData.age.trim().length) {
      isValidation = false
      errors.age = 'Age is required'
    }
    if (!formData.email.trim().length) {
      isValidation = false
      errors.email = 'Email is required'
    }
    if (!formData.password.trim().length) {
      isValidation = false
      errors.password = 'Password is required'
    }
    if (!formData.confirmPassword.trim().length) {
      isValidation = false
      errors.confirmPassword = 'Confirm Password is required'
    }
    if (formData.password.length && formData.confirmPassword.length && formData.password.length !== formData.confirmPassword.length) {
      isValidation = false
      errors.confirmPassword = `Confirm Password doe's not much with password`
    }
    if (!formData.specialist.length) {
      isValidation = false
      errors.specialist = 'Specialist is required'
    }

    setErrorData(errors)
    return isValidation
  }


  const createUser = () => {

    if (validation()) {
      let users = JSON.parse(localStorage.getItem("users-list"));

      if (users && users.length) {
        users.push(formData);
      } else {
        users = [formData];
      }

      localStorage.setItem("users-list", JSON.stringify(users));
      setFormData({
        firstName: "",
        lastName: "",
        age: "",
        email: "",
        password: "",
        confirmPassword: "",
        gender: "male",
        specialist: ""
      });
    }
  };

  return (<div className="container">
    <div className="title">Registration</div>
    <div className="content">
      <div className="user-details">
        <div className="input-box">
          <span className="details">Full Name</span>
          <input type="text" name={'firstName'} placeholder="Enter your name" required onChange={handleChange}
                 value={formData.firstName}
          />
          {errorData.firstName ? <p>{errorData.firstName}</p> : null}
        </div>
        <div className="input-box">
          <span className="details">Username</span>
          <input type="text" name={'lastName'} placeholder="Enter your username" required onChange={handleChange}
                 value={formData.lastName}
          />
          {errorData.lastName ? <p>{errorData.lastName}</p> : null}
        </div>
        <div className="input-box">
          <span className="details">Email</span>
          <input type="text" name={'email'} placeholder="Enter your email" required onChange={handleChange}
                 value={formData.email}
          />
          {errorData.email ? <p>{errorData.email}</p> : null}
        </div>
        <div className="input-box">
          <span className="details">Age</span>
          <input type="text" name={'age'} placeholder="Enter your number" required onChange={handleChange}
                 value={formData.age}
          />
          {errorData.age ? <p>{errorData.age}</p> : null}
        </div>
        <div className="input-box">
          <span className="details">Password</span>
          <input type="text" name={'password'} placeholder="Enter your password" required onChange={handleChange}
                 value={formData.password}
          />
          {errorData.password ? <p>{errorData.password}</p> : null}
        </div>
        <div className="input-box">
          <span className="details">Confirm Password</span>
          <input type="text" name={'confirmPassword'} placeholder="Confirm your password" required
                 onChange={handleChange}
                 value={formData.confirmPassword}
          />
          {errorData.confirmPassword ? <p>{errorData.confirmPassword}</p> : null}
        </div>
        <div className="input-box">
          <label>
            <span className="details">Specialiist</span>
            <select onChange={handleChange} name="specialist" defaultValue="Select Specialist">
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="UI/UX Design">UI/UX Design</option>
            </select>
          </label>
          {errorData.specialist ? <p>{errorData.specialist}</p> : null}

        </div>
        <div className={`P-radioClass`}>
          <label>
            <span>Male :</span>
            <input
              onChange={handleChange}
              type="radio"
              name="gender"
              checked={formData.gender === "male"}
              value={"male"}
            />
            <span>Female :</span>
            <input
              type="radio"
              name="gender"
              checked={formData.gender === "female"}
              value={"female"}
              onChange={handleChange}
            />
          </label>
        </div>
      </div>
      <div className="button">
        <button onClick={createUser}>Registration</button>
      </div>
    </div>
  </div>)
}

export default RegisterUser