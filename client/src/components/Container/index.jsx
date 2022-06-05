import React from 'react';
import styled from 'styled-components';
import Footer from '../Footer';
import Header from '../Header';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 30px 0 30px;
`;

const Container = () => {
  return (
    <Wrapper>
      <Header />
      <Footer />
    </Wrapper>
  );
};

export default Container;
