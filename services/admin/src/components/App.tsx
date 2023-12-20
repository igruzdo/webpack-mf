import { useState } from "react";
import classes from './App.module.scss';
import { Link, Outlet } from "react-router-dom";
import AlienPng from '@/assets/alien.png';
import TigerJpeg from '@/assets/tiger.jpeg';
import PicSvg from '@/assets/pic.svg';

export const App = () => {
  const [count, setCount] = useState<number>(0);
  const increment = () => {
    setCount((prev: number) => prev + 1)
  };

  return (
    <div>
      <h1>ADMIN MODULE</h1>
      <Outlet/>
    </div>
  );
};