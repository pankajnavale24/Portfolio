import React, { useState } from "react";

function Cards({ item }) {
  const [isReadMore, setIsReadMore] = useState(false);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  const getDescription = () => {
    if (isReadMore) {
      return item.description;
    }
    return item.description.length > 150 ? `${item.description.substring(0, 150)}...` : item.description;
  };

  return (
    <>
      <div className="mt-6 my-6 p-6 flex justify-center">
        <div className="card w-full max-w-md bg-white shadow-xl hover:scale-105 transform transition-transform duration-200 dark:bg-slate-900 dark:text-white dark:border rounded-lg overflow-hidden">
          <figure className="relative">
            <img src={item.image} alt={item.projectname} className="w-full h-48 object-cover" />
            <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent w-full p-4">
              <h2 className="text-lg font-bold text-white">{item.projectname}</h2>
            </div>
          </figure>
          <div className="card-body p-4">
            <p className="text-gray-700 dark:text-gray-300">
              {getDescription()}
              {item.description.length > 150 && (
                <span onClick={toggleReadMore} className="text-blue-500 cursor-pointer ml-2">
                  {isReadMore ? "Read Less" : "Read More"}
                </span>
              )}
            </p>
            <div className="card-actions justify-end mt-4">
              <div className="cursor-pointer px-4 py-2 rounded-full border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white transition duration-200">
                Source Code
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
