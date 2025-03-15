import styled from "styled-components";
import { getColor, getSpacing } from "../../utils/themeHelpers";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  height: fit-content;
  flex-direction: row;
  background-color: ${getColor("bg.primary")};
  width: 100vw;
  padding-left: ${getSpacing("padding.medium")};
  padding-right: ${getSpacing("padding.medium")};
`;
