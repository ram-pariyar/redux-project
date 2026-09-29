import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CollectionCard from "../components/CollectionCard";
import {
  clearCollection,
  removeCollection,
  removeToast,
} from "../redux/features/collectionSlice";

const CollectionPage = () => {
  const collection = useSelector((state) => state.collection.items);
  const dispatch = useDispatch();

  const clearAllCollection = () => {
    dispatch(clearCollection());
    dispatch(removeToast("Collection Cleared"));
  };

  return (
    <div className="overflow-auto px-10 py-6">
      {collection.length > 0 ? (
        <div className="flex justify-between mb-6">
          <h2 className="text-xl font-medium">Your Collection</h2>
          <button
            onClick={() => {
              clearAllCollection();
            }}
            className="active:scale-95 transition cursor-pointer bg-red-600 px-5 py-2 text-base font-medium rounded"
          >
            Clear Collection
          </button>
        </div>
      ) : (
        <h2 className="text-5xl py-10 text-gray-300 text-center font-medium">
          Collection is Empty
        </h2>
      )}

      <div className="flex justify-start w-full flex-wrap rounded gap-6 overflow-auto px-10 py-6">
        {collection.map((item, idx) => {
          return (
            <div key={idx}>
              <CollectionCard item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CollectionPage;
