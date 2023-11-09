import {  useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Link } from "react-router-dom";
import "./Home.scss";
import Input from "../../components/Input/Input";

const Home = () => {

  interface Inputs {
    email: string;
    name: string;
    message: string;
  }
  const defaultInputs = { email: "", name: "", message: "" };
  const [inputs, setInputs] = useState(defaultInputs);
  const [error, setError] = useState("");

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const newInputs: Inputs = { ...inputs };
    newInputs[(e!.target as HTMLInputElement)!.name as keyof Inputs] = (e!
      .target as HTMLInputElement)!.value;
    setInputs(newInputs);
  };
  const areInputsValid = () => {
    const { name, email, message } = inputs;
    const mailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!name || !message || !email.match(mailRegex)) {
      return false;
    }
    return true;
  };
  const handleSend = () => {
    setInputs(defaultInputs);
    if (!areInputsValid()) {
      setError("All fields are required");
    }
  };
  return (
    <div className="home max-w-screen-xl flex justify-center m-auto">
      <Parallax pages={6.5} className="pointer-event-auto">
        <ParallaxLayer
          offset={0}
          className="flex items-start mt-8 justify-center md:items-center md:justify-start md:ml-1/5 w-2/5">
          <div className="flex flex-col gap-4  p-4 md:p-8 lg:pl-20 ">
            <h1 className="text-4xl md:text-6xl font-semibold tracking-wide text-black">
              S<span className="font-bold">EU</span>PHORIA
            </h1>
            <p>Beauty partner on the journey of self-expression</p>
            <Link to="/shop" className=" tracking-wider border-2 rounded-full border-black px-2 py-1 text-center">
              Shop now
            </Link>
          </div>
        </ParallaxLayer>
        <ParallaxLayer speed={0.5} sticky={{ start: 0, end: 1.5 }} className="pointer-events-none">
          <div className="hero__img w-full h-full"></div>
        </ParallaxLayer>
        <ParallaxLayer  sticky={{ start: 1.0, end: 1.5 }}>
          <div className="hero__img hero__img--find w-full h-full"></div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1.2}
          className="flex items-center flex-col md:flex-row">
          <div className="flex flex-col gap-4  p-4 md:p-8 lg:pl-20 md:w-2/4 max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-wide text-black">
              Title
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer speed={0.35} sticky={{ start: 2.1, end: 3.5 }} className= "w-1/3 gallery">
          <div className="gallery__img w-full h-full flex items-center"><p className="gallery__text text-black font-semibold pt-96 text-opacity-70">CREATIVE</p></div>
        </ParallaxLayer>
        <ParallaxLayer speed={0.35} sticky={{ start: 2.5, end: 4 }} className= "w-1/3 gallery--mid">
          <div className="gallery__img gallery__img--mid w-full h-full flex items-center"><p className="gallery__text text-white font-semibold pt-96 text-opacity-70" >GLAMOROUS</p></div>
        </ParallaxLayer>
        <ParallaxLayer speed={0.35} sticky={{ start: 3, end: 4.5 }} className= "w-1/3 gallery--end">
          <div className="gallery__img gallery__img--end w-full h-full  flex items-center "><p className="gallery__text text-black font-semibold pt-96 text-opacity-70">NATURAL</p></div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={5.75}
          className="flex flex-col ustify-center items-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-wide text-black">
            Contact Us
          </h2>
          <div>
            <Input
              id="name"
              onChange={handleChange}
              value={inputs.name}
              label="Name"
              type="name"
              name="name"
            />
            <Input
              id="email"
              onChange={handleChange}
              value={inputs.email}
              label="Email"
              type="email"
              name="email"
            />
            <Input
              id="message"
              onChange={handleChange}
              value={inputs.message}
              label="Message"
              type="textarea"
              name="message"
            />
            <button
              className="bg-black w-full text-white font-semibold rounded-md py-2"
              onClick={handleSend}>
              SEND
            </button>
            {error ? (
              <p className="text-center text-red-800 w-full font-semibold">
                {error}
              </p>
            ) : (
              ""
            )}
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Home;
