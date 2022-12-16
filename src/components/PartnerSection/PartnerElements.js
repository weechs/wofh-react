import styled from "styled-components";
import advancedseating from "../../images/es/advancedseating.png";
import albion from "../../images/es/albion.png";
import allterrain from "../../images/es/allterrain.png";
import altonaids from "../../images/es/altonaids.png";
import bettermobility from "../../images/es/bettermobility.png";
import careflex from "../../images/es/careflex.png";
import celticmobility from "../../images/es/celticrehab.png";
import cms from "../../images/es/cms.png";
import consolor from "../../images/es/consolor.png";
import contour from "../../images/es/contour.png";
import dietz from "../../images/es/dietz.png";
import disabilityneeds from "../../images/es/disabilityneeds.png";
import dms from "../../images/es/dms.png";
import easycare from "../../images/es/easycare.png";
import epc from "../../images/es/epc.png";
import felgains from "../../images/es/felgains.png";
import freedom from "../../images/es/freedom.png";
import gma from "../../images/es/gma.png";
import grx from "../../images/es/grx.png";
import kentmobility from "../../images/es/kentmobility.png";
import lcs from "../../images/es/lcs.png";
import lms from "../../images/es/lms.png";
import motus from "../../images/es/motus.png";
import newlyn from "../../images/es/newlyn.png";
import oska from "../../images/es/oska.png";
import precision from "../../images/es/precision.png";
import recare from "../../images/es/recare.png";
import rms from "../../images/es/rms.png";
import simplestuff from "../../images/es/simplestuff.png";
import sos from "../../images/es/sos.png";
import symmetrikit from "../../images/es/symmetrikit.png";
import uniquemobility from "../../images/es/uniquemobility.png";
import vtrak from "../../images/es/vtrak.png";
import wheelfreedom from "../../images/es/wheelfreedom.png";
// import { Link as LinkR } from "react-router-dom";

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
  grid-gap: 34px;
  padding: 0 80px;

  @media screen and (min-width: 1800px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media screen and (max-width: 1400px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 968px) {
    grid-template-columns: 1fr;
    padding: 0 40px;
  }
`;

export const ClientCard = styled.div`
  background: var(--color-black);
  /* border: 1px solid var(--color-darkpink); */
  color: var(--color-white);
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  height: auto;
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

//Advanced Seating
export const ClientImgADVANCEDSEATING = styled.img`
  background: url(${advancedseating});
  background-repeat: no-repeat;
  background-size: contain;
  height: 80px;
  width: 160px;
  margin-bottom: 10px;
`;
//Albion Mobility
export const ClientImgALBION = styled.img`
  background: url(${albion});
  background-repeat: no-repeat;
  background-size: contain;
  height: 80px;
  width: 160px;
  margin-bottom: 10px;
`;
//All Terrain
export const ClientImgALLTERRAIN = styled.img`
  background: url(${allterrain});
  background-repeat: no-repeat;
  background-size: contain;
  height: 80px;
  width: 160px;
  margin-bottom: 10px;
`;
//AltonAids
export const ClientImgALTONAIDS = styled.img`
  background: url(${altonaids});
  background-repeat: no-repeat;
  background-size: contain;
  height: 80px;
  width: 160px;
  margin-bottom: 10px;
`;
//Better Mobility
export const ClientImgBETTERMOBILITY = styled.img`
  background: url(${bettermobility});
  background-repeat: no-repeat;
  background-size: contain;
  height: 80px;
  width: 160px;
  margin-bottom: 10px;
`;
//Careflex
export const ClientImgCAREFLEX = styled.img`
  background: url(${careflex});
  background-repeat: no-repeat;
  background-size: contain;
  height: 80px;
  width: 160px;
  margin-bottom: 10px;
`;
//Celtic Mobility
export const ClientImgCELTIC = styled.img`
  background: url(${celticmobility});
  background-repeat: no-repeat;
  background-size: contain;
  height: 80px;
  width: 160px;
  margin-bottom: 10px;
`;
//CMS
export const ClientImgCMS = styled.img`
  background: url(${cms});
  background-repeat: no-repeat;
  background-size: contain;
  height: 80px;
  width: 160px;
  margin-bottom: 10px;
`;
//Consolor
export const ClientImgCONSOLOR = styled.img`
  background: url(${consolor});
  background-repeat: no-repeat;
  background-size: contain;
  height: 80px;
  width: 160px;
  margin-bottom: 10px;
`;
//Contour
export const ClientImgCONTOUR = styled.img`
  background: url(${contour});
  background-repeat: no-repeat;
  background-size: contain;
  height: 80px;
  width: 160px;
  margin-bottom: 10px;
`;
//Dietz
export const ClientImgDIETZ = styled.img`
  background: url(${dietz});
  background-repeat: no-repeat;
  background-size: contain;
  height: 80px;
  width: 160px;
  margin-bottom: 10px;
`;
//Disability Needs
export const ClientImgDISABILITYNEEDS = styled.img`
  background: url(${disabilityneeds});
  background-repeat: no-repeat;
  background-size: contain;
  height: 80px;
  width: 160px;
  margin-bottom: 10px;
`;
//DMS
export const ClientImgDMS = styled.img`
  background: url(${dms});
  background-repeat: no-repeat;
  background-size: contain;
  height: 80px;
  width: 160px;
  margin-bottom: 10px;
`;
//AEasyCare
export const ClientImgEASYCARE = styled.img`
  background: url(${easycare});
  background-repeat: no-repeat;
  background-size: contain;
  height: 80px;
  width: 160px;
  margin-bottom: 10px;
`;
//EPC
export const ClientImgEPC = styled.img`
  background: url(${epc});
  background-repeat: no-repeat;
  background-size: contain;
  height: 80px;
  width: 160px;
  margin-bottom: 10px;
`;
//Felgains
export const ClientImgFELGAINS = styled.img`
  background: url(${felgains});
  background-repeat: no-repeat;
  background-size: contain;
  height: 80px;
  width: 160px;
  margin-bottom: 10px;
`;
//Freedom
export const ClientImgFREEDOM = styled.img`
  background: url(${freedom});
  background-repeat: no-repeat;
  background-size: contain;
  height: 80px;
  width: 160px;
  margin-bottom: 10px;
`;
//GMA
export const ClientImgGMA = styled.img`
  background: url(${gma});
  background-repeat: no-repeat;
  background-size: contain;
  height: 80px;
  width: 160px;
  margin-bottom: 10px;
`;
//GRX
export const ClientImgGRX = styled.img`
  background: url(${grx});
  background-repeat: no-repeat;
  background-size: contain;
  height: 80px;
  width: 160px;
  margin-bottom: 10px;
`;
//Kent Mobility
export const ClientImgKENTMOBILITY = styled.img`
  background: url(${kentmobility});
  background-repeat: no-repeat;
  background-size: contain;
  height: 80px;
  width: 160px;
  margin-bottom: 10px;
`;
//LCS
export const ClientImgLCS = styled.img`
  background: url(${lcs});
  background-repeat: no-repeat;
  background-size: contain;
  height: 80px;
  width: 160px;
  margin-bottom: 10px;
`;
//LMS
export const ClientImgLMS = styled.img`
  background: url(${lms});
  background-repeat: no-repeat;
  background-size: contain;
  height: 80px;
  width: 160px;
  margin-bottom: 10px;
`;
//Motus
export const ClientImgMOTUS = styled.img`
  background: url(${motus});
  background-repeat: no-repeat;
  background-size: contain;
  height: 80px;
  width: 160px;
  margin-bottom: 10px;
`;
//Newlyn
export const ClientImgNEWLYN = styled.img`
  background: url(${newlyn});
  background-repeat: no-repeat;
  background-size: contain;
  height: 80px;
  width: 160px;
  margin-bottom: 10px;
`;
//OSKA
export const ClientImgOSKA = styled.img`
  background: url(${oska});
  background-repeat: no-repeat;
  background-size: contain;
  height: 80px;
  width: 160px;
  margin-bottom: 10px;
`;
//Precision Rehab
export const ClientImgPRECISION = styled.img`
  background: url(${precision});
  background-repeat: no-repeat;
  background-size: contain;
  height: 80px;
  width: 160px;
  margin-bottom: 10px;
`;
//ReCare
export const ClientImgRECARE = styled.img`
  background: url(${recare});
  background-repeat: no-repeat;
  background-size: contain;
  height: 80px;
  width: 160px;
  margin-bottom: 10px;
`;
//RMS
export const ClientImgRMS = styled.img`
  background: url(${rms});
  background-repeat: no-repeat;
  background-size: contain;
  height: 80px;
  width: 160px;
  margin-bottom: 10px;
`;
//SimpleStuff
export const ClientImgSIMPLESTUFF = styled.img`
  background: url(${simplestuff});
  background-repeat: no-repeat;
  background-size: contain;
  height: 80px;
  width: 160px;
  margin-bottom: 10px;
`;
//SOS
export const ClientImgSOS = styled.img`
  background: url(${sos});
  background-repeat: no-repeat;
  background-size: contain;
  height: 80px;
  width: 160px;
  margin-bottom: 10px;
`;
//Symmetrikit
export const ClientImgSYMMETRIKIT = styled.img`
  background: url(${symmetrikit});
  background-repeat: no-repeat;
  background-size: contain;
  height: 80px;
  width: 160px;
  margin-bottom: 10px;
`;
//Unique Mobility
export const ClientImgUNIQUEMOBILITY = styled.img`
  background: url(${uniquemobility});
  background-repeat: no-repeat;
  background-size: contain;
  height: 80px;
  width: 160px;
  margin-bottom: 10px;
`;
//VTrak
export const ClientImgVTRAK = styled.img`
  background: url(${vtrak});
  background-repeat: no-repeat;
  background-size: contain;
  height: 80px;
  width: 160px;
  margin-bottom: 10px;
`;
//Wheelfreedom
export const ClientImgWHEELFREEDOM = styled.img`
  background: url(${wheelfreedom});
  background-repeat: no-repeat;
  background-size: contain;
  height: 80px;
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
  width: 90%;
  font-size: 18px;
  line-height: 24px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const ClientP = styled.p`
  font-size: 14px;
  text-align: center;
`;
