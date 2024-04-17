import incomeMobile from '../assets/mobile-income.png';

export const SaveTime = () => {
  return (
    <section className="flex px-[175px] ml-[78px] mt-[175px] justify-between items-center">
      <div className="w-[290px] h-[560px]">
        <img src={incomeMobile} alt="incoming total"/>
      </div>
      <div className="flex flex-col gap-[56px] max-w-[410px]">
        <div className="flex flex-col gap-[36px]">
          <h4 className="text-primaryPurple font-semibold text-[35px] leading-[43.75px]">
            Save your time
          </h4>
          <p className="font-light text-[20px] leading-[32px] text-primaryPurple">
            Dictas scaevola democritum cu his, magna abhorreant dissentias utDictas scaevola democritum cu his.
          </p>
        </div>
        <button
          type="button"
          className="flex gap-[6px] font-normal text-white text-[16px] leading-[20px] max-w-[172px] bg-primaryPurple
          border-[1px] border-[#6C26B1] rounded-[20px] py-[10px] px-[18px]
          after:content-[''] after:bg-arrow-right-white after:w-[20px] after:h-[24px] after:fill-white
          after:flex after:items-center after:mt-[2px]"
        >
          Download app
        </button>
      </div>
    </section>
  )
}