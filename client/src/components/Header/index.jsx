import React from 'react';
import styled from 'styled-components';
import { GiMusicSpell } from 'react-icons/gi';

const Wrapper = styled.div``;

const Heading = styled.p`
  margin: 0;
  font-size: 50px;
  font-weight: bold;
  color: white;
`;

const SubHeading = styled.div`
  font-size: 25px;
  color: white;
`;

const Header = () => {
  return (
    <Wrapper>
      <Heading>
        <GiMusicSpell style={{ marginBottom: '-7px' }} size={50} /> Music World
      </Heading>
      <SubHeading>Explore Music collection in the metaverse ✨</SubHeading>
    </Wrapper>
  );
};

export default Header;
