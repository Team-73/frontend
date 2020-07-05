import React from 'react';
import { Container, ShowOrder, Total } from './styles';

import OrderBadge from '../OrderBadge';

const OrderPreview: React.FC = () => {
  return (
    <Container>
      <OrderBadge />
      <ShowOrder>VER COMANDA</ShowOrder>
      <Total>R$ 320,00</Total>
    </Container>
  );
};

export default OrderPreview;
