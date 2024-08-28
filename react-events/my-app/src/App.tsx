import { Header } from './Header';
import { ImageContainer } from './ImageContainer';
import { ImageCaption } from './ImageCaption';
import { ImageDescription } from './ImageDescription';
import { ButtonContainer } from './ButtonContainer';
import './App.css';
import { useState } from 'react';

const headerText = 'React Image Bank';
const imageSrcs = ['/starry-sky.jpeg', '/cool-kitty.jpg', '/cool-car.jpg'];
const imageCaps = ['A Beautiful Image of Space', 'A Cool Cat', 'A Cool Car'];
const imageDescs = [
  'This is a wonderful sky full of stars!',
  'This is a picture of a very cool cat!',
  'This is a picture of a very cool car!',
];
const buttonLabel = 'Click for Next Image';

export function App() {
  const [state, setState] = useState(0);
  function handleButtonClick() {
    setState((state + 1) % imageSrcs.length);
  }
  return (
    <>
      <Header text={headerText} />
      <ImageContainer src={imageSrcs[state]} />
      <ImageCaption caption={imageCaps[state]} />
      <ImageDescription desc={imageDescs[state]} />
      <ButtonContainer onButtonClick={handleButtonClick} label={buttonLabel} />
    </>
  );
}
