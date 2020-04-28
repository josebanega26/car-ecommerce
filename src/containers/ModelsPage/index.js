import React from 'react';
import Title from '../../components/Title';
import CardList from '../../components/CardList/index';
import './ModelsPage.style.scss';
const ModelsPage = () => {
  return (
    <>
      <section className='title_container'>
        <Title>Descubrí todos los modelos</Title>
      </section>
      <section className='filter_container'>
        Ordenador Por
        <hr></hr>
      </section>
      <section className='cars_container'>
        <CardList></CardList>
      </section>
    </>
  );
};

export default ModelsPage;
