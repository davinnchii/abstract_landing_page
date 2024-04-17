import { Star } from './Star';

type Props = {
  image: string;
  name: string;
  position: string;
  comment: string;
  isActive: boolean;
}

export const TestimonalsCard: React.FC<Props> = ({ image, name, position, comment, isActive }) => {
  return (
    <article className={`${!isActive ? 'opacity-[80%] h-[298px]' : 'h-[355px]'} overflow-visible
    relative rounded-[20px] pt-[67px] pl-[46px] pb-[30px] pr-[54px] shadow-cardShadow bg-white max-w-[488px]
    transition-opacity duration-300 ease-in-out`}>
      <img src={image} className="absolute -top-12" alt="profile" />
      <div className="flex flex-col gap-[28px]">
        <div className="flex justify-between">
          <div>
            <p className="text-[#6C2EB9] text-[20px] leading-[25px] font-semibold">
              {name}
            </p>
            <p className="text-primaryPurple text-[20px] leading-[25px] font-semibold">
              {position}
            </p>
          </div>
          <div className="flex gap-[4px]">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
        </div>
        <p className="font-normal text-[16px] text-primaryPurple leading-[31px]">
          {comment}
        </p>
      </div>
    </article>
  )
}