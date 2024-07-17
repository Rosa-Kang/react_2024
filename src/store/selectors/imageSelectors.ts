import axios from "axios";
import { selector } from "recoil";
import { searchState } from "../atoms/searchState";
import { pageState } from "../atoms/pageState";

const API_URL = 'https://api.unsplash.com/search/photos'
const API_KEY = 'GxUY9jkYe5k_clcawSy4TDPsRgpoYIYEdyARnXcxSRc'
const PER_PAGE = 60

export const imageData = selector({
    key: 'imageData',
    get: async ({ get }) => {
        const searchValue = get(searchState);
        const pageValue = get(pageState);

        if (!searchValue) {
            return []; // 검색어가 없을 경우 빈 배열 반환
        }

        try {
            const response = await axios.get(API_URL, {
                params: {
                    query: searchValue,
                    client_id: API_KEY,
                    page: pageValue,
                    per_page: PER_PAGE,
                },
            });
            return response.data;
        } catch (error) {
            console.error(error);
            throw error; 
        }
    },
});