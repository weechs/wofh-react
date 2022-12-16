import styled from "styled-components";
import {
  FaUserFriends,
  FaRegCompass,
  FaHandshake,
  FaSortAmountDownAlt
} from "react-icons/fa";

export const ServicesContainer = styled.div`
  height: 1000px;
  margin: auto auto;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: var(--color-black);

  @media screen and (max-width: 1000px) {
    height: 1200px;
  }

  @media screen and (max-width: 768px) {
    height: 2000px;
  }
  @media screen and (max-width: 480px) {
    height: 2000px;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 40px;
  }
`;

export const ServicesCard = styled.div`
  background: var(--color-darkpink);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  min-height: 540px;
  padding: 20px 20px;

  &:hover {
    background: var(--color-lightergrey);
    color: var(--color-darkpink);
    transform: scale(1.02);
    -webkit-box-shadow: 0 0 42px 0 rgba(236, 64, 122, 0.8);
    box-shadow: 0 0 42px 0 rgba(236, 64, 122, 0.8);
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    svg {
      color: var(--color-darkpink);
    }
  }

  @media screen and (max-width: 1000px) {
    min-height: 400px;
  }
`;

export const ServicesIcon1 = styled(FaUserFriends)`
  color: var(--color-lightergrey);
  height: 140px;
  width: auto;
  margin-bottom: 10px;
`;
export const ServicesIcon2 = styled(FaRegCompass)`
  color: var(--color-lightergrey);
  height: 140px;
  width: auto;
  margin-bottom: 10px;
`;
export const ServicesIcon3 = styled(FaHandshake)`
  color: var(--color-lightergrey);
  height: 140px;
  width: 140px;
  margin-bottom: 10px;
`;
export const ServicesIcon4 = styled(FaSortAmountDownAlt)`
  color: var(--color-lightergrey);
  height: 140px;
  width: 140px;
  margin-bottom: 10px;
`;
export const ServicesImg = styled.img`
  height: 160px;
  width: auto;
  margin-bottom: 10px;
`;

export const ServicesTopLine = styled.p`
  color: ${({ lightText }) =>
    lightText ? "var(--color-darkpink)" : "var(--color-darkpink)"};
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const ServicesHeader = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) =>
    lightText ? "var(--color-darkergrey)" : "var(--color-lightergrey)"};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const ServicesSubHeading = styled.p`
  width: 50%;
  font-size: 18px;
  line-height: 24px;
  color: var(--color-lightergrey);
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const ServicesP = styled.p`
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 28px;
`;
