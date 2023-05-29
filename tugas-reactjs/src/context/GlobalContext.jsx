import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  let navigate = useNavigate();

  const [data, setData] = useState(null);

  const [input, setInput] = useState({
    name: "",
    course: "",
    score: "",
  });
  const [fetchStatus, setFetchStatus] = useState(true);

  const [currentId, setCurrentId] = useState(-1);

  //   Inputan
  const handleChange = (event) => {
    let name = event.target.name;
    let course = event.target.course;
    let score = event.target.score;
    let value = event.target.value;

    if (name === "name") {
      setInput({ ...input, name: value });
    } else if (name === "course") {
      setInput({ ...input, course: value });
    } else if (name === "score") {
      setInput({ ...input, score: value });
    }
  };

  //   Submit
  const handleSubmit = (event) => {
    event.preventDefault();

    let { name, course, score } = input;
    console.log(name);
    console.log(course);
    console.log(score);

    if (currentId === -1) {
      axios
        .post("https://backendexample.sanbercloud.com/api/student-scores", {
          name,
          course,
          score,
        })
        .then((res) => {
          console.log(res);
          setFetchStatus(true);
          navigate("/tugas15list");
        })
        .catch((error) => {
          console.log(error);
          alert(error);
        });
    } else {
      axios
        .put(
          `https://backendexample.sanbercloud.com/api/student-scores/${currentId}`,
          {
            name,
            course,
            score,
          }
        )
        .then((res) => {
          setFetchStatus(true);
          navigate("/tugas15list");
        });
    }

    setInput({
      name: "",
      course: "",
      score: "",
    });

    setCurrentId(-1);
  };

  // Delete
  const handleDelete = (event) => {
    let idData = parseInt(event.target.value);

    axios
      .delete(
        `https://backendexample.sanbercloud.com/api/student-scores/${idData}`
      )
      .then((res) => {
        setFetchStatus(true);
      });
  };

  // Edit
  const handleEdit = (event) => {
    let idData = parseInt(event.target.value);

    setCurrentId(idData);
    navigate(`/edit/${idData}`);

    // axios
    //   .get(
    //     `https://backendexample.sanbercloud.com/api/student-scores/${idData}`
    //   )
    //   .then((res) => {
    //     let hasil = res.data;
    //     console.log(hasil);

    //     setInput({
    //       name: hasil.name,
    //       course: hasil.course,
    //       score: hasil.score,
    //     });

    //     setCurrentId(hasil.id);
    //   });
  };

  // intial state & function
  let state = {
    data,
    setData,
    input,
    setInput,
    fetchStatus,
    setFetchStatus,
    currentId,
    setCurrentId,
  };

  let handleFunction = {
    handleSubmit,
    handleDelete,
    handleEdit,
    handleChange,
  };

  return (
    <GlobalContext.Provider
      value={{
        state,
        handleFunction,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
