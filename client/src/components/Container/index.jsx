import React, { useContext } from 'react';
import styled from 'styled-components';
import Footer from '../Footer';
import Header from '../Header';
import MusicContainer from '../MusicContainer';
import { UserContext } from '../../context/UserContext';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  ${(props) =>
    props.alignTop
      ? 'justify-content: flex-start;'
      : 'justify-content: center;'}
  align-items: center;
  padding: 25px 30px;
`;

const Container = () => {
  const userContext = useContext(UserContext);
  const { walletAddress } = userContext;

  return (
    <>
      <Wrapper alignTop={!!walletAddress}>
        <Header />
        {walletAddress ? <MusicContainer /> : null}
      </Wrapper>
      <Footer />
    </>
  );
};

export default Container;
