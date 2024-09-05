import { Link, useNavigate, useParams } from 'react-router-dom';
import { readProduct } from './read';
import { Product } from './data';
import { useEffect, useState } from 'react';

export function Details() {
  const [product, setProduct] = useState<Product>();
  const { productId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    async function productCall() {
      try {
        const currentProduct = await readProduct(Number(productId));
        setProduct(currentProduct);
      } catch (error) {
        console.error(error);
      }
    }
    productCall();
  }, [productId]);
  return (
    <>
      <div className="flex flex-col border-2 rounded-b-lg p-4">
        <Link to="/" className="self-start">
          {' '}
          {'< Back to catalog'}{' '}
        </Link>
        <div className="flex">
          <div className="flex justify-center items-center w-[316px] h-[316px]">
            <img
              src={product?.imageUrl}
              className="max-w-[316px] max-h-[316px]"></img>
          </div>
          <div className="m-4">
            <h3 className="text-[22px] font-semibold">{product?.name}</h3>
            <h6 className="text-gray-400 text-[16px] font-semibold">{`$${String(
              product?.price
            ).slice(0, -2)}.${String(product?.price).slice(-2)}`}</h6>
            <p className="text-[12px]">{product?.shortDescription}</p>
          </div>
        </div>
        <p>{product?.longDescription}</p>
      </div>
      <button
        className="p-2 bg-[#F7F5F8] hover:outline hover:bg-[#E9E8EA] outline-2 rounded-lg"
        onClick={() => {
          alert(`Added ${product?.name} to cart`);
          navigate('/');
        }}>
        Add to Cart
      </button>
    </>
  );
}
