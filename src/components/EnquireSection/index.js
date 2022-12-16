import React from "react";
import Map from "../GoogleMap";
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
  Column3
} from "./EnquireElements";

const EnquireSection = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Row>
            <Column1>
              <TextWrapper>
                <TopLine>Enquire</TopLine>
                <Heading>Get in Touch</Heading>
                <Subtitle>
                  At Wheel of Health we care about your future, if we can help
                  you further then please contact us. Our head office is based
                  in Southampton, Hampshire and we are always on the end of the
                  phone or email to help you.
                </Subtitle>
                <Subtitle>
                  Wheelchair and 24-Hour Posture Management is our specialty.
                  Providing solutions and resources you need in support of your
                  independence. From initial contact, to liaison, to final fit,
                  with ongoing support and ongoing reviews to suit you, we’ve
                  got you covered.
                </Subtitle>
                <Subtitle></Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <TextWrapper>
                {/* <TopLine style={{ textAlign: "center" }}>Business</TopLine>
                <Heading style={{ textAlign: "center" }}>Hours</Heading>
                <Subtitle>
                  <ul>
                    <li>Monday: 09:00 - 16:30</li>
                    <li>Tueday: 09:00 - 16:30</li>
                    <li>Wednesday: 09:00 - 16:30</li>
                    <li>Thursday: 09:00 - 16:30</li>
                    <li>Friday: 09:00 - 16:30</li>
                    <li>Saturday: CLOSED </li>
                    <li>Sunday: CLOSED </li>
                  </ul>
                </Subtitle> */}

                <TopLine style={{ textAlign: "center" }}>Head</TopLine>
                <Heading style={{ textAlign: "center" }}>Office</Heading>
                <Subtitle>
                  <ul>
                    <li>17 Monks Wood Close</li>
                    <li>Bassett</li>
                    <li>Southampton</li>
                    <li>Hampshire</li>
                    <li>SO16 3TT</li>
                    <li>United Kingdom</li>
                    <li>+44 (0) 23 8076 8583</li>
                  </ul>
                </Subtitle>
              </TextWrapper>
            </Column2>
          </Row>
          <Row>
            <Column1>
              <TextWrapper>
                <TopLine>Festive</TopLine>
                <Heading>Opening</Heading>
                <Subtitle></Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <TextWrapper>
                <Subtitle>
                  <ul>
                    <li>Friday 16th December: 09:00 - 14:30</li>
                    <li>Saturday 17th December: CLOSED</li>
                    <li>Sunday 18th December: CLOSED</li>
                    <li>Monday 19th December: CLOSED</li>
                    <li>Tuesday 20th December: CLOSED </li>
                    <li>Wednesday 21st December: CLOSED </li>
                    <li>Thursday 22nd December: CLOSED </li>
                    <li>Friday 23rd December: CLOSED </li>
                    <li>Christmas Eve: CLOSED</li>
                    <li>Christmas Day: CLOSED</li>
                    <li>Boxing Day: CLOSED</li>
                    <li>Tuesday 27th December: CLOSED</li>
                    <li>Wednesday 28th December: CLOSED</li>
                    <li>Thursday 29th December: CLOSED</li>
                    <li>Friday 30th December: CLOSED</li>
                    <li>New Years Eve: CLOSED</li>
                    <li>New Years Day: CLOSED</li>
                    <li>Monday 2nd January: CLOSED</li>
                    <li>Tuesday 3rd January: CLOSED</li>
                    <li>From Wednesday 4th January: </li>
                    <li>BUSINESS AS USUAL</li>
                  </ul>
                </Subtitle>
              </TextWrapper>
            </Column2>
          </Row>
        </Wrapper>
      </Container>
      <Container style={{ background: "var(--color-black)" }}>
        <Wrapper style={{ padding: "50px 50px" }}>
          <Row>
            <Column1>
              <TextWrapper>
                <TopLine>Enquire</TopLine>
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
    </>
  );
};

export default EnquireSection;
