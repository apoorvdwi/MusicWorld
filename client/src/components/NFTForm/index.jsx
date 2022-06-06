import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  color:white;
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  background: transparent;
  border-radius: 3px;
  border: 3px solid #ccc;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  width:90%;
  ::placeholder {
    color: white;
  }
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
  width: 90%;
`;

const NFTForm = () => {
  return (
    <div>
      <Input type="text" placeholder="Song Name" />
      <Input type="text" placeholder="NFT Token" />
      <Button>Create NFT</Button>
    </div>
  );
};

export default NFTForm;
