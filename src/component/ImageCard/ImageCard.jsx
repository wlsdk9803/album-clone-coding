import React from "react";
import styled from "styled-components";
import { Typography } from "../Styled/Styled";

const ImageContentCard = styled.div`
  width: 350px;
  height: 380px;
  border-radius: 3px;
  box-shadow: 0 0 5px 1px rgba(126, 126, 126, 0.3);
  background-color: white;
  margin: 0 15px 25px 15px;
`;

const CardImage = styled.div`
  background-image: url(${(props) => props.backgroundImage});
  width: 350px;
  height: 230px;
  border-radius: 3px 3px 0 0;
  overflow: hidden;
  margin: 0;
`;

const CardContent = styled.div`
  width: 320px;
  height: 60px;
  padding: 20px;
`;

const CardButton = styled.button`
  cursor: pointer;
  height: 28px;
  color: gray;
  background-color: transparent;
  border-radius: ${(props) => props.borderRadius};
  border: 1px gray solid;
  font-size: 14px;
  font-weight: lighter;
  padding: 5px 8px 5px 8px;
  margin-left: ${(props) => props.marginLeft || "0"};
  float: left;
  &:hover {
    background: #6f757c;
    color: white;
  }
  &:focus {
    outline: 3.5px solid rgba(110, 110, 110, 0.5);
  }
`;

const ImageCard = (props) => {
  return (
    <ImageContentCard>
      <CardImage backgroundImage={props.image}></CardImage>
      <CardContent>
        <Typography CardText fontSize={props.fontSize}>
          {props.children}
        </Typography>
      </CardContent>
      <CardButton borderRadius="3px 0 0 3px" marginLeft="20px">
        View
      </CardButton>
      <CardButton borderRadius="0 3px 3px 0">Edit</CardButton>
      <Typography TimeText color="gray">
        {props.time}
      </Typography>
    </ImageContentCard>
  );
};

export default ImageCard;
