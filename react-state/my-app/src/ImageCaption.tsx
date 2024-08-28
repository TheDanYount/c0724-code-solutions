import { useState } from 'react';

type Props = {
  imageCaps: string[];
};

export function ImageCaption({ imageCaps }: Props) {
  const [state, setState] = useState(0);
  return (
    <div>
      <h3 onClick={() => setState(state + 1)}>{imageCaps[state % 3]}</h3>
    </div>
  );
}
