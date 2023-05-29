import React, { useContext, useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { GlobalContext } from "./context/GlobalContext";

import { useParams } from "react-router-dom";

const Tugas15Form = () => {
  let { idData } = useParams();

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

  const handleIndexScore = (nilai) => {
    if (nilai >= 80) {
      return "A";
    } else if (nilai >= 70 && nilai < 80) {
      return "B";
    } else if (nilai >= 60 && nilai < 70) {
      return "C";
    } else if (nilai >= 50 && nilai < 60) {
      return "D";
    } else {
      return "E";
    }
  };

  useEffect(() => {
    if (data !== undefined) {
      axios
        .get(
          `https://backendexample.sanbercloud.com/api/student-scores/${idData}`
        )
        .then((res) => {
          let hasil = res.data;
          console.log(hasil);

          setInput({
            name: hasil.name,
            course: hasil.course,
            score: hasil.score,
          });

          setCurrentId(hasil.id);
        });
    }
  }, []);

  //   console.log(data);

  const fetchData = () => {
    axios
      .get("https://backendexample.sanbercloud.com/api/student-scores")
      .then((res) => {
        let result = res.data;
        setData(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(data);

  return (
    <div>
      <div className="container rounded-[20px] w-[50%] ml-auto mr-auto mt-[3%]">
        <form onSubmit={handleSubmit}>
          <div>
            <label className="">Name : </label>
            <div>
              <input
                type="text"
                name="name"
                value={input.name}
                onChange={handleChange}
                className="mt-1 mb-4 w-full rounded-[10px] bg-[#E4E4E4]"
              />
            </div>
            <label className="">Mata Kuliah : </label>
            <div>
              <input
                type="text"
                name="course"
                value={input.course}
                onChange={handleChange}
                className="mt-1 mb-4 w-full rounded-[10px] bg-[#E4E4E4]"
              />
            </div>
            <label className="">Nilai : </label>
            <div>
              <input
                type="text"
                name="score"
                value={input.score}
                onChange={handleChange}
                className="mt-1 mb-9 w-full rounded-[10px] bg-[#E4E4E4]"
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-600 rounded-[10px] p-3 text-white font-semibold"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Tugas15Form;
