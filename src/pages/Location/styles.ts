import styled from 'styled-components';

import { FiHeart } from 'react-icons/fi';
import { IconBaseProps } from 'react-icons';

interface LocationProps {
  background: string;
}

interface RoundButtonProps {
  color: string;
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

  h1 {
    text-align: left;
    padding: 0 8px;
    margin-top: 16px;
  }

  p {
    margin-top: 8px;
    padding: 0 16px;
  }
`;

export const Header = styled.section<LocationProps>`
  background: url(${props => props.background}) no-repeat;
  background-size: cover;
  width: 100%;
  height: 256px;
  border-radius: 10px 10px 0 0px;
  padding: 24px;
`;

export const Social = styled.div`
  text-align: center;
  width: 340px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  flex-flow: row wrap;
  align-content: flex-end;

  div {
    align-self: center;
    margin-top: 32px;
    width: 110px;
    align-items: center;
    p {
      font-size: 12px;
    }
  }
`;

export const Rating = styled.div`
  margin-top: 16px;
  width: 340px;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  display: flex;
  span {
    margin-left: 8px;
    flex: 1;
    color: #9e9e9e;
    font-size: 12px;
  }
`;

export const FavIcon = styled(FiHeart)<FavIconProps>``;

export const RoundButton = styled.button<RoundButtonProps>`
  display: inline-block;
  height: 56px;
  width: 56px;
  border-radius: 50%;
  border: 0px;
  background-color: ${props => props.color};
`;
