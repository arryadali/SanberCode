import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const Tugas12 = () => {
  const [data, setData] = useState(null)
  const [input, setInput] = useState({
    name: "",
    course: "",
    score: ""
  });
  const [fetchStatus, setFetchStatus] = useState(true)

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
    if(fetchStatus === true) {
        fetchData()
        setFetchStatus(false)
    }
  }, [fetchStatus, setFetchStatus]);
  
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
  }

//   Inputan
  const handleChange = (event) => {
    let name = event.target.name
    let course = event.target.course
    let score = event.target.score
    let value = event.target.value

    if (name === "name") {
        setInput({...input, name : value})
    } else if (name === "course") {
        setInput({...input, course : value})
    } else if (name === "score") {
        setInput({...input, score : value})
    }
  }

//   Submit
  const handleSubmit = (event) => {
    event.preventDefault()

    let {name, course, score} = input
    console.log(name)
    console.log(course)
    console.log(score)

    axios.post("https://backendexample.sanbercloud.com/api/student-scores", {name, course, score})
    .then((res) => {
        console.log(res)
        setFetchStatus(true)
    })
    .catch((error) => {
        console.log(error)
        alert(error)
    })

    setInput(
        {
            name: "",
            course: "",
            score: ""
          }
    )
  };

  return (
    <div>
      <div className="relative overflow-x-auto container rounded-[10px] mx-auto mt-[5%] w-[50%] drop-shadow-2xl">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 container">
          <thead className="text-xs text-gray-700 uppercase bg-purple-400 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                No
              </th>
              <th scope="col" className="px-6 py-3">
                Nama
              </th>
              <th scope="col" className="px-6 py-3">
                Mata Kuliah
              </th>
              <th scope="col" className="px-6 py-3">
                Nilai
              </th>
              <th scope="col" className="px-6 py-3">
                Index Nilai
              </th>
            </tr>
          </thead>
          <tbody>
            {data !== null &&
              data.map((element, index) => (
                <tr
                  key={element.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {index + 1}
                  </th>
                  <td className="px-6 py-4">{element.name}</td>
                  <td className="px-6 py-4">{element.course}</td>
                  <td className="px-6 py-4">{element.score}</td>
                  <td className="px-6 py-4">
                    {handleIndexScore(element.score)}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
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

export default Tugas12;
