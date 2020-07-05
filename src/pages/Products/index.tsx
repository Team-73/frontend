import React, { useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import { FiSearch } from 'react-icons/fi';
import { Form } from '@unform/web';

import Input from '../../components/Input';
import Nav from '../../components/Nav';
import {
  Container,
  Header,
  Content,
  Footer,
  Products,
  Product,
  Price,
} from './styles';

import ButtonBack from '../../components/ButtonBack';
import DropDown from '../../components/DropDown';

import productImg from '../../assets/products/beers/logo_antarctica.jpg';
import OrderPreview from '../../components/OrderPreview';

const Dashboard: React.FC = () => {
  const handleSubmit = useCallback(() => {
    console.log('Search');
  }, []);
  const formRef = useRef<FormHandles>(null);
  return (
    <>
      <Container>
        <Header>
          <ButtonBack />
          <DropDown />
        </Header>

        <Content>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input name="email" icon={FiSearch} placeholder="Procurar" />
          </Form>

          <Products>
            <Product>
              <div>
                <h2>Antarctica 600ml</h2>
                <p>
                  Descrição do produto contendo todos os detalhes de praparação
                  e insumos.
                </p>
                <Price>
                  <h3>
                    <span>R$ </span>10,00
                  </h3>
                  <h3>
                    <span>R$ </span>10,00
                  </h3>
                </Price>
              </div>
              <div>
                <img src={productImg} alt="Antactica" />
              </div>
            </Product>
            <Product>
              <div>
                <h2>Antarctica 600ml</h2>
                <p>
                  Descrição do produto contendo todos os detalhes de praparação
                  e insumos.
                </p>
                <Price>
                  <h3>
                    <span>R$ </span>10,00
                  </h3>
                  <h3>
                    <span>R$ </span>10,00
                  </h3>
                </Price>
              </div>
              <div>
                <img src={productImg} alt="Antactica" />
              </div>
            </Product>
            <Product>
              <div>
                <h2>Antarctica 600ml</h2>
                <p>
                  Descrição do produto contendo todos os detalhes de praparação
                  e insumos.
                </p>
                <Price>
                  <h3>
                    <span>R$ </span>10,00
                  </h3>
                  <h3>
                    <span>R$ </span>10,00
                  </h3>
                </Price>
              </div>
              <div>
                <img src={productImg} alt="Antactica" />
              </div>
            </Product>
            <Product>
              <div>
                <h2>Antarctica 600ml</h2>
                <p>
                  Descrição do produto contendo todos os detalhes de praparação
                  e insumos.
                </p>
                <Price>
                  <h3>
                    <span>R$ </span>10,00
                  </h3>
                  <h3>
                    <span>R$ </span>10,00
                  </h3>
                </Price>
              </div>
              <div>
                <img src={productImg} alt="Antactica" />
              </div>
            </Product>
            <Product>
              <div>
                <h2>Antarctica 600ml</h2>
                <p>
                  Descrição do produto contendo todos os detalhes de praparação
                  e insumos.
                </p>
                <Price>
                  <h3>
                    <span>R$ </span>10,00
                  </h3>
                  <h3>
                    <span>R$ </span>10,00
                  </h3>
                </Price>
              </div>
              <div>
                <img src={productImg} alt="Antactica" />
              </div>
            </Product>
          </Products>
          <OrderPreview />
        </Content>

        <Footer>
          <Nav />
        </Footer>
      </Container>
    </>
  );
};

export default Dashboard;
