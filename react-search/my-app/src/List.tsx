type Props = {
  quotes: string[];
  searchTerm: string;
};

export function List({ quotes, searchTerm }: Props) {
  const pElements = [];
  for (let i = 0; i < quotes.length; i++) {
    if (quotes[i].toLowerCase().match(searchTerm.toLowerCase())) {
      pElements.push(<p key={i}>{quotes[i]}</p>);
    }
  }
  if (pElements.length === 0) {
    pElements.push(<p>No items match the filter.</p>);
  }
  return <>{pElements} </>;
}
