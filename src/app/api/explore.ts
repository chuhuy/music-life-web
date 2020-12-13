import { API } from "./index";
import { RESOURCE_URL, EXPLORE } from "./../shared/constants/api";

export const exploreScreen = () => {
  const query = `
    query {
        searchByArtist(keyword: "a" first: 6) {
            artist_id
            name
        }
        genres(first: 6 offset: 0) {
            genre_id
            name
            image_url
        }
        albumsByGenre(genre_id: 1) {
            album_id
            title
            image_url
            artists
        }
    }
    `;
  return API.graphql(RESOURCE_URL + EXPLORE, query);
};

export const getTopArtist = () => {
    const query = `
    query {
        artists: searchByArtist(keyword: "a" first: 10) {
            artist_id
            name
            image_url
        }
    }`;
    return API.graphql(RESOURCE_URL + EXPLORE, query);
}

export const getGenresAndAlbum = () => {
    const query = `
    query {
        genres(first: 6 offset: 0) {
            genre_id
            name
            image_url
        }
        albums: albumsByGenre(genre_id: 1) {
            album_id
            title
            image_url
            artists
        }
    }
    `;
    return API.graphql(RESOURCE_URL + EXPLORE, query);
}

export const getChart = () => {
    const query = `
        query {
            kpop: chart(area: KPOP) {
                music_id
                title
                url
                image_url
                artists
            }
            vpop: chart(area: VPOP) {
                music_id
                title
                url
                image_url
                artists
            }
            usuk: chart(area: USUK) {
                music_id
                title
                url
                image_url
                artists
            }
        }
    `;
    return API.graphql(RESOURCE_URL + EXPLORE, query);
}