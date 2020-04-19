import styled from 'styled-components';

import { mainColors } from '../../constants';

export const StylesMenuToogle = styled.div`
  align-items: center;
  background-color: ${mainColors.brandColor};
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0.5em;
  border-bottom: 1px solid grey;
  justify-content: space-between;
  z-index: 100;

  a {
    font-size: 20px;
    color: ${mainColors.white};
    text-decoration: none;
    &:hover {
      text-decoration: none;
      color: ${mainColors.white};
    }
    &:visited {
      text-decoration: none;
      color: ${mainColors.white};
    }
  }

  li {
    text-decoration: none;
    color: ${mainColors.white};

    transition: color 0.3s ease;
  }

  li:hover {
    text-decoration: none;
  }

  input {
    display: block;
    width: 40px;
    height: 32px;
    position: absolute;
    top: -7px;
    left: -5px;

    opacity: 0; /* hide this */
    z-index: 2; /* and place it over the hamburger */

    -webkit-touch-callout: none;
  }

  span {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;

    background: ${mainColors.white};
    border-radius: 3px;

    z-index: 1;

    transform-origin: 4px 0px;

    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }
  span:first-child {
    transform-origin: 0% 0%;
  }
  span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }
  input:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
    background: 0.232323;
  }
  input:checked ~ span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }
  input:checked ~ span:nth-last-child(2) {
    transform: rotate(-45deg) translate(0, -1px);
  }
  input:checked ~ ul {
    transform: none;
  }
`;

