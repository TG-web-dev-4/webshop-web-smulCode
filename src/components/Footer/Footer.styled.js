import styled from "styled-components";
import { Medium,Large,ExtraExtraLarge } from "../../responsive";


export const StyledFooter = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.primaryDark};
  color: ${({ theme }) => theme.primaryLight};
  padding: 3rem;
  text-align: center;
  height: 100%;
  ${Medium({padding:"3rem 30vw"})} ;


`;
export const Logo = styled.div`
  position: absolute;
  top: -0.8em;
  left: 16.4%;
  right: 16%;
  font-size: 4em;
  font-weight: 800;
  font-style: italic;
  letter-spacing: -0.08em;
  -webkit-text-stroke: 1px ${(props) => props.bgColor};
  -webkit-background-clip: text;
  -webkit-text-fill-color: ${({ theme }) => theme.primaryLight};
  text-shadow: -4px 3px 0px ${(props) => props.bgColor},
    -4px 4px 0px ${(props) => props.bgColor};
`;

export const Text = styled.p`
  font-weight: 300;
  padding: 0 1em;
  margin: 0.5em 0;

  color: ${(props) => (props.color ? props.color : "inherit")};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  flex: 1;
  min-width: 20%;
  margin: 5px 0;
  padding: 1em;
  border-radius: 8px;
  border: none;
  text-align: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  padding: 1em;
  svg {
    margin: 0 1em;
    font-size: 2rem;
  }
`;

export const BrandName = styled.p`
  color: ${(props) => (props.color ? props.color : "inherit")};
`;
