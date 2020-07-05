import React, { useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import { FiSearch, FiStar } from 'react-icons/fi';
import { Form } from '@unform/web';

import Input from '../../components/Input';
import Nav from '../../components/Nav';
import { Container, Location, FavIcon } from './styles';

import locationBg from '../../assets/locations/taj-bar-bg.jpg';

const Dashboard: React.FC = () => {
  const handleSubmit = useCallback(() => {
    console.log('Search');
  }, []);
  const formRef = useRef<FormHandles>(null);
  return (
    <>
      <Container>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="email" icon={FiSearch} placeholder="Procurar" />
        </Form>
        <Location background={locationBg}>
          <div>
            <div>
              <h2>TAJ BAR RESTAURANTE</h2>
              <p>Esquina com João Bertioga, Curitiba</p>
            </div>
            <span>
              <h3>1 km</h3>
              <p>
                4,7 <FiStar size={10} color="#F78F10" /> (500)
              </p>
            </span>
          </div>
        </Location>
        <Location background={locationBg}>
          <div>
            <div>
              <h2>TAJ BAR RESTAURANTE</h2>
              <p>Esquina com João Bertioga, Curitiba</p>
            </div>
            <span>
              <h3>1 km</h3>
              <p>
                4,7 <FiStar size={10} color="#F78F10" /> (500)
              </p>
            </span>
          </div>
        </Location>
        <Location background={locationBg}>
          <div>
            <div>
              <h2>TAJ BAR RESTAURANTE</h2>
              <p>Esquina com João Bertioga, Curitiba</p>
            </div>
            <span>
              <h3>1 km</h3>
              <p>
                4,7 <FiStar size={10} color="#F78F10" /> (500)
              </p>
            </span>
          </div>
        </Location>
      </Container>
      <Nav />
    </>
  );
};

export default Dashboard;
