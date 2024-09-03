import { useEffect, useState } from 'react';
import { Button } from './Button';
import { Image } from './Image';

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
    return clearTimeout(timer);
  }, [state]);
  return (
    <>
      <Image source={imgRefs[state]} />
      <div>
        {imgRefs.map((element, index) => (
          <Button
            key={`b${index}`}
            text={String(index)}
            onButtonClick={() => setState(index)}
          />
        ))}
      </div>
      <Button
        text={'Prev'}
        onButtonClick={() =>
          setState((state - 1 + imgRefs.length) % imgRefs.length)
        }
      />
      <Button
        text={'Next'}
        onButtonClick={() => setState((state + 1) % imgRefs.length)}
      />
    </>
  );
}
