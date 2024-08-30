import { FaMagnifyingGlass } from 'react-icons/fa6';

type Prop = {
  searchTerm: string;
  onInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function SearchBar({ searchTerm, onInput }: Prop) {
  return (
    <div className="pseudo-search-bar">
      <FaMagnifyingGlass />
      <input onChange={onInput} value={searchTerm} />
    </div>
  );
}
