import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getTopArtist } from "../../../api/explore";
import { Artist } from "../../../models/artist";
import { DISABLE_LOADING, ENABLE_LOADING } from "../../../redux/modules/loading/actions";
import { RoutePaths } from "../../../shared/constants/routePaths";
import { usePageTitle } from "./../../../hooks/usePageTitle";

interface Props {}

const ArtistScreen: React.FunctionComponent<Props> = (props: Props) => {
  usePageTitle("Music Life | Artist");

  const history = useHistory();

  const [artists, setArtists] = useState<Array<Artist>>([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: ENABLE_LOADING });
    getTopArtist()
      .then((res) => {
        setArtists(res.artists);
        dispatch({ type: DISABLE_LOADING });
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: DISABLE_LOADING });
      });
  }, []);

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
        className="row"
        style={{ color: "white", paddingLeft: "80px", paddingTop: "30px" }}
      >
        {artists.map((artist) => (
          <>
            <div
              key={artist.artist_id}
              style={{
                marginLeft: "20px",
                marginRight: "20px",
                marginBottom: "40px",
              }}
              onClick={() => handleOpenArtist(artist.artist_id)}
            >
              <img
                style={{
                  width: "200px",
                  height: "200px",
                  borderRadius: "20px",
                }}
                src={artist.image_url}
                alt={artist.name}
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
                {artist.name}
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default ArtistScreen;
