import 'swiper/css';
import iconArrow from '../assets/icon-arrow-right.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css/effect-coverflow';
import pictureMan from '../assets/picture-man.png';
import pictureWoman from '../assets/picture-woman.png';
import { TestimonalsCard } from '../components/TestimonalsCard/TestimonalsCard';

const reviews = [
  {
    id: 2,
    image: pictureWoman,
    name: 'Julian	Francis',
    position: 'Quality Control Chemist',
    comment: 'As part of the classes I teach, I task my students with preparing a lot of presentations. To save time who presents the good..'
  },
  {
    id: 1,
    image: pictureMan,
    name: 'Roberto Rowe',
    position: 'Licensed Embalmer',
    comment: 'As part of the classes I teach, I task my students with preparing a lot of presentations.' +
      'To save time & reduce boredom, I occasionally have only a pick who presents the good work!'
  },
  {
    id: 3,
    image: pictureWoman,
    name: 'Julian	Francis',
    position: 'Quality Control Chemist',
    comment: 'As part of the classes I teach, I task my students with preparing a lot of presentations. To save time who presents the good..'
  },
];
export const Testimonals = () => {
  return (
    <section className="flex flex-col gap-[190px] mt-[104px]">
      <div className="flex justify-between px-[193px] items-center">
        <h4 className="font-semibold text-[35px] leading-[43.75px] text-[#6C2EB9] max-w-[340px]">
          What 400+ reviews
          say about us
        </h4>
        <div className="flex gap-[38px] items-center">
          <img className="review-swiper-button-prev  rotate-180 w-[35px] h-[53px]" src={iconArrow} alt="icon-arrow"/>
          <img className="review-swiper-button-next w-[35px] h-[53px]" src={iconArrow} alt="icon-arrow" />
        </div>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={2.9}
        initialSlide={1}
        navigation={{
          nextEl: '.review-swiper-button-next',
          prevEl: '.review-swiper-button-prev'
        }}
        centeredSlides
        onSlideChange={() => console.log('slide change')}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        className="!max-w-[1440px] !pt-[50px]"
      >
        {reviews.map(({ id, image, name, position, comment }) => (
          <SwiperSlide key={id} className="w-[488px]">
            {({ isActive }) => (
              <TestimonalsCard image={image} name={name} position={position} comment={comment} isActive={isActive} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}