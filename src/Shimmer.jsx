import React from 'react'

const Shimmer = () => {
  return (
    <div className='min-h-screen  w-full text-6xl p-3 animate-pulse'>
      <div style={{ width: "97%", height: "65vh" }} className="artboard  bg-gray-400 mx-3  rounded-2xl"></div>
      <div className="badges my-10 flex flex-row justify-around">
        <button className="btn btn-wide bg-gray-400  text-4xl h-20" ></button>
        <button className="btn btn-wide bg-gray-400 border-none text-4xl h-20"></button>
        <button className="btn btn-wide bg-gray-400 border-none text-4xl h-20" > </button>
        <button className="btn btn-wide bg-gray-400 border-none text-4xl h-20" > </button>
        <button className="btn btn-wide bg-gray-400 border-none text-4xl h-20" ></button>

      </div>
      <div className="flex flex-wrap justify-around mt-5">
        <div className="artboard bg-gray-400 mx-2 my-2 phone-1 rounded-2xl"></div>
        <div className="artboard bg-gray-400 mx-2 my-2 phone-1 rounded-2xl"></div>
        <div className="artboard bg-gray-400 mx-2 my-2 phone-1 rounded-2xl"></div>
        <div className="artboard bg-gray-400 mx-2 my-2 phone-1 rounded-2xl"></div>
        <div className="artboard bg-gray-400 mx-2 my-2 phone-1 rounded-2xl"></div>
        <div className="artboard bg-gray-400 mx-2 my-2 phone-1 rounded-2xl"></div>
        <div className="artboard bg-gray-400 mx-2 my-2 phone-1 rounded-2xl"></div>
        <div className="artboard bg-gray-400 mx-2 my-2 phone-1 rounded-2xl"></div>
        <div className="artboard bg-gray-400 mx-2 my-2 phone-1 rounded-2xl"></div>
        <div className="artboard bg-gray-400 mx-2 my-2 phone-1 rounded-2xl"></div>

      </div>
    </div>
  )
}

export default Shimmer