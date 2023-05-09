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

  ${(props) => props.title && props.theme.font.title};
  ${(props) => props.subtitle && props.theme.font.subtitle};
  ${(props) => props.titleButton && props.theme.font.titleButton};
  ${(props) => props.cardText && props.theme.font.cardText};
  ${(props) => props.cardButton && props.theme.font.cardButton};
  ${(props) => props.timeText && props.theme.font.timeText};
  ${(props) => props.footerText && props.theme.font.footerText};
`;

export const TextBox = styled.div`
  color: ${(props) => props.color || "black"};
  font-weight: ${(props) => props.fontWeight || "normal"};
  font-size: ${(props) => props.fontSize || "10px"};
  float: ${(props) => props.float || "none"};
  padding: ${(props) => props.padding || "0"};
  line-height: ${(props) => props.lineHeight};
  transition: ${(props) => props.transition || "none"};
  display: ${(props) => props.display};
  cursor: ${(props) => props.cursor || "auto"};
  &:hover {
    text-decoration: ${(props) => props.hoverTextDecoration || "none"};
    color: ${(props) => props.hoverColor};
  }
`;

export const Button = styled.button`
  cursor: pointer;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border-radius: ${(props) => props.borderRadius || "5px"};
  border: ${(props) => props.border || "none"};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight || "normal"};
  text-align: ${(props) => props.textAlign};
  padding: ${(props) => props.padding || "5px"};
  margin-top: ${(props) => props.marginTop || "0"};
  margin-left: ${(props) => props.marginLeft || "0"};
  background: ${(props) => props.backgroundColor || "rgba(0,0,0,0)"};
  color: ${(props) => props.color || "black"};
  float: ${(props) => props.float || "none"};
  &:hover {
    background: ${(props) => props.hoverBackgroundColor};
    color: ${(props) => props.hoverColor};
  }
  &:focus {
    outline: ${(props) => props.focusOutline || "none"};
  }
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
