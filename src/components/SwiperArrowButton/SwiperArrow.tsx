import { useSwiper } from 'swiper/react';
import iconArrow from '../../assets/icon-arrow-right.svg';

type Props = {
  type: 'next' | 'prev';
}

export const SwiperArrow: React.FC<Props> = ({ type }) => {
  const swiper = useSwiper();


  const handleChangeSlide = () => {
    switch (type) {
      case 'next':
        swiper.slideNext()
        break;
      case 'prev':
        swiper.slidePrev();
        break;
    }
  }
  return(
    <button type="button" onClick={handleChangeSlide}>
    </button>
  )
}