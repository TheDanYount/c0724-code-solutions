import { Link } from 'react-router-dom';

export type MenuItem = {
  name: string;
  iconUrl: string;
  path: string;
};

type Props = {
  menuItem: MenuItem;
  isOpen: boolean;
};
export function MenuLink({ menuItem, isOpen }: Props) {
  return (
    <li key={menuItem.name} className="w-full">
      <Link
        to={menuItem.path}
        className="block text-black hover:text-black p-4 hover:bg-[#E1E1E2] h-full w-full">
        <img src={menuItem.iconUrl} className="w-4 h-auto inline" />
        {isOpen && menuItem.name}
      </Link>
    </li>
  );
}
