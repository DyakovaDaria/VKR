import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import loginStyles from "./LoginForm.module.css";
import logo from "../../../shared/assets/elcentro-logo.png";
import { validation } from "../lib/validation";
import { loginUser } from "../model/LoginThunks";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, isLogin } = useSelector((state) => state.login);
  const [errors, setErrors] = useState({});
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validation(
      credentials.email,
      credentials.password
    );
    if (Object.keys(validationErrors).length === 0) {
      dispatch(loginUser(credentials));
      navigate("/main-page");
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className={loginStyles.mainContainer}>
      <img src={logo} className={loginStyles.logo} />
      <form onSubmit={handleSubmit} className={loginStyles.loginForm}>
        <h3>Вход</h3>
        <div className={loginStyles.inputData}>
          <label htmlFor="email">Логин</label>
          <input
            name="email"
            type="text"
            value={credentials.email}
            onChange={handleChange}
            placeholder="Введите email"
          />
          {errors.username && (
            <div className={loginStyles.error}>{errors.username}</div>
          )}
        </div>
        <div className={loginStyles.inputData}>
          <label htmlFor="password">Пароль</label>
          <input
            name="password"
            type="password"
            value={credentials.password}
            onChange={handleChange}
            placeholder="Введите пароль"
          />
          {errors.password && (
            <div className={loginStyles.error}>{errors.password}</div>
          )}
        </div>
        <button type="submit" className={loginStyles.loginButton}>
          Войти
        </button>
      </form>
      {error && <p className={loginStyles.error}>{error}</p>}
    </div>
  );
};

export default LoginForm;
