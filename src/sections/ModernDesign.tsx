import { LearnMore } from '../components/LearnMore/LearnMore';

export const ModernDesign = () => {
  return (
    <section className="px-[160px] flex mt-[127px] pt-[133px]">
      <div className="flex flex-col gap-[32px] max-w-[410px]">
        <div className="flex flex-col gap-[36px]">
          <h4 className="text-primaryPurple text-semibold text-[35px] leading-[43.75px]">
            Modern &
            Trendy Design
          </h4>
          <p className="font-light text-primaryPurple text-[20px] leading-[32px]">
            Dictas scaevola democritum cu his, magna abhorreant dissentias utDictas scaevola democritum cu his.
          </p>
        </div>
        <LearnMore />
      </div>
    </section>
  )
}