import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  padding-bottom: 45px;
`;

const FooterText = styled.span`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

const Footer = () => {
  return (
    <Wrapper>
      <FooterText>Built with ❤️ by Team Unknown 👀</FooterText>
    </Wrapper>
  );
};

export default Footer;
