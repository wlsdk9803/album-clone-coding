import styled from "styled-components";
import { Typography } from "../Styled/Styled";

const FooterTextbox = styled.div`
  padding-top: 27px;
  padding-left: 12.5%;
  padding-right: 12.5%;
`;

const LinkText = styled.span`
  font-size: 1rem;
  float: ${(props) => props.float || "none"};
  color: #007bff;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    color: #0063cc;
  }
`;

const Bottom = () => {
  return (
    <>
      <FooterTextbox>
        <LinkText
          float="right"
          onClick={() => {
            window.scrollTo({ top: 0 });
          }}
        >
          Back to top
        </LinkText>

        <Typography FooterText color="deepgray">
          Album example is &copy; Bootstrap, but please download and customize
          it for yourself!
          <br />
          New to Bootstrap?&nbsp;
        </Typography>

        <LinkText
          onClick={() => {
            window.location.href = "https://getbootstrap.com/";
          }}
        >
          Visit the homepage
        </LinkText>

        <Typography FooterText color="deepgray">
          &nbsp;or read our&nbsp;
        </Typography>

        <LinkText
          onClick={() => {
            window.location.href =
              "https://getbootstrap.com/docs/4.3/getting-started/introduction/";
          }}
        >
          getting started guide.
        </LinkText>
      </FooterTextbox>
    </>
  );
};
export default Bottom;