export const StyledNav = styled.nav`
  width: 100%;
  height: 65px;
  line-height: 65px;
  text-align: center;
  top: 0;
  z-index: 100;

  div.logo {
    float: left;
    width: auto;
    height: auto;
    padding-left: 3rem;
  }

  div.logo a {
    text-decoration: none;
    color: #fff;
    font-size: 2rem;
  }

  div.logo a:hover {
    color: ${mainColors.brandColor};
  }

  div.main_list {
    height: 65px;
    float: right;
  }

  div.main_list ul {
    width: 100%;
    height: 65px;
    display: flex;
    list-style: none;
    margin: 0;
    padding: 20px 0;
  }

  div.main_list ul li {
    width: auto;
    height: 65px;
    padding: 0;
    padding-right: 3rem;
  }

  div.main_list ul li a {
    text-decoration: none;
    color: #fff;
    line-height: 65px;
    font-size: 1.5rem;
  }

  div.main_list ul li a:hover {
    color: ${mainColors.brandColor};
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    .container {
      margin: 0;
    }
  }

  @media screen and (max-width: 768px) {
    .navTrigger {
      display: block;
    }
    .nav div.logo {
      margin-left: 15px;
    }
    .nav div.main_list {
      width: 100%;
      height: 0;
      overflow: hidden;
    }
    .nav div.show_list {
      height: auto;
      display: none;
      padding: 20px 0;
    }
    .nav div.main_list ul {
      flex-direction: column;
      width: 100%;
      height: 100vh;
      right: 0;
      left: 0;
      bottom: 0;
      background-color: #111;
      /*same background color of navbar*/
      background-position: center top;
    }
    .nav div.main_list ul li {
      width: 100%;
      text-align: right;
    }
    .nav div.main_list ul li a {
      text-align: center;
      width: 100%;
      font-size: 3rem;
    }
    .nav div.media_button {
      display: block;
    }

    .navTrigger {
      cursor: pointer;
      width: 30px;
      height: 25px;
      margin: auto;
      position: absolute;
      right: 30px;
      top: 0;
      bottom: 0;
    }

    .navTrigger i {
      background-color: #fff;
      border-radius: 2px;
      content: '';
      display: block;
      width: 100%;
      height: 4px;
    }

    .navTrigger i:nth-child(1) {
      -webkit-animation: outT 0.8s backwards;
      animation: outT 0.8s backwards;
      -webkit-animation-direction: reverse;
      animation-direction: reverse;
    }

    .navTrigger i:nth-child(2) {
      margin: 5px 0;
      -webkit-animation: outM 0.8s backwards;
      animation: outM 0.8s backwards;
      -webkit-animation-direction: reverse;
      animation-direction: reverse;
    }

    .navTrigger i:nth-child(3) {
      -webkit-animation: outBtm 0.8s backwards;
      animation: outBtm 0.8s backwards;
      -webkit-animation-direction: reverse;
      animation-direction: reverse;
    }

    .navTrigger.active i:nth-child(1) {
      -webkit-animation: inT 0.8s forwards;
      animation: inT 0.8s forwards;
    }

    .navTrigger.active i:nth-child(2) {
      -webkit-animation: inM 0.8s forwards;
      animation: inM 0.8s forwards;
    }

    .navTrigger.active i:nth-child(3) {
      -webkit-animation: inBtm 0.8s forwards;
      animation: inBtm 0.8s forwards;
    }

    @-webkit-keyframes inM {
      50% {
        -webkit-transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(45deg);
      }
    }

    @keyframes inM {
      50% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(45deg);
      }
    }

    @-webkit-keyframes outM {
      50% {
        -webkit-transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(45deg);
      }
    }

    @keyframes outM {
      50% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(45deg);
      }
    }

    @-webkit-keyframes inT {
      0% {
        -webkit-transform: translateY(0px) rotate(0deg);
      }
      50% {
        -webkit-transform: translateY(9px) rotate(0deg);
      }
      100% {
        -webkit-transform: translateY(9px) rotate(135deg);
      }
    }

    @keyframes inT {
      0% {
        transform: translateY(0px) rotate(0deg);
      }
      50% {
        transform: translateY(9px) rotate(0deg);
      }
      100% {
        transform: translateY(9px) rotate(135deg);
      }
    }

    @-webkit-keyframes outT {
      0% {
        -webkit-transform: translateY(0px) rotate(0deg);
      }
      50% {
        -webkit-transform: translateY(9px) rotate(0deg);
      }
      100% {
        -webkit-transform: translateY(9px) rotate(135deg);
      }
    }

    @keyframes outT {
      0% {
        transform: translateY(0px) rotate(0deg);
      }
      50% {
        transform: translateY(9px) rotate(0deg);
      }
      100% {
        transform: translateY(9px) rotate(135deg);
      }
    }

    @-webkit-keyframes inBtm {
      0% {
        -webkit-transform: translateY(0px) rotate(0deg);
      }
      50% {
        -webkit-transform: translateY(-9px) rotate(0deg);
      }
      100% {
        -webkit-transform: translateY(-9px) rotate(135deg);
      }
    }

    @keyframes inBtm {
      0% {
        transform: translateY(0px) rotate(0deg);
      }
      50% {
        transform: translateY(-9px) rotate(0deg);
      }
      100% {
        transform: translateY(-9px) rotate(135deg);
      }
    }

    @-webkit-keyframes outBtm {
      0% {
        -webkit-transform: translateY(0px) rotate(0deg);
      }
      50% {
        -webkit-transform: translateY(-9px) rotate(0deg);
      }
      100% {
        -webkit-transform: translateY(-9px) rotate(135deg);
      }
    }

    @keyframes outBtm {
      0% {
        transform: translateY(0px) rotate(0deg);
      }
      50% {
        transform: translateY(-9px) rotate(0deg);
      }
      100% {
        transform: translateY(-9px) rotate(135deg);
      }
    }

    .affix {
      padding: 0;
      background-color: #111;
    }

    .myH2 {
      text-align: center;
      font-size: 4rem;
    }
    .myP {
      text-align: justify;
      padding-left: 15%;
      padding-right: 15%;
      font-size: 20px;
    }
    @media all and (max-width: 700px) {
      .myP {
        padding: 2%;
      }
    }
  }
`;

export const StylesMenu = styled.ul`
  position: absolute;
  width: 300px;
  margin: -100px 0 0 -50px;
  padding: 50px;
  padding-top: 125px;

  background: ${mainColors.brandColor};
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  /* to stop flickering of text in safari */
  transform-origin: 0% 0%;
  transform: translate(-100%, 0);

  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);

  li {
    padding: 10px 30px;
    font-size: 22px;
  }

  a {
    color: ${mainColors.white};
  }
`;

export const StyledShopCar = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: ${props => (props.isDesktop ? '16px' : '0')};
`;

export const StyledShopCarIcon = styled.a`
  background-color: #555;
  color: white;
  text-decoration: none;
  padding: 15px 26px;
  position: relative;
  display: inline-block;
  border-radius: 2px;
`;
