import React, { useContext } from 'react';
import styled from 'styled-components';
import { GiMusicSpell } from 'react-icons/gi';
import { UserContext } from '../../context/UserContext';

const Wrapper = styled.div``;

const Heading = styled.p`
  margin: 0;
  font-size: 50px;
  margin-bottom: -10px;
  font-weight: bold;
  color: var(--foreground);
`;

const SubHeading = styled.div`
  font-size: 25px;
  margin-bottom: 0;
  color: var(--foreground);
`;

const Button = styled.button`
  height: 45px;
  margin-top: 20px;
  border: 0;
  width: auto;
  padding-left: 40px;
  padding-right: 40px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  color: var(--foreground);
  background: -webkit-linear-gradient(left, #60c657, #35aee2);
  background-size: 200% 200%;
  animation: gradient-animation 4s ease infinite;
`;

const Header = () => {
  const userContext = useContext(UserContext);
  const { connectWallet, walletAddress } = userContext;

  return (
    <Wrapper>
      <Heading>
        <GiMusicSpell style={{ marginBottom: '-7px' }} size={50} /> Music World
      </Heading>
      <SubHeading>Explore Music collection in the metaverse ✨</SubHeading>
      {!walletAddress ? (
        <Button onClick={connectWallet}>Connect to Wallet</Button>
      ) : null}
    </Wrapper>
  );
};

export default Header;
