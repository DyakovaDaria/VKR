import React, { useState, useEffect } from "react";
import styles from "./StudentNavbar.module.css";
import logo from "../../shared/assets/elcentro-logo.png";
import { NavLink } from "react-router-dom";

const StudentNavbar = () => {
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
        to="/"
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

export default StudentNavbar;
