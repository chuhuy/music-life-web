import React from "react";
import { Artist } from "../../../../models/artist";
import "./../../../../../styles/container.css";

interface Props {
  artists: Array<Artist>;
}

const TopArtist: React.FunctionComponent<Props> = (props: Props) => {
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
          <div className="see-all-button section-vertical-align">See all</div>
        </div>
        <div
          className="row"
          style={{ paddingLeft: "20px", paddingRight: "20px" }}
        >
          {props.artists.map((artist) => (
            <div style={{ marginRight: "20px", overflow: 'hidden', width: '60px' }} key={artist.artist_id}>
              <img
                className="explore-artist-image"
                alt={artist.name}
                src={artist.image_url}
              />
              <div className="explore-artist-name" style={{maxLines: 1}}>{artist.name}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TopArtist;
