import { lazy, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './Layout/Layout';
import { useDispatch } from 'react-redux';
import { addBaseCurrency } from 'redux/currencySlice';
import { fetchBaseCurrency } from 'redux/operations';
const HomePage = lazy(() => import('../page/HomePage/HomePage'));
const RatesPage = lazy(() => import('../page/RatesPage/RatesPage'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    function success(pos) {
      const crd = pos.coords;

      dispatch(fetchBaseCurrency(crd));
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
      dispatch(addBaseCurrency('USD'));
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="rates" element={<RatesPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </div>
  );
};
