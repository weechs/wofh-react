import styled from "styled-components";
import {
  // FaUserFriends,
  FaRegCompass,
  FaHandshake,
  FaSortAmountDownAlt
} from "react-icons/fa";
import pending from "../../images/team/pending.jpg";
import LW from "../../images/team/lw.jpg";
import SW from "../../images/team/sw.jpg";
import SR from "../../images/team/pending.jpg";
import CA from "../../images/team/ca.jpg";
import DB from "../../images/team/db.jpg";
import TC from "../../images/team/tc.jpg";
import RG from "../../images/team/rg.jpg";
import AJ from "../../images/team/aj.jpg";
import LL from "../../images/team/ll.jpg";
import JM from "../../images/team/jm.jpg";
import MM from "../../images/team/mm.jpg";
import EM from "../../images/team/pending.jpg";
import CMU from "../../images/team/cmu.jpg";
import LO from "../../images/team/lo.jpg";
import JR from "../../images/team/jr.jpg";
import VT from "../../images/team/vt.jpg";
import JT from "../../images/team/jt.jpg";
import EW from "../../images/team/ew.jpg";
import CE from "../../images/team/pending.jpg";
import AM from "../../images/team/am.jpg";
import VO from "../../images/team/vo.jpg";
import XS from "../../images/team/xs.jpg";

export const ClientContainer = styled.div`
  max-height: auto;
  margin: auto auto;
  padding: 120px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: var(--color-black);

  @media screen and (max-width: 1000px) {
    height: auto;
  }

  @media screen and (max-width: 768px) {
    height: auto;
  }
  @media screen and (max-width: 480px) {
    height: auto;
  }
`;

export const ClientWrapper = styled.div`
  max-width: auto;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (min-width: 1600px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 40px;
  }
`;

export const ClientCard = styled.div`
  background: var(--color-black);
  border: 1px solid var(--color-darkpink);
  color: var(--color-white);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 50px;
  height: 320px;
  padding: 30px;

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
`;

export const ClientIcon1 = styled.img`
  background: url(${pending});
  background-size: contain;
  border-radius: 50%;
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;
export const ClientIcon2 = styled(FaRegCompass)`
  color: var(--color-lightergrey);
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;
export const ClientIcon3 = styled(FaHandshake)`
  color: var(--color-lightergrey);
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;
export const ClientIcon4 = styled(FaSortAmountDownAlt)`
  color: var(--color-lightergrey);
  height: 160px;
  width: auto;
  margin-bottom: 10px;
`;
export const ClientImg1 = styled.img`
  background: url(${pending});
  background-size: cover;
  border-radius: 50%;
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;
//Lucy Weech
export const ClientImgLW = styled.img`
  background: url(${LW});
  background-size: contain;
  border-radius: 50%;
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;
//Simon Weech
export const ClientImgSW = styled.img`
  background: url(${SW});
  background-size: contain;
  border-radius: 50%;
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;
//Sam Richardson
export const ClientImgSR = styled.img`
  background: url(${SR});
  background-size: contain;
  border-radius: 50%;
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;
//Claire Ashton
export const ClientImgCA = styled.img`
  background: url(${CA});
  background-size: contain;
  border-radius: 50%;
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;
//Deborah Bowditch
export const ClientImgDB = styled.img`
  background: url(${DB});
  background-size: contain;
  border-radius: 50%;
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;
//Tania Carrigan
export const ClientImgTC = styled.img`
  background: url(${TC});
  background-size: contain;
  border-radius: 50%;
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;
//Rani Govindasami
export const ClientImgRG = styled.img`
  background: url(${RG});
  background-size: contain;
  border-radius: 50%;
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;
//Amanda Jackson
export const ClientImgAJ = styled.img`
  background: url(${AJ});
  background-size: contain;
  border-radius: 50%;
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;
//Elizabeth McWilliams
export const ClientImgEM = styled.img`
  background: url(${EM});
  background-size: contain;
  border-radius: 50%;
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;
//Louise Lloyd
export const ClientImgLL = styled.img`
  background: url(${LL});
  background-size: contain;
  border-radius: 50%;
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;
//Jo McConnell
export const ClientImgJM = styled.img`
  background: url(${JM});
  background-size: contain;
  border-radius: 50%;
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;
//Margaret McEvoy
export const ClientImgMM = styled.img`
  background: url(${MM});
  background-size: contain;
  border-radius: 50%;
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;
//Christine Muller
export const ClientImgCMU = styled.img`
  background: url(${CMU});
  background-size: contain;
  border-radius: 50%;
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;
//Lauren Osborne
export const ClientImgLO = styled.img`
  background: url(${LO});
  background-size: contain;
  border-radius: 50%;
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;
//Jenny Rolfe
export const ClientImgJR = styled.img`
  background: url(${JR});
  background-size: contain;
  border-radius: 50%;
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;
//Vicky Thompson
export const ClientImgVT = styled.img`
  background: url(${VT});
  background-size: contain;
  border-radius: 50%;
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;
//Julian Throssell
export const ClientImgJT = styled.img`
  background: url(${JT});
  background-size: contain;
  border-radius: 50%;
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;
//Emma Wakeling
export const ClientImgEW = styled.img`
  background: url(${EW});
  background-size: contain;
  border-radius: 50%;
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;
//Caroline Eriksson
export const ClientImgCE = styled.img`
  background: url(${CE});
  background-size: contain;
  border-radius: 50%;
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;
//Antonella Muscat
export const ClientImgAM = styled.img`
  background: url(${AM});
  background-size: contain;
  border-radius: 50%;
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;
//Victoria Ost
export const ClientImgVO = styled.img`
  background: url(${VO});
  background-size: contain;
  border-radius: 50%;
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;
//Xiaoyu Shu
export const ClientImgXS = styled.img`
  background: url(${XS});
  background-size: contain;
  border-radius: 50%;
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const ClientTopLine = styled.p`
  color: ${({ lightText }) =>
    lightText ? "var(--color-darkpink)" : "var(--color-darkpink)"};
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const ClientHeader = styled.h1`
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

export const ClientSubHeading = styled.p`
  width: 50%;
  font-size: 18px;
  line-height: 24px;
  color: var(--color-lightergrey);
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ClientH2 = styled.h2`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const ClientP = styled.p`
  font-size: 1rem;
  text-align: center;
`;
