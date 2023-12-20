import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { aboutRoutes } from '@packages/shared/src/routes/admin';
import { shopRoutesShared } from '@packages/shared/src/routes/shop';

export const App = () => {
  const [count, setCount] = useState<number>(0);
  const increment = () => {
    setCount((prev: number) => prev + 1)
  };

  return (
    <div data-testid={'App.DataTestId'}>
      <h1>PAGE</h1>
      <Link to={aboutRoutes.about}>ADMIN</Link>
      <br/>
      <Link to={shopRoutesShared.main}>MAIN</Link>
      <Outlet/>
    </div>
  );
};