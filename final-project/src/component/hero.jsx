import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Hero = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://dev-example.sanbercloud.com/api/job-vacancy")
      .then((res) => {
        let hasil = res.data.data;
        setData(hasil);
        console.log(hasil);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {/* Hero Start */}
      <section id="Hero">
        <div className="container">
          <div className="bg-gradient-to-r from-green-400 to-black py-[8%] w-[90%] mx-auto md:w-[90%] sm:w-[90%]">
            <div className="container mx-auto">
              <form className="flex justify-center ">
                <input
                  type="text"
                  className="bg-white rounded-l-full py-2 px-6 text-gray-700 leading-tight focus:outline-none"
                  placeholder="Search..."
                />
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-black rounded-r-full text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
          <div className="w-[90%] mx-auto mt-[5%] ">
            <h1 className="font-bold sm:text-3xl text-xl mb-2">
              Browse Talent By Category
            </h1>

            <p className="sm:text-xl text-base text-gray-500 mb-[5%]">
              Looking for work?
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-20">
              {data !== null &&
                data.map((element) => (
                  <div
                    key={element.id}
                    className="w-auto border-2 h-auto mb-5"
                  >
                    <div>
                      <img
                        src={element.company_image_url}
                        alt="Glints"
                        width={300}
                        className="h-[210px]"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-center font-semibold">
                        {element.company_name}
                      </p>
                      <p>{element.company_city}</p>
                      <p>
                        IDR {element.salary_max} - {element.salary_min}
                      </p>
                      <p>{element.job_type}</p>
                      <p>{element.job_tenure}</p>
                      <p>{element.title}</p>
                    </div>
                  </div>
                ))}
            </div>
            
          </div>
        </div>
      </section>
      {/* Hero End */}

      {/* Footer Start */}
      <section id="Footer">
        <div className="container ">
          <div className="bg-gradient-to-r from-green-400 to-black text-center w-[90%] m-auto p-[1%] mt-5">
            <p>
              Cari lowongan pekerjaan? Coacistic Solusinya!!! &copy; 2023,
              Sanbercode
            </p>
          </div>
        </div>
      </section>
      {/* Footer End */}
    </div>
  );
};

export default Hero;
