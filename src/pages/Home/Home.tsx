import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Link } from "react-router-dom";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home max-w-screen-xl flex justify-center m-auto">
      <Parallax pages={4} className="pointer-event-auto overflow-hidden top-0 left-0">
        <ParallaxLayer
          offset={0}
          className="flex items-start mt-8 justify-center md:items-center md:justify-start w-2/5">
          <article className="flex flex-col gap-4  mt-10 md:mt-0 p-4 md:p-8 lg:pl-40 ">
            <h1 className="text-4xl md:text-6xl font-semibold tracking-wide text-black">
              S<span className="font-bold">EU</span>PHORIA
            </h1>
            <p>Beauty partner on the journey of self-expression</p>
            <Link
              to="/shop"
              className=" tracking-wider border-2 rounded-full border-black px-2 py-1 text-center">
              Shop now
            </Link>
          </article>
        </ParallaxLayer>
        <ParallaxLayer
          speed={0.5}
          sticky={{ start: 0, end: 1.5 }}
          className="pointer-events-none">
          <div className="hero__img w-full h-full"></div>
        </ParallaxLayer>
        <ParallaxLayer sticky={{ start: 1.0, end: 1.5 }}>
          <div className="hero__img hero__img--find w-full h-full"></div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1.2}
          className="flex items-center flex-col md:flex-row">
          <article className="flex flex-col gap-4  p-4 md:p-8 lg:pl-20 md:w-2/4 max-w-2xl lg:pl-40 ">
            <h2 className="text-2xl md:text-3xl font-bold tracking-wide text-black">
            Create your own beauty story...
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </article>
        </ParallaxLayer>
        <ParallaxLayer
          speed={0.35}
          sticky={{ start: 2.1, end: 3.5 }}
          className="w-1/3 gallery">
          <div className="gallery__img w-full h-full flex items-center">
            <Link
              to="/shop"
              className="gallery__text text-black font-semibold pt-96 md:pl-14 text-opacity-70">
              SHOP NOW
            </Link>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          speed={0.35}
          sticky={{ start: 2.5, end: 4 }}
          className="w-1/3 gallery--mid">
          <div className="gallery__img gallery__img--mid w-full h-full flex items-center">
            <Link
              to="/shop"
              className="gallery__text text-white font-semibold pt-96 text-opacity-70  md:pl-14 ">
              SHOP NOW
            </Link>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          speed={0.35}
          sticky={{ start: 3, end: 4.5 }}
          className="w-1/3 gallery--end">
          <div className="gallery__img gallery__img--end w-full h-full  flex items-center ">
            <Link
              to="/shop"
              className="gallery__text text-black font-semibold pt-96 text-opacity-70  md:pl-14">
              SHOP NOW
            </Link>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Home;
