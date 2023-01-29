import React from 'react';
import {SLoading, LoadingBox} from './styled';

const Loading: React.FC = () => {
  return (
    <LoadingBox>
      <SLoading size="large" color="#fff" />
    </LoadingBox>
  );
};

export default Loading;
