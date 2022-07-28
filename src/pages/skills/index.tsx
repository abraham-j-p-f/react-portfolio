import React, { useEffect, useRef } from "react";
import javascript from "./assets/javascript.png";
import typescript from "./assets/typescript.png";

import {
  Engine,
  Render,
  Composite,
  Bodies,
  Runner,
  Mouse,
  MouseConstraint,
  Body,
  Svg,
  Vertices,
} from "matter-js";

function SkillButton({url, className, children}: any) {
  return (
    <a
      target={"_blank"}
      href={ url }
      className={`flex justify-center p-4 rounded-lg uppercase font-litia transition-all ${className}`}
    >
      { children }
    </a>
  );
}

export default function Skills() {
  const mount: any = useRef();
  const useEngine = useRef(Engine.create());
  const svgRef = useRef();

  useEffect(() => {
    const engine = useEngine.current;
    const scenario = mount.current;
    const world = engine.world;
    const height = scenario.clientHeight;
    const width = scenario.clientWidth;

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

    const boxJavascript = Bodies.rectangle(
      width / 2,
      width / 2,
      width * 0.2,
      width * 0.2,
      {
        render: {
          sprite: {
            texture: javascript,
            xScale: width * 0.00019,
            yScale: width * 0.00019,
          },
        },
      }
    );
    const boxTypescript = Bodies.rectangle(
      width / 2,
      width / 2,
      width * 0.2,
      width * 0.2,
      {
        render: {
          sprite: {
            texture: typescript,
            xScale: width * 0.000327,
            yScale: width * 0.000327,
          },
        },
      }
    );
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

    // const svg = Svg.pathToVertices(svgRef.current, 15);
    // const svgFigure = Bodies.fromVertices(10, 10, svg);

    top.frictionAir = 0.01;
    const resize = () => {
      render.bounds.max.x = mount.current.clientWidth;
      render.bounds.max.y = mount.current.clientHeight;
      render.options.width = mount.current.clientWidth;
      render.options.height = mount.current.clientHeight;
      render.canvas.width = mount.current.clientWidth;
      render.canvas.height = mount.current.clientHeight;

      Body.setPosition(bottom, {
        x: mount.current.clientWidth / 2,
        y: mount.current.clientHeight + 5,
      });
      Body.setStatic(bottom, true);

      console.log(right.position.x);
    };
    window.addEventListener("resize", resize);

    Composite.add(world, [
      boxJavascript,
      boxTypescript,
      top,
      bottom,
      left,
      right,
      mouseConstraint,
      Bodies.circle(100, 100, width * 0.05, width * 0.05),
      Bodies.circle(100, 100, width * 0.05, width * 0.05),
      Bodies.circle(100, 100, width * 0.05, width * 0.05),
      Bodies.circle(100, 100, width * 0.05, width * 0.05),
      Bodies.circle(100, 100, width * 0.05, width * 0.05),
      Bodies.circle(100, 100, width * 0.05, width * 0.05),
      Bodies.circle(100, 100, width * 0.05, width * 0.05),
      Bodies.circle(100, 100, width * 0.05, width * 0.05),
      Bodies.circle(100, 100, width * 0.05, width * 0.05),
      Bodies.circle(100, 100, width * 0.05, width * 0.05),
      Bodies.circle(100, 100, width * 0.05, width * 0.05),
      Bodies.circle(100, 100, width * 0.05, width * 0.05),
      Bodies.circle(100, 100, width * 0.05, width * 0.05),
      Bodies.circle(100, 100, width * 0.05, width * 0.05),
      Bodies.circle(100, 100, width * 0.05, width * 0.05),
      Bodies.circle(100, 100, width * 0.05, width * 0.05),
    ]);

    const runner = Runner.create();
    Runner.run(runner, engine);
    Render.run(render);

    return () => {
      Render.stop(render);
      Runner.stop(runner);
      Composite.clear(useEngine.current.world, true);
      Engine.clear(useEngine.current);
      render.canvas.remove();
      render.canvas = null;
      render.context = null;
      render.textures = {};
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="w-full h-screen flex flex-col lg:flex-row">
      <div
        ref={mount}
        className="flex flex-wrap w-full h-2/4 lg:w-2/4 lg:h-full bg-t_orange"
      ></div>
      <div className="text-t_white-light overflow-y-auto flex flex-col content-center lg:justify-center items-center h-2/4 lg:w-2/4 lg:h-full bg-t_blue-light p-4">
        <div className="max-w-lg space-y-3">
          <h1 className=" font-litia text-3xl lg:text-5xl">My Work tools</h1>
          <p className="text-justify">
            Every carpenter needs his tools to be able to create his pieces of
            wood, programmers are not different, in my case, handling tools the
            following tools
          </p>
          <div className=" grid grid-cols-2 gap-4">
            <SkillButton className="bg-[#f0db4f] hover:bg-[#f5d820] text-stone-800" url='https://developer.mozilla.org/es/docs/Web/JavaScript'>
              Javascript
            </SkillButton>
            <SkillButton className="bg-[#007acc] hover:bg-[#0063a5] text-white" url='https://www.typescriptlang.org/'>
              Typescript
            </SkillButton>
            <SkillButton className="bg-[#8993be] hover:bg-[#7280be] text-white" url='https://www.php.net/manual/en/intro-whatis.php'>
              Php
            </SkillButton>
            <SkillButton className="bg-[#61DBFB] hover:bg-[#00ccff] text-stone-800" url='https://reactjs.org/'>
              React
            </SkillButton>
            <SkillButton className="bg-[#fb503b] hover:bg-[#fd3116] text-white" url='https://laravel.com/'>
              Laravel
            </SkillButton>
            <SkillButton className="bg-[#336791] hover:bg-[#1f5b8b] text-white" url='https://www.postgresql.org/'>
              Postgresql
            </SkillButton>
          </div>
        </div>
      </div>
    </div>
  );
}
