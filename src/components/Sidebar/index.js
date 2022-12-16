import React from "react";
import { animateScroll as scroll } from "react-scroll";

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarBtnWrap,
  SidebarRoute
} from "../Sidebar/SidebarElements";
import images from "../../images";

const Sidebar = ({ isOpen, toggle }) => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarBtnWrap>
          <SidebarRoute to="/">
            <img src={images.wofhLogoWheel} alt="Login" />
          </SidebarRoute>
        </SidebarBtnWrap>
        <SidebarMenu>
          <SidebarLink
            to="/discover"
            onClick={toggleHome}
            spy="true"
            smooth="true"
            offset={-70}
            duration={400}
          >
            Discover
          </SidebarLink>
          <SidebarLink
            to="/partnership"
            onClick={toggleHome}
            spy="true"
            smooth="true"
            offset={-70}
            duration={400}
          >
            Partnership
          </SidebarLink>
          <SidebarLink
            to="/enquire"
            onClick={toggleHome}
            spy="true"
            smooth="true"
            offset={-70}
            duration={400}
          >
            Enquiry
          </SidebarLink>
        </SidebarMenu>
        <SidebarBtnWrap>
          <SidebarRoute to="qunote3.net">
            <img
              src={images.qunoteLogin}
              style={{ width: "40px" }}
              alt="Login"
            />
          </SidebarRoute>
        </SidebarBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
