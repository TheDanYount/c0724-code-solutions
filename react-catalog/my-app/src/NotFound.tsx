import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <p>
      Gremlins and goblins have attacked and ruined the site! ...Or maybe I'm
      just not a perfect programmer. Sorry about that. Click{' '}
      <Link to="/" className="text-blue-600 underline">
        here
      </Link>{' '}
      to return to the catalog page.
    </p>
  );
}
