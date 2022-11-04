import React from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterStyle>
      <MissonStatement>
        <h3>TagproCentral</h3>
        <p>TagproCentral is blah blah blah blah</p>
      </MissonStatement>
      <Resources>
        <h3>Resources</h3>
        <p>Discord</p>
        <p>Twitch</p>
        <p>Reddit</p>
      </Resources>
      <PlayNow>
        <h3>Play Now</h3>
        <p>Tagpro.gg</p>
        <p>TPM.gg</p>
      </PlayNow>
    </FooterStyle>
  );
};

const FooterStyle = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 100%;
  padding: 0 20%;
  margin-top: 15px;
`;

const MissonStatement = styled.div`
  width: 30%;
`;

const Resources = styled.div`
  width: 30%;
`;

const PlayNow = styled.div``;

export default Footer;
