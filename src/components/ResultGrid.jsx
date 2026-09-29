import { useEffect } from "react";
import { fetchPhotos, fetchVideos } from "../api/mediaApi";
import {
  setQuery,
  setLoading,
  setError,
  setResults,
} from "../redux/features/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import ResultCard from "./ResultCard";

const ResultGrid = () => {
  const dispatch = useDispatch();
  const { query, activeTab, results, loading, error } = useSelector((store) => {
    return store.search;
  });

  useEffect(
    function () {
      if (!query) return;
      const getData = async () => {
        try {
          dispatch(setLoading());
          let data = [];
          if (activeTab == "photos") {
            let response = await fetchPhotos(query);
            data = response.results.map((item) => {
              return {
                id: item.id,
                type: "photo",
                title: item.alt_description,
                thumbnail: item.urls.small,
                src: item.urls.full,
                url: item.links.html,
              };
            });
          }
          if (activeTab == "videos") {
            let respnse = await fetchVideos(query);
            data = respnse.videos.map((item) => {
              return {
                id: item.id,
                type: "video",
                title: item.user.name || "video",
                thumbnail: item.image,
                src: item.video_files[0].link,
                url: item.url,
              };
            });
          }
          dispatch(setResults(data));
        } catch (err) {
          dispatch(setError(err.message));
        }
      };
      getData();
    },
    [query, activeTab],
  );

  if (error) return <h1> Error</h1>;
  if (loading) return <h1> Loading...</h1>;

  return (
    <div className=" flex justify-between w-full flex-wrap rounded gap-6 overflow-auto px-10">
      {results.map((item, idx) => {
        return (
          <div key={idx}>
            <ResultCard item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default ResultGrid;
