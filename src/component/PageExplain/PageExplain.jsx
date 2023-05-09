import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Typography } from "../Styled/Styled";

const PageWrapper = styled.div`
  height: 260px;
  border: none;
  padding: 90px 100px 50px 100px;
  text-align: center;
  line-height: 1.5;
`;

const TitleButton = styled.button`
  height: 37px;
  color: white;
  border-radius: 5px;
  border: none;
  padding: 5px 15px 5px 15px;
  font-size: 1rem;
  float: center;
  margin: 2px;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors[props.backgroundColor]};
  &:hover {
    background: ${(props) => props.theme.colors[props.hoverBackgroundColor]};
  }
  &:focus {
    outline: ${(props) => props.focusOutline || "none"};
  }
`;

const PageExplain = (props) => {
  return (
    <PageWrapper>
      <Typography Title color="lightblack">
        {props.title}
      </Typography>

      <Typography Subtitle color="lightgray">
        {props.children}
      </Typography>

      <br />
      <Link to="/">
        <TitleButton
          backgroundColor="lightblue"
          hoverBackgroundColor="deepblue"
          focusOutline="3.5px solid rgba(55, 144, 222, .5)"
          onClick={() => {
            window.scrollTo({ top: 0 });
          }}
        >
          Main call to action
        </TitleButton>
      </Link>
      <Link to="/">
        <TitleButton
          backgroundColor="deepgray"
          hoverBackgroundColor="darkgray"
          focusOutline="3.5px solid rgba(140, 140, 140, .5)"
          onClick={() => {
            window.scrollTo({ top: 0 });
          }}
        >
          Secondary action
        </TitleButton>
      </Link>
    </PageWrapper>
  );
};
export default PageExplain;
