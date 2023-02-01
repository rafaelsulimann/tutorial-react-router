import { Link } from "react-router-dom";
import Header from "../../components/Header";
import { getProducts } from "../../data";
import "./styles.scss";

export default function Produtos() {

    let products = getProducts();
  return (
    <div style={{ display: "flex" }}>
    <nav
      style={{
        borderRight: "solid 1px",
        padding: "1rem",
      }}
    >
      {products.map((products) => (
        <Link
          style={{ display: "block", margin: "1rem 0" }}
          to={`/produtos/${products.number}`}
          key={products.number}
        >
          {products.name}
        </Link>
      ))}
    </nav>
  </div>
  );
}
