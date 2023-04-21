import React, {useState} from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorText, setErrorText] = useState("");

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users-list"));

    const user = users.find(
      (user) => user.email === formData.email && user.password === formData.password
    );

    if (user) {
      localStorage.setItem("token-test-lesson", formData.email + formData.password);
      window.location.reload()
    } else {
      setErrorText("Invalid email or password");
    }

    // set user data in local storage


  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br/>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <br/>
        {errorText && <p>{errorText}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;