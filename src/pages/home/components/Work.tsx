import wallpaper from './Work/assets/wallpaper.jpg'

const ProjectCard = () => {
  return (
    <div className="bg-lime-600 hover:cursor-pointer hover hover:scale-105 transition-all rounded-xl duration-300 overflow-hidden">
      <div className="w-full aspect-video relative">
        <div className="w-full h-full">
            <img src={ wallpaper } alt="" />
        </div>
        <div className="w-full absolute bottom-0 h-full p-4 flex items-end">
          <div className='bg-neutral-900 py-2 px-4 rounded-lg'>
          <h1 className="text-t_white font-litia text-2xl">IDK</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Work() {
  return (
    <div className="w-full bg-t_tred flex justify-center relative">
      <div className="container py-8">
        <div className="flex justify-center">
          <h1 className="text-t_white font-litia text-5xl sm:text-7xl lg:text-8xl uppercase text-center">
            Explore my work and projects!
          </h1>
        </div>
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
        </div>
      </div>
    </div>
  );
}
