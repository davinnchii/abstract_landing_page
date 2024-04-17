import { Logo } from '../Logo/Logo';
import { NavLink } from '../NavLink/NavLink';

export const Header = () => {
  return (
    <header className="flex justify-between w-full items-center">
      <Logo isPurple={false} />
      <div className="flex gap-[75px] items-center">
        <nav className="flex gap-[35px]">
          <NavLink>About Us</NavLink>
          <NavLink>Features</NavLink>
          <NavLink>Blog</NavLink>
          <NavLink>Contacts</NavLink>
        </nav>
        <button
          type="button"
          className="rounded-2xl bg-[#6C26B1] text-white text-[16px] leading-5 px-[18px] py-[6px]"
        >Download App</button>
      </div>
    </header>
  );
}