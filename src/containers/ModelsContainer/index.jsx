import React from 'react';
import Title from '../../components/Title';
import CardList from '../../components/CardList/index';
import CustomSelect from '../../components/CustomSelect';
import './ModelsContainer.scss';
const ModelContainer = () => {
  return (
    <div className='container'>
      <section className='title_container'>
        <Title>Descubrí todos los modelos</Title>
      </section>
      <section className='filter_container'>
        <div className='order_by'>
          <CustomSelect placeholder='Ordenador Por' />
        </div>
        <div className='filter_by'>
          <CustomSelect />
        </div>
      </section>
      <hr />
      <section className='cars_container'>
        <CardList></CardList>
      </section>
    </div>
  );
};

export default ModelContainer;
