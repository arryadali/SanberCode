import React from "react";

const Tugas10 = () => {
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
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                1
              </th>
              <td className="px-6 py-4">Jhon</td>
              <td className="px-6 py-4">Algoritma</td>
              <td className="px-6 py-4">80</td>
              <td className="px-6 py-4">A</td>

              <button className=" my-3 mr-2 p-3 border-2 rounded-[10px]">Edit</button>
              <button className="bg-red-600 p-3 border-2 rounded-[10px]">Delete</button>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                2
              </th>
              <td className="px-6 py-4">Doe</td>
              <td className="px-6 py-4">Matematika</td>
              <td className="px-6 py-4">70</td>
              <td className="px-6 py-4">B</td>

              <button className=" my-3 mr-2 p-3 border-2 rounded-[10px]">Edit</button>
              <button className="bg-red-600 p-3 border-2 rounded-[10px]">Delete</button>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                3
              </th>
              <td className="px-6 py-4">Frank</td>
              <td className="px-6 py-4">Kalkulus</td>
              <td className="px-6 py-4">60</td>
              <td className="px-6 py-4">C</td>

              <button className=" my-3 mr-2 p-3 border-2 rounded-[10px]">Edit</button>
              <button className="bg-red-600 p-3 border-2 rounded-[10px]">Delete</button>
            </tr>
            <tr className="bg-white dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                4
              </th>
              <td className="px-6 py-4">Jason</td>
              <td className="px-6 py-4">Basis Data</td>
              <td className="px-6 py-4">90</td>
              <td className="px-6 py-4">A</td>

              <button className=" my-3 mr-2 p-3 border-2 rounded-[10px]">Edit</button>
              <button className="bg-red-600 p-3 border-2 rounded-[10px]">Delete</button>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tugas10;
