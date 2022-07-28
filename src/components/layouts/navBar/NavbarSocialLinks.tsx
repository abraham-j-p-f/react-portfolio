import { faBars, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/abraham-p%C3%A9rez-ferrer-02814a1b7/",
  },
  {
    name: "GitHub",
    icon: faGithub,
    url: "https://github.com/abraham-j-p-f",
  },
  {
    name: "Twitter",
    icon: faTwitter,
    url: "https://twitter.com/_AJPF_",
  },
];

const SocialLink = ({
  icon,
  url,
  title,
}: {
  icon: IconDefinition;
  url: string;
  title: string;
}) => {
  return (
    <a
      className="hover:text-t_blue-light transition-all relative"
      target={"_blank"}
      href={url}
      title={title}
    >
      <FontAwesomeIcon icon={icon} className="text-t_white-dark" />
      <FontAwesomeIcon icon={icon} className="absolute top-0.5 right-0.5" />
    </a>
  );
};

export default function NavbarSocialLinks() {
  return (
    <div className="w-full h-1/12 flex items-center justify-between text-2xl text-t_blue">
      {socialLinks.map(({ name, url, icon }) => (
        <SocialLink icon={icon} url={url} title={name} />
      ))}
    </div>
  );
}
