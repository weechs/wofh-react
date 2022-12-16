import React from "react";
import { Button } from "../ButtonElements";
import { animateScroll as scroll } from "react-scroll";

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Column2,
  Img,
  ImgWrap
} from "./InfoElements";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  lightText,
  topLine,
  headline,
  description,
  description1,
  link,
  buttonOn,
  buttonLabel,
  buttonLink,
  img,
  alt,
  primary
}) => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <InfoContainer lightBg={lightBg} id={id}>
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine lightText={lightText}>{topLine}</TopLine>
              <Heading lightText={lightText}>{headline}</Heading>
              <Subtitle lightText={lightText}>{description}</Subtitle>
              <Subtitle lightText={lightText}>{description1}</Subtitle>
              <Subtitle lightText={lightText}>
                <a href={link}>{link}</a>
              </Subtitle>
              <BtnWrap buttonOn={buttonOn}>
                <Button
                  primary="true"
                  dark="true"
                  to={buttonLink}
                  onClick={toggleHome}
                  smooth="true"
                  offset={-70}
                  duration={400}
                >
                  {buttonLabel}
                </Button>
              </BtnWrap>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={img} alt={alt} />
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default InfoSection;
