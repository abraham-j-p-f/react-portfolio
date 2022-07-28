import React, { useRef, useEffect } from "react";
import {
  Engine,
  Render,
  Composite,
  Bodies,
  Runner,
  Mouse,
  MouseConstraint,
} from "matter-js";

export default function Welcome() {
  const useEngine = useRef(Engine.create());
  const useScenario = useRef();

  useEffect(() => {
    const engine = useEngine.current;
    const scenario = useScenario.current;
    const world = engine.world;
    const height = scenario.offsetHeight;
    const width = scenario.offsetWidth;

    const render = Render.create({
      element: scenario,
      engine,
      options: {
        height,
        width,
        wireframes: false,
        background: "transparent",
      },
    });

    engine.gravity.scale = 0;

    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });

    mouseConstraint.mouse.element.removeEventListener(
      "mousewheel",
      mouseConstraint.mouse.mousewheel
    );
    mouseConstraint.mouse.element.removeEventListener(
      "DOMMouseScroll",
      mouseConstraint.mouse.mousewheel
    );

    const square = Bodies.rectangle(100, 100, width * 0.1, width * 0.1, {
      render: { fillStyle: "#FFD585" },
    });
    const top = Bodies.rectangle(width / 2, -5, width, 10, { isStatic: true });
    const left = Bodies.rectangle(-5, height / 2, 10, height, {
      isStatic: true,
    });
    const right = Bodies.rectangle(width + 5, height / 2, 10, height, {
      isStatic: true,
    });
    const bottom = Bodies.rectangle(width / 2, height + 5, width, 10, {
      isStatic: true,
    });

    Composite.add(world, [square, top, bottom, left, right, mouseConstraint]);

    const runner = Runner.create();
    Runner.run(runner, engine);
    Render.run(render);

    return () => {
      Engine.clear(engine);
    };
  }, []);

  const message = "Welcome natizen!";
  return (
    <div className="w-full h-screen flex flex-col lg:flex-row relative">
      <div className="flex flex-wrap space-x-8 w-full h-2/4 lg:w-2/4 lg:h-full bg-gradient-to-r from-t_yellow-dark to-t_yellow-light p-4 content-center justify-center">
        {message.split(" ").map((word) => {
          return (
            <div className="text-6xl font-litia sm:text-8xl text-t_blue animate-bounce duration-1000">
              {word.split("").map((letter) => (
                <div className="relative inline-flex hover:scale-125 transition-all">
                  <span className="uppercase text-t_orange">{letter}</span>
                  <span className="absolute uppercase -translate-x-1 -translate-y-1">
                    {letter}
                  </span>
                </div>
              ))}
            </div>
          );
        })}
      </div>
      <div
        ref={useScenario}
        className="flex w-full h-2/4 lg:w-2/4 lg:h-full bg-gradient-to-tl from-t_blue-dark to-t_blue overflow-hidden"
      ></div>
      <div className="w-full absolute bottom-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250" className="fill-t_yellow">
          <path
            fill-opacity="1"
            d="M0,128L96,32L192,224L288,32L384,160L480,64L576,160L672,64L768,192L864,224L960,128L1056,160L1152,256L1248,224L1344,32L1440,64L1440,320L1344,320L1248,320L1152,320L1056,320L960,320L864,320L768,320L672,320L576,320L480,320L384,320L288,320L192,320L96,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
