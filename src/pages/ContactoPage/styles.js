import styled from 'styled-components';
import { mainColors } from '../../constants';

export const StylesInfoContacto = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: auto;
  font-size: 12px;
  width: 80%;
  padding: 40px 0;
`;



export const StylesInfoContactoItem = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  margin: auto;
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
    width: '100%',
    height: '100%'
};