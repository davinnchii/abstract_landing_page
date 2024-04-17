import logoDefault from '../../assets/logo-default.svg';
import logoPurple from '../../assets/logo-purple.svg';

type Props = {
  isPurple: boolean;
}

export const Logo: React.FC<Props> = ({ isPurple }) => {
  return (
    <div className="w-[24px] h-[16px]">
      <img src={isPurple ? logoPurple : logoDefault} alt="page logo"/>
    </div>
  )
}