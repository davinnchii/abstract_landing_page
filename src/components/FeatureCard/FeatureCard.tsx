import { LearnMore } from '../LearnMore/LearnMore';

type Props = {
  icon: string;
  title: string;
  description: string;
  isExpanded: boolean;
}

export const FeatureCard: React.FC<Props> = ({ icon, title, description, isExpanded }) => {
  return (
    <article className={`pt-[45px] pr-[25px] ${isExpanded ? 'pb-[45px]' : 'mb-[60px]'} pl-[45px]
    max-w-[369px] flex flex-col gap-[24px] rounded-[20px] bg-white shadow-cardShadow`}
    >
      <div className="w-[40px] h-[40px]">
        <img src={icon} alt="icon" />
      </div>
      <div className="flex flex-col gap-[20px]">
        <p className={`${isExpanded ? 'text-[#792ECC]' : 'text-primaryPurple'} text-[21px] leading-[26px] font-semibold`}>
          {title}
        </p>
        <p className="text-primaryPurple">
          {description}
        </p>
      </div>
      {isExpanded && (
        <LearnMore />
      )}
    </article>
  )
}