import React, { useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import { FiStar, FiMapPin } from 'react-icons/fi';
import { MdRestaurantMenu } from 'react-icons/md';
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

import ButtonBack from '../../components/ButtonBack';
import Nav from '../../components/Nav';
import {
  Container,
  Header,
  FavIcon,
  Rating,
  RoundButton,
  Social,
} from './styles';

import locationBg from '../../assets/locations/taj-bar-bg.jpg';

const Dashboard: React.FC = () => {
  const handleSubmit = useCallback(() => {
    console.log('Search');
  }, []);
  const formRef = useRef<FormHandles>(null);
  return (
    <Container>
      <Header background={locationBg}>
        <Link to="/dashboard">
          <ButtonBack />
        </Link>
      </Header>
      <Rating>
        <div>
          <FiStar size={20} color="#FFB900" />
          <FiStar size={20} color="#FFB900" />
          <FiStar size={20} color="#FFB900" />
          <FiStar size={20} color="#FFB900" />
          <FiStar size={20} color="#78757C" />
        </div>
        <span>1753 avaliações</span>
        <FavIcon size={24} color="#78757C" />
      </Rating>
      <h1>TAJ BAR</h1>
      <p>
        Explore Seus Sentidos. Eleito pela segunda vez consecutiva o Melhor
        Bar do Brasil pelo prêmio Cool Awards
        </p>

      <Social>
        <Link to="/products">
          <div>
            <RoundButton color="#F78F10">
              <MdRestaurantMenu color="#fff" size={30} />
            </RoundButton>
            <p>Cardápio</p>
          </div>
        </Link>
        <div>
          <RoundButton color="#F78F10">
            <FiMapPin color="#fff" size={30} />
          </RoundButton>
          <p>Como Chegar</p>
        </div>
        <div>
          <RoundButton color="#1EBEA5">
            <FaWhatsapp color="#fff" size={30} />
          </RoundButton>
          <p>Whasapp</p>
        </div>
        <div>
          <RoundButton color="#1196F5">
            <FaFacebookF color="#fff" size={30} />
          </RoundButton>
          <p>Facebook</p>
        </div>
        <div>
          <RoundButton color="#AC4096">
            <FaInstagram color="#fff" size={30} />
          </RoundButton>
          <p>Instagram</p>
        </div>
        <div>
          <RoundButton color="#1A91DA">
            <FaTwitter color="#fff" size={30} />
          </RoundButton>
          <p>Twitter</p>
        </div>
      </Social>
      <Nav />
    </Container>
  );
};

export default Dashboard;
