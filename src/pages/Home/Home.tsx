import {useState} from "react";
import leave from "../../assets/images/leave.png";
import hero from "../../assets/images/hero.jpg";
import aboutUs from "../../assets/images/about-us.jpg";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./Home.scss";
import Input from "../../components/Input/Input";

const Home = () => {
  interface Inputs{
    email: string;
    name: string;
    message: string;
  }
  const defaultInputs = {email:"", name:"", message: ""};
  const [inputs, setInputs] = useState(defaultInputs);
  const [error, setError] = useState("");

  const handleChange = (e: React.FormEvent<HTMLInputElement>):void => {
    const newInputs : Inputs = {...inputs};
    newInputs[(e!.target as HTMLInputElement)!.name as keyof Inputs] = (e!.target as HTMLInputElement)!.value;
    setInputs(newInputs);
  }
  const areInputsValid= () => {
    const {name, email, message} = inputs;
    const mailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!name || !message || !(email.match(mailRegex)) ){
      return false
    } 
    return true
  }
  const handleSend = () => {
  setInputs(defaultInputs);
  if (!areInputsValid()){
    setError("All fields are required");
  } 

  }
  return (
    <div className="home">
      <Parallax pages={3} className="background">
        <ParallaxLayer
          offset={0}
          className="flex justify-around items-center flex-col md:flex-row">
          <img
            className="h-1/6 md:h-1/5 absolute top-0 left-1/3 md:left-0"
            src={leave}
            alt="hero leave"></img>
          <div className="flex flex-col gap-4 pt-52 p-4 md:p-8 ">
            <h1 className="text-4xl md:text-6xl font-bold tracking-wide green-text">
              BREATHE
            </h1>
            <p>cool slogan about being organic, natual, cueltry free...</p>
            <button
              className="tracking-wide border-2 rounded-full 	
border-black px-2 py-1 ">
              Shop now
            </button>
          </div>
            <img className=" p-4 md:p-8 w-4/5 max-w-sm " src={hero} alt="Close-up of a woman applying cream to her face within a tranquil and peaceful ambiance."></img>
        </ParallaxLayer>
        <ParallaxLayer offset={1} className="flex justify-around items-center flex-col md:flex-row">
          
       
          <div className="flex flex-col gap-4 pt-52 p-4 md:p-8 "> 
          <h2 className="text-4xl md:text-6xl font-bold tracking-wide green-text" >About us </h2>
          <p className="max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          </div>
          <img className=" p-4 md:p-8 w-4/5 max-w-md md:order-first "  src={aboutUs} alt="products"></img>
        </ParallaxLayer>
        <ParallaxLayer offset={2} className="flex flex-col ustify-center items-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-wide green-text">Contact Us</h2>
          <div> 
            <Input id="name" onChange={handleChange} value={inputs.name} label="Name" type="name" name="name" />
            <Input id="email" onChange={handleChange} value={inputs.email} label="Email" type="email" name="email"/>
            <Input id="message" onChange={handleChange} value={inputs.message} label="Message" type="textarea" name="message"/>
            <button className="bg-zinc-400  w-full text-white font-semibold rounded-md" onClick={handleSend}>SEND</button>
            {error ? <p className="text-center text-red-800 w-full font-semibold">{error}</p>:""}
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Home;
