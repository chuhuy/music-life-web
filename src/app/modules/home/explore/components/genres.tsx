import React from "react";
import { useHistory } from "react-router-dom";
import { RoutePaths } from "../../../../shared/constants/routePaths";
import "./../../../../../styles/container.css";

interface Props {}

const Genres: React.FunctionComponent<Props> = (props: Props) => {
  const history = useHistory();

  return (
    <>
      <div
        className="col-sm-5 common-container"
        style={{ marginTop: "10px", marginRight: "5px", marginBottom: "20px" }}
      >
        <div className="row title-group">
          <div className="container-title section-vertical-align">Genres</div>
          <button
            className="see-all-button section-vertical-align"
            onClick={() => {
              history.push({
                pathname: RoutePaths.Genres,
              });
            }}
          >
            See all
          </button>
        </div>
        <div style={{ paddingLeft: "20px", paddingRight: "20px" }}>
          <div className="row" style={{ marginBottom: "10px" }}>
            <div
              style={{
                backgroundColor: "#476A8A",
                marginRight: "10px",
              }}
              className="col-sm-5 genre-item"
              onClick={() => {
                history.push({
                  pathname: RoutePaths.Genres + `/${3}&Alternative`,
                });
              }}
            >
              Alternative
            </div>
            <div
              style={{
                backgroundColor: "#A69984",
              }}
              className="col-sm-6 genre-item"
              onClick={() => {
                history.push({
                  pathname: RoutePaths.Genres + `/${14}&R&B`,
                });
              }}
            >
              {`R&B`}
            </div>
          </div>
          <div className="row" style={{ marginBottom: "10px" }}>
            <div
              style={{
                backgroundColor: "#A24C34",
                marginRight: "10px",
              }}
              className="col-sm-6 genre-item"
              onClick={() => {
                history.push({
                  pathname: RoutePaths.Genres + `/${11}&Dance Pop`,
                });
              }}
            >
              Dance Pop
            </div>
            <div
              style={{
                backgroundColor: "#0D4045",
              }}
              className="col-sm-5 genre-item"
              onClick={() => {
                history.push({
                  pathname: RoutePaths.Genres + `/${6}&Electronic`,
                });
              }}
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
              onClick={() => {
                history.push({
                  pathname: RoutePaths.Genres + `/${5}&Country`,
                });
              }}
            >
              Country
            </div>
            <div
              style={{
                backgroundColor: "#5547A5",
              }}
              className="col-sm-6 genre-item"
              onClick={() => {
                history.push({
                  pathname: RoutePaths.Genres + `/${4}&Rock`,
                });
              }}
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
