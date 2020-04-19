import styled from 'styled-components';

import { mainColors } from '../../constants';

export const StyledInfoDetails = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: auto;
  font-size: 12px;
  width: 80%;
  padding: 40px 0;
`;

export const StylesInfoContactoItem = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  text-align: center;
  > span {
    text-align: center;
    margin: 10px;
    font-size: 16px;
  }
`;

export const StyledMap = styled.div`
  width: '100%';
  height: '100%';
`;

export const mapStyles = {
  height: '100%',
  position: 'relative',
  width: '100%',
};

export const StylesContactoPage = styled.div`
  width: 100vw;
  height: 280px;
  margin-bottom: 500px;
`;

export const StyledContactUsForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  text-align: left;

  label {
    color: ${mainColors.brandColor};
    font-size: 20px;
  }
`;

export const StylesInfoContacto = styled.div`
  display: grid;
  grid-gap: 100px;
  grid-template-columns: 60% 40%;
  padding: 0 32px;
  align-items: center;
  margin: 70px 20px;
`;
