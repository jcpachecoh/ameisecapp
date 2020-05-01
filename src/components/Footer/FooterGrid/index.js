import React from 'react';
import { Link } from 'react-router-dom';

import SocialBanner from '../../SocialBanner';
import { isDesktop } from '../../../utils';

import { StylesFooterGrid, StyledFooterGridItem } from './styles';

export default function FooterGrid() {
  const isDesktopDevice = isDesktop();
  return (
    <StylesFooterGrid isDesktopDevice={isDesktopDevice}>
      <StyledFooterGridItem>
        <h3>Colecciones</h3>
        <Link to={'/hombre'}>Hombre</Link>
        <Link to={'/dotaciones'}>Dotaciones</Link>
      </StyledFooterGridItem>
      <StyledFooterGridItem>
        <h3>Servicio</h3>
        <Link to={'/ordenes'}>Tus Ordenes</Link>
        <Link to={'/faq'}>Preguntas Frecuentes</Link>
        <Link to={'/contacto'}>Contactanos</Link>
      </StyledFooterGridItem>
      {isDesktopDevice && (
        <StyledFooterGridItem>
          <SocialBanner />
        </StyledFooterGridItem>
      )}
    </StylesFooterGrid>
  );
}
