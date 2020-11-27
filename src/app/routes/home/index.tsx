import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { RoutePaths } from './../../shared/constants/routePaths';
import ExploreScreen from './../../modules/home/explore'
import GenreScreen from './../../modules/home/genre';
import AlbumScreen from './../../modules/home/album';

const BaseRoutes = () => {
    return (
        <>
            <Switch>
                <Route path={RoutePaths.Explore} component={ExploreScreen} />
                <Route path={RoutePaths.Genres} component={GenreScreen} />
                <Route path={RoutePaths.Album} component={AlbumScreen} />
            </Switch>
        </>
    )
};

export default BaseRoutes;
