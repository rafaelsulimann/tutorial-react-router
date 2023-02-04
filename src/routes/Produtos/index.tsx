import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import Header from "../../components/Header";
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
        <NavLink
          className={({ isActive}) => (isActive ? "nav-link active" : "nav-link non-active")}
          to={`/produtos/${products.number}`}
          key={products.number}
        >
          {products.name}
        </NavLink>
      ))}
    </nav>
    <Outlet />
  </div>
  );
}
