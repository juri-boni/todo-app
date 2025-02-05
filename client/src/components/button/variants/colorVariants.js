import { css } from "styled-components";

export const variantColors = {
  primary: css`
    background-color: ${(props) => props.theme.colors.bg.secondary};
    color: ${(props) => props.theme.colors.text.primary};
    &:hover {
      background-color: ${(props) => props.theme.colors.bg.alternative};
      color: ${(props) => props.theme.colors.text.secondary};
    }
  `,
  secondary: css`
    background-color: ${(props) => props.theme.colors.bg.tertiary};
    color: ${(props) => props.theme.colors.text.secondary};
    &:hover {
      background-color: ${(props) => props.theme.colors.bg.quaternary};
    }
  `,
  inverted: css`
    background-color: ${(props) => props.theme.colors.bg.primary};
    color: ${(props) => props.theme.colors.text.alternative};
    &:hover {
      background-color: ${(props) => props.theme.colors.bg.light};
    }
  `,
  danger: css`
    background-color: ${(props) => props.theme.colors.ui.error};
    color: ${(props) => props.theme.colors.text.inverted};
    &:hover {
      background-color: ${(props) => props.theme.colors.bg.darkDanger};
    }
  `,
};
