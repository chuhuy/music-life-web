import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { RoutePaths } from './../../shared/constants/routePaths';
import ExploreScreen from './../../modules/home/explore'
import GenreScreen from './../../modules/home/genre';
import AlbumScreen from './../../modules/home/album';
import ArtistScreen from './../../modules/home/artist';

const BaseRoutes = () => {
    return (
        <>
            <Switch>
                <Route path={RoutePaths.Explore} exact component={ExploreScreen} />
                <Route path={RoutePaths.Genres} exact component={GenreScreen} />
                <Route path={RoutePaths.Album} exact component={AlbumScreen} />
                <Route path={RoutePaths.Artist} exact component={ArtistScreen} />
                <Redirect from={RoutePaths.Auth.SignIn} to={RoutePaths.Explore} />
            </Switch>
        </>
    )
};

export default BaseRoutes;
