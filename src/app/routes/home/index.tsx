import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { RoutePaths } from "./../../shared/constants/routePaths";
import ExploreScreen from "./../../modules/home/explore";
import GenreScreen from "./../../modules/home/genre";
import AlbumScreen from "./../../modules/home/album";
import ArtistScreen from "./../../modules/home/artist";
import HomeLayout from "../../layout/homeLayout";
import GenreDetail from "../../modules/home/genreDetail";

const BaseRoutes = () => {
  return (
    <>
      <HomeLayout>
        <Switch>
          <Route path={RoutePaths.Explore} exact component={ExploreScreen} />
          <Route path={RoutePaths.Genres} exact component={GenreScreen} />
          <Route path={RoutePaths.Genres + "/:id&:genre"} exact component={GenreDetail} />
          <Route path={RoutePaths.Album} exact component={AlbumScreen} />
          <Route path={RoutePaths.Artist} exact component={ArtistScreen} />
          <Redirect from={RoutePaths.Auth.SignIn} to={RoutePaths.Explore} />
        </Switch>
      </HomeLayout>
    </>
  );
};

export default BaseRoutes;
