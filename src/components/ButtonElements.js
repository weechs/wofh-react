import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Button = styled(LinkR)`
  border-radius: 25px;
  background: ${({ primary }) =>
    primary ? "var(--color-lightergrey)" : "var(--color-xmas)"};
  /* primary ? "var(--color-lightergrey)" : "var(--color-darkpink)"}; */
  white-space: nowrap;
  padding: ${({ primary }) => (primary ? "22px 48px" : "22px 48px")};
  color: ${({ primary }) =>
    primary ? "var(--color-xmas)" : "var(--color-lightergrey)"};
  /* primary ? "var(--color-darkergrey)" : "var(--color-lightergrey)"}; */
  font-size: ${({ primary }) => (primary ? "20px" : "20px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  margin-top: 20px;
  z-index: 3;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) =>
      primary ? "var(--color-xmas)" : "var(--color-xmas)"};
    /* primary ? "var(--color-darkpink)" : "var(--color-lightergrey)"}; */
    color: ${({ primary }) =>
      primary ? "var(--color-lightergrey)" : "var(--color-darkpink)"};
  }
`;
