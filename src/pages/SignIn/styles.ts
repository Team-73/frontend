import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import signInBackgroundImg from '../../assets/bg-bar.jpg';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImg}) no-repeat;
  background-size: cover;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 700px;
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromLeft} 1s;

  form {
    margin: 60px 0;
    width: 320px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
      text-align: left;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }
  > a {
    color: #f78f10;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    &:hover {
      color: ${shade(0.2, '#F78F10')};
    }

    svg {
      margin-right: 16px;
    }
  }
`;
