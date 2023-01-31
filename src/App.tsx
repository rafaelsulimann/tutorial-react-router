import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Home from "./routes/Home";

export default function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <section id="componente-renderizado">
          <Outlet />
        </section>
      </main>
    </>
  );
}
