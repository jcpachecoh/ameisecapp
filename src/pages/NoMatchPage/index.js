import React from 'react';

import Footer from '../../components/Footer';

import NotFoundBanner from './NotFoundBanner';
import { StyledContainer } from './styles';

function NoMatchPage() {
  return (
    <StyledContainer>
      <NotFoundBanner />
      <Footer />
    </StyledContainer>
  );
}

export default NoMatchPage;
