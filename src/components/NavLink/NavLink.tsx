type Props = {
  children: React.ReactNode;
}
export const NavLink = ({ children }: Props) => {
  return (
    <a href="#" className="text-[16px] leading-5 text-white">{children}</a>
  )
}