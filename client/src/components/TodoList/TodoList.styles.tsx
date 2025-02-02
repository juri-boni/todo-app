import styled from "styled-components";

import { getColor, getSpacing } from "../../utils/themeHelpers";

export const ListContainer = styled.ul`
  width: 72vw;
  list-style-type: none;
  padding: 2rem;
  margin: ${getSpacing("margin.large")};
  background-color: ${getColor("bg.primary")};
`;
