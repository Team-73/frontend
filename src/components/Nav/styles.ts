import styled from 'styled-components';

export const Container = styled.nav`
  width: 100%;
  bottom: 0px;
  background: #28252D;
  padding: 8px 0 32px 0;
  text-align: center;




  ul {
    list-style: none;
    display:flex;
    align-items: center;
    justify-content: space-around;

    li {
      padding: 8px;
      display: inline-block;
      &:hover {
        color: #F78F10;
      }
      p {
        font-size: 11px;
        margin-top: 4px;
      }
    }
	}



  }
`;
