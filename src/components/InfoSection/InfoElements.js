import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ lightBg }) =>
    lightBg ? "var(--color-lightgrey)" : "var(--color-black)"};
  /* background-size: 300% 300%;
  background-image: radial-gradient(
        rgba(59,173,227,1) 0%, 
        rgba(87,111,230,1) 25%, 
        rgba(152,68,183,1) 51%, 
        rgba(255,53,127,1) 100%
  );  
  animation: AnimateBG 10s ease infinite; */

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }

  /* @keyframes AnimateBG { 
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
} */
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: auto;
  width: 100vw;
  max-width: 1200px;
  padding: 150px 50px;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  align-items: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: repeat(2, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 25px;
  grid-area: col1;

  @media screen and (max-width: 768px) {
    padding: 0 0;
  }
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 25px;
  grid-area: col2;

  @media screen and (max-width: 768px) {
    padding: 0 0;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: ${({ lightText }) =>
    lightText ? "var(--color-darkpink)" : "var(--color-darkpink)"};
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  text-align: ${({ imgStart }) => (imgStart ? "right" : "left")};
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 52px;
  line-height: 58px;
  font-weight: 600;
  color: ${({ lightText }) =>
    lightText ? "var(--color-darkergrey)" : "var(--color-lightergrey)"};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 34px;
  color: ${({ lightText }) =>
    lightText ? "var(--color-darkergrey)" : "var(--color-lightergrey)"};
`;

export const BtnWrap = styled.div`
  display: ${({ buttonOn }) => (buttonOn ? "flex" : "none")};
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 100%;
  height: auto;
  /* -webkit-transform: scaleX(-1);
  transform: scaleX(-1); */
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 40px 0;
  padding-right: 0;
  border-radius: 5%;
`;
