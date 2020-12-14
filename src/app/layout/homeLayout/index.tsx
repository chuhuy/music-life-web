import React, { ReactChild, useEffect, useMemo } from "react";
import "./styles.css";
import Player from "./../../shared/components/player";
import SideBar from "./../../shared/components/sidebar";
import { Col } from "reactstrap";
import "./../../shared/components/sidebar/sidebar.css";
import Header from "./../../shared/components/header";
import { useDispatch } from "react-redux";
import { DISABLE_LOADING } from "../../redux/modules/loading/actions";
interface Props {
  children: ReactChild;
}

const HomeLayout: React.FunctionComponent<Props> = (props: Props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: DISABLE_LOADING });
  }, []);

  return (
    <>
      <div className="layout-container">
        <div className="row">
          <Col xs={1} sm={3} md={2} id="sidebar-wrapper">
            <SideBar />
          </Col>
          <Col xs={11} sm={9} md={10} id="page-content-wrapper">
            <Header />
            {props.children}
          </Col>
        </div>
        {useMemo(() => (
          <Player />
        ), [])}
      </div>
    </>
  );
};

export default HomeLayout;
