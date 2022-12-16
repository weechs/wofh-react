import React from "react";
import { animateScroll as scroll } from "react-scroll";

import {
  Timeline,
  Events,
  // TextEvent,
  ImageEvent,
  themes,
  createTheme
} from "@merc/react-timeline";

import images from "../../images";
import { Button } from "../../components/ButtonElements";
import {
  Container,
  Wrapper,
  Row,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap
} from "./elements";

/**
 * `createTheme` is a helper function that takes two arguments:
 * - a base theme to extend from
 * - the new theme properties
 * It uses deep copying behind the scenes to create a new theme object with
 * all of the required properties.
 */
const customTheme = createTheme(themes.default, {
  timeline: {
    backgroundColor: "",
    fontSize: "1rem",
    fontFamily: "",
    a: {
      color: "var(--color-lightergrey)"
    }
  },
  timelineTrack: {
    left: "50%",
    width: "2px",
    height: "100%",
    backgroundColor: "var(--color-darkpink)",
    content: "''",
    background: ""
  },
  marker: {
    backgroundColor: "var(--color-white)",
    border: "2px solid var(--color-darkpink)",
    borderRadius: "50%",
    width: "16px",
    height: "16px",
    zIndex: 100,
    left: "1px"
  },
  card: {
    borderRadius: "14px",
    backgroundColor: "var(--color-darkpink)",
    color: "#fff",
    padding: "20px",
    boxShadow: "0 10px 20px 0 rgba(179,0,77,0.4)",
    width: "100%",
    maxWidth: "860px",
    a: {
      color: "#EC24B5"
    }
  },
  button: {
    fontSize: "14px",
    backgroundColor: "#08BE95",
    borderRadius: "4px",
    padding: "4px",
    color: "#fff",
    margin: "10px 5px 5px 0",
    border: "none",
    cursor: "pointer"
  },
  urlButton: {
    fontSize: "14px",
    backgroundColor: "var(--color-darkpink)",
    borderRadius: "4px",
    padding: "6px",
    margin: "10px 5px 5px 0",
    border: "none",
    color: "#fff"
  },
  date: {
    backgroundColor: "var(--color-darkpink)",
    padding: "10px",
    color: "#fff",
    borderRadius: "25px",
    fontWeight: 400,
    fontSize: "1.6rem"
  },
  imageAtom: {
    objectFit: "cover",
    overflow: "hidden",
    width: "100%",
    maxHeight: "400px"
  },
  imageCredit: {
    marginTop: "20px",
    fontSize: "1rem",
    lineHeight: "2rem"
  },
  imageText: {
    marginBottom: "20px",
    fontSize: "1rem"
  },
  youTubeText: {
    marginBottom: "10px",
    fontSize: "1rem"
  },
  events: {
    padding: "40px"
  },
  event: {
    marginBottom: "20px"
  },
  textAtom: {}
});

const Home = ({ lightBg }) => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <Container lightBg={false}>
      <Wrapper>
        <Row>
          <Column1 style={{ textAlign: "center" }}>
            <TextWrapper>
              <TopLine style={{ textAlign: "center" }} lightText={false}>
                Discover
              </TopLine>
              <Heading style={{ textAlign: "center" }} lightText={false}>
                Your Journey
              </Heading>
              <Subtitle style={{ textAlign: "center" }} lightText={false}>
                If you have any questions on our assessment and how we might
                help you, get in touch.
              </Subtitle>
              <Timeline theme={customTheme}>
                <Events>
                  <ImageEvent
                    date="#1"
                    src={images.enquire}
                    alt="yellow jellyfish"
                    credit="From point of enquiry for services, you'll find our clinical director will assess your case on an individual basis."
                    text="ENQUIRY"
                  />
                  <ImageEvent
                    date="#2"
                    src={images.prepare}
                    alt="yellow jellyfish"
                    credit="Our clinical director will liaise with you, any commissioner or case manager you may have and will send you our standard terms and conditions and seating assessment process. Upon agreement we will allocate one of our consultants to continue your assessment and prescription process."
                    text="PREPARATION"
                  />
                  <ImageEvent
                    date="#3"
                    src={images.assess}
                    alt="yellow jellyfish"
                    credit="Your consultant will undertake a thorough assessment of you case and arrange an initial assessment with you."
                    text="ASSESSMENT"
                  />
                  <ImageEvent
                    date="#4"
                    src={images.identify}
                    alt="yellow jellyfish"
                    credit="Following your initial assessment, your consultant will provide you and your commissioner or case manager with a detailed report of your seating and postural needs. Our reports offer products our associate deem suitable for your needs. Following instruction from you and your commissioner or case manager we will arrange the relevant product trial/s with you."
                    text="IDENTIFICATION"
                  />
                  <ImageEvent
                    date="#5"
                    src={images.prescribe}
                    alt="yellow jellyfish"
                    credit="Your consultant will agree your final specification alongside our equipment suppliers with you. This will be drawn up into a document to enable you and your commissioner or case manager to agree costings whereby your final fit can be made. Any relevant training for you or your carers will be provided."
                    text="PRESCRIPTION"
                  />
                  <ImageEvent
                    date="#6"
                    src={images.review}
                    alt="yellow jellyfish"
                    credit="We pride ourself on our review process, so will agree and establish a review plan to suit you. Your consultant will continue to work with you and your commissioner or case manager as you and your needs grow."
                    text="REVIEW"
                  />
                </Events>
              </Timeline>
            </TextWrapper>
            <BtnWrap buttonOn={true}>
              <Button
                to="/enquire"
                onClick={toggleHome}
                primary={false}
                dark="true"
                smooth="true"
                offset={-70}
                duration={400}
              >
                Enquire Now
              </Button>
            </BtnWrap>
          </Column1>
        </Row>
      </Wrapper>
    </Container>
  );
};

export default Home;
