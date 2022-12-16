import styled from "styled-components";

export const Container = styled.div`
  color: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--color-lightgrey);

  @media screen and (max-width: 768px) {
    padding: auto 0;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  z-index: 2;
  height: auto;
  width: 100vw;
  max-width: 1100px;
  padding: 150px 50px;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  align-items: center;
`;

export const Row = styled.div`
  display: grid;
  grid-auto-columns: repeat(2, 1fr);
  align-items: top;
  grid-template-areas: "col1 col2";

  @media screen and (max-width: 768px) {
    grid-template-areas: "col1 col1" "col2 col2";
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 25px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 25px;
  grid-area: col2;
`;

export const Column3 = styled.div`
  margin-bottom: 5px;
  padding: 0 15px;
  grid-area: col2;
`;
export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 0px;
`;

export const TopLine = styled.div`
  color: ${({ lightText }) =>
    lightText ? "var(--color-darkpink)" : "var(--color-darkpink)"};
  font-size: 16px;
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

export const Subtitle = styled.div`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 34px;
  color: ${({ lightText }) =>
    lightText ? "var(--color-darkergrey)" : "var(--color-lightergrey)"};

  ul {
    text-decoration: none;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 768px) {
      text-align: center;
    }
  }
`;

export const BtnWrap = styled.div`
  display: ${({ buttonOn }) => (buttonOn ? "flex" : "none")};
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 40px 0;
  padding-right: 0;
  border-radius: 5%;
`;
