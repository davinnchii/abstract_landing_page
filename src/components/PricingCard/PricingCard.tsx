type Props = {
  plan: string;
  price: string | 'Free';
  description: string;
  isActive: boolean;
}

export const PricingCard: React.FC<Props> = ({ plan, price, description, isActive }) => {
  return (
    <article
      className={`flex flex-col ${isActive ? 'px-[56px] pt-[59px] pb-[80px] max-w-[433px]' : 'px-[30px] py-[54px] ' +
        'max-h-[462px]'} gap-[36px] rounded-[20px] shadow-cardShadow bg-white items-center`}>
      <div className="flex flex-col justify-center gap-[36px]">
        <div className="text-center flex flex-col gap-[44px]">
          <h6 className={`text-primaryPurple font-medium text-[25px] leading-[30px]`}>
            {plan}
          </h6>
          <div className="flex flex-col gap-[26px]">
            <p
              className={`${isActive ? 'text-[#7A2DCB]' : 'text-primaryPurple'} font-medium text-[40px] leading-[30px]`}>
              {price}
            </p>
            <p className="font-normal text-[#7A2DCB] text-[18px] leading-[30px]">
              Month
            </p>
          </div>
        </div>
        <p className="font-light text-primaryPurple text-[18px] leading-[36px]">
          {description}
        </p>
      </div>
      <button
        className={`${isActive ? 'bg-[#504293] text-white' : 'bg-white'} w-[214px] 
        border-[1px] py-[5px] border-[#792ECC] rounded-[22px] text-primaryPurple font-normal text-[18px] leading-[36px]`}
        type="button"
      >
        Start now
      </button>
    </article>
  )
}