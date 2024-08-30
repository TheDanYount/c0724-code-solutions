type Props = {
  quotes: string[];
  searchTerm: string;
};

export function List({ quotes, searchTerm }: Props) {
  const matchedStrings = quotes.filter(
    (str) => !!str.toLowerCase().match(searchTerm.toLowerCase())
  );
  return (
    <>
      {matchedStrings.map((str) => (
        <p key={str}>{str}</p>
      ))}{' '}
    </>
  );
}
