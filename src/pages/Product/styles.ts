import styled from 'styled-components';

import { IconBaseProps } from 'react-icons';

interface HeaderProps {
  background: string;
}

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  form {
    height: 100%;
  }
`;

export const Header = styled.header<HeaderProps>`
  background: url(${props => props.background}) no-repeat;
  background-size: cover;
  width: 100%;
  height: 400px;
  border-radius: 10px 10px 0 0px;
  padding: 24px;
`;
export const ProductLocation = styled.div`
  flex: 1;
  margin: 16px;
  div {
    display: flex;

    align-items: center;

    h3 {
      margin-left: 8px;
      flex: 1;
      font-size: 16px;
    }
  }
  h2 {
    font-size: 18px;
    margin-top: 16px;
  }
  p {
    font-size: 14px;
    margin-top: 8px;
  }
`;

export const OrderDetail = styled.div`
  margin: 16px;
  div {
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p,
    span {
      font-size: 14px;
    }
  }
`;

export const AddToCart = styled.div`
  margin: 16px;
  display: flex;
  align-items: center;

  div {
    margin: 0;
    width: 100px;
    height: 58px;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 400;

    h3 {
      font-size: 18px;
    }
  }
`;

export const Footer = styled.footer`
  width: 100%;
`;
