import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { NavLink } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to='/rates'>RatesPage</NavLink>
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
