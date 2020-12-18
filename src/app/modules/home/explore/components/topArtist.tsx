import React from "react";
import { useHistory } from "react-router-dom";
import { Artist } from "../../../../models/artist";
import { RoutePaths } from "../../../../shared/constants/routePaths";
import "./../../../../../styles/container.css";

interface Props {
  artists: Array<Artist>;
}

const TopArtist: React.FunctionComponent<Props> = (props: Props) => {
  const history = useHistory();

  const handleOpenArtist = (artist_id: string) => {
    // name = name.replace('/', '-')
    // console.log(name);
    history.push({
      pathname: RoutePaths.Artist + `/${artist_id}`,
    });
  };
  return (
    <>
      <div
        className="common-container"
        style={{ marginTop: "10px", paddingLeft: "20px", paddingRight: "20px" }}
      >
        <div className="row title-group">
          <div className="container-title section-vertical-align">
            Top Artists
          </div>
          <button
            onClick={() => {
              history.push({
                pathname: RoutePaths.Artist,
              });
            }}
            className="see-all-button section-vertical-align"
          >
            See all
          </button>
        </div>
        <div
          className="row"
          style={{ paddingLeft: "20px", paddingRight: "20px" }}
        >
          {props.artists.map((artist, index) => {
            if (index < 12)
              return (
                <div
                  style={{
                    marginRight: "20px",
                    overflow: "hidden",
                    width: "60px",
                  }}
                  key={artist.artist_id}
                  onClick={() => handleOpenArtist(artist.artist_id)}
                >
                  <img
                    className="explore-artist-image"
                    alt={artist.name}
                    src={artist.image_url}
                  />
                  <div className="explore-artist-name" style={{ maxLines: 1 }}>
                    {artist.name}
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

export default TopArtist;
