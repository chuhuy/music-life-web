import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { artistById, songsByArtist } from "../../../api/explore";
import { Song } from "../../../models/song";
import {
  DISABLE_LOADING,
  ENABLE_LOADING,
} from "../../../redux/modules/loading/actions";
import { SKIP } from "../../../redux/modules/player/actions";
import "./artistDetail.css";
import "./../../../../styles/common.css";
import { Artist } from "../../../models/artist";

interface Props {}

interface Params {
  id: string;
}

const ArtistDetail: React.FunctionComponent<Props> = (props: Props) => {
  const [songs, setSongs] = useState<Array<Song>>([]);
  const [artistInfo, setArtistInfo] = useState<Artist>();
  let { id } = useParams<Params>();
  const dispatch = useDispatch();

  const [page, setPage] = useState<number>(1);
  const [itemPerPage, setItemPerPage] = useState<number>(5);

  const handleNextPage = () => {
    if (page < songs.length / itemPerPage) setPage(page + 1);
  };

  const handlePreviousPage = () => {
    if (page > 1) setPage(page - 1);
  };

  useEffect(() => {
    dispatch({ type: ENABLE_LOADING });
    artistById(id)
      .then((res) => {
        // console.log(res.album[0]);
        setArtistInfo(res.artist);
      })
      .catch((err) => {
        console.log(err);
      });

    songsByArtist(id)
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
      <div className="row">
        {artistInfo && (
          <div>
            <img alt={artistInfo.name} src={artistInfo.image_url} />
          </div>
        )}
        <div style={{display: 'flex', flex: 1, height: '30vh', overflow: 'hidden'}}>
          <div
            style={{
              color: "#FFF",
              fontSize: "25px",
              fontWeight: "bold",
              paddingLeft: "80px",
              marginTop: "30px",
              marginBottom: "30px",
            }}
          >{`Artist: ${artistInfo?.name}`}</div>
          {artistInfo?.description === null ? <></> : <div
            style={{
              color: "grey",
              fontSize: "20px",
              paddingLeft: "80px",
              marginTop: "30px",
              marginBottom: "30px",
            }}
          >{`${artistInfo?.description?.replace(' <br>', '')}`}</div>}
        </div>
      </div>
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

export default ArtistDetail;
