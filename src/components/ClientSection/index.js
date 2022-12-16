import React from "react";
import {
  ClientContainer,
  ClientTopLine,
  ClientHeader,
  ClientSubHeading,
  ClientWrapper,
  ClientCard,
  ClientH2,
  ClientP,
  ClientImgLW,
  ClientImgSW,
  ClientImgSR,
  ClientImgCA,
  ClientImgDB,
  ClientImgTC,
  ClientImgRG,
  ClientImgAJ,
  ClientImgLL,
  ClientImgJM,
  ClientImgMM,
  ClientImgCMU,
  ClientImgLO,
  ClientImgJR,
  ClientImgVT,
  ClientImgJT,
  ClientImgEW,
  ClientImgCE,
  ClientImgAM,
  ClientImgVO,
  ClientImgXS,
  ClientImgEM
} from "./ClientElements";

const Client = () => {
  return (
    <>
      <ClientContainer id="Client">
        <ClientTopLine>Discover</ClientTopLine>
        <ClientHeader>Our Team</ClientHeader>
        <ClientSubHeading></ClientSubHeading>

        <ClientWrapper>
          <ClientCard>
            <ClientImgLW />
            <ClientH2>Lucy Weech</ClientH2>
            <ClientP>Clinical Director</ClientP>
            <ClientP>CV available</ClientP>
          </ClientCard>
          <ClientCard>
            <ClientImgSW />
            <ClientH2>Simon Weech</ClientH2>
            <ClientP>Director</ClientP>
          </ClientCard>
          <ClientCard>
            <ClientImgSR />
            <ClientH2>Samantha Richardson</ClientH2>
            <ClientP>Administration Manager</ClientP>
          </ClientCard>
          <ClientCard>
            <ClientImgCA />
            <ClientH2>Claire Ashton</ClientH2>
            <ClientP>Team Leader</ClientP>
          </ClientCard>
          <ClientCard>
            <ClientImgDB />
            <ClientH2>Deborah Bowditch</ClientH2>
            <ClientP>Team Leader</ClientP>
          </ClientCard>
          <ClientCard>
            <ClientImgLL />
            <ClientH2>Louise Lloyd</ClientH2>
            <ClientP>Team Leader</ClientP>
          </ClientCard>
          <ClientCard>
            <ClientImgJT />
            <ClientH2>Julian Throssell</ClientH2>
            <ClientP>Team Leader</ClientP>
          </ClientCard>
          <ClientCard>
            <ClientImgTC />
            <ClientH2>Tania Carrigan</ClientH2>
            <ClientP>Senior Associate</ClientP>
          </ClientCard>
          <ClientCard>
            <ClientImgRG />
            <ClientH2>Rani Govindasami</ClientH2>
            <ClientP>Senior Associate</ClientP>
          </ClientCard>
          <ClientCard>
            <ClientImgAJ />
            <ClientH2>Amanda Jackson </ClientH2>
            <ClientP>Senior Associate</ClientP>
          </ClientCard>
          <ClientCard>
            <ClientImgJM />
            <ClientH2>Jo McConnell</ClientH2>
            <ClientP>Senior Associate</ClientP>
          </ClientCard>
          <ClientCard>
            <ClientImgMM />
            <ClientH2>Margaret McEvoy</ClientH2>
            <ClientP>Senior Associate</ClientP>
          </ClientCard>
          <ClientCard>
            <ClientImgCMU />
            <ClientH2>Christine Muller</ClientH2>
            <ClientP>Senior Associate</ClientP>
          </ClientCard>
          <ClientCard>
            <ClientImgLO />
            <ClientH2>Lauren Osborne</ClientH2>
            <ClientP>Senior Associate</ClientP>
          </ClientCard>
          <ClientCard>
            <ClientImgJR />
            <ClientH2>Jenny Rolfe</ClientH2>
            <ClientP>Senior Associate</ClientP>
          </ClientCard>
          <ClientCard>
            <ClientImgVT />
            <ClientH2>Vicky Thompson</ClientH2>
            <ClientP>Senior Associate</ClientP>
          </ClientCard>
          <ClientCard>
            <ClientImgEW />
            <ClientH2>Emma Wakeling</ClientH2>
            <ClientP>Senior Associate</ClientP>
          </ClientCard>
          <ClientCard>
            <ClientImgCE />
            <ClientH2>Caroline Eriksson</ClientH2>
            <ClientP>Associate</ClientP>
          </ClientCard>
          <ClientCard>
            <ClientImgAM />
            <ClientH2>Antonella Muscat</ClientH2>
            <ClientP>Associate</ClientP>
          </ClientCard>
          <ClientCard>
            <ClientImgVO />
            <ClientH2>Victoria Ost</ClientH2>
            <ClientP>Associate</ClientP>
          </ClientCard>
          <ClientCard>
            <ClientImgXS />
            <ClientH2>Xiaoyu Shu</ClientH2>
            <ClientP>Associate</ClientP>
          </ClientCard>
          <ClientCard>
            <ClientImgEM />
            <ClientH2>Elizabeth McWilliams</ClientH2>
            <ClientP>Associate</ClientP>
          </ClientCard>
        </ClientWrapper>
      </ClientContainer>
    </>
  );
};

export default Client;
