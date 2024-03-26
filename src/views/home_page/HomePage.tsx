import { useEffect, useState } from "react";
import { smellData } from "../../utils/smell";
import { ISmell } from "../../interfaces/smell.interfaces";
import MusicCard from "../../components/music_card/MusicCard";
import Title from "../../components/title/Title";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import config from '../../config/particlesjs-config.json'

const HomePage = () => {
  const [init, setInit] = useState(false);
  const [smells, setSmells] = useState<ISmell[]>([]);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  useEffect(() => {
    setSmells(smellData);
  }, []);

  const particlesLoaded = async (container?: Container) => { }

  return (
    <>
      {init && <Particles className="-z-10 fixed" id="tsparticles" options={config as any} particlesLoaded={particlesLoaded} />}
      <div className="py-10 container mx-auto flex flex-col justify-center items-center min-h-screen">
        <Title text="Martin Fowler Code Smells" />
        <div className="flex gap-10 flex-wrap justify-center">
          {smells.map((smell) => (
            <MusicCard
              key={smell.id}
              id={smell.id}
              type={smell.type}
              image={smell.image}
              owner={smell.owner}
              name={smell.name}
              style={smell.style}
              volume={smell.volume}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;