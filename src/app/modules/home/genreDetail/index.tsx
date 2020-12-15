import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { songsByGenre } from "../../../api/explore";
import { Song } from "../../../models/song";
import {
  DISABLE_LOADING,
  ENABLE_LOADING,
} from "../../../redux/modules/loading/actions";
import { SKIP } from "../../../redux/modules/player/actions";
import "./genreDetail.css";
import "./../../../../styles/common.css";

interface Props {}

interface Params {
  id: string;
  genre: string;
}

const GenreDetail: React.FunctionComponent<Props> = (props: Props) => {
  const [songs, setSongs] = useState<Array<Song>>([]);
  let { id, genre } = useParams<Params>();
  const dispatch = useDispatch();

  const [page, setPage] = useState<number>(1);
  const [itemPerPage, setItemPerPage] = useState<number>(15);

  const handleNextPage = () => {
    if (page < songs.length / itemPerPage) setPage(page + 1);
  };

  const handlePreviousPage = () => {
    if (page > 1) setPage(page - 1);
  };

  useEffect(() => {
    dispatch({ type: ENABLE_LOADING });
    songsByGenre(id)
      .then((res) => {
        setSongs(res.songs);
        dispatch({ type: DISABLE_LOADING });
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: DISABLE_LOADING });
      });
  }, []);

  const handlePlayMusic = (song: Song) => {
    dispatch({ type: SKIP, payload: song });
  };

  return (
    <>
      <div
        style={{
          color: "#FFF",
          fontSize: "25px",
          fontWeight: "bold",
          paddingLeft: "80px",
          marginTop: "30px",
          marginBottom: "30px",
        }}
      >{`Genre: ${genre}`}</div>
      <div
        className="row"
        style={{ color: "white", paddingLeft: "80px", marginTop: "30px" }}
      >
        {songs.map((song, index) => {
          if (index < itemPerPage * page && index >= itemPerPage * (page - 1))
            return (
              <>
                <div
                  key={song.id}
                  style={{
                    marginLeft: "20px",
                    marginRight: "20px",
                    marginBottom: "40px",
                    width: "200px",
                  }}
                >
                  <div>
                    <div onClick={() => handlePlayMusic(song)}>
                      <img
                        className="song-genre-image"
                        style={{
                          width: "200px",
                          height: "200px",
                          borderRadius: "100px",
                        }}
                        src={song.image_url}
                        alt={song.title}
                      />
                    </div>
                    <div
                      style={{
                        color: "white",
                        textAlign: "center",
                        marginTop: "10px",
                        fontSize: "20px",
                        fontWeight: "bold",
                        height: "30px",
                        overflow: "hidden",
                      }}
                    >
                      {song.title}
                    </div>
                  </div>
                  <div
                    style={{
                      color: "grey",
                      fontSize: "15px",
                      textAlign: "center",
                    }}
                  >
                    {song.artists}
                  </div>
                </div>
              </>
            );
          else return <></>;
        })}
      </div>
      {songs.length > 0 && (
        <div
          className="row"
          style={{
            paddingBottom: "30px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button className="pagin-button" onClick={() => handlePreviousPage()}>
            Previous
          </button>
          {Array(Math.ceil(songs.length / itemPerPage))
            .fill(0)
            .map((_, index) => {
              if (index + 1 === page)
                return (
                  <div
                    className="pagination-item"
                    style={{ backgroundColor: "#5773FF" }}
                  >
                    {index + 1}
                  </div>
                );
              else
                return (
                  <div
                    onClick={() => {
                      setPage(index + 1);
                    }}
                    className="pagination-item"
                  >
                    {index + 1}
                  </div>
                );
            })}
          <button className="pagin-button" onClick={() => handleNextPage()}>
            Next
          </button>
        </div>
      )}
    </>
  );
};

export default GenreDetail;
