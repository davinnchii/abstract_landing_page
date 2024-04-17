import { Header } from '../components/Header/Header';
import mobile from '../assets/mobile-dashboard.png';

export const Hero = () => {
  return (
    <section className="flex flex-col gap-[54px] px-[150px] pt-[55px]">
      <Header />
      <div className="px-[75px] flex justify-between items-center">
        <div className="flex flex-col gap-[24px] text-center">
          <h4 className="font-medium text-[30px] leading-[37.5px] text-white">
            Introducing Abstract <br />
            App landing page.
          </h4>
          <p className="font-light text-white text-[20px] leading-[31px]">
            A perfect landing page to showcase <br />
            your new App.
          </p>
        </div>
        <img src={mobile} className="w-[353px] h-[628px]" alt="mobile"/>
      </div>
    </section>
  )
}