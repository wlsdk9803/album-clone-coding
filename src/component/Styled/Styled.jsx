import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
}
`;

export const Typography = styled.div`
  color: ${(props) =>
    props.color ? props.theme.colors[props.color] : props.theme.colors.black};
  font-size: ${(props) => props.fontSize || "10px"};
  padding: ${(props) => props.padding || "0"};

  ${(props) => props.Topbold && props.theme.font.Topbold};
  ${(props) => props.Toptext && props.theme.font.Toptext};
  ${(props) => props.Title && props.theme.font.Title};
  ${(props) => props.Subtitle && props.theme.font.Subtitle};
  ${(props) => props.CardText && props.theme.font.CardText};
  ${(props) => props.TimeText && props.theme.font.TimeText};
  ${(props) => props.FooterText && props.theme.font.FooterText};
`;

export const Background = styled.div`
  border: none;
  background-color: #f9f9f9;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 50px;
`;

export const Footer = styled.footer`
  height: 110px;
  padding: 20px;
  font-size: 12px;
`;
