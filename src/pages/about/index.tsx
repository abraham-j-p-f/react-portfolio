import Abraham from "../../assets/images/Abraham.png";

export default function About() {
  const age = new Date().getFullYear() - 2002
  return (
    <div className="bg-t_yellow  w-full overflow-hidden relative flex justify-center">
      <div className="min-h-screen container px-4">
        <div className="w-full h-full flex sm:justify-start justify-center relative px-3 sm:px-6 pb-8 pt-20 sm:pt-32">
          <div className="w-full sm:w-3/4 lg:w-2/4 z-30">
            <div className="bg-t_yellow">
            <h1 className="font-litia text-t_blue-light text-center sm:text-left text-4xl sm:text-5xl lg:text-7xl mb-4">
              Who the <span className="text-t_tred">hell</span> is Abraham?
            </h1>
            <p className="text-t_blue text-md sm:text-xl lg:text-2xl text-justify">
              Abraham is a {age} year old programmer who is constantly growing,
              learning new things and looking to participate in new projects.
              Abraham's greatest passions are programming and designing unique
              UI interfaces.
            </p>
            </div>
          </div>
          <div className="absolute 2xl:w-[750px] xl:w-[650px] lg:w-[550px] md:w-[900px] sm:w-[700px] w-[500px] -bottom-[380px] -right-6 sm:-bottom-[520px] sm:right-10 md:-bottom-[660px] md:right-10 lg:right-8 lg:bottom-8">
          <img
            className="scale-x-[-1]"
            src={Abraham}
            alt="Me :)"
          />
          </div>
        </div>
        {/* <div className="w-full h-3/4 flex items-center sm:justify-end justify-center">
          <div className="max-w-sm lg:max-w-lg sm:text-right text-center">
            <h1 className="font-litia text-t_blue-light text-5xl lg:text-7xl mb-4">
              Who the <span className="text-t_tred">hell</span> is Abraham?
            </h1>
            <p className="text-t_blue text-xl lg:text-2xl">
              Abraham is a 20 year old programmer who is constantly growing,
              learning new things and looking to participate in new projects.
              Abraham's greatest passions are programming and designing unique
              UI interfaces.
            </p>
          </div>
        </div>
        <div className="absolute aspect-square w-[620px] bottom-0">
          <img
            className="absolute w-[540px]  sm:-left-10 -bottom-[400px] sm:w-3/4 sm:bottom-0 lg:left-1/4"
            src={Abraham}
            alt="Me :)"
          />
        </div> */}
      </div>
    </div>
  );
}
