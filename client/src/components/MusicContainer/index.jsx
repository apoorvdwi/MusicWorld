import React, { useContext } from 'react';
import styled from 'styled-components';
import MusicBox from '../MusicBox';
import { UserContext } from '../../context/UserContext';

const Wrapper = styled.div`
  height: 68vh;
  width: 100%;
  overflow: hidden;
  background-color: var(--foreground);
  border-radius: 10px;
  margin: 20px 0;
  padding: 20px 0 20px 20px;
`;

const InnerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: 200px;
  column-gap: 20px;
  row-gap: 20px;
  height: 100%;
  width: 100%;
  padding-right: 10px;
  overflow-y: auto;
  background-color: var(--foreground);

  ::-webkit-scrollbar {
    width: 10px;
    border-radius: 10px;
    background: var(--foreground);
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #adadad;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    border: 1px solid var(--foreground);
    background: var(--background);
  }
`;

const MusicContainer = () => {
  const userContext = useContext(UserContext);
  const { songsList } = userContext;
  return (
    <Wrapper>
      <InnerWrapper>
        {songsList.map((song, index) => {
          return (
            <MusicBox
              id={index}
              songName={song.songName}
              songLink={song.songLink}
            />
          );
        })}
      </InnerWrapper>
    </Wrapper>
  );
};

export default MusicContainer;
