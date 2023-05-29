import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const Tugas11 = () => {

    const [data, setData] = useState(null)

    const handleIndexScore = (nilai) => {
        if(nilai >= 80) {
            return "A"
        } else if (nilai >= 70 && nilai < 80) {
            return "B"
        } else if (nilai >= 60 && nilai < 70) {
            return "C"
        } else if (nilai >= 50 && nilai < 60) {
            return "D"
        } else {
            return "E"
        }
    }

    useEffect( () => {
        axios.get("https://backendexample.sanbercloud.com/api/student-scores")
        .then((res) => {
            let result = res.data
            setData(result)
        })
        .catch((error)=> {
            console.log(error)
        })
    }, [])
    console.log(data)

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
                {data !== null && data.map((element, index)=> (
                    <tr key = {element.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {index + 1}
                    </th>
                    <td className="px-6 py-4">{element.name}</td>
                    <td className="px-6 py-4">{element.course}</td>
                    <td className="px-6 py-4">{element.score}</td>
                    <td className="px-6 py-4">{handleIndexScore(element.score)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
}

export default Tugas11;