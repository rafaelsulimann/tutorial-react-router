import { useParams } from "react-router-dom";
import { getProduct } from "../../../data";

export default function Produto() {
    const params = useParams();
    const product = getProduct(Number(params.productId));
    return (
        <div className="container product-container">
            <h2>Produto {product?.name}: ID {params.productId}</h2>
            <p>Total: {product?.amount}</p>
        </div>
    );
}