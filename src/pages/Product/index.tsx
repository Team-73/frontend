import React, { useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import { FiMessageSquare } from 'react-icons/fi';
import { MdRestaurantMenu } from 'react-icons/md';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';

import Input from '../../components/Input';
import Nav from '../../components/Nav';
import {
  Container,
  Header,
  Content,
  Footer,
  ProductLocation,
  OrderDetail,
  AddToCart,
} from './styles';

import Button from '../../components/Button';

import ButtonBack from '../../components/ButtonBack';

import productBg from '../../assets/products/beers/logo_antarctica-cover.jpg';

interface SignInFormData {
  product: string;
  message: string;
  qtd: number;
}

const Dashboard: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const handleSubmit = useCallback(() => {
    console.log('Pedido enviado');
  }, []);
  return (
    <>
      <Container>
        <Header background={productBg}>
          <Link to="/location">
            <ButtonBack />
          </Link>
        </Header>

        <Content>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <ProductLocation>
              <div>
                <MdRestaurantMenu size={18} />
                <h3>TAJ BAR E RESTAURANTE</h3>
              </div>
              <h2>Antarctica 600ml</h2>
              <p>
                Explore seus sentidos, Eleito pela segunda vez consecutiva o
                melhor bar do Brasil.
              </p>
            </ProductLocation>
            <OrderDetail>
              <div>
                <p>Alguma observação?</p>
                <span>0/140</span>
              </div>

              <Input
                name="message"
                icon={FiMessageSquare}
                placeholder="Ex: Água sem gelo, ponto da carne..."
              />
            </OrderDetail>
            <AddToCart>
              {/* <Input value={1} name="message" placeholder="qtd" /> */}
              <Button type="submit">
                Adicionar
                <h3> R$ 10,00</h3>
              </Button>
            </AddToCart>
          </Form>
        </Content>

        <Footer>
          <Nav />
        </Footer>
      </Container>
    </>
  );
};

export default Dashboard;
