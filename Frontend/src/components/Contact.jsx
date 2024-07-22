import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/axojzzyb", userInfo);
      toast.success("Your message has been sent");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <div
        name="Contact"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
      >
        <h1 className="text-4xl font-extrabold mb-6 text-center text-green-600">
          Contact Me
        </h1>
        <p className="text-center  mb-10">
          Please fill out the form below to get in touch with me.
        </p>
        <div className="flex flex-col items-center justify-center">
          <form
            // action="https://getform.io/f/axojzzyb" method="POST"
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white shadow-lg w-full max-w-lg px-8 py-10 rounded-2xl"
          >
            <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
              Send Your Message
            </h1>
            <div className="flex flex-col mb-6">
              <label className="block text-gray-700 mb-2">Full Name</label>
              <input
                {...register("name", { required: true })}
                className="shadow-sm rounded-lg appearance-none border py-2 px-3 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
              />
              {errors.name && (
                <span className="text-red-500 text-sm mt-2">
                  This field is required
                </span>
              )}
            </div>
            <div className="flex flex-col mb-6">
              <label className="block text-gray-700 mb-2">Email Address</label>
              <input
                {...register("email", { required: true })}
                className="shadow-sm rounded-lg appearance-none border py-2 px-3 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email "
              />
              {errors.email && (
                <span className="text-red-500 text-sm mt-2">
                  This field is required
                </span>
              )}
            </div>
            <div className="flex flex-col mb-6">
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea
                {...register("message", { required: true })}
                className="shadow-sm rounded-lg appearance-none border py-2 px-3 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                id="message"
                name="message"
                placeholder="Enter your message"
              />
              {errors.message && (
                <span className="text-red-500 text-sm mt-2">
                  This field is required
                </span>
              )}
            </div>
            <button
              type="submit"
              className="bg-green-600 text-white font-semibold rounded-lg px-4 py-2 hover:bg-green-700 transition duration-300 w-full"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
