import { useLocation, useNavigate, useParams } from "react-router-dom";
import { deleteProduct, getProduct } from "../../../data";

export default function Produto() {
  const params = useParams();
  const product = getProduct(Number(params.productId));
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="container product-container">
      <h2>
        Produto {product?.name}: ID {params.productId}
      </h2>
      <p>Total: {product?.amount}</p>
      <p>
        <button
          onClick={() => {
            deleteProduct(product?.number);
            navigate("/produtos" + location.search);
          }}
        >
          Delete
        </button>
      </p>
    </div>
  );
}
