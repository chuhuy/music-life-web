import { API } from './index';
import { RESOURCE_URL, EXPLORE } from './../shared/constants/api';

export const exploreScreen = () => {
    const query = `
        query {
            genres {
                genre_id
                name
                image_url
            }
            kpop: chart(area: KPOP) {
                music_id
                title
                url
            }
        }
    `;
    return API.graphql(RESOURCE_URL + EXPLORE, query);
};
