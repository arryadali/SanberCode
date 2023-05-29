import { createContext } from "react";
import { useState } from "react";
import axios from "axios";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const [data, setData] = useState(null);
  const [input, setInput] = useState({
    name: "",
    category: "",
    description: "",
    price: "",
    rating: "",
    release: "",
    size: "",
    andro: "",
    ios: "",
    image:""
  });
  const [fetchStatus, setFetchStatus] = useState(true);
  const [currentId, setCurrentId] = useState(-1);

  //   Inputan
  const handleChange = (event) => {
    let name = event.target.name;
    let category = event.target.category;
    let description = event.target.description;
    let price = event.target.price;
    let rating = event.target.rating;
    let release = event.target.release;
    let size = event.target.size;
    let andro = event.target.andro;
    let ios = event.target.ios;
    let image = event.target.image;
    let value = event.target.value;

    if (name === "name") {
      setInput({ ...input, name: value });
    } else if (name === "category") {
      setInput({ ...input, category: value });
    } else if (name === "description") {
      setInput({ ...input, description: value });
    } else if (name === "price") {
      setInput({ ...input, price: value });
    } else if (name === "rating") {
      setInput({ ...input, rating: value });
    } else if (name === "release") {
      setInput({ ...input, release: value });
    } else if (name === "size") {
      setInput({ ...input, size: value });
    } else if (name === "andro") {
      setInput({ ...input, andro: value });
    } else if (name === "ios") {
      setInput({ ...input, ios: value });
    } else if (name === "image") {
      setInput({ ...input, image: value });
    }
  };

  //   Submit
  const handleSubmit = (event) => {
    event.preventDefault();

    let {
      name,
      category,
      description,
      price,
      rating,
      release,
      size,
      andro,
      ios,
      image
    } = input;

    if (currentId === -1) {
      axios
        .post("https://backendexample.sanbercloud.com/api/mobile-apps", {
          name,
          category,
          description,
          price,
          rating,
          release,
          size,
          andro,
          ios,
          image
        })
        .then((res) => {
          console.log(res);
          setFetchStatus(true);
        })
        .catch((error) => {
          console.log(error);
          alert(error);
        });
    } else {
      axios
        .put(
          `https://backendexample.sanbercloud.com/api/mobile-apps/${currentId}`,
          {
            name,
            category,
            description,
            price,
            rating,
            release,
            size,
            andro,
            ios,
            image
          }
        )
        .then((res) => {
          setFetchStatus(true);
        });
    }

    setInput({
      name: "",
      category: "",
      description: "",
      price: "",
      rating: "",
      release: "",
      size: "",
      andro: "",
      ios: "",
      image:""
    });

    setCurrentId(-1);
  };

  // DELETE
  const handleDelete = (event) => {
    let idData = parseInt(event.target.value);

    axios
      .delete(
        `https://backendexample.sanbercloud.com/api/mobile-apps/${idData}`
      )
      .then((res) => {
        setFetchStatus(true);
      });
  };

  // EDIT
  const handleEdit = (event) => {
    let idData = parseInt(event.target.value);
    axios
      .get(`https://backendexample.sanbercloud.com/api/mobile-apps/${idData}`)
      .then((res) => {
        let hasil = res.data;
        console.log(hasil);

        setInput({
          name: hasil.name,
          category: hasil.category,
          description: hasil.description,
          price: hasil.price,
          rating: hasil.rating,
          release: hasil.release,
          size: hasil.size,
          andro: hasil.andro,
          ios: hasil.ios,
          image : hasil.image
        });

        setCurrentId(hasil.id);
      });
  };

  // INITIAL STATE & FUNCTION
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
    handleChange
  }

  return (
    <GlobalContext.Provider
      value={{
        state,
        handleFunction
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );


};
