import Abraham from "../../assets/images/Abraham.png";

export default function About() {
  return (
    <div className="bg-t_yellow h-screen w-full overflow-hidden relative flex justify-center">
      <div className="h-full container px-4">
        <div className="w-full h-3/4 flex items-center sm:justify-end justify-center">
          <div className="max-w-sm lg:max-w-lg sm:text-right text-center">
            <h1 className="font-litia text-t_blue-light text-5xl lg:text-7xl mb-4">
              Who the <span className="text-t_tred">hell</span> is Abraham?
            </h1>
            <p className="text-t_blue text-xl lg:text-2xl">
              Abraham is just a guy looking to make unforgettable websites. He
              has a cat, a career to finish and a great desire to learn new
              things.
            </p>
          </div>
        </div>
        <div className="absolute aspect-square w-[620px] bottom-0">
          <img
            className="absolute w-[540px]  sm:-left-10 -bottom-[400px] sm:w-3/4 sm:bottom-0 lg:left-1/4"
            src={Abraham}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
