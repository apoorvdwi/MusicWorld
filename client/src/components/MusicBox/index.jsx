import React from 'react';
import styled from 'styled-components';
import { Avatar } from 'antd';

const Wrapper = styled.div`
  width: 100%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 10px;
  height: 100%;
  background-color: var(--background);
`;

const StyledAvatar = styled(Avatar)`
  .ant-avatar-string {
    font-size: 40px;
  }
`;

const SubHeading = styled.div`
  font-size: 20px;
  maxwidth: 100%;
  text-overflow: ellipsis;
  margin: 10px 0 10px;
  color: var(--foreground);
`;

const MusicBox = ({ songName, songLink }) => {
  return (
    <Wrapper
      onClick={() => {
        const link = document.createElement('a');
        link.href = songLink;
        link.target = '_blank';
        link.click();
      }}
    >
      <StyledAvatar
        size={100}
        style={{
          color: 'var(--background)',
          backgroundColor: 'var(--foreground)',
        }}
      >
        {songName.slice(0, 1).toUpperCase()}
      </StyledAvatar>
      <SubHeading>{songName}</SubHeading>
    </Wrapper>
  );
};

export default MusicBox;
