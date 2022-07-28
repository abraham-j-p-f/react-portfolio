import trivia from "../assets/trivia.png";
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

export default function Trivia() {
  const navigate = useNavigate();

  return (
    <div className="p-4 flex justify-center container text-t_white">
      <div className="w-full sm:w-3/4 lg:w-2/4 bg-t_tred-dark p-4 rounded-lg">
        <div className="flex justify-between items-center">
          <div>
            <button className="bg-t_white hover:bg-t_white-dark transition-all w-12 aspect-square rounded-full" onClick={() => navigate(-1)}>
              <FontAwesomeIcon icon={faArrowLeft} className="text-xl text-t_tred-dark" />
            </button>
          </div>
          <Tittles className="text-5xl">Trivia</Tittles>
        </div>
        <Image img={trivia} alt="IDK" url="https://trivia-crt.netlify.app/" />
        <Tittles className="text-3xl">What is?</Tittles>
        <Paragraph>
          Trivia app is a mini game of questions and answers about different
          topics. Select how many questions you want, how difficult it is, write
          your name and start playing!
        </Paragraph>
        <Paragraph>
          Once the game ends you will be able to see your final results, how
          many you got right and how many you failed.
        </Paragraph>
      </div>
    </div>
  );
}
