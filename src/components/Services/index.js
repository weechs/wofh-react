import React from "react";

import {
  ServicesContainer,
  ServicesTopLine,
  ServicesHeader,
  ServicesSubHeading,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon1,
  ServicesIcon2,
  ServicesIcon3,
  ServicesIcon4,
  ServicesH2,
  ServicesP
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesTopLine>Experts</ServicesTopLine>
      <ServicesHeader>Our Services</ServicesHeader>
      <ServicesSubHeading></ServicesSubHeading>

      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon1 />
          <ServicesH2>Clinical Specialists</ServicesH2>
          <ServicesP>
            Our team prides itself in taking a multi-disciplinary approach to
            your needs, all having significant post graduate training and
            relevant experience.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon2 />
          <ServicesH2>Nationwide Coverage</ServicesH2>
          <ServicesP>
            With specialist clinicans based throughout the United Kingdom &
            Ireland, our service provision is both cost and time efficient for
            all.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon3 />
          <ServicesH2>Equipment Partners</ServicesH2>
          <ServicesP>
            We work in conjunction with our trusted partners and equipment
            suppliers to facilitate a clinically appropriate solution(s) to meet
            your needs.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon4 />
          <ServicesH2>Keeping Costs Simple</ServicesH2>
          <ServicesP>
            With a robust assessment process, we can provide you with efficient
            and cost effective solutions.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
