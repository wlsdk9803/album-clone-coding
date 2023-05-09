import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Typography } from "../Styled/Styled";
import { AiOutlineCamera } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";

const TopWrapper = styled.div`
  height: ${(props) => props.height || "42px"};
  background-color: #363a3f;
  padding-left: 13%;
  padding-right: 13%;
  padding-top: 7px;
  overflow: hidden;
  transition: 0.3s;
`;

const TopTextbox = styled.div`
  width: ${(props) => props.width || "100%"};
  float: left;
  margin-right: ${(props) => props.marginRight || "0px"};
  margin-bottom: ${(props) => props.marginBottom || "0px"};
`;

const IconWrapper = styled.button`
  position: relative;
  bottom: 5px;
  height: 38px;
  width: 55px;
  border: 1px #4c4c4c solid;
  border-radius: 3px;
  text-align: center;
  background: ${(props) => props.backgroundColor || "rgba(0,0,0,0)"};
  color: rgba(255, 255, 255, 0.5);
  padding-top: 3px;
  cursor: pointer;
  &:focus {
    outline: 1px solid #ffffff;
  }
`;

const IconText = styled.div`
  color: white;
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  float: left;
  cursor: pointer;
`;

const MenubarStyle = styled.div`
  color: rgb(141, 141, 141);
  font-weight: bold;
  font-size: 30px;
  float: right;
  cursor: pointer;
`;

const LinkText = styled.div`
  color: white;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5;
  padding-top: ${(props) => props.paddingTop || "0px"};
  display: inline-block;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Top = () => {
  const [isClicked, setIsClicked] = useState(false);
  console.log(isClicked);

  const topBar = (topHeight) => {
    return (
      <>
        <TopWrapper height={topHeight}>
          <TopTextbox width="60%" marginRight="90px">
            <Typography Topbold padding="10px 0 0 5px">
              About
            </Typography>
            <Typography Toptext color="deepgray">
              Add some information about the album below, the author, or any
              other background context. Make it a few sentences long so folks
              can pick up some informative tidbits. Then, link them off to some
              social networking sites or contact information.
            </Typography>
          </TopTextbox>
          <TopTextbox width="30%">
            <Typography Topbold padding="10px 0 0 0">
              Contact
            </Typography>
            <Link to="/">
              <LinkText paddingTop="5px">Follow on Twitter</LinkText>
            </Link>
            <br />
            <Link to="/">
              <LinkText>Like on Facebook</LinkText>
            </Link>
            <br />
            <Link to="/">
              <LinkText>Email me</LinkText>
            </Link>
          </TopTextbox>
        </TopWrapper>
        <TopWrapper>
          <Link to="/">
            <IconText fontWeight="light" fontSize="24px">
              <AiOutlineCamera />
            </IconText>
            <IconText fontWeight="bold" fontSize="20px">
              &nbsp;Album
            </IconText>
          </Link>
          <MenubarStyle>
            <IconWrapper onClick={() => setIsClicked(!isClicked)}>
              <FiMenu size={"30px"} />
            </IconWrapper>
          </MenubarStyle>
        </TopWrapper>
      </>
    );
  };
  return isClicked ? topBar("11rem") : topBar("0");
};
export default Top;
