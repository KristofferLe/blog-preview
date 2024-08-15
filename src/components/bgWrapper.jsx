import styled from "styled-components";
import React from "react";
import { colors } from "../styles/colors";

const StyledWrapper = styled.main`
  height: 100vh;
  background-color: ${colors.yellow};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function BgWrapper({ children }) {
  return <StyledWrapper>{children}</StyledWrapper>;
}
