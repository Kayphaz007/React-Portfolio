import React, { useRef, useState } from "react";

const Contact = () => {
  const [message, setMessage] = useState("");
  const clearCLick = (event: any) => {
    setMessage(event.target.value);
  };
  return (
    <>
      <section className="text-white flex flex-col md:max-w-2xl main_1  m-0">
        <div>
          <h3 className="text-2xl text-center p-2">
            <span className="border-b-2 border-[#ffb401] pb-1 px-3">
              Contacts
            </span>
          </h3>
          <h1 className="text-4xl text-center m-2">Get In Touch With Me</h1>

          <form >
            <fieldset className="mx-auto p-5">
              <legend><p>Send a message</p></legend>
              <p>
                <label htmlFor="name" className="hidden">
                  Your name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="bg-transparent py-5 w-full border-b-2 border-[#ffb401]"
                  onChange={clearCLick}
                  value={message}
                />
              </p>
              <p>
                <label htmlFor="e-mail" className="hidden">
                  Your E-mail
                </label>
                <input
                  type="text"
                  placeholder="Your e-mail"
                  className="bg-transparent py-5 w-full border-b-2 border-[#ffb401]"
                  onChange={clearCLick}
                  value={message}
                />
              </p>
              <p>
                <label htmlFor="message" className="hidden">
                  Message
                </label>
                <textarea
                  placeholder="Message"
                  className="bg-transparent py-5 w-full border-b-2 border-[#ffb401]"
                  onChange={clearCLick}
                  value={message}
                ></textarea>
              </p>
              <p className="flex justify-start items-center gap-3">
                <button
                  className="bg-transparent hover:bg-[#ffb401] p-4 border-2 border-[#ffb401] duration-500 uppercase text-xl"
                  onClick={()=> setMessage("")}
                >
                  clear
                </button>

                <button className="bg-transparent hover:bg-[#ffb401] p-4 border-2 border-[#ffb401] duration-500 uppercase text-xl">
                  Send Message
                </button>
              </p>
            </fieldset>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
