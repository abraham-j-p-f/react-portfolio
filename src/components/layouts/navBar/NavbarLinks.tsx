import { Link } from "react-router-dom";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

import {
  faEnvelope,
  faFire,
  faHouse,
  faToolbox,
  faUserAstronaut,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

const navLinks = [
  {
    name: "Home",
    url: "/",
    icon: faHouse,
  },
  {
    name: "Work",
    url: "/work",
    icon: faFire,
  },
  {
    name: "About",
    url: "/about",
    icon: faUserAstronaut,
  },
  {
    name: "Skills",
    url: "/skills",
    icon: faToolbox,
  },
  {
    name: "Contact",
    url: "/contact",
    icon: faEnvelope,
  },
];

const Item = ({
  name,
  url,
  icon,
  closeMenu,
}: {
  name: string;
  url: string;
  icon: IconDefinition;
  closeMenu: any
}) => {
  return (
    <div className="flex overflow-hidden items-center text-t_blue justify-center relative py-2">
      <Link
        className="font-litia text-right uppercase text-lg hover:text-t_blue-light transition-all relative"
        to={url}
        title={name}
        onClick={closeMenu}
      >
        <div>
          <div className="flex justify-center text-t_white-dark">
            <FontAwesomeIcon icon={icon} className="text-2xl text-center" />
          </div>
          <div className="text-t_white-dark">{name}</div>
        </div>
        <div className="absolute top-0 -translate-x-1 -translate-y-1">
          <div className="flex justify-center">
            <FontAwesomeIcon icon={icon} className="text-2xl text-center" />
          </div>
          <div>{name}</div>
        </div>
      </Link>
    </div>
  );
};

export default function NavbarLinks({closeMenu}: any) {
  return (
    <div className="w-full h-11/12 overflow-y-auto flex flex-col justify-center divide-y-2 divide-t_white-dark">
      {navLinks.map(({ name, url, icon }) => (
        <Item name={name} url={url} icon={icon} closeMenu={closeMenu}/>
      ))}
    </div>
  );
}
