import { Routes, Route, NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import clsx from 'clsx';
import Home from '/path/Home.jsx';
import About from '/path/About';
import Products from '/path/Products';
import NotFound from '/path/NotFound';
import ProductDetails from '/path/ProductDetails';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};
const { genreId, authorName } = useParams();
console.log(genreId, authorName);

export default function App() {
  return (
    <div>
      <nav className={css.nav}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/about" className={buildLinkClass}>
          About
        </NavLink>
        <NavLink to="/products" className={buildLinkClass}>
          Products
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
