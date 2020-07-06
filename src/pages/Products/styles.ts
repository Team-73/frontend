import styled from 'styled-components';

import { IconBaseProps } from 'react-icons';

interface LocationProps {
  background: string;
}

interface FavIconProps extends IconBaseProps {
  isFavorited?: boolean;
}

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  form {
    margin: 16px 0 8px 0;
    width: 340px;
    text-align: center;
  }
`;

export const Header = styled.header`
  background: #48454d;
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  a {
    margin: 8px;
  }
`;

export const Footer = styled.footer`
  width: 100%;
`;

export const Products = styled.div`
  flex: 1;
`;

export const Product = styled.div`
  display: flex;
  padding: 8px;
  width: 340px;
  height: 80px;
  background: #232029;
  border-radius: 10px;

  & + div {
    margin-top: 8px;
  }

  div {
    h2 {
      font-size: 16px;
    }

    p {
      font-size: 10px;
    }
  }

  img {
    width: 64px;
    height: 64px;
    border-radius: 5px;
    margin-left: 8px;
  }
`;

export const Price = styled.div`
  display: flex;

  h3 {
    font-size: 14px;
    margin-right: 8px;
    margin-top: 8px;
    text-decoration: line-through;
    & + h3 {
      color: #f9a21a;
      text-decoration: none;
    }
  }
  span {
    font-size: 10px;
  }
`;
