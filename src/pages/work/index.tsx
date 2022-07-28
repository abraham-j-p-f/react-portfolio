import { Projects } from './components/List';
import { Outlet } from 'react-router-dom';

export default function Work() {
  return (
    <div className="w-full bg-t_tred flex justify-center relative min-h-screen py-8">
      <div className="container py-8">
        <div className="flex justify-center">
          <h1 className="text-t_white font-litia text-5xl sm:text-7xl lg:text-8xl uppercase text-center">
            Explore my work and projects!
          </h1>
        </div>
        <Outlet/>
      </div>
    </div>
  );
}
