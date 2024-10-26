"use client";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Home, HomeIcon, Laugh, Mail, Phone } from "lucide-react";

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
        <div className="h-1/2 lg:h-full lg:w-1/2 items-center flex flex-col gap-8 justify-evenly">
          <div>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              shape-rendering="geometricPrecision"
              text-rendering="geometricPrecision"
              image-rendering="optimizeQuality"
              fill-rule="evenodd"
              clip-rule="evenodd"
              viewBox="0 0 512 512"
              width={180}
              height={180}
              className="ml-20 mt-10"
            >
              <circle
                fill="#FBD433"
                transform="matrix(2.64389 -.70843 .70843 2.64389 256 256)"
                r="93.505"
              />
              <path
                fill="#40270E"
                d="M118.959 278.462c69.505-2.158 212.527 1.215 274.08-.171 0 165.703-274.08 181.545-274.08.171zm85.834-84.99c-30.555-23.781-59.738-23.427-87.565-.261-12.545 10.444-18.125 4.612-12.458-9.576 5.636-14.108 12.708-26.114 21.661-35.367 37.814-39.081 72.372-4.168 88.914 34.677 5.285 12.402 2.539 20.715-10.552 10.527zm191.566 0c-30.557-23.781-59.74-23.427-87.565-.261-12.544 10.444-18.127 4.612-12.46-9.576 5.636-14.108 12.708-26.114 21.661-35.367 37.814-39.081 72.371-4.168 88.917 34.677 5.282 12.402 2.535 20.715-10.553 10.527z"
              />
              <path
                fill="#fff"
                d="M118.959 278.462c69.506-6.316 212.527-2.806 274.08-.172.786 58.937-273.259 58.212-274.08.172z"
              />
              <path
                fill="red"
                d="M163.715 377.761c46.294 40.045 132.671 41.615 184.568 0-28.257-32.14-59.077-33.112-93.282-7.846-35.265-28.197-58.875-28.995-91.286 7.846z"
              />
            </svg>
          </div>
          <div className="flex flex-col gap-10 text-slate-600">
            <div className="flex gap-5 justify-center items-center">
              <Phone />
              <span className="text-2xl">+91-8910697094</span>
            </div>
            <div className="flex gap-5 justify-center items-center">
              <Mail />
              <span className="text-2xl">vishalsing384@gmail.com</span>
            </div>
            <div className="flex gap-5 justify-center items-center">
              <Home />
              <span className="text-2xl">
                Vaikuntam Layout, Bangalore, 560037
              </span>
            </div>
          </div>
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
              required
            />
          </div>
          <div className="flex flex-col gap-3 w-full">
            <span>My name:</span>
            <input
              name="from_name"
              type="text"
              placeholder="your name.."
              className="bg-transparent border-b-2 border-b-black outline-none"
              required
            />
          </div>
          <div className="flex flex-col gap-3 w-full">
            <span>My mail address is:</span>
            <input
              name="from_email"
              type="text"
              placeholder="abc@gmail.com"
              className="bg-transparent border-b-2 border-b-black outline-none"
              required
            />
          </div>
          <div className="flex flex-col gap-3 w-full">
            <span>Regards</span>
            <button
              className="bg-purple-200 rounded font-semibold text-gray-600 p-4 hover:bg-green-300"
              type="submit"
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
