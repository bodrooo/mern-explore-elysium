import { useState } from "react";
import { v4 as uuid } from "uuid";
import "./header.sass";

const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);

  const linkMenu = [
    {
      href: "/",
      name: "Home",
    },
    {
      href: "/login",
      name: "Login",
    },
    {
      href: "/register",
      name: "Register",
    },
  ];

  return (
    <header>
      <nav>
        <a href="/" className="brand">
          E-E<sup>*</sup>
        </a>
        <div className="nav-menu">
          <div className="mobile">
            <div className="hamburger-menu">
              <input
                type="checkbox"
                onChange={(e) => setIsMenuActive(e.target.checked)}
              />
              <div className="spans">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className={`main-menu ${isMenuActive ? "active" : ""}`}>
              <ul>
                {linkMenu.map((menu: { href: string; name: string }) => (
                  <li key={uuid()}>
                    <a href={menu.href}>{menu.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="desktop">
            <ul>
              {linkMenu.map((menu: { href: string; name: string }) => (
                <li key={uuid()}>
                  <a href={menu.href}>{menu.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
