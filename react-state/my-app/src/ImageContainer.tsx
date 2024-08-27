import './ImageContainer.css';
import { useState } from 'react';

type Props = {
  imageSrcs: string[];
};

export function ImageContainer({ imageSrcs }: Props) {
  const [state, setState] = useState(0);
  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img
          className="image-fill"
          src={imageSrcs[state % 3]}
          alt="space-image"
          onClick={() => setState(state + 1)}
        />
      </div>
    </div>
  );
}
