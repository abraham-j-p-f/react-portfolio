import trivia from "../assets/trivia.png";
import netready from "../assets/netready.png";
import kick from "../assets/kick.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const works = [
  {
    name: "trivia",
    url: "https://trivia-crt.netlify.app/",
    img: trivia,
  },
  {
    name: "netready",
    url: "https://netready.vercel.app/",
    img: netready,
  },
  {
    name: "Kick",
    url: "https://kick-omega.vercel.app/",
    img: kick,
  },
];

export const ProjectCard = ({ path, url, img }: any) => {
  return (
    <Link to={path}>
      <div className="hover:scale-105 transition-all rounded-xl duration-300 overflow-hidden">
        <div className="w-full aspect-video relative">
          <div className="w-full h-full">
            <img src={img} alt={path} />
          </div>
          <div className="w-full absolute bottom-0 p-4 flex items-center justify-between">
            <div className="bg-neutral-900 py-2 px-4 rounded-lg">
              <h1 className="text-t_white font-litia text-2xl uppercase">
                {path}
              </h1>
            </div>
            {/* <a target={"_blank"} href="https://trivia-crt.netlify.app/">
              <FontAwesomeIcon
                className="text-t_white-light text-3xl hover:text-t_white-dark"
                icon={faArrowUpRightFromSquare}
              />
            </a> */}
          </div>
        </div>
      </div>
    </Link>
  );
};

export const Projects = () => {
  return (
    <div className="py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {works.map(({ name, url, img }) => (
        <ProjectCard path={name} url={url} img={img} />
      ))}
    </div>
  );
};
