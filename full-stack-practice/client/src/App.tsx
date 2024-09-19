import { Route, Routes } from 'react-router-dom';
import { Header } from './Header';
import { About } from './About';
import { NotFound } from './NotFound';
import { Catalog } from './Catalog';
import { Details } from './Details';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Catalog />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="details/:productId" element={<Details />}></Route>
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;
