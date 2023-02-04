import { Outlet, useSearchParams } from "react-router-dom";
import QueryLink from "../../components/QueryLink";
import { getProducts } from "../../data";
import "./styles.scss";

export default function Produtos() {

    let products = getProducts();
    let [searchParams, setSearchParams] = useSearchParams();
  return (
    <div style={{ display: "flex" }}>
    <nav
      style={{
        borderRight: "solid 1px",
        padding: "1rem",
      }}
    >
      <input type="text" value={searchParams.get("name") || ""} onChange= {(event) => {
        let name = event.target.value;
        if(name){
          setSearchParams({ name })
        }else {
          setSearchParams({})
        }
      }} />
      {products
      .filter((product) => {
        let name = searchParams.get("name");
        if(!name){
          return true;
        }
        let productName = product.name.toLowerCase();
        return productName.startsWith(name.toLowerCase());
      })
      .map((products) => (
        <QueryLink
          className={({ isActive}: any) => (isActive ? "nav-link active" : "nav-link non-active")}
          to={`/produtos/${products.number}`}
          key={products.number}
        >
          {products.name}
        </QueryLink>
      ))}
    </nav>
    <Outlet />
  </div>
  );
}
