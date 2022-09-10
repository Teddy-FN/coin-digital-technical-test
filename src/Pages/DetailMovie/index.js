/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../actions";
import "./style.css";

const DetailMovie = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const detailMovies = useSelector((state) => state.getDetailMovies);

  useEffect(() => {
    dispatch(actions.getDetailMovies(id));
  }, []);

  return (
    <React.Fragment>
      <div
        style={{
          position: "relative",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://image.tmdb.org/t/p/original/${detailMovies?.data?.backdrop_path})`,
          width: "100%",
          height: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(2px)",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          padding: 20,
          gap: 20,
        }}
      >
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${detailMovies?.data?.poster_path}`}
            alt={"items"}
            style={{
              height: "100%",
              width: "100%",
            }}
          />
        </div>
        <div className="detail-container">
          <h1 className="detail-movie-original-title">
            {detailMovies?.data?.original_title}
          </h1>
          <p className="detail-movie-title">{detailMovies?.data?.title}</p>
          <p className="detail-movie-overview">
            {detailMovies?.data?.overview}
          </p>
          {detailMovies && (
            <ul
              style={{
                display: "flex",
                gap: 10,
              }}
            >
              {detailMovies?.data?.genres?.map((items) => {
                return <li className="list genresList">{items.name}</li>;
              })}
            </ul>
          )}
          {detailMovies && (
            <ul
              style={{
                display: "flex",
                gap: 10,
              }}
            >
              {detailMovies?.data?.spoken_languages?.map((items) => {
                return (
                  <li className="list spokenList">{items.english_name}</li>
                );
              })}
            </ul>
          )}
          {detailMovies && (
            <ul
              style={{
                display: "flex",
              }}
            >
              {detailMovies?.data?.production_companies?.map((items) => {
                return (
                  <div className="detail-movie-production-companies">
                    <div className="img-logo">
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${items?.logo_path}`}
                        alt={"items"}
                        style={{
                          height: "50%",
                          width: "50%",
                        }}
                      />
                      <li>{items.name}</li>
                    </div>
                  </div>
                );
              })}
            </ul>
          )}
          <button className="btn btn-site">
            <a
              href={detailMovies?.data?.homepage}
              target="_blank"
              rel="noreferrer"
              className="site"
            >
              Visit Site
            </a>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DetailMovie;
