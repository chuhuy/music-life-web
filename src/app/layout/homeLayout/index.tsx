import React, { ReactChild } from 'react';
import './styles.css';
import Player from './../../shared/components/player';
import SideBar from './../../shared/components/sidebar';
import { Col } from 'reactstrap';
import './../../shared/components/sidebar/sidebar.css';
import Header from './../../shared/components/header';

interface Props {
    children: ReactChild
}

const HomeLayout: React.FunctionComponent<Props> = (props: Props) => {
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
                <Player />
            </div>
        </>
    )
}

export default HomeLayout;
