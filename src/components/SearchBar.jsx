import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";

const SearchBar = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(setQuery(text));
    setText("");
  };

  return (
    <div>
      <form
        className="flex p-10 gap-4 bg-gray-900"
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          required
          type="text"
          className="w-full border-2 px-4 py-2 text-xl rounded outline-none"
          placeholder="Search anythng"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button className="cursor-pointer border-2 px-4 py-2 text-xl rounded outline-none">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
