import React, { ReactChild } from 'react';
import './styles.css';
import Player from './../../shared/components/player';
import { RoutePaths } from '../../shared/constants/routePaths';

interface Props {
    children: ReactChild
}

const HomeLayout: React.FunctionComponent<Props> = (props: Props) => {
    return (
        <>
            <div className="layout-container">
                <div className="row">
                    <div className="left-menu-container col-sm-2 col-xs-1">
                        <div>
                            <p style={{color: 'white'}}>Music Life</p>
                        </div>
                        <div>
                            <a href={RoutePaths.Explore} style={{color: 'white'}}>Explore</a>
                        </div>
                        <div>
                            <a href={RoutePaths.Genres} style={{color: 'white'}}>Genres</a>
                        </div>
                        <div>
                            <a href={RoutePaths.Album} style={{color: 'white'}}>Albums</a>
                        </div>
                        <div>
                            <a href={RoutePaths.Album} style={{color: 'white'}}>Artists</a>
                        </div>
                    </div>
                    <div className="right-body-container col-sm-10 col-xs-11">{props.children}</div>
                </div>
                <Player />
            </div>
        </>
    )
}

export default HomeLayout;
