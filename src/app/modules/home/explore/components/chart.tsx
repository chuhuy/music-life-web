import React from "react";
import { useDispatch } from "react-redux";
import { Song } from "../../../../models/song";
import { SKIP } from "../../../../redux/modules/player/actions";
import "./../../../../../styles/container.css";

interface Props {
  vpop: Array<Song>;
  kpop: Array<Song>;
  usuk: Array<Song>;
}

const TopChart: React.FunctionComponent<Props> = (props: Props) => {
  const [area, setArea] = React.useState<string>('vpop');
  
  const dispatch = useDispatch();

  const handlePlayMusic = (song: Song) => {
    dispatch({type: SKIP, payload: song})
  }

  return (
    <>
      <div
        className="common-container"
        style={{ marginTop: "10px", paddingLeft: "20px", paddingRight: "20px"}}
      >
        <div className="row title-group">
          <div className="container-title section-vertical-align">
            Top Chart
          </div>
          <button className="see-all-button section-vertical-align" onClick={() => {setArea('vpop')}}>VPOP</button>
          <button className="see-all-button section-vertical-align" onClick={() => {setArea('kpop')}}>KPOP</button>
          <button className="see-all-button section-vertical-align" onClick={() => {setArea('usuk')}}>USUK</button>
        </div>
        <div style={{ paddingLeft: "20px", paddingRight: "20px" }}>
          {area === 'vpop' && props.vpop.map((song, index) => {
            if (index < 10)
              return (
                <div
                  className="row"
                  key={index}
                  style={{
                    alignItems: "center",
                    marginTop: "10px",
                    marginBottom: "10px",
                  }}
                  onClick={() => handlePlayMusic(song)}
                >
                  <div
                    style={{
                      color: "#FFF",
                      fontSize: "large",
                      marginRight: "10px",
                    }}
                  >
                    {(index + 1 < 10) ? `0${index + 1}` : `${index + 1}`}
                  </div>
                  <img
                    className="chart-song-image"
                    alt={song.title}
                    src={song.image_url}
                  />
                  <div style={{marginLeft: '10px'}}>
                    <div style={{color: '#FFF', maxWidth: '200px', overflow: 'hidden', height: '20px'}}>{song.title}</div>
                    <div style={{color: 'grey', fontSize: 'small'}}>{song.artists}</div>
                  </div>
                </div>
              );
            else return <></>;
          })}
          {area === 'kpop' && props.kpop.map((song, index) => {
            if (index < 10)
              return (
                <div
                  className="row"
                  key={index}
                  style={{
                    alignItems: "center",
                    marginTop: "10px",
                    marginBottom: "10px",
                  }}
                  onClick={() => handlePlayMusic(song)}
                >
                  <div
                    style={{
                      color: "#FFF",
                      fontSize: "large",
                      marginRight: "10px",
                    }}
                  >
                    {(index + 1 < 10) ? `0${index + 1}` : `${index + 1}`}
                  </div>
                  <img
                    className="chart-song-image"
                    alt={song.title}
                    src={song.image_url}
                  />
                  <div style={{marginLeft: '10px'}}>
                    <div style={{color: '#FFF', maxWidth: '200px', overflow: 'hidden', height: '20px'}}>{song.title}</div>
                    <div style={{color: 'grey', fontSize: 'small'}}>{song.artists}</div>
                  </div>
                </div>
              );
            else return <></>;
          })}
          {area === 'usuk' && props.usuk.map((song, index) => {
            if (index < 10)
              return (
                <div
                  className="row"
                  key={index}
                  style={{
                    alignItems: "center",
                    marginTop: "10px",
                    marginBottom: "10px",
                  }}
                  onClick={() => handlePlayMusic(song)}
                >
                  <div
                    style={{
                      color: "#FFF",
                      fontSize: "large",
                      marginRight: "10px",
                    }}
                  >
                    {(index + 1 < 10) ? `0${index + 1}` : `${index + 1}`}
                  </div>
                  <img
                    className="chart-song-image"
                    alt={song.title}
                    src={song.image_url}
                  />
                  <div style={{marginLeft: '10px'}}>
                    <div style={{color: '#FFF', maxWidth: '200px', overflow: 'hidden', height: '20px'}}>{song.title}</div>
                    <div style={{color: 'grey', fontSize: 'small'}}>{song.artists}</div>
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

export default TopChart;
