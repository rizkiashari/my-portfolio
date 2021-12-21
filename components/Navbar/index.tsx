import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import classNames from "classnames";
import Style from "./Navbar.module.css";
const Navbar = () => {
  const router = useRouter();

  const [isActive, setIsActive] = useState(false);

  const handleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className={Style.Navbar}>
      <div className={Style.Container}>
        <h3 className={Style.Logo}>AsZki</h3>
        <button onClick={() => handleActive()} className={Style.ButtonHam}>
          {!isActive ? (
            <svg
              width='40'
              height='40'
              viewBox='0 0 56 56'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M9.33337 35H46.6667V30.3333H9.33337V35ZM9.33337 44.3333H46.6667V39.6667H9.33337V44.3333ZM9.33337 25.6667H46.6667V21H9.33337V25.6667ZM9.33337 11.6667V16.3333H46.6667V11.6667H9.33337Z'
                fill='white'
              />
            </svg>
          ) : (
            <svg
              width='36'
              height='37'
              viewBox='0 0 36 37'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <rect
                x='0.372559'
                y='29.1422'
                width='40'
                height='10'
                rx='2'
                transform='rotate(-45 0.372559 29.1422)'
                fill='white'
              />
              <rect
                x='7.07104'
                y='1'
                width='40'
                height='10'
                rx='2'
                transform='rotate(45 7.07104 1)'
                fill='white'
              />
            </svg>
          )}
        </button>
        <ul
          className={classNames(Style.NavbarList, {
            [Style.Active]: isActive, // if isActive is true, add the class "active"
            [Style.Inactive]: !isActive, // if isActive is false, add the class "inactive"
          })}>
          {router.pathname === "/" ? (
            <li className={Style.NavbarListActive}>
              <Link href='/'>Home</Link>
              <div className={Style.circle}></div>
            </li>
          ) : (
            <li className={Style.NavbarLink}>
              <Link href='/'>Home</Link>
            </li>
          )}
          {router.pathname === "/my-portfolio" ? (
            <li className={Style.NavbarListActive}>
              <Link href='/my-portfolio'>Portfolio</Link>
              <div className={Style.circle}></div>
            </li>
          ) : (
            <li className={Style.NavbarLink}>
              <Link href='/my-portfolio'>Portfolio</Link>
            </li>
          )}
          {router.pathname === "/about" ? (
            <li className={Style.NavbarListActive}>
              <Link href='/about'>About</Link>
              <div className={Style.circle}></div>
            </li>
          ) : (
            <li className={Style.NavbarLink}>
              <Link href='/about'>About</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
