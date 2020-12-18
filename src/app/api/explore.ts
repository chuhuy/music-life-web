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
        artists: searchByArtist(keyword: "a" first: 50) {
            artist_id
            name
            image_url
        }
    }`;
  return API.graphql(RESOURCE_URL + EXPLORE, query);
};

export const getAlbum = () => {
  const query = `
    query {
        albums: albumsByGenre(genre_id: 1 first:40) {
            album_id
            title
            image_url
            artists
        }
    }
    `;
  return API.graphql(RESOURCE_URL + EXPLORE, query);
};

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
};

export const getGenres = () => {
  const query = `
      query {
          genres(first: 23) {
              genre_id
              name
              image_url
          }
      }
      `;
  return API.graphql(RESOURCE_URL + EXPLORE, query);
};

export const songsByGenre = (genre_id: string) => {
  const query = `
    query {
        songs: songsByGenre (first: 600 genre_id: ${genre_id}) {
            music_id
            title
            artists
            url
            image_url
        }
    }`;
  return API.graphql(RESOURCE_URL + EXPLORE, query);
};

export const songsByAlbum = (album_id: string) => {
  const query = `
    query {
      songs: songsByAlbum (album_id: ${album_id}) {
          music_id
          title
          url
          image_url
          artists
          lyric
      }
    }`;
  return API.graphql(RESOURCE_URL + EXPLORE, query);
};

export const searchAlbum = (name: string) => {
  const query = `
    query {
      album: searchByAlbum(keyword: "${name}" first: 40) {
          album_id
          title
          release_date
          image_url
          artists
      }
    }`;
  return API.graphql(RESOURCE_URL + EXPLORE, query);
};

export const artistById = (id: string) => {
  const query = `
  query {
    artist: getArtistByID(artist_id: ${id}) {
        artist_id
        name
        image_url
        description
    }
}`;
  return API.graphql(RESOURCE_URL + EXPLORE, query);
};

export const songsByArtist = (id: string) => {
  const query = `
    query {
      songs: songsByArtist(artist_id: ${id}) {
          music_id
          title
          url
          image_url
          artists
          lyric
      }
    }`;
  return API.graphql(RESOURCE_URL + EXPLORE, query);
};
