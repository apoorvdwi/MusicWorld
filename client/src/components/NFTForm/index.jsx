import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { Modal } from 'antd';
import { UserContext } from '../../context/UserContext';

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
  const userContext = useContext(UserContext);
  const [songDetails, setSongDetails] = useState({
    name: '',
    link: '',
  });
  const { sendSong } = userContext;
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
      <SubHeading>Add Song Details</SubHeading>
      <Input
        onChange={(e) => {
          setSongDetails((prevValue) => ({
            ...prevValue,
            name: e.target.value,
          }));
        }}
        type="text"
        placeholder="Song Name"
      />
      <Input
        onChange={(e) => {
          setSongDetails((prevValue) => ({
            ...prevValue,
            link: e.target.value,
          }));
        }}
        type="text"
        placeholder="Song Link"
      />
      <div style={{ height: '1px' }} />
      <Button
        onClick={() => {
          sendSong(songDetails.name, songDetails.link);
          closeModal();
          setSongDetails((prevValue) => ({
            ...prevValue,
            name: '',
            link: '',
          }));
        }}
      >
        Add Song
      </Button>
    </StyledModal>
  );
};

export default NFTForm;
