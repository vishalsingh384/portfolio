"use client";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const text = "Let's Connect";
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();

          setTimeout(() => {
            setSuccess(false);
          }, 8000);
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="h-[calc(100vh-6rem)]"
      initial={{ y: "-200vh" }}
      animate={{ y: "0vh" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* Text Container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex justify-center items-center">
          {text.split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                delay: index * 0.1,
              }}
              className="text-6xl font-semibold"
            >
              {letter}
            </motion.span>
          ))}
        </div>
        {/* Form Container */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="h-1/2 lg:h-full flex flex-col gap-10 lg:w-1/2 bg-red-50 rounded-xl text-xl justify-center items-center p-24"
        >
          <div className="flex flex-col gap-3 w-full">
            <span>Hey Vishal</span>
            <textarea
              rows={6}
              className="bg-transparent outline-none resize-none border-b-2 border-black"
              name="user_message"
              placeholder="your message...."
            />
          </div>
          <div className="flex flex-col gap-3 w-full">
            <span>My name:</span>
            <input
              name="from_name"
              type="text"
              placeholder="your name.."
              className="bg-transparent border-b-2 border-b-black outline-none"
            />
          </div>
          <div className="flex flex-col gap-3 w-full">
            <span>My mail address is:</span>
            <input
              name="from_email"
              type="text"
              placeholder="abc@gmail.com"
              className="bg-transparent border-b-2 border-b-black outline-none"
            />
          </div>
          <div className="flex flex-col gap-3 w-full">
            <span>Regards</span>
            <button
              className="bg-purple-200 rounded font-semibold text-gray-600 p-4 hover:bg-green-300"
              onClick={sendEmail}
            >
              Send 📩
            </button>
          </div>
          {success && (
            <span className="text-green-600 semibold">
              Message sent successfully🥳
            </span>
          )}
          {error && (
            <span className="text-red-600 semibold">
              Don't know the specifics but something went wrong😐
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
