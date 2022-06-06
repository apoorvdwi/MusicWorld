import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import Footer from '../Footer';
import Header from '../Header';
import MusicContainer from '../MusicContainer';
import NFTForm from '../NFTForm';
import { UserContext } from '../../context/UserContext';
import { Modal } from 'antd';

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

const Container = () => {
  const userContext = useContext(UserContext);
  const [showModal, setShowModal] = useState(false);
  const { walletAddress } = userContext;

  return (
    <>
      {showModal ? (
        <NFTForm
          closeModal={() => {
            setShowModal((prevValue) => !prevValue);
          }}
        />
      ) : null}
      <Wrapper alignTop={!!walletAddress}>
        <Header />
        {walletAddress ? (
          <Button
            onClick={() => {
              setShowModal((prevValue) => !prevValue);
            }}
            style={{ position: 'absolute', top: '25px', right: '30px' }}
          >
            Create Song NFT
          </Button>
        ) : null}
        {walletAddress ? <MusicContainer /> : null}
        <Footer />
      </Wrapper>
    </>
  );
};

export default Container;
