import React from "react";
import { useDispatch } from "react-redux";
import { addCollection, addedToast } from "../redux/features/collectionSlice";

const ResultCard = ({ item }) => {
  // const addToCollection = (item) => {
  //   const oldData = JSON.parse(localStorage.getItem("collection")) || [];
  //   const newData = [...oldData, item];
  //   console.log(newData);
  //   localStorage.setItem("collection", JSON.stringify(newData));
  // };

  const dispatch = useDispatch();
  const addToCollection = (item) => {
    dispatch(addCollection(item));
    dispatch(addedToast());
  };

  return (
    <div className="w-[18vw] relative h-80 bg-white rounded-xl overflow-hidden">
      <a href={item.url} target="_blank" className="h-full">
        {item.type == "photo" ? (
          <img className="h-full w-full object-cover" src={item.src} alt="" />
        ) : (
          ""
        )}
        {item.type == "video" ? (
          <video
            className="h-full w-full object-center"
            autoPlay
            loop
            muted
            src={item.src}
          ></video>
        ) : (
          ""
        )}
      </a>
      <div
        id="bottom"
        className=" flex justify-between gap-2 items-center w-full px-6 py-6 absolute bottom-0 text-white absolute bottom-0"
      >
        <h2 className="text-xl font-semibold capitalize h-14 overflow-hidden ">
          {item.title}
        </h2>
        <button
          className="acitve:scale-95 bg-indigo-600 text-white rounded px-3 py-1 cursor-pointer font-medium"
          onClick={() => {
            addToCollection(item);
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
