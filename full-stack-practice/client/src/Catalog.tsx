import { useEffect, useState } from 'react';
import { type Product } from './data';
import { Link } from 'react-router-dom';
import { toDollars } from './to-dollars';

export function Catalog() {
  const [products, setProducts] = useState<Product[]>();
  useEffect(() => {
    async function productCall() {
      try {
        const catalog = await fetch('/api/products');
        if (!catalog.ok) throw new Error('catalog fetch failed');
        const formattedResult = (await catalog.json()) as Product[];
        setProducts(formattedResult);
      } catch (error) {
        console.error(error);
        alert('Error. Click "OK" to reload catalog');
        setProducts(undefined); // this will force a re-render
      }
    }
    productCall();
  }, []);
  return (
    <>
      {products ? (
        <>
          <h1 className="border-b-2 w-full text-[40px] font-semibold">
            Catalog
          </h1>
          <div className="flex flex-wrap">
            {products?.map((product) => (
              <ItemCard key={product.productId} product={product} />
            ))}
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

type ItemCardProp = {
  product: Product;
};

function ItemCard({ product }: ItemCardProp) {
  return (
    <Link
      to={`details/${product.productId}`}
      className="m-4 w-[240px] h-[380px] border-2 rounded-lg">
      <div className="w-[236px] h-[236px] flex justify-center items-center">
        <img
          src={product.imageUrl}
          className="max-w-[236px] max-h-[236px]"></img>
      </div>
      <div className="m-4">
        <h3 className="text-[14px] font-semibold">{product.name}</h3>
        <h6 className="text-gray-400 text-[12px] font-semibold">
          {toDollars(product.price)}
        </h6>
        <p className="text-[12px]">{product.shortDescription}</p>
      </div>
    </Link>
  );
}
