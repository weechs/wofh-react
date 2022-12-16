import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { Button } from "../ButtonElements";
import images from "../../images";
import {
  Container,
  Wrapper,
  Row,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrap,
  Img,
  BtnWrap
} from "./elements";
import AccordionSection from "../Accordion";

const Support = ({ lightBg }) => {
  const openInNewTab = (url) => {
    // 👇️ setting target to _blank with window.open
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <>
      <Container lightBg={true}>
        <Wrapper>
          <Row>
            <Column1 style={{ textAlign: "center" }}>
              <TextWrapper>
                <TopLine style={{ textAlign: "center" }} lightText={false}>
                  Support
                </TopLine>
                <Heading style={{ textAlign: "center" }} lightText={false}>
                  Client Support
                </Heading>
                <Subtitle
                  style={{ textAlign: "center" }}
                  lightText={false}
                ></Subtitle>
                <ImgWrap>
                  <Img src={images.support} alt="Support" />
                </ImgWrap>
              </TextWrapper>
            </Column1>
          </Row>
        </Wrapper>
      </Container>
      <Container lightBg={false} id="consent">
        <Wrapper>
          <Row>
            <Column1 style={{ textAlign: "left" }}>
              <TextWrapper>
                <TopLine style={{ textAlign: "left" }} lightText={false}>
                  Consent
                </TopLine>
                <Heading style={{ textAlign: "left" }} lightText={false}>
                  Your Consent
                </Heading>
                <Subtitle style={{ textAlign: "Left" }} lightText={false}>
                  We are totally committed to protecting your privacy. Any
                  information we collect about you is done so in accordance with
                  the Data Protection Act (1998) and the General Data Protection
                  Regulation (2018) . We collect information about you for two
                  reasons: firstly, to provide you with a service and secondly,
                  to provide you with the best possible service.
                </Subtitle>
                <Subtitle style={{ textAlign: "Left" }} lightText={false}>
                  We will never collect sensitive information about you without
                  your explicit consent. The information we hold will be
                  accurate and up to date. You can check the information that we
                  hold about you by emailing us at info@wheelofhealth.co.uk. If
                  you find any inaccuracies we will delete or correct it
                  promptly. The personal information which we hold will be held
                  securely in accordance with our Internal Security Policy and
                  the Web Trader Code. If we intend to transfer your information
                  outside the EEA (European Economic Area) we will always obtain
                  your consent first. We don’t share your information without
                  your explicit consent. We may use technology to track the
                  patterns of behaviour of visitors to our website. This can
                  include using a “cookie” which would be stored on your
                  browser. You can usually modify your browser to prevent this
                  happening. The information collected in this way can be used
                  to identify you unless you modify your browser settings. If
                  you have any questions/comments about privacy, you should
                  contact us. Further information can also be found under our
                  Data Protection Section.
                </Subtitle>
                <Heading style={{ textAlign: "left" }} lightText={false}>
                  Our Agreements
                </Heading>
                <Subtitle>
                  Below you will find links to our consent agreements. Use these
                  links to provide your information securely to our systems.
                </Subtitle>
                <Subtitle>
                  <BtnWrap buttonOn={true}>
                    <Button
                      style={{
                        fontSize: "16px",
                        borderRadius: "5px",
                        border: "2px solid var(--color-darkpink)"
                      }}
                      primary={false}
                      dark={true}
                      to=""
                      onClick={() =>
                        openInNewTab("https://forms.office.com/r/qB2Sbd46x6")
                      }
                      smooth="true"
                      offset={-70}
                      duration={400}
                    >
                      Client Confidentiality / Consent to Input Agreement
                    </Button>
                  </BtnWrap>
                  <span style={{ fontSize: "14px" }}>
                    By signing this document, to consent for us to legally
                    process your / your client's personal data in line with the
                    Data Protection Act (1998), General Data Protection
                    Regulation (2018) and Wheel of Health Data Protection Policy
                    (2018). Personal data will only be processed in line with
                    the Wheel of Health Limited Seating Assessment Process and
                    retained in line with the Wheel of Health Limited Data
                    Retention Policy (2018). This form is part of the contratual
                    process, completed prior to Wheel of Health Limited
                    providing any clinical input.
                  </span>
                </Subtitle>
                <Subtitle>
                  <BtnWrap buttonOn={true}>
                    <Button
                      style={{
                        fontSize: "16px",
                        borderRadius: "5px",
                        border: "2px solid var(--color-darkpink)"
                      }}
                      primary={false}
                      dark={true}
                      to=""
                      onClick={() =>
                        openInNewTab("https://forms.office.com/r/Nv5GTkAdC8")
                      }
                      smooth="true"
                      offset={-70}
                      duration={400}
                    >
                      Professionals, Contractors & Commissioners Agreement
                    </Button>
                  </BtnWrap>
                  <span style={{ fontSize: "14px" }}>
                    By signing this document, you hereby give your consent for
                    us to legally process your / your client's personal data in
                    line with the Data Protection Act (1998), General Data
                    Protection Regulation (2018), Wheel of Health Data
                    Protection Policy (2018). You hereby agree to being legally
                    responsible for processing personal data on behalf of Wheel
                    Of Health Limited. This form is for Healthcare
                    Professionals, Contractors and Commissioners working with
                    Wheel of Health Limited.
                  </span>
                </Subtitle>
                <Subtitle>
                  <BtnWrap buttonOn={true}>
                    <Button
                      style={{
                        fontSize: "16px",
                        borderRadius: "5px",
                        border: "2px solid var(--color-darkpink)"
                      }}
                      primary={false}
                      dark={true}
                      to=""
                      onClick={() =>
                        openInNewTab("https://forms.office.com/r/pE6JLgKKL9")
                      }
                      smooth="true"
                      offset={-70}
                      duration={400}
                    >
                      Additional Image Permission / Consent Agreement
                    </Button>
                  </BtnWrap>
                  <span style={{ fontSize: "14px" }}>
                    By signing this document, you hereby give your consent for
                    us to legally process your / your client's personal data in
                    line with the Data Protection Act (1998), General Data
                    Protection Regulation (2018) and Wheel of Health Data
                    Protection Policy (2018). In accordance with existing client
                    confidentiality / consent to input agreements, we seek
                    additional photo / images and video consent.
                  </span>
                </Subtitle>
              </TextWrapper>
            </Column1>
          </Row>
        </Wrapper>
      </Container>
      <Container lightBg={true}>
        <Wrapper>
          <Row>
            <Column1 style={{ textAlign: "center" }}>
              <TextWrapper>
                <TopLine style={{ textAlign: "center" }} lightText={false}>
                  Support
                </TopLine>
                <Heading style={{ textAlign: "center" }} lightText={false}>
                  FAQs
                </Heading>
                <Subtitle
                  style={{ textAlign: "center" }}
                  lightText={false}
                ></Subtitle>
                <ImgWrap>
                  <Img src={images.faq} alt="Support" />
                </ImgWrap>
              </TextWrapper>
              <AccordionSection />
            </Column1>
          </Row>
        </Wrapper>
      </Container>
    </>
  );
};

export default Support;
