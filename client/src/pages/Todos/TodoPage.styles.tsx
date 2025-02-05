import styled from "styled-components";
// import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import {
  getColor,
  getSpacing,
  getFont,
  getSize,
} from "../../utils/themeHelpers";

export const TodoContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 82vw;
  background-color: ${getColor("bg.primary")};
  padding: ${getSpacing("padding.medium")};
`;

export const TodoLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: aliceblue; */
  width: 70%;
  /* font-size: 24px; */
`;

export const TodoRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: #839238; */
  width: 30%;
`;

export const CheckboxCompleted = styled(CheckBoxIcon)`
  /* & > svg {
    width: ${({ size }) => size || "50px"};
    height: ${({ size }) => size || "50px"};
  } */
`;
