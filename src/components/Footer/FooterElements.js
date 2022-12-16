import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const FooterContainer = styled.footer`
  background-color: var(--color-black);
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px;
  text-align: center;
  width: 160px;
  box-sizing: border-box;
  color: var(--color-white);
  z-index: 2;

  @media screen and (max-wdith: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  font-weight: 600;
  color: var(--color-darkpink);
  margin-bottom: 16px;
`;

export const FooterLink = styled(LinkR)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    color: var(--color-xmas);
    /* color: var(--color-darkpink); */
    transition: 0.2s ease-in-out;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: auto auto;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(LinkR)`
  color: var(--color-white);
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: 600;
`;

export const WebsiteRights = styled.small`
  font-size: 16px;
  color: var(--color-lightgrey);
  line-height: 24px;
  margin-bottom: 16px;
  text-align: center;
  z-index: 2;

  a {
    color: var(--color-lightgrey);
    text-decoration: none;
  }

  a:hover {
    color: var(--color-xmas);
    /* color: var(--color-darkpink); */
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 240px;
  padding: 20px;
`;

export const SocialIconLink = styled.a`
  color: var(--color-white);
  font-size: 42px;
  margin-right: 10px;
  cursor: pointer;
  z-index: 2;

  &:hover {
    color: var(--color-xmas);
    /* color: var(--color-darkpink); */
    transition: 0.2s ease-in-out;
  }
`;
