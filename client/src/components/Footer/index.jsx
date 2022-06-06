import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  border-radius: 3px;
  margin: 10px;
`;

const FooterText = styled.span`
  color: var(--foreground);
  font-size: 16px;
  font-weight: bold;
  color:white;
  padding: 9px;
`;

const Footer = () => {
  return (
    <Wrapper>
      <FooterText>Built with ❤️ by Team Unknown 👀</FooterText>
    </Wrapper>
  );
};

export default Footer;
