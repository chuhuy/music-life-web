import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Album } from "../../../../models/album";
import { RoutePaths } from "../../../../shared/constants/routePaths";
import "./../../../../../styles/container.css";
import { getAlbum } from "./../../../../api/explore";

interface Props {
  // albums: Array<Album>
}

const Albums: React.FunctionComponent<Props> = (props: Props) => {
  const [albums, setAlbums] = useState<Array<Album>>([]);

  const history = useHistory();

  useEffect(() => {
    getAlbum()
      .then((res) => {
        console.log(res.albums);
        setAlbums(res.albums);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div
        className="col-sm-7 common-container"
        style={{
          marginTop: "10px",
          marginLeft: "5px",
          marginRight: "-10px",
          marginBottom: "20px",
          paddingBottom: "35px",
        }}
      >
        <div className="row title-group">
          <div className="container-title section-vertical-align">Albums</div>
          <button
            className="see-all-button section-vertical-align"
            onClick={() => {
              history.push({
                pathname: RoutePaths.Album,
              });
            }}
          >
            See all
          </button>
        </div>
        <div style={{ paddingLeft: "20px", paddingRight: "20px" }}>
          {albums.map((album, index) => {
            if (index < 6)
              return (
                <div
                  className="row"
                  key={index}
                  style={{
                    alignItems: "center",
                    marginTop: "10px",
                    marginBottom: "10px",
                  }}
                >
                  {/* <div
                    style={{
                      color: "#FFF",
                      fontSize: "large",
                      marginRight: "10px",
                    }}
                  >
                    {index + 1 < 10 ? `0${index + 1}` : `${index + 1}`}
                  </div> */}
                  <img
                    className="chart-song-image"
                    alt={album.title}
                    src={album.image_url}
                  />
                  <div style={{ marginLeft: "10px" }}>
                    <div
                      style={{
                        color: "#FFF",
                        maxWidth: "200px",
                        overflow: "hidden",
                        height: "20px",
                      }}
                    >
                      {album.title}
                    </div>
                    <div style={{ color: "grey", fontSize: "small" }}>
                      {album.artists}
                    </div>
                  </div>
                </div>
              );
            else return <></>;
          })}
        </div>
      </div>
    </>
  );
};

export default Albums;
