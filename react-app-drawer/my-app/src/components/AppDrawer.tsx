import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { FaBars } from 'react-icons/fa6';
import { MenuLink } from './MenuLink';

export type MenuItem = {
  name: string;
  iconUrl: string;
  path: string;
};

type Props = {
  menuItems: MenuItem[];
};
export function AppDrawer({ menuItems }: Props) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="flex w-full h-full">
      <nav
        className={`overflow-hidden transition-basis duration-500 ${
          isOpen ? 'basis-[250px] ' : 'basis-[60px]'
        } shadow-[5px_0_5px_#ccc]`}>
        <FaBars
          className="w-7 h-7 my-4 ml-1 mr-7 hover:cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />
        {isOpen && (
          <h2 className="m-2 text-[26px] font-semibold ">Hylian Shopping</h2>
        )}
        <ul>
          {menuItems.map((menu) => (
            <MenuLink key={menu.name} menuItem={menu} isOpen={isOpen} />
          ))}
        </ul>
      </nav>
      <div className="grow pl-4">
        <Outlet />
      </div>
    </div>
  );
}
