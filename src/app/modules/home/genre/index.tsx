import React, { useEffect, useState } from "react";
import { usePageTitle } from "./../../../hooks/usePageTitle";
import { getGenres } from "../../../api/explore";
import { Genre } from "../../../models/genre";
import { useHistory } from "react-router-dom";
import { RoutePaths } from "../../../shared/constants/routePaths";
import { useDispatch } from "react-redux";
import {
  DISABLE_LOADING,
  ENABLE_LOADING,
} from "../../../redux/modules/loading/actions";

interface Props {}

const GenreScreen: React.FunctionComponent<Props> = (props: Props) => {
  usePageTitle("Music Life | Genre");

  const history = useHistory();

  const [genres, setGenres] = useState<Array<Genre>>([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: ENABLE_LOADING });
    getGenres()
      .then((res) => {
        setGenres(res.genres);
        dispatch({ type: DISABLE_LOADING });
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: DISABLE_LOADING });
      });
  }, []);

  const handleOpenGenre = (genre_id: number, name: string) => {
    name = name.replace('/', '-')
    console.log(name);
    history.push({
      pathname: RoutePaths.Genres + `/${genre_id}&${name}`,
    });
  };

  return (
    <>
      <div
        className="row"
        style={{ color: "white", paddingLeft: "80px", paddingTop: "30px" }}
      >
        {genres.map((genre) => (
          <>
            <div
              key={genre.genre_id}
              style={{
                marginLeft: "20px",
                marginRight: "20px",
                marginBottom: "40px",
              }}
              onClick={() => handleOpenGenre(genre.genre_id, genre.name)}
            >
              <img
                style={{
                  width: "200px",
                  height: "200px",
                  borderRadius: "20px",
                }}
                src={genre.image_url}
                alt={genre.name}
              />
              <div
                style={{
                  color: "white",
                  textAlign: "center",
                  marginTop: "10px",
                  fontSize: "20px",
                  fontWeight: "bold",
                  width: "200px",
                  overflow: 'hidden',
                  height: '30px'
                }}
              >
                {genre.name}
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default GenreScreen;
