import React from 'react';
import Title from '../../components/Title';
import CardList from '../../components/CardList/index';

const ModelContainer = () => {
  return (
    <div className='container'>
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
    </div>
  );
};

export default ModelContainer;
