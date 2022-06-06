import React from 'react';
import styled from 'styled-components';
import { Modal } from 'antd';

const Input = styled.input`
  color: white;
  font-size: 12px;
  padding: 10px;
  margin: 10px 0;
  background: transparent;
  border-radius: 5px;
  border: 3px solid #ccc;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  width: 100%;
  ::placeholder {
    color: white;
  }
`;

const Button = styled.button`
  height: 45px;
  margin-top: 10px;
  border: 0;
  width: auto;
  padding: 0 40px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  color: var(--foreground);
  background: -webkit-linear-gradient(left, #60c657, #35aee2);
  background-size: 200% 200%;
  animation: gradient-animation 4s ease infinite;
  width: 50%;
`;

const InputFile = styled.div`
  color: white;
  font-size: 14px;
  padding: 10px;
  margin: 10px 0;
  background: transparent;
  border-radius: 5px;
  border: 3px solid #ccc;
  transition: 0.5s;
`;

const StyledModal = styled(Modal)`
  border-radius: 10px;
  .ant-modal-header {
    border-bottom: none;
  }

  .ant-modal-body {
    padding: 15px 25px 25px;
    border-radius: 10px;
    background-color: var(--background);
  }

  .ant-modal-content {
    border-radius: 10px;

    .ant-modal-close-x {
      display: none;
    }
  }
`;

const SubHeading = styled.div`
  font-size: 25px;
  margin-bottom: 0;
  color: var(--foreground);
`;

const NFTForm = ({ closeModal }) => {
  return (
    <StyledModal
      centered
      destroyOnClose
      title={null}
      visible
      maskStyle={{ backgroundColor: '#2D2D2DCC' }}
      onOk={() => {
        closeModal();
      }}
      footer={null}
      onCancel={() => {
        closeModal();
      }}
    >
      <SubHeading>Song NFT Details</SubHeading>
      <Input type="text" placeholder="Song Name" />
      <InputFile htmlFor="formId">
        Choose Sound Track
        <Input type="file" placeholder="Song Cover Image" />
      </InputFile>
      <div style={{ height: '1px' }} />
      <InputFile htmlFor="formId">
        Choose Cover Image For the Song
        <Input type="file" placeholder="Song Cover Image" />
      </InputFile>
      <Input type="text" placeholder="NFT Token" />
      <Button>Create NFT</Button>
    </StyledModal>
  );
};

export default NFTForm;
