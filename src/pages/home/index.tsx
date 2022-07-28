import React, { useEffect, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import * as THREE from "three";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const mount: any = useRef();
  useEffect(() => {
    const currentMount = mount.current;
    const [width, height] = [
      currentMount.clientWidth,
      currentMount.clientHeight,
    ];

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(50, width / height, 1, 1000);
    camera.position.z = 3;
    scene.add(camera);

    const light = new THREE.AmbientLight(0xf1ecd1, 1);
    light.position.z = 5;
    light.position.y = 2;
    light.position.x = -2;
    scene.add(light);

    const resize = () => {
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      if (currentMount.clientWidth >= 768) {
        model.position.x = 1;
        model.position.y = 0;
      }
      if (currentMount.clientWidth < 768) {
        model.position.x = 0;
        model.position.y = 0.3;
      }
      if (currentMount.clientWidth <= 640) {
        model.scale.x = 0.8;
        model.scale.y = 0.8;
        model.scale.z = 0.8;
      }
      if (currentMount.clientWidth > 640) {
        model.scale.x = 1;
        model.scale.y = 1;
        model.scale.z = 1;
      }
    };
    window.addEventListener("resize", resize);

    const mouse = new THREE.Vector2();
    const target = new THREE.Vector2();
    const windowHalf = new THREE.Vector2(
      currentMount.clientWidth / 2,
      currentMount.clientHeight / 2
    );
    const moveCamera = (event: any) => {
      mouse.x = event.clientX - windowHalf.x;
      mouse.y = event.clientY - windowHalf.y;
    };
    window.addEventListener("mousemove", moveCamera);

    let model: any;
    const loader = new GLTFLoader();
    const planet = loader.load("./models/earth/scene.gltf", (gltf) => {
      if (currentMount.clientWidth >= 768) {
        gltf.scene.position.x = 1.2;
        gltf.scene.position.y = 0;
      }
      if (currentMount.clientWidth < 768) {
        gltf.scene.position.x = 0;
        gltf.scene.position.y = 0.3;
      }
      if (currentMount.clientWidth <= 640) {
        gltf.scene.scale.x = 0.8;
        gltf.scene.scale.y = 0.8;
        gltf.scene.scale.z = 0.8;
      }
      if (currentMount.clientWidth > 640) {
        gltf.scene.scale.x = 1;
        gltf.scene.scale.y = 1;
        gltf.scene.scale.z = 1;
      }
      scene.add(gltf.scene);
      model = gltf.scene;
    });

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(width, height);
    currentMount.appendChild(renderer.domElement);

    function animate() {
      requestAnimationFrame(animate);

      if (model) {
        model.rotation.y += 0.008;
      }
      target.x = (1 - mouse.x) * 0.0002;
      target.y = (1 - mouse.y) * 0.0002;

      camera.rotation.x += 0.01 * (target.y - camera.rotation.x);
      camera.rotation.y += 0.01 * (target.x - camera.rotation.y);

      renderer.render(scene, camera);
    }

    animate();

    return () => {
      currentMount.removeChild(renderer.domElement);
    };
  }, []);

  const message = "Welcome natizen!";

  return (
    <div
      className="h-screen w-full bg-t_white-light relative flex text-t_blue"
      ref={mount}
    >
      <div className="absolute top-8 left-40 flex justify-center items-center space-x-4 text-xl">
        <FontAwesomeIcon icon={faArrowLeft} />
        <span className="font-litia">Toggle the menu!</span>
      </div>
      <div className="absolute w-full h-2/4 md:w-2/4 md:h-full flex flex-col bottom-0 items-center justify-center">
        {message.split(" ").map((word) => {
          return (
            <div className="text-6xl font-litia sm:text-7xl lg:text-8xl text-t_blue animate-float">
              {word.split("").map((letter) => (
                <div className="relative inline-flex hover:scale-125 transition-all">
                  <span className="uppercase text-t_white-dark">{letter}</span>
                  <span className="absolute uppercase -translate-x-1 -translate-y-1">
                    {letter}
                  </span>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
