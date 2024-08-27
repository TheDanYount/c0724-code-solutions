import { Header } from './Header.tsx';
import { ImageContainer } from './ImageContainer.tsx';
import { ImageCaption } from './ImageCaption.tsx';
import { ImageDescription } from './ImageDescription.tsx';
import { ButtonContainer } from './ButtonContainer.tsx';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <ImageContainer />
      <ImageCaption />
      <ImageDescription />
      <ButtonContainer />
    </>
  );
}

export default App;
