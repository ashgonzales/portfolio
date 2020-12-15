import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HeaderLinks } from "./HeaderLinks";
import "./Header.css";

function Header2() {
  const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);
  const [header, setHeader] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // const showButton = () => {
  //   if (window.innerWidth <= 960) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // };

  // useEffect(() => {
  //   showButton();
  // }, []);

  // window.addEventListener("resize", showButton);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <nav className={header ? "header active" : "header"}>
        <div className="container">
          <Link to="/" onClick={closeMobileMenu}>
            <h1 className="header-logo">acg</h1>
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
          </Link>
          <ul className={click ? "header-menu active" : "header-menu"}>
            {HeaderLinks.map((link, idx) => {
              return (
                <li key={idx}>
                  <span className="header-span">
                    <a
                      className={link.class}
                      href={link.url}
                      onClick={closeMobileMenu}
                    >
                      {link.title}
                    </a>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header2;
