import React from "react";
import { Button } from "../ButtonElements";
import { animateScroll as scroll } from "react-scroll";

import {
  CardContainer,
  Cards,
  CardItem,
  Card,
  CardImage,
  CardContent,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap
} from "./CollaborationElements";

const Collaboration = (
  lightBg,
  id,
  lightText,
  topLine,
  headline,
  description,
  description1,
  buttonOn,
  buttonLabel,
  buttonLink,
  img,
  alt,
  primary
) => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <CardContainer>
        <Cards lightBg={lightBg} id={id}>
          <CardItem>
            <Card>
              <CardImage src={img} alt={alt} />
              <CardContent>
                <TopLine lightText={lightText}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightText={lightText}>{description}</Subtitle>
                <Subtitle lightText={lightText}>{description1}</Subtitle>
                <BtnWrap buttonOn={buttonOn}>
                  <Button
                    primary="true"
                    dark="true"
                    to={buttonLink}
                    onClick={toggleHome}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={400}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </CardContent>
            </Card>
          </CardItem>
        </Cards>
      </CardContainer>
    </>
  );
};

export default Collaboration;
