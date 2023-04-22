import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectBaseCurrency } from 'redux/selectors';

const Layout = () => {
  const baseCurrency = useSelector(selectBaseCurrency);
  return (
    <>
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to='/rates'>RatesPage</NavLink>
        <p>Base currency: {baseCurrency}</p>
      </header>
      <main>
        <Suspense fallback={<p>...Loading</p>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
