import React, { useState, useEffect } from "react";
import { RoutePaths } from "../../constants/routePaths";
import { Nav } from 'react-bootstrap';
import './sidebar.css';
import { getCurrentUrl } from './../../helpers/url';

interface Props {}

const Side: React.FunctionComponent<Props> = (props: Props) => {

    const [currentTab, setCurrentTab] = useState<number>(0);

    useEffect(() => {
        switch(getCurrentUrl(window.location)) {
            case RoutePaths.Explore: {
                setCurrentTab(0);
                break;
            }
            case RoutePaths.Genres: {
                setCurrentTab(1);
                break;
            }
            case RoutePaths.Album: {
                setCurrentTab(2);
                break;
            }
            case RoutePaths.Artist: {
                setCurrentTab(3);
                break;
            }
        }
    }, []);

    return (
        <>
    
            <Nav className="col-md-12 d-none d-md-block sidebar">
                <div className="sidebar-sticky"></div>
                <Nav.Item>
                    <Nav.Link className={currentTab === 0 ? 'active-menu-item' : 'inactive-menu-item'} href={RoutePaths.Explore}>Explore</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className={currentTab === 1 ? 'active-menu-item' : 'inactive-menu-item'}  href={RoutePaths.Genres}>Genres</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className={currentTab === 2 ? 'active-menu-item' : 'inactive-menu-item'} href={RoutePaths.Album}>Albums</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className={currentTab === 3 ? 'active-menu-item' : 'inactive-menu-item'} href={RoutePaths.Artist}>Artists</Nav.Link>
                </Nav.Item>
            </Nav>
          
        </>
    );
};

export default Side;