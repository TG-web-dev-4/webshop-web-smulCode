import { css } from "styled-components";

export const Small = (props) => {
  return css`
    @media only screen and (min-width: 576px) {
      ${props}
    }
  `;
};
export const Medium = (props) => {
  return css`
    @media only screen and (min-width: 768px) {
      ${props}
    }
  `;
};
export const Large = (props) => {
  return css`
    @media only screen and (min-width: 992px) {
      ${props}
    }
  `;
};
export const ExtraLarge = (props) => {
  return css`
    @media only screen and (min-width: 1200px) {
      ${props}
    }
  `;
};
export const ExtraExtraLarge = (props) => {
  return css`
    @media only screen and (min-width: 1400px) {
      ${props}
    }
  `;
};
