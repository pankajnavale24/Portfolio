import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import java from "../../public/java.png";
import javascript from "../../public/javascript.png";
import springBoot from "../../public/springBoot.jpg";
import reactjs from "../../public/reactjs.png";
import mongodb from "../../public/mongodb.jpg";
import express from "../../public/express.png";
import node from "../../public/node.png";
import python from "../../public/python.webp";

function Experience() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 4,
      logo: mongodb,
      name: "MongoDB",
    },
    {
      id: 5,
      logo: express,
      name: "Express",
    },
    {
      id: 6,
      logo: reactjs,
      name: "React JS",
    },
    {
      id: 7,
      logo: node,
      name: "Node JS",
    },
    {
      id: 8,
      logo: python,
      name: "Python",
    },
    {
      id: 9,
      logo: java,
      name: "Java",
    },
    {
      id: 10,
      logo: springBoot,
      name: "Spring Boot",
    },
  ];

  return (
    <div
      name="Experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-4xl font-extrabold mb-6 text-center text-green-600">
          Experience
        </h1>
        <p className="text-center mb-10">
          I have more than 2 years of experience in the following technologies.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="flex flex-col items-center justify-center border-[2px] rounded-lg shadow-lg p-4 cursor-pointer hover:scale-110 transform transition-transform duration-300 bg-white"
              key={id}
            >
              <img src={logo} className="w-20 h-20 md:w-24 md:h-24 rounded-full mb-4" alt={name} />
              <div className="text-lg font-semibold text-gray-700">{name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
