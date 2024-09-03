import { useEffect, useState } from 'react';
import { Button } from './Button';
import { Image } from './Image';
import { PrevButton } from './PrevButton';
import { NextButton } from './NextButton';

type Prop = {
  imgRefs: string[];
};

export function Carousel({ imgRefs }: Prop) {
  const [state, setState] = useState(0);
  const [timer, setTimer] = useState<NodeJS.Timeout>();
  useEffect(() => {
    setTimer(
      setTimeout(() => {
        setState((state + 1) % imgRefs.length);
      }, 3000)
    );
    return () => clearTimeout(timer);
  }, [state]);
  return (
    <>
      <div className="flex justify-between items-center w-80">
        <PrevButton
          onButtonClick={() =>
            setState((state - 1 + imgRefs.length) % imgRefs.length)
          }
        />
        <Image source={imgRefs[state]} />
        <NextButton
          onButtonClick={() => setState((state + 1) % imgRefs.length)}
        />
      </div>
      <div className="flex justify-center">
        {imgRefs.map((element, index) => (
          <Button
            key={`b${index}`}
            onButtonClick={() => setState(index)}
            stateMatch={state === index}
          />
        ))}
      </div>
    </>
  );
}
