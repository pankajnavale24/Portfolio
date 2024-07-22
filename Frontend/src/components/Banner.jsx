import React, { useEffect, useState } from 'react';
import banner from "../../public/banner.png";
import { FaTwitterSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped } from "react-typed";

function Banner() {
  const [welcomeText, setWelcomeText] = useState('स्वागत आहे'); // Marathi for "Welcome"
  const languages = [
    { text: 'स्वागत आहे', language: 'Marathi' }, // Marathi
    { text: 'Welcome', language: 'English' }, // English
    { text: 'வரவேற்கிறேன்', language: 'Tamil' }, // Tamil
    { text: 'स्वागत', language: 'Hindi' }, // Hindi
    { text: 'স্বাগতম', language: 'Bengali' }, // Bengali
    { text: 'स्वागतम्', language: 'Sanskrit' }, // Sanskrit
    { text: 'ਸੁਆਗਤ ਹੈ', language: 'Punjabi' }, // Punjabi
    { text: 'স্বাগতম', language: 'Assamese' }, // Assamese
    { text: 'સ્વાગત છે', language: 'Gujarati' }, // Gujarati
    { text: 'ಸ್ವಾಗತ', language: 'Kannada' }, // Kannada
    { text: 'స్వాగతం', language: 'Telugu' }, // Telugu
    { text: 'ସ୍ୱାଗତ', language: 'Odia' }, // Odia
    { text: 'Bienvenido', language: 'Spanish' }, // Spanish for an additional touch
    { text: 'Willkommen', language: 'German' }, // Gujarati
    { text: 'いらっしゃいませ', language: 'Japanese' }, // Gujarati
  ];
  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % languages.length;
      setWelcomeText(languages[currentIndex].text);
    }, 1000); // Change text every 1 second
    
    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);
  return (
    <>
      <div name="Home" className="  max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <div className="space-y-8">
            <h1 className="text-2xl md:text-4xl font-bold">
             I'm a {" "}
              <span className="text-pink-500">Pankaj</span>
            </h1>
            <p className="text-sm md:text-xl ">
            <span className="welcome-text text-xl md:text-2xl font-bold text-yellow-500">{welcomeText}</span> to my portfolio! I'm a passionate Full Stack Developer with expertise in 
            front-end and back-end technologies. 
            </p> 
            <div className=" space-y-2">
                <div className="flex space-x-5">
                  <SiMongodb className="text-2xl md:text-5xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <SiExpress className="text-2xl md:text-5xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaReact className="text-2xl md:text-5xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaNodeJs className="text-2xl md:text-5xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                </div>
              </div>

            
            
            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              <a href="https://drive.google.com/file/d/1qWBHqYsQYKqRyEjUqlS_wzVMiM_Q5xcu/view?usp=drive_link" className="text-2xl font-bold">Download Resume</a>
              </span>
            </button>

            <p className="text-sm md:text-xl">
            Let's connect and create something <span className="text-yellow-500 font-semibold">amazing together!</span>
            </p>
            {/* <h1 className="font-bold text-center ">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <FaSquareFacebook className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/" target="_blank">
                      <IoLogoYoutube className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/" target="_blank">
                      <FaTelegram className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
             */}
            <div className=" md:flex justify-start space-x-10 ">
              <a href="https://www.linkedin.com/in/pankajnavale24/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-5xl cursor-pointer" />
              </a>
              <a href="https://github.com/pankajnavale24/" target="_blank" rel="noopener noreferrer">
                <FaSquareGithub  className="text-5xl cursor-pointer"/>
              </a>
              <a href="https://www.instagram.com/pankaj_navale24/" target="_blank" rel="noopener noreferrer">
              <FaInstagramSquare className="text-5xl cursor-pointer" /> 
              </a>
              <a href="https://x.com/Pankaj_Navale24/" target="_blank" rel="noopener noreferrer">
              <FaTwitterSquare className="text-5xl cursor-pointer" /> 
              </a>
            </div>

          </div>
        </div>
        
        <div className=" order-1 w-full mt-20 md:w-1/2">
          <img
            src={banner}
            className="md:w-[500px] md:h-[500px] md:ml-12"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
