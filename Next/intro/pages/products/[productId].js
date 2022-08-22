import { useRouter } from "next/router";

function Product() {
  const router = useRouter();

  return (
    <div>
      <h1>one product {router.query.productId}</h1>
    </div>
  );
}

export default Product;
