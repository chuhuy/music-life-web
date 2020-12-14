import React, { useEffect, useState } from "react";
import { usePageTitle } from "./../../../hooks/usePageTitle";
import TopArtist from "./components/topArtist";
import Genres from "./components/genres";
import Albums from "./components/albums";
import TopChart from "./components/chart";
import { getChart, getTopArtist } from "./../../../api/explore";
import { Genre } from "../../../models/genre";
import { Artist } from "../../../models/artist";
import { Album } from "../../../models/album";
import { Song } from "../../../models/song";
import { useWindowDimensions } from "../../../hooks/useWindowDimensions";
import { useDispatch } from "react-redux";
import { PLAY, SKIP } from "../../../redux/modules/player/actions";

interface Props {}

const ExploreScreen: React.FunctionComponent<Props> = (props: Props) => {
  const [artists, setArtists] = useState<Array<Artist>>([]);
  const [vpopChart, setVpopChart] = useState<Array<Song>>([]);
  const [kpopChart, setKpopChart] = useState<Array<Song>>([]);
  const [usukChart, setUsukChart] = useState<Array<Song>>([]);

  const dispatch = useDispatch();

  const { width } = useWindowDimensions();

  useEffect(() => {
    getTopArtist()
      .then((res) => {
        console.log(res.artists);
        setArtists(res.artists);
      })
      .catch((err) => {
        console.log(err);
      });

    getChart()
      .then((res) => {
        setVpopChart(res.vpop);
        setKpopChart(res.kpop);
        setUsukChart(res.usuk);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  usePageTitle("Music Life | Explore");
  const handlePlayTrendingSong = () => {
    const song: Song = {
      id: 1,
      title: 'Ice Cream',
      artists: 'BLACKPINK, Selena Gomez',
      url: 'https://res.cloudinary.com/anhnguyen3001/video/upload/v1605197446/MusicLife/songUsUk/phhvk9shvbaorfg0o48n.mp3',
      image_url: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/0/0/4/1/0041083628270504efdb6499396aacea.jpg'
    }
    dispatch({type: SKIP, payload: song})
    // dispatch({type: PLAY})
  };

  return (
    <>
      {width > 768 && (
        <div
          style={{
            width: "100%",
            height: "calc(100% - 70px)",
          }}
        >
          <img
            style={{
              height: "calc(100% - 70px)",
              right: 0,
              position: "absolute",
            }}
            src="https://cdn.shopify.com/s/files/1/2282/8555/products/cokodive-random-pre-order-blackpink-1st-full-album-the-album-16226148188240_910x.jpg?v=1598591564"
            alt="Trending"
          />
          <div
            style={{
              width: "100%",
              height: "calc(100% - 70px)",
              background:
                "linear-gradient(to right, #181818 60%, transparent 90%)",
              position: "absolute",
              top: "60px",
              left: 0,
              zIndex: 90,
            }}
          >
            <div
              style={{
                color: "white",
                fontSize: "large",
                fontWeight: "bold",
                marginLeft: "80px",
                marginBottom: "20px",
                marginTop: '50px'
              }}
            >
              TRENDING NOW
            </div>
            <div
              style={{
                color: "white",
                fontSize: "50px",
                fontWeight: "bold",
                marginLeft: "100px",
              }}
            >
              Ice Cream
            </div>
            <div
              style={{
                color: "white",
                fontSize: "15px",
                fontWeight: "bold",
                marginLeft: "100px",
              }}
            >
              BLACKPINK, Selena Gomez
            </div>
            <button
              style={{
                color: "white",
                backgroundColor: "#5773FF",
                borderRadius: "20px",
                width: "150px",
                marginLeft: "100px",
                paddingTop: '10px',
                paddingBottom: '10px',
                fontSize: '15px',
                fontWeight: 'bold',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '50px',
                outline: 'none',
                border: 'none'
              }}
              onClick={() => {handlePlayTrendingSong()}}
            >
              Listen now
            </button>
          </div>
        </div>
      )}
      <div className="row" style={{ marginTop: "20px" }}>
        <div className="col-sm-8">
          <TopArtist artists={artists} />
          <div
            className="row"
            style={{ marginLeft: "0px", marginRight: "7px" }}
          >
            <Genres />
            <Albums />
          </div>
        </div>
        <div className="col-sm-4">
          <TopChart vpop={vpopChart} usuk={usukChart} kpop={kpopChart} />
        </div>
      </div>
    </>
  );
};

export default ExploreScreen;
