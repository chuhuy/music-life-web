import React, { useState, useRef, useEffect, RefObject } from "react";
import { Col } from "reactstrap";
import { songs } from "./../../constants/dummyData/song";
import "./styles.css";
import TimeSlider from "react-input-slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faRandom,
  faStepBackward,
  faStepForward,
  faRedo,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { Song } from "../../../models/song";
import { PLAY, SKIP, PAUSE } from "../../../redux/modules/player/actions";
import { useWindowDimensions } from "./../../../hooks/useWindowDimensions";

interface Props extends DispatchProps, StateProps {}

const mapDispatchToProps = (dispatch: any) => {
  return {
    saveSongToStore: (song: Song) => dispatch({ type: SKIP, payload: song }),
    playMusic: () => dispatch({ type: PLAY }),
    pauseMusic: () => dispatch({ type: PAUSE }),
  };
};
const mapStateToProps = (state: any) => ({
  player: state.player,
});

const Player = (props: Props) => {
  const { width } = useWindowDimensions();

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // const audioRef = useRef();
  const [refs] = useState<{
    [key: string]: RefObject<HTMLAudioElement>;
  }>({
    audio: useRef<HTMLAudioElement>(null),
  });

  useEffect(() => {
    if(refs.audio.current) setDuration(refs.audio.current.duration);
    // refs.audio.current?.play();
  }, []);
  const handlePausePlayClick = () => {
    if (props.player.isPlaying) {
      refs.audio.current?.pause();
      props.pauseMusic();
    } else {
      refs.audio.current?.play();
      props.playMusic();
    }
  };
  const handleTimeSliderChange = (x: any) => {
    if (refs.audio.current) refs.audio.current.currentTime = x;
    console.log(x);
    setCurrentTime(x);
    if (!props.player.isPlaying) {
      props.playMusic();
      if (refs.audio.current) refs.audio.current.play();
    }
  };
  return (
    <>
      <div className="player-container row" style={{zIndex: 100}}>
        <div className="player-left-section section-vertical-align">
          <img
            src={props.player.image_url}
            className="player-image"
            alt="Current Song"
          />
          <Col className={`title-group ${width < 400 ? "d-none" : ""}`}>
            <div className="player-song-title">{props.player.title}</div>
            <div className="player-artist">{props.player.artists}</div>
          </Col>
        </div>
        <div className="player-center-section section-vertical-align">
          <div className="section-vertical-align">
            <button onClick={() => {}} className="player-icon-button">
              <FontAwesomeIcon icon={faRandom} color="#FFF" size="1x" />
            </button>
            <button onClick={() => {}} className="player-icon-button">
              <FontAwesomeIcon icon={faStepBackward} color="#FFF" size="1x" />
            </button>
            <button
              onClick={handlePausePlayClick}
              className="player-icon-button"
            >
              <div className="play-icon">
                <FontAwesomeIcon
                  icon={props.player.isPlaying ? faPause : faPlay}
                  color="#FFF"
                  size="1x"
                />
              </div>
            </button>
            <button onClick={() => {}} className="player-icon-button">
              <FontAwesomeIcon icon={faStepForward} color="#FFF" size="1x" />
            </button>
            <button onClick={() => {}} className="player-icon-button">
              <FontAwesomeIcon icon={faRedo} color="#FFF" size="1x" />
            </button>
          </div>
          <div>
            <TimeSlider
              axis="x"
              xmax={duration}
              x={currentTime}
              onChange={({ x }) => handleTimeSliderChange(x)}
              styles={{
                track: {
                  backgroundColor: "#B3B3B3",
                  height: "4px",
                },
                active: {
                  backgroundColor: "#5773FF",
                  height: "4px",
                },
                thumb: {
                  width: "10px",
                  height: "10px",
                  backgroundColor: "#FFF",
                  borderRadius: 5,
                },
              }}
            />
            <audio
              ref={refs.audio}
              src={props.player.url}
              onTimeUpdate={() =>
                setCurrentTime(
                  refs.audio.current ? refs.audio.current.currentTime : 0
                )
              }
              onEnded={() => props.pauseMusic()}
            />
          </div>
        </div>
        {width > 768 && (
          <div className="player-right-section section-vertical-align"></div>
        )}
      </div>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);

type DispatchProps = ReturnType<typeof mapDispatchToProps>;
type StateProps = ReturnType<typeof mapStateToProps>;
