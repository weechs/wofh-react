import React from "react";
import EnquireSection from "../components/EnquireSection";
import images from "../images";
import {
  Container,
  Wrapper,
  Row,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  BtnWrap,
  Column2,
  Subtitle,
  ImgWrap
} from "../components/EnquireSection/EnquireElements";
import { Button } from "../components/ButtonElements";

export default function Enquire() {
  const openInNewTab = (url) => {
    // 👇️ setting target to _blank with window.open
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <>
      <EnquireSection />
      <Container>
        <Wrapper>
          <Row>
            <Column1>
              <TextWrapper>
                <TopLine>Get In Touch</TopLine>
                <Heading>Referrals</Heading>
              </TextWrapper>
              <Subtitle>
                We have worked since the conception of the company, to become
                the preferred specialist in the management of 24 Hour Posture
                Management.
              </Subtitle>
              <BtnWrap buttonOn={true}>
                <Button
                  style={{ width: "300px" }}
                  onClick={() =>
                    openInNewTab("https://forms.office.com/r/HjmZceR4hs")
                  }
                  to={""}
                  primary="false"
                  dark="true"
                  smooth="true"
                  offset={-70}
                  duration={400}
                >
                  Professionals
                </Button>
              </BtnWrap>
              <BtnWrap buttonOn={true}>
                <Button
                  style={{ width: "300px" }}
                  onClick={() =>
                    openInNewTab("https://forms.office.com/r/HjmZceR4hs")
                  }
                  to={""}
                  primary="true"
                  dark="true"
                  smooth="true"
                  offset={-70}
                  duration={400}
                >
                  Private Referrals
                </Button>
              </BtnWrap>
              <BtnWrap buttonOn={true}>
                <Button
                  style={{ width: "300px" }}
                  onClick={() =>
                    openInNewTab("https://forms.office.com/r/HjmZceR4hs")
                  }
                  to={""}
                  primary="true"
                  dark="true"
                  smooth="true"
                  offset={-70}
                  duration={400}
                >
                  Got A Question
                </Button>
              </BtnWrap>
            </Column1>
            <Column2>
              <ImgWrap>
                <img src={images.referral} alt="" />
              </ImgWrap>
            </Column2>
          </Row>
        </Wrapper>
      </Container>
    </>
  );
}
