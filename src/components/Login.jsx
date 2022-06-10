import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import DisplayMessage from "./DisplayMessage";

const Login = () => {
  const [error, setError] = useState("");
  const [token, setToken] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setToken("");
    const data = {
      email: e.target.formBasicEmail.value,
      password: e.target.formBasicPassword.value,
    };

    try {
      let { data: res } = await axios.post("https://reqres.in/api/login", {
        ...data,
      });
      setToken(res.token);
    } catch (error) {
      if (error.response) {
        setError(error.response.data.error);
      }
    }
  };
  return (
    <>
      {/* For Mobile */}
      <div className="w-100 d-lg-none ">
        <h2 className="fw-bolder text-center">Welcome Back</h2>
        <p className="text-center text-primary fs-6">
          Sub-title text goes here
        </p>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3 " controlId="formBasicEmail">
            <Form.Control
              type="email"
              className="py-3 fw-bold"
              placeholder="Email Address*"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              className="py-3 fw-bold"
              placeholder="Password*"
            />
          </Form.Group>
          {token && (
            <p className="fw-bold ms-3">
              Token:
              <DisplayMessage classValue="text-success">{token}</DisplayMessage>
            </p>
          )}
          {error && (
            <p className="fw-bold ms-3">
              Error:
              <DisplayMessage classValue="text-danger">{error}</DisplayMessage>
            </p>
          )}
          <Button className="w-100" variant="primary fw-bold" type="submit">
            Login
          </Button>
          <div className="d-flex justify-content-between align-items-center mt-2 text-primary">
            <Form.Group className="mb-3 " controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember Password" />
            </Form.Group>
            <p>Forgot Password?</p>
          </div>
        </Form>
      </div>

      {/* For Desktop */}
      <div className="w-50 d-none d-lg-block ">
        <h2 className="fw-bolder text-center">Welcome Back</h2>
        <p className="text-center text-primary">Sub-title text goes here</p>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3 " controlId="formBasicEmail">
            <Form.Control
              type="email"
              className="py-3 fw-bold"
              placeholder="Email Address *"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              className="py-3 fw-bold"
              placeholder="Password *"
            />
          </Form.Group>
          {token && (
            <p className="fw-bold ms-3">
              Token:
              <DisplayMessage classValue="text-success">{token}</DisplayMessage>
            </p>
          )}
          {error && (
            <p className="fw-bold ms-3">
              Error:
              <DisplayMessage classValue="text-danger">{error}</DisplayMessage>
            </p>
          )}
          <Button className="w-100" variant="primary fw-bold" type="submit">
            Login
          </Button>
          <div className="d-flex justify-content-between align-items-center mt-2 text-primary">
            <Form.Group className="mb-3 " controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember Password" />
            </Form.Group>
            <p>Forgot Password?</p>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Login;
