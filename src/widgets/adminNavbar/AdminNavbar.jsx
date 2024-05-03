import React, { useState, useEffect } from "react";
import styles from "./AdminNavbar.module.css";
import logo from "../../shared/assets/elcentro-logo.png";
import { NavLink } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <div className={styles.teacherNavbarCont}>
      <img src={logo} className={styles.logo} />
      <NavLink
        to="/main-page"
        className={({ isActive }) =>
          isActive ? styles.selectedNavItem : styles.navItem
        }
      >
        <p>Главная страница</p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
          <path
            fill="#787878"
            d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
          />
        </svg>
      </NavLink>
      <NavLink
        to="/schedule"
        className={({ isActive }) =>
          isActive ? styles.selectedNavItem : styles.navItem
        }
      >
        <p> Расписание</p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path
            fill="#787878"
            d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm80 64c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16H368c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80z"
          />
        </svg>
      </NavLink>
      <NavLink
        to="/change-classrooms"
        className={({ isActive }) =>
          isActive ? styles.selectedNavItem : styles.navItem
        }
      >
        <p>Классы</p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
          <path
            fill="#787878"
            d="M320 32c0-9.9-4.5-19.2-12.3-25.2S289.8-1.4 280.2 1l-179.9 45C79 51.3 64 70.5 64 92.5V448H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H96 288h32V480 32zM256 256c0 17.7-10.7 32-24 32s-24-14.3-24-32s10.7-32 24-32s24 14.3 24 32zm96-128h96V480c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H512V128c0-35.3-28.7-64-64-64H352v64z"
          />
        </svg>
      </NavLink>
      <NavLink
        to="/subscriptions-management"
        className={({ isActive }) =>
          isActive ? styles.selectedNavItem : styles.navItem
        }
      >
        <p>Абонементы</p>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
          <path
            fill="#787878"
            d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z"
          />
        </svg>
      </NavLink>
      <NavLink
        to="/users-list"
        className={({ isActive }) =>
          isActive ? styles.selectedNavItem : styles.navItem
        }
      >
        <p>Пользователи</p>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            fill="#787878"
            d="M96 0C60.7 0 32 28.7 32 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H96zM208 288h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H144c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM512 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V80zM496 192c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm16 144c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V336z"
          />
        </svg>
      </NavLink>
      <NavLink
        to="/admin-profile"
        className={({ isActive }) =>
          isActive ? styles.selectedNavItem : styles.navItem
        }
      >
        <p>Личный кабинет</p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path
            fill="#787878"
            d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
          />
        </svg>
      </NavLink>
    </div>
  );
};

export default AdminNavbar;
