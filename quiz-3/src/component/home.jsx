import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";

const Home = () => {
  const { state, handleFunction } = useContext(GlobalContext);

  const {
    data,
    setData,
    input,
    setInput,
    fetchStatus,
    setFetchStatus,
    currentId,
    setCurrentId,
  } = state;

  const { handleSubmit, handleDelete, handleEdit, handleChange } =
    handleFunction;

  return (
    <div>
      <section className="bg-gray-200 p-5">
        <div className="container mx-auto mt-10">
          <h1 className="text-xl font-bold ">Find your data that you need!</h1>
        </div>
        <div className="container mx-auto flex-wrap flex gap-10 items-center justify-start">
          {/* Batas awal Card section */}
          {data !== null &&
            data.map((element) => (
              <div key={element.id} className="mt-10 h-72 flex max-w-xl bg-white shadow-lg rounded-lg overflow-hidden">
                <img
                  src={element.image}
                  className="w-1/3 bg-cover bg-center bg-landscape"
                />
                <div className="w-2/3 p-4">
                  <h1 className="text-gray-900 font-bold text-2xl">
                    {element.category}
                  </h1>
                  <small>2019</small>
                  <p className="mt-2 text-gray-600 text-sm">
                    {element.description}
                  </p>
                  <div className=" item-center mt-2 text-gray-500">
                    <span>FPS</span>
                    <span>2GB</span>
                    <span>, Android &amp; Ios</span>
                  </div>
                  <div className="flex item-center justify-between mt-3">
                    <h1 className="text-gray-700 font-bold text-xl">
                      {element.price}
                    </h1>
                    <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                      {element.rating}
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
