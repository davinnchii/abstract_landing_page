import { PricingCard } from '../components/PricingCard/PricingCard';

export const Pricing = () => {
  return (
    <section className="px-[122px] mt-[145px] flex flex-col gap-[100px] items-center">
      <div className="flex flex-col text-center gap-[32px] max-w-[646px]">
        <h4 className="text-[#6C2EB9] font-semibold text-[40px] leading-[50px]">
          Pricing
        </h4>
        <p className="text-primaryPurple font-light text-[24px] leading-[36px]">
          Dictas scaevola democritum cu his, magna abhorreant dissentias utDictas scaevola democritum cu his.
        </p>
      </div>
      <div className="flex items-center">
        <PricingCard
          plan="Starter Plan"
          price="Free"
          description="Dictas scaevola democritum cu his magna abhorreant."
          isActive={false} />
        <PricingCard
          plan="Enterprise Plan"
          price="$18.00"
          description="Dictas scaevola democritum cu his, magna abhorreant dissentias utDictas scaevola democritum cu his."
          isActive={true} />
        <PricingCard
          plan="Unlimeted Plan"
          price="$42.00"
          description="Dictas scaevola democritum cu his magna abhorreant."
          isActive={false} />
      </div>
    </section>
  )
}