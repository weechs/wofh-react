import React from "react";
import Map from "../GoogleMap/index";
import Timeline from "../Timeline";

import {
  Container,
  Wrapper,
  Row,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  Column2,
  ImgWrap,
  Img,
  Column3
} from "./ProfessionalsElements";
import images from "../../images";

const ProfessionalSection = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Row>
            <Column1>
              <TextWrapper>
                <TopLine>Professionals</TopLine>
                <Heading>Award Winning</Heading>
                <Subtitle>
                  At Wheel of Health we care about the future of your clients.
                  Wheelchair and 24-Hour Posture Management is our specialty.
                  Providing solutions and resources you need in support of your
                  your clients.
                </Subtitle>
                <Subtitle>
                  From initial contact, to liaison, to final fit, with ongoing
                  support and ongoing reviews to suit your clients, we’ve got
                  you covered.
                </Subtitle>
                <Subtitle>
                  <Subtitle>
                    With 200 Years of Collective Experience, we have a team of
                    22 highly skilled and competent occupational and
                    physiotherapists (plus support staff). Each have significant
                    post-graduate experience and training in the fields of
                    wheelchair seating, posture management, associated
                    specialist equipment and additional areas, such as moving &
                    handling and the interface with wheelchair accessible
                    vehicles.
                  </Subtitle>
                </Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={images.award1} alt="Award Winning" />
                <Img src={images.award2} alt="Award Winning" />
                <Img src={images.award3} alt="Award Winning" />
              </ImgWrap>
            </Column2>
          </Row>
        </Wrapper>
      </Container>
      <Container style={{ background: "var(--color-black)" }}>
        <Wrapper style={{ padding: "50px 50px" }}>
          <Row>
            <Column1>
              <TextWrapper>
                <TopLine>National Coverage</TopLine>
                <Heading>Our Team</Heading>
              </TextWrapper>
            </Column1>
            <Column3>
              <TextWrapper></TextWrapper>
            </Column3>
          </Row>
        </Wrapper>
      </Container>
      <Map />
      <Timeline style={{ background: "var(--color-lightergrey)" }} />
    </>
  );
};

export default ProfessionalSection;
