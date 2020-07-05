import React from 'react';
import { FiHeart, FiMap, FiSearch, FiFileText, FiUser } from 'react-icons/fi';

import { Container } from './styles';

const Nav: React.FC = () => {
  return (
    <Container>
      <ul>
        <li>
          <FiHeart size={24} />
          <p>Favoritos</p>
        </li>
        <li>
          <FiMap size={24} />
          <p>Mapa</p>
        </li>
        <li>
          <FiSearch size={24} />
          <p>Buscar</p>
        </li>
        <li>
          <FiFileText size={24} />
          <p>Pedidos</p>
        </li>
        <li>
          <FiUser size={24} />
          <p>Perfil</p>
        </li>
      </ul>
    </Container>
  );
};

export default Nav;
