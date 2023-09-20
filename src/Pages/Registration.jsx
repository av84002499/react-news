import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export const Registration = () => {
  let navigate = useNavigate();

  const [name, setName] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRepeatPasswordChange = (event) => {
    setRepeatPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== repeatPassword) {
      setErrorMessage("Passwords don't match");
      return;
    }

    const data = {
      password: password,
      email: email,
    };
    navigate('/Login');

    localStorage.setItem('data', JSON.stringify(data));
    Swal.fire({
      icon: 'success',
      title: 'Registration in successfully!',
      showConfirmButton: false,
      timer: 3000, // 3 seconds
    });

    setErrorMessage('');
  };

  return (
    <div className="container d-flex justify-content-center " style={{ marginTop: "5rem" }}>
      <form onSubmit={handleSubmit} className="col-md-8">
        <div className="form-outline mb-3 ">
          <label className="form-label" htmlFor="registerName">
            Name
          </label>
          <input
            type="text"
            id="registerName"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-outline mb-3">
          <label className="form-label" htmlFor="registerEmail">
            Email
          </label>
          <input
            type="email"
            id="registerEmail"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-outline mb-3">
          <label className="form-label" htmlFor="registerPhone">
            Phone Number
          </label>
          <input
            type="tel"
            id="registerPhone"
            className="form-control"
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
          />
        </div>
        <div className="form-outline mb-3">
          <label className="form-label" htmlFor="registerPassword">
            Password
          </label>
          <input
            type="password"
            id="registerPassword"
            className="form-control"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="form-outline mb-3">
          <label className="form-label" htmlFor="registerRepeatPassword">
            Repeat password
          </label>
          <input
            type="password"
            id="registerRepeatPassword"
            className="form-control"
            value={repeatPassword}
            onChange={handleRepeatPasswordChange}
          />
          {errorMessage && <p className="text-danger">{errorMessage}</p>}
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary btn-block">
            Registration
          </button>
        </div>
        <div className="text-center mt-3">
          <p>
            Already a member? <a href="/Login">Login</a>
          </p>
        </div>
      </form>
    </div>
  );
};
