import { Header } from './Header';
import { ImageContainer } from './ImageContainer';
import { ImageCaption } from './ImageCaption';
import { ImageDescription } from './ImageDescription';
import { ButtonContainer } from './ButtonContainer';
import './App.css';

const headerText = 'React Image Bank';
const imageSrcs = [
  '/starry-sky.jpeg',
  '/supernova.jpg',
  '/planetary-rings.jpg',
];
const imageCaps = [
  'A Beautiful Image of Space',
  "An image of a sun's death throes",
  'An image of planetary rings',
];
const imageDescs = [
  `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam incidunt sit
  dolorum accusantium sapiente reiciendis maxime dolores ullam delectus, commodi
  placeat eveniet, quam voluptates facere et magnam architecto quaerat velit
  voluptas rerum quos asperiores quis in ! Nemo aut aliquam quas dolore quaerat,
  error numquam odio modi eos vero. Modi nisi eos autem ? Iusto hic impedit
  aspernatur labore quos nesciunt ? Ad dolore pariatur aperiam nemo, maiores
  laboriosam quam quod nisi ipsum, dicta sunt laborum similique repellat`,
  `Turning and turning in the widening gyre
The falcon cannot hear the falconer;
Things fall apart; the centre cannot hold;
Mere anarchy is loosed upon the world,
The blood-dimmed tide is loosed, and everywhere
The ceremony of innocence is drowned;
The best lack all conviction, while the worst
Are full of passionate intensity.

Surely some revelation is at hand;
Surely the Second Coming is at hand.
The Second Coming! Hardly are those words out
When a vast image out of Spiritus Mundi
Troubles my sight: somewhere in sands of the desert
A shape with lion body and the head of a man,
A gaze blank and pitiless as the sun,
Is moving its slow thighs, while all about it
Reel shadows of the indignant desert birds.
The darkness drops again; but now I know
That twenty centuries of stony sleep
Were vexed to nightmare by a rocking cradle,
And what rough beast, its hour come round at last,
Slouches towards Bethlehem to be born?
`,
  `"I met a traveller from an antique land,
Who said—“Two vast and trunkless legs of stone
Stand in the desert. . . . Near them, on the sand,
Half sunk a shattered visage lies, whose frown,
And wrinkled lip, and sneer of cold command,
Tell that its sculptor well those passions read
Which yet survive, stamped on these lifeless things,
The hand that mocked them, and the heart that fed;
And on the pedestal, these words appear:
My name is Ozymandias, King of Kings;
Look on my Works, ye Mighty, and despair!
Nothing beside remains. Round the decay
Of that colossal Wreck, boundless and bare
The lone and level sands stretch far away."`,
];
const buttonText = 'Click for Next Image';

export default function App() {
  return (
    <>
      <Header headerText={headerText} />
      <ImageContainer imageSrcs={imageSrcs} />
      <ImageCaption imageCaps={imageCaps} />
      <ImageDescription imageDescs={imageDescs} />
      <ButtonContainer buttonText={buttonText} />
    </>
  );
}
