import { Link } from 'react-router-dom';
import './styles.scss';

export default function Header() {
    return (
        <div className="container header-container">
            <div className="header-title">
                <h1>Sulimann</h1>
            </div>
            <div className='header-nav'>
                <Link className="links" to="/produtos">Produtos</Link>
                <Link className="links" to="/categorias">Categorias</Link>
            </div>
        </div>
    );
}