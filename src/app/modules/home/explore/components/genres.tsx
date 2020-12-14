import React from "react";
import { Genre } from "../../../../models/genre";
import "./../../../../../styles/container.css";

interface Props {
}

const Genres: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <>
      <div
        className="col-sm-5 common-container"
        style={{ marginTop: "10px", marginRight: "5px", marginBottom: "20px" }}
      >
        <div className="row title-group">
          <div className="container-title section-vertical-align">Genres</div>
          <a className="see-all-button section-vertical-align" href="/genres">See all</a>
        </div>
        <div style={{ paddingLeft: "20px", paddingRight: "20px" }}>
          <div className="row" style={{marginBottom: '10px'}}>
            <div
              style={{
                backgroundColor: "#476A8A",
                marginRight: "10px",
              }}
              className="col-sm-5 genre-item"
            >
              Alternative
            </div>
            <div
              style={{
                backgroundColor: "#A69984",
              }}
              className="col-sm-6 genre-item"
            >
              {`R&B`}
            </div>
          </div>
          <div className="row" style={{marginBottom: '10px'}}>
            <div
              style={{
                backgroundColor: "#A24C34",
                marginRight: "10px",
              }}
              className="col-sm-6 genre-item"
            >
              Dance Pop
            </div>
            <div
              style={{
                backgroundColor: "#0D4045",
              }}
              className="col-sm-5 genre-item"
            >
              Electronic
            </div>
          </div>
          <div className="row">
            <div
              style={{
                backgroundColor: "#A67894",
                marginRight: "10px",
              }}
              className="col-sm-5 genre-item"
            >
              Country
            </div>
            <div
              style={{
                backgroundColor: "#5547A5",
              }}
              className="col-sm-6 genre-item"
            >
              Rock
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Genres;
