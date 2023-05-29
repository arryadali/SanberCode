import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";

const ManageData = () => {
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

  // HARGA
  const handlePrice = (harga) => {
    if (harga === "0") {
      console.log("Free");
    } else {
      console.log(harga);
    }
  };

  useEffect(() => {
    if (fetchStatus === true) {
      fetchData();
      setFetchStatus(false);
    }
  }, [fetchStatus, setFetchStatus]);

  const fetchData = () => {
    axios
      .get("https://backendexample.sanbercloud.com/api/mobile-apps")
      .then((res) => {
        let result = res.data;
        setData(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="relative overflow-x-auto container rounded-[10px] mx-auto mt-[5%] w-full drop-shadow-2xl">
        <table className="w-full text-sm text-left text-black container">
          <thead className="text-xs text-black uppercase bg-purple-400 w-ful text-ellipsisl">
            <tr>
              <th scope="col" className="px-6 py-3">
                NO
              </th>
              <th scope="col" className="px-6 py-3">
                NAMA
              </th>
              <th scope="col" className="px-6 py-3">
                KATEGORI
              </th>
              <th scope="col" className="pl-2 pr-2 py-3 ">
                DESCRIPTION
              </th>
              <th scope="col" className="px-6 py-3">
                PRICE
              </th>
              <th scope="col" className="px-6 py-3">
                RATING
              </th>
              <th scope="col" className="px-6 py-3">
                RELEASE YEAR
              </th>
              <th scope="col" className="px-6 py-3">
                SIZE
              </th>
              <th scope="col" className="px-6 py-3">
                IS_ANDRO_APP
              </th>
              <th scope="col" className="px-6 py-3">
                IS_IOS_APP
              </th>
              <th scope="col" className="px-6 py-3">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            {data !== null &&
              data.map((element, index) => (
                <tr key={element.id} className="bg-white border-b ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-black whitespace-nowrap"
                  >
                    {index + 1}
                  </th>
                  <td className="px-6 py-4">{element.name}</td>
                  <td className="px-6 py-4">{element.category}</td>
                  <td className="pl-2 pr-2 py-3">{element.description}</td>
                  <td className="px-6 py-4">{handlePrice(element.price)}</td>
                  <td className="px-6 py-4">{element.rating}</td>
                  <td className="px-6 py-4">{element.release}</td>
                  <td className="px-6 py-4">{element.size}</td>
                  <td className="px-6 py-4">{element.andro}</td>
                  <td className="">{element.ios}</td>
                  <td className="">{element.action}</td>
                  <button
                    onClick={handleEdit}
                    value={element.id}
                    className="bg-yellow-200 p-3 rounded-[10px] text-white"
                  >
                    Edit
                  </button>
                  <button
                    onClick={handleDelete}
                    value={element.id}
                    className="bg-red-500 p-3 rounded-[10px] text-white"
                  >
                    Delete
                  </button>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div>
        <div className="container rounded-[20px] w-[95%] ml-auto mr-auto mt-[3%]">
          <div className="mb-7">
            <p className="font-bold mb-7 text-xl">Create Data</p>
            <p>Gambar data Game</p>
            <hr />
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Image URL : </label>
              <div>
                <input
                  type="text"
                  name="image"
                  value={input.image}
                  onChange={handleChange}
                  className="mt-1 mb-4 w-full rounded-[20px] bg-[#E4E4E4] px-4 py-2"
                />
              </div>

              <p>Data Game</p>
              <hr />

              <label>Name : </label>
              <div>
                <input
                  type="text"
                  name="name"
                  value={input.name}
                  onChange={handleChange}
                  className="mt-1 mb-4 w-full rounded-[20px] bg-[#E4E4E4] px-4 py-2"
                />
              </div>
              <label>Category : </label>
              <div>
                <input
                  type="text"
                  name="category"
                  value={input.category}
                  onChange={handleChange}
                  className="mt-1 mb-4 w-full rounded-[20px] bg-[#E4E4E4] px-4 py-2"
                />
              </div>
              <label>Description : </label>
              <div>
                <input
                  type="text"
                  name="description"
                  value={input.description}
                  onChange={handleChange}
                  className="mt-1 mb-9 w-full rounded-[20px] bg-[#E4E4E4] px-4 py-2"
                />
              </div>
              <label>Price : </label>
              <div>
                <input
                  type="text"
                  name="price"
                  value={input.price}
                  onChange={handleChange}
                  className="mt-1 mb-9 w-full rounded-[20px] bg-[#E4E4E4] px-4 py-2"
                />
              </div>
              <label>Rating : </label>
              <div>
                <input
                  type="text"
                  name="rating"
                  value={input.rating}
                  onChange={handleChange}
                  className="mt-1 mb-9 w-full rounded-[20px] bg-[#E4E4E4] px-4 py-2"
                />
              </div>
              <label>Release Year : </label>
              <div>
                <input
                  type="text"
                  name="release"
                  value={input.release}
                  onChange={handleChange}
                  className="mt-1 mb-9 w-full rounded-[20px] bg-[#E4E4E4] px-4 py-2"
                />
              </div>
              <label>Size : </label>
              <div>
                <input
                  type="text"
                  name="size"
                  value={input.size}
                  onChange={handleChange}
                  className="mt-1 mb-9 w-full rounded-[20px] bg-[#E4E4E4] px-4 py-2"
                />
              </div>
              <label>Android ? : </label>
              <div>
                <input
                  type="text"
                  name="andro"
                  value={input.andro}
                  onChange={handleChange}
                  className="mt-1 mb-9 w-full rounded-[20px] bg-[#E4E4E4] px-4 py-2"
                />
              </div>
              <label>IOS ? : </label>
              <div>
                <input
                  type="text"
                  name="ios"
                  value={input.ios}
                  onChange={handleChange}
                  className="mt-1 mb-9 w-full rounded-[20px] bg-[#E4E4E4] px-4 py-2"
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-blue-600 rounded-[20px] p-3 text-white font-semibold"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ManageData;
