import React from "react";
import { useDispatch } from "react-redux";
import {
  removeCollection,
  removeToast,
} from "../redux/features/collectionSlice";

const CollectionCard = ({ item }) => {
  const dispatch = useDispatch();
  const removeFromCollection = () => {
    dispatch(removeCollection(item));
    dispatch(removeToast("Removed From Collection!"));
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
          className="acitve:scale-95 bg-red-600 text-white rounded px-3 py-1 cursor-pointer font-medium"
          onClick={() => {
            removeFromCollection(item);
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CollectionCard;
