import kick from "../assets/kick.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Tittles = ({ children, className }: any) => {
  return (
    <div>
      <h1 className={`uppercase font-litia text-left my-4 ${className}`}>
        {children}
      </h1>
    </div>
  );
};

const Paragraph = ({ children }: any) => {
  return (
    <div className="my-4">
      <p className="text-justify">{children}</p>
    </div>
  );
};

const Image = ({ img, alt, url }: any) => {
  return (
    <div className="overflow-hidden rounded-lg w-full aspect-video relative">
      <a href={url} target={"_blank"}>
        <img src={img} alt={alt} />
      </a>
    </div>
  );
};

export default function Kick() {
  const navigate = useNavigate();

  return (
    <div className="p-4 flex justify-center container text-t_white">
      <div className="w-full sm:w-3/4 lg:w-2/4 bg-t_tred-dark p-4 rounded-lg">
        <div className="flex justify-between items-center">
          <div>
            <button
              className="bg-t_white hover:bg-t_white-dark transition-all w-12 aspect-square rounded-full"
              onClick={() => navigate(-1)}
            >
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="text-xl text-t_tred-dark"
              />
            </button>
          </div>
          <Tittles className="text-5xl">Kick</Tittles>
        </div>
        <Image img={kick} alt="IDK" url="https://kick-omega.vercel.app/" />
        <Tittles className="text-3xl">What is?</Tittles>
        <Paragraph>
          Kick is a non-profit project inspired by the{" "}
          <a href="https://kick.com/" target="_blank" className="font-bold">
            Kick
          </a>{" "}
          Streaming page. I wanted to redesign their website since I think it
          looked a bit flat and static. Remember to support the repository here.
        </Paragraph>
      </div>
    </div>
  );
}
