import styled from "styled-components";
import { getColor, getSpacing } from "../../utils/themeHelpers";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${getColor("bg.primary")};
  height: 100vh;
  width: 100vw;
  padding-left: ${getSpacing("padding.medium")};
  padding-right: ${getSpacing("padding.medium")};
`;
