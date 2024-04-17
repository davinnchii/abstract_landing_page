export const CTA = () => {
  return (
    <section className="px-[55px] mt-[133px]">
      <div className="bg-gradient-to-b from-purple-900 via-purple-800 to-purple-600
      flex flex-col justify-center items-center rounded-[25px] pt-[87px] pb-[71px] gap-[22px]">
        <h4 className="text-white font-medium text-[32px] leading-[40px]">
          Start using
          <span className="font-semibold"> Abstract </span>
          app now!
        </h4>
        <p className="font-light text-white text-[21px] leading-[30px] text-center max-w-[483px]">
          Dictas scaevola democritum cu his, magna abhorreant dissentias
        </p>
        <button
          type="button"
          className="py-[6px] px-[18px] border-[1px] border-[#6C26B1] bg-white
          shadow-downloadButtonShadow rounded-[20px] flex gap-[10px] items-center justify-center
          text-[#822DD5] font-normal text-[16px] leading-[20px]
          after:flex after:content-[''] after:bg-arrow-right after:w-[20px] after:h-[24px] after:mt-[5px]
          "
        >
          Download App
        </button>
      </div>
    </section>
  )
}