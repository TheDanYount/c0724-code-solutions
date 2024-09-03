import './App.css';
import { Carousel } from './Carousel';
const imgRefs = [
  '/images/fushiguro.webp',
  '/images/inumaki.webp',
  '/images/itadori.webp',
  '/images/kugisaki.webp',
  '/images/panda.webp',
  '/images/zen-in.webp',
];

export default function App() {
  return <Carousel imgRefs={imgRefs} />;
}
