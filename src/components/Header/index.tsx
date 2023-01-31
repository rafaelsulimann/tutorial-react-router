import { Link } from 'react-router-dom';
import './styles.scss';

export default function Header() {
    return (
        <div className="container header-container">
            <div className="header-title">
                <Link className="links header-title" to="/">Sulimann</Link>
            </div>
            <div className='header-nav'>
                <Link className="links" to="/produtos">Produtos</Link>
                <Link className="links" to="/categorias">Categorias</Link>
            </div>
        </div>
    );
}