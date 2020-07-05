import styled from 'styled-components';

export const Container = styled.nav`
  position: absolute;
  width: 100%;
  bottom: 0px;
  background: #28252D;
  padding: 8px 0 32px 0;
  text-align: center;
  display: flex;



  ul {
    flex: 1;
    width: 320px;

    list-style: none;
    display:flex;
    align-items: stretch;
    justify-content: center;

    li {
      padding: 8px;
      display: inline-block;
      &:hover {
        color: #F78F10;
      }
      p {
        margin-top: 4px;
      }
    }
	}



  }
`;
