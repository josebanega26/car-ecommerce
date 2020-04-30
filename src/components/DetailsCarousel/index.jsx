import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { breakpoints } from './carousel-breakpoints';
import { ReactComponent as LeftIcon } from '../../assets/icons/left.svg';
import { ReactComponent as RightIcon } from '../../assets/icons/rigth.svg';
import CarouselItem from '../../components/CarouselItem';
const index = (props) => {
  const { items = [1, 2, 3, 4, 5, 6] } = props;
  const carrouselItem = items.map((item, id) => (
    <CarouselItem key={id}></CarouselItem>
  ));
  return (
    <Carousel
      arrows
      arrowLeft={<LeftIcon />}
      arrowLeftDisabled={<LeftIcon />}
      arrowRight={<RightIcon />}
      arrowRightDisabled={<RightIcon />}
      slidesPerPage={4.5}
      breakpoints={breakpoints}
      slides={carrouselItem}
      addArrowClickHandler
    />
  );
};

export default index;
