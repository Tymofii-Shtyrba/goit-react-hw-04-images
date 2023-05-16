import { Blocks } from 'react-loader-spinner';
import React from 'react';
import { StyledLoaderWrapper } from './Loader.styled';

export default function Loader() {
  return (
    <StyledLoaderWrapper>
      <Blocks
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
      />
    </StyledLoaderWrapper>
  );
}
