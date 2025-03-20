import { useParams } from 'react-router-dom';

export default function ProductDetails() {
  const { productId } = useParams();
  return <div>Now showing product with id - {productId}</div>;
}
