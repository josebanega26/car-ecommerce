import React from 'react';
import './OneModelContainer.style.scss';
import DescriptionCard from '../../components/DescriptionCard';
import DetailsCarousel from '../../components/DetailsCarousel';
const OneModelContainer = () => {
  return (
    <>
      <DescriptionCard {...detailMock.main} className='container' />
      <section className='carousel_container'>
        <DetailsCarousel></DetailsCarousel>
      </section>
      <DescriptionCard
        {...detailMock.first}
        reverse={true}
        className='container'
      />
      <DescriptionCard {...detailMock.second} className='container' />
    </>
  );
};

const detailMock = {
  main: {
    title: 'Hilux DX/SR',
    text: `Mayor durabilidad, estabilidad, confort de marcha y mucha seguridad.Lorem ipsum dolor sit amet. lorem ipsum dolor sit amet orem ipsum dolor.`,
    imageUrl: 'car-detail',
    subtitle: 'Preparada para cualquier desafío',
  },
  first: {
    title: 'Titulo 20px',
    text: `Texto lorem ipsum dolor sit amet orem ipsum dolor sit amet. lorem ipsum dolor sit amet orem ipsum dolor sit amet lorem ipsum dolor sit amet orem ipsum dolor sit amet.`,
    imageUrl: 'car-detail-1',
  },
  second: {
    title: 'Titulo 20px',
    text: `Texto lorem ipsum dolor sit amet orem ipsum dolor sit amet. lorem ipsum dolor sit amet orem ipsum dolor sit amet lorem ipsum dolor sit amet orem ipsum dolor sit amet.`,
    imageUrl: 'car-detail-2',
  },
};
export default OneModelContainer;
