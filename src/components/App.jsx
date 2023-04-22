import { lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./Layout/Layout";
const HomePage = lazy(()=> import('../page/HomePage/HomePage'));
const RatesPage = lazy(()=> import('../page/RatesPage/RatesPage'));

export const App = () => {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<HomePage/>}/>
          <Route path='rates' element={<RatesPage/>}/>
          <Route path='*' element={<Navigate to='/'/>}/>
        </Route>
      </Routes>
    </div>
  );
};
