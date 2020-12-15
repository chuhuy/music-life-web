import React from "react";
import { RoutePaths } from "../../constants/routePaths";
import { Nav } from "react-bootstrap";
import "./sidebar.css";
import { useHistory, useRouteMatch } from "react-router-dom";

interface Props {}

const Side: React.FunctionComponent<Props> = (props: Props) => {

  const history = useHistory();

  return (
    <>
      <Nav
        className="d-none d-md-block sidebar position-fixed"
      >
        <div className="sidebar-sticky"></div>
        <Nav.Item className="menu-item" style={{ marginTop: "100px" }}>
          <div
            className={
              useRouteMatch(RoutePaths.Explore)?.isExact ? "active-menu-item" : "inactive-menu-item"
            }
            onClick={() => {
              history.push({
                pathname: RoutePaths.Explore,
              });
            }}
          >
            Explore
          </div>
        </Nav.Item>
        <Nav.Item className="menu-item">
          <div
            className={
              useRouteMatch(RoutePaths.Genres)?.isExact ? "active-menu-item" : "inactive-menu-item"
            }
            onClick={() => {
              history.push({
                pathname: RoutePaths.Genres,
              });
            }}
          >
            Genres
          </div>
        </Nav.Item>
        <Nav.Item className="menu-item">
          <div
            className={
              useRouteMatch(RoutePaths.Album)?.isExact ? "active-menu-item" : "inactive-menu-item"
            }
            onClick={() => {
              history.push({
                pathname: RoutePaths.Album,
              });
            }}
          >
            Albums
          </div>
        </Nav.Item>
        <Nav.Item className="menu-item">
          <div
            className={
              useRouteMatch(RoutePaths.Artist)?.isExact ? "active-menu-item" : "inactive-menu-item"
            }
            onClick={() => {
              history.push({
                pathname: RoutePaths.Artist,
              });
            }}
          >
            Artists
          </div>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default Side;
