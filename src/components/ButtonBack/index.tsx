import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import { Container } from './styles';

const ButtonBack: React.FC = () => {
  return (
    <Container>
      <FiArrowLeft color="#fff" size={24} />
    </Container>
  );
};

export default ButtonBack;
