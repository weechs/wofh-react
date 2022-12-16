import styled from "styled-components";

export const CardContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) =>
    lightBg ? "var(--color-lightgrey)" : "var(--color-black)"};

  /* @media screen and (max-width: 768px) {
    padding: 100px 0;
  } */
`;

export const Cards = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const CardItem = styled.li`
  display: flex;
  padding: 1rem;

  @media (min-width: 40rem) {
    width: 50%;
  }
  @media (min-width: 56rem) {
    width: 33.3333%;
  }
`;

export const Card = styled.div`
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;

  &:hover {
    .card__image {
      filter: contrast(100%);
    }
  }
`;

export const CardImage = styled.div`
  background-image: url(https://unsplash.it/800/600?image=82);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  filter: contrast(70%);
  //filter: saturate(180%);
  overflow: hidden;
  position: relative;
  transition: filter 0.5s cubic-bezier(0.43, 0.41, 0.22, 0.91);

  ::before {
    content: "";
    display: block;
    padding-top: 56.25%; // 16:9 aspect ratio
  }

  @media (min-width: 40rem) {
    &::before {
      padding-top: 66.6%; // 3:2 aspect ratio
    }
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  padding: 1rem;
`;

export const TopLine = styled.div`
  color: ${({ lightText }) =>
    lightText ? "var(--color-darkpink)" : "var(--color-darkpink)"};
  font-size: 1.25rem;
  font-weight: 300;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

export const Heading = styled.p`
  flex: 1 1 auto;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1.25rem;
  font-weight: 600;
  color: ${({ lightText }) =>
    lightText ? "var(--color-darkergrey)" : "var(--color-lightergrey)"};
`;

export const Subtitle = styled.p`
  flex: 1 1 auto;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1.25rem;
  font-weight: 600;
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
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
`;
