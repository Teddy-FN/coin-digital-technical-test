/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../actions";
import { Components } from "../../Components";
import { Link } from "react-router-dom";
import "./style.css";

const Home = () => {
  const dispatch = useDispatch();
  const categoryMovies = useSelector((state) => state.getAllCategoriesMovies);
  const movies = useSelector((state) => state.getAllMovies);

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(20);

  useEffect(() => {
    dispatch(actions.getCategoriesMovies());
    dispatch(actions.getMovies(currentPage));
  }, [currentPage]);

  useEffect(() => {}, []);

  const paginationPage = (number) => setCurrentPage(number);

  return (
    <div
      style={{
        backgroundColor: "#22282e",
      }}
    >
      <div className="category-container">
        {categoryMovies?.data.map((items) => {
          return (
            <div key={items.id} className="category-list">
              <div>{items.name}</div>
            </div>
          );
        })}
      </div>
      <div className="container-movie-list">
        {movies?.data?.map((items, idx) => {
          const urlPath = `/detail-movie/${items.id}`;
          return (
            <div key={idx} className="movie-item">
              <Link to={urlPath}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${items?.poster_path}`}
                  alt={"items"}
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
                <p
                  style={{
                    color: "#fff",
                  }}
                >
                  {items.original_title}
                </p>
              </Link>
            </div>
          );
        })}
      </div>
      <Components.Pagination
        postPerPage={postPerPage}
        totalPost={movies?.data?.length}
        paginate={paginationPage}
      />
    </div>
  );
};

export default Home;
