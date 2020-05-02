import React from 'react';
import { useHistory } from 'react-router-dom';

import emptyCar from '../../../../public/assets/emptyCar.png';

import Image from '../../Image';
import Title from '../../Title';
import Button from '../../Button';

import { StyledEmptyCar } from './styles';
export default function EmptyCar() {
  const history = useHistory();
  const goToHome = () => {
    history.push('/');
  };
  return (
    <StyledEmptyCar>
      <Image src={emptyCar} size={'128px'} alt={'emptyCar'} />
      <Title value={'No tienes items en tu carrito de compra'} />
      <Button value={'Ir a la pagina de inicio'} onClick={goToHome} />
    </StyledEmptyCar>
  );
}
