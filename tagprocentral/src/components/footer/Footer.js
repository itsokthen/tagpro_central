import React from "react";
import styled from "styled-components";
//import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterStyle>
      <MissonStatement>
        <h3>TagproCentral</h3>
        <p>
          TagproCentral is an information hub for competitive Tagpro Leagues.
          For more information about participating join our Discord.
        </p>
      </MissonStatement>
      <Resources>
        <h3>Resources</h3>
        <a href="https://discord.com/invite/QGhkaewX55">Discord</a>
        <a href="https://www.twitch.tv/okthen/">Twitch</a>
        <a href="https://www.reddit.com/r/MLTP/">Reddit</a>
      </Resources>
      <PlayNow>
        <h3>Play Now</h3>
        <a href="https://tagpro.koalabeast.com/">Tagpro.gg</a>
        <a href="https://tpm.gg/">TPM.gg</a>
      </PlayNow>
    </FooterStyle>
  );
};

const FooterStyle = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 100%;
  padding: 0 25%;
  margin-top: 15px;
  flex-wrap: wrap;
  padding-bottom: 10px;
  @media (max-width: 850px) {
    padding: 0 10%;
  }
`;

const MissonStatement = styled.div`
  width: 300px;
`;

const Resources = styled.div`
  display: flex;
  flex-direction: column;
`;

const PlayNow = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 500px) {
    width: 200px;
  }
`;

export default Footer;
