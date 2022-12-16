import React, { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  ChristmasTree
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";
import images from "../../images";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 40) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const openInNewTab = (url) => {
    // 👇️ setting target to _blank with window.open
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <Nav scrollNav={scrollNav} className={scrollNav ? "lightSticky" : ""}>
        <NavbarContainer>
          <NavLogo
            to="/"
            onClick={toggleHome}
            spy="true"
            smooth="true"
            offset={-70}
            duration={400}
          >
            <ChristmasTree />
            <img src={images.wofhLogo} alt="Wheel of Health Logo" />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                style={{ fontSize: "16px", fontWeight: "600" }}
                to="/enquire"
                onClick={toggleHome}
                spy="true"
                smooth="true"
                offset={-70}
                duration={400}
              >
                <ChristmasTree />
                Festive Hours
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                style={{}}
                to="/discover"
                onClick={toggleHome}
                spy="true"
                smooth="true"
                offset={-70}
                duration={400}
              >
                Discover
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="/partnership"
                onClick={toggleHome}
                spy="true"
                smooth="true"
                offset={-70}
                duration={400}
              >
                Partnership
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="/enquire"
                onClick={toggleHome}
                spy="true"
                smooth="true"
                offset={-70}
                duration={400}
              >
                Enquiry
              </NavLinks>
            </NavItem>
          </NavMenu>

          <NavBtn>
            <NavBtnLink
              onClick={() => openInNewTab("https://qunote3.net")}
              to=""
            >
              <img src={images.qunoteLogin} alt="Login" />
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
