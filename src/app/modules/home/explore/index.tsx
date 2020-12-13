import React, { useEffect, useState } from "react";
import { usePageTitle } from "./../../../hooks/usePageTitle";
import TopArtist from "./components/topArtist";
import Genres from "./components/genres";
import Albums from "./components/albums";
import TopChart from "./components/chart";
import { getGenresAndAlbum, getTopArtist } from "./../../../api/explore";
import { Genre } from "../../../models/genre";
import { Artist } from "../../../models/artist";
import { Album } from "../../../models/album";

interface Props {}

const ExploreScreen: React.FunctionComponent<Props> = (props: Props) => {
  const [genres, setGenres] = useState<Array<Genre>>([]);
  const [artists, setArtists] = useState<Array<Artist>>([]);
  const [albums, setAlbums] = useState<Array<Album>>([]);

  useEffect(() => {
    getGenresAndAlbum()
    .then((response) => {
      setGenres(response.genres);
      setAlbums(response.albums);
    })
    .catch((error) => {
      console.log(error)
    });

    getTopArtist()
    .then((res) => {
      console.log(res.artists);
      setArtists(res.artists)
    })
    .catch((err) => {
      console.log(err);
    })
  }, []);

  usePageTitle("Music Life | Explore");

  return (
    <>
      <div className="row" style={{ marginTop: "20px" }}>
        <div className="col-sm-8">
          <TopArtist artists={artists}/>
          <div
            className="row"
            style={{ marginLeft: "0px", marginRight: "7px" }}
          >
            <Genres genres={genres}/>
            <Albums albums={albums}/>
          </div>
        </div>
        <div className="col-sm-4">
          <TopChart />
        </div>
      </div>
    </>
  );
};

export default ExploreScreen;
