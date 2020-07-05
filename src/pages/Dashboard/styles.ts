import styled from 'styled-components';

import { FiHeart } from 'react-icons/fi';
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
  /* justify-content: center; */
  align-content: space-around;

  form {
    margin: 32px 0 8px 0;
    width: 320px;
    text-align: center;
  }
`;

export const Location = styled.section<LocationProps>`
  background: url(${props => props.background}) no-repeat;
  background-size: cover;
  width: 320px;
  height: 100px;
  border-radius: 10px 10px 0 0px;

  & + section {
    margin-top: 64px;
  }

  > div {
    background: #232029;
    padding: 16px;
    height: 56px;
    position: relative;
    top: 100px;
    border-radius: 0 0 10px 10px;
    display: flex;
    align-items: center;
    width: 100%;

    div {
      top: 0;
      flex: 1;
      h2 {
        font-size: 16px;
      }

      p {
        font-size: 10px;
      }
    }
    span {
      text-align: right;
      h3 {
        font-size: 14px;
      }
      p {
        font-size: 12px;
      }
    }
  }
`;

export const FavIcon = styled(FiHeart)<FavIconProps>``;
