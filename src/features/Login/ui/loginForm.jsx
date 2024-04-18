import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import loginStyles from "./LoginForm.module.css";
import logo from "../../../shared/assets/elcentro-logo.png";
import { validation } from "../lib/validation";
import { loginUser } from "../model/LoginThunks";

const LoginForm = () => {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.login);
  const [errors, setErrors] = useState({});
  const [credentials, setCredentials] = useState({
    username: "",
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
    console.log(credentials);
    const validationErrors = validation(
      credentials.username,
      credentials.password
    );
    if (Object.keys(validationErrors).length === 0) {
      // dispatch(loginUser(credentials));
      setErrors({});
      console.log(credentials);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className={loginStyles.mainContainer}>
      <img src={logo} />
      <form onSubmit={handleSubmit} className={loginStyles.loginForm}>
        <h3>Вход</h3>
        <div className={loginStyles.inputData}>
          <label for="username">Логин</label>
          <input
            name="username"
            type="text"
            value={credentials.username}
            onChange={handleChange}
            placeholder="Введите логин"
          />
          {errors.username && (
            <div className={loginStyles.error}>{errors.username}</div>
          )}
        </div>
        <div className={loginStyles.inputData}>
          <label for="password">Пароль</label>
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
      {authState.error && <p className="error">Error: {authState.error}</p>}
    </div>
  );
};

export default LoginForm;
