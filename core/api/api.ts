import * as AXIOS from 'axios';


export const axios = AXIOS.default.create({
    baseURL: 'https://api.punkapi.com/v2/beers/',
    headers: {
        'Access-Control-Allow-Origin': true,
    },
});

export const getBeers = async (currentPage: number) => {
    return await axios.get(`?page=${currentPage}&per_page=16`, { headers: { "Access-Control-Allow-Origin": "*" } });
};

export const getFoundBeer = async (search: string) => {
    return await axios.get(`?beer_name=${search}`, { headers: { "Access-Control-Allow-Origin": "*" } });
};

export const getOneBeer = async (id: string | string[]) => {
    return await axios.get(`${id}`, { headers: { "Access-Control-Allow-Origin": "*" } });
};
