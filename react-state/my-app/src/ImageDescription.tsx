import { useState } from 'react';

type Props = {
  imageDescs: string[];
};

export function ImageDescription({ imageDescs }: Props) {
  const [state, setState] = useState(0);
  return (
    <div>
      <p onClick={() => setState(state + 1)}>{imageDescs[state % 3]}</p>
    </div>
  );
}
