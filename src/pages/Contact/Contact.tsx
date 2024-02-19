import Input from "../../components/Input/Input";
import { Inputs } from "../../Interfaces";
import { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const defaultInputs = { email: "", name: "", message: "" };
  const [inputs, setInputs] = useState(defaultInputs);
  const [message, setMessage] = useState({text:"", status:""});

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
  const handleSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInputs(defaultInputs);
    if (!areInputsValid()) {
      setMessage({text:"All fields are required", status:"error"});
    } else {
      setMessage({text:"Submitted successfully", status:"sent"});
    }
  };
  return (
    <main className="max-w-7xl m-auto ">
      <h1 className=" border-y-4 border-gray-900 text-xl md:text-4xl  tracking-widest p-8 mb-8">
        Contact Us
      </h1>

      <Link className=" bg-black ml-8 p-2 text-white " to="/shop">
          ᐸ SHOP
        </Link>

      <form className="py-4 px-8 md:p-8 max-w-xl mx-auto " onSubmit={handleSend}>
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
        <button className="bg-black w-full text-white font-semibold py-2">
          SEND
        </button>
        {message.text ? (
          <p className={`mt-2 text-center  w-full font-semibold ${message.status === "error" ? "text-red-800": "text-green-600"}`}>
            {message.text}
          </p>
        ) : (
          ""
        )}
      </form>
    </main>
  );
};

export default Contact;
