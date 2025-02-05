import styled from "styled-components";

import { getColor, getSpacing } from "../../utils/themeHelpers";

export const ListItemContainer = styled.div`
  width: 72vw;
  list-style-type: none;
  padding: 2rem;
  margin: ${getSpacing("margin.large")};
  background-color: ${getColor("bg.primary")};
`;
