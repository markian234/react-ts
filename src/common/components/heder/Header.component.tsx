import { NavMenu } from "./Navmenu";
export const Header = () => {
  return (
    <header className='flex items-center p-5'>
      <div>
        <a
          className='text-xl font-semibold'
          href='/'
        >
          Aviation-info
        </a>
      </div>
      <NavMenu />
    </header>
  );
};
