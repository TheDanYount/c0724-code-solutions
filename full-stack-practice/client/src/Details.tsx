import { Link, useNavigate, useParams } from 'react-router-dom';
import { Product } from './data';
import { useEffect, useState } from 'react';
import { toDollars } from './to-dollars';

export function Details() {
  const [product, setProduct] = useState<Product>();
  const [isLoading, setIsLoading] = useState(true);
  const { productId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    async function productCall() {
      try {
        const currentProduct = await fetch(`/api/products/${productId}`);
        if (!currentProduct.ok)
          throw new Error(
            `could not fetch product from productId: ${productId}`
          );
        const formattedResult = (await currentProduct.json()) as Product;
        setProduct(formattedResult);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        alert('Error. Click "OK" to return to catalog');
        navigate('/');
      }
    }
    productCall();
  }, [productId, navigate]);

  function handleAddToCart() {
    alert(`Added ${product?.name} to cart`);
    navigate('/');
  }

  return (
    <>
      {!isLoading ? (
        <>
          <div className="flex flex-col border-2 rounded-b-lg p-4">
            <Link to="/" className="self-start">
              &lt; Back to catalog
            </Link>
            <div className="flex">
              <div className="flex justify-center items-center w-[316px] h-[316px]">
                <img
                  src={product.imageUrl}
                  className="max-w-[316px] max-h-[316px]"></img>
              </div>
              <div className="m-4">
                <h3 className="text-[22px] font-semibold">{product.name}</h3>
                <h6 className="text-gray-400 text-[16px] font-semibold">
                  {toDollars(Number(product.price))}
                </h6>
                <p className="text-[12px]">{product.shortDescription}</p>
              </div>
            </div>
            <p>{product.longDescription}</p>
          </div>
          <button
            className="p-2 bg-[#F7F5F8] hover:outline hover:bg-[#E9E8EA] outline-2 rounded-lg"
            onClick={handleAddToCart}>
            Add to Cart
          </button>
        </>
      ) : (
        <p className="p-4">Loading...</p>
      )}
    </>
  );
}
