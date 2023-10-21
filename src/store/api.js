import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
const COHORT = '2309-FSA-ET-WEB-FT-SF'


// this file is for the maim hub for all of our api routes
 const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: `https://strangers-things.herokuapp.com/api/${COHORT}`,
        prepareHeaders: (headers, { getState }) => {
            const token = getState().auth.token;
            if (token) {
                headers.set('authorization', `Bearer ${token}` )
            }
            return headers
        }
    }),
    endpoints: () => ({})
})
export default api;