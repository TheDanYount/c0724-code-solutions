import { Link, Outlet } from 'react-router-dom';

export function Header() {
  return (
    <>
      <div className="pt-2 bg-[#11478E]">
        <ul className="flex p-4 gap-4 bg-[#2C3138] text-white">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/">Catalog</Link>
          </li>
        </ul>
      </div>
      <div className="mx-8">
        <Outlet />
      </div>
    </>
  );
}
