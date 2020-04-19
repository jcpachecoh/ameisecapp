import React, { useState } from 'react';

import { messages } from '../../constants/messages';
import InputText from '../InputText';
import Button from '../Button';
import Title from '../Title';

import { StyledEmailPromotion } from './styles';

export default function EmailPromotion() {
  const [email, setemail] = useState('');

  const handleEmail = evt => {
    setemail(evt.target.value);
  };

  const handleSubmit = () => {
    console.log('email', email);
  };

  return (
    <StyledEmailPromotion>
      <Title value={messages.emailPromotion} />
      <div>
        <InputText
          name={'newsletter'}
          type={'email'}
          placeholder={messages.email}
          value={email}
          onChange={handleEmail}
          width={'540px'}
        />
        <Button onClick={handleSubmit} value={messages.submit} type={'secondary'} zIndex={0} />
      </div>
    </StyledEmailPromotion>
  );
}
