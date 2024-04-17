import logoPurple from '../assets/logo-purple.svg';
import google from '../assets/google.png';
import apple from '../assets/apple.png';
import iconLanguage from '../assets/iconoir_language.svg';
import { FooterNav } from '../components/FooterNav/FooterNav';

export const Footer = () => {
  return (
    <footer className="flex gap-[60px] pl-[145px] pr-[84px] pt-[60px] pb-[102px] items-start">
      <div className="flex gap-[290px]">
        <div className="flex flex-col gap-[55px]">
          <div className="flex flex-col gap-[50px]">
            <img src={logoPurple} alt="logo" width={35} height={23} />
            <div className="flex gap-[12px]">
              <img src={google} alt="google" width={142} height={42} />
              <img src={apple} alt="apple" width={142} height={42} />
            </div>
          </div>
          <p className="font-medium text-[15px] leading-[18.75px] text-[#537190]">
            2018 © Copyrights, All rights reserved.
          </p>
        </div>
        <FooterNav />
      </div>
      <div className="flex gap-[9px] items-center">
        <img src={iconLanguage} width={15} height={15} alt="icon-language" />
        <div className="flex gap-[8px]">
          <p className="flex items-center font-medium text-[#537190] text-[16px] leading-[20px]
            after:flex after:content-[''] after:w-[24px] after:h-[19px] after:bg-arrow-down
          ">
            English
          </p>
        </div>
      </div>
    </footer>
  )
}