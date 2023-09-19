import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const pokemonApi=createApi({
    
    reducerPath:"baseApi",
    baseQuery:fetchBaseQuery({baseUrl:'https://jsonplaceholder.typicode.com'}),
    endpoints: (builder)=>({
    getPost: builder.query({
            query:()=> '/posts'
        }),
    getPostName:builder.query({
        query:(id)=> `/posts/${id}`
    }),
    setPostData:builder.mutation({
        query:(data)=>({
        url: `/posts`,
        method: 'POST',
        body: data,  
        })
    })


    })
    
})
export const {useGetPostQuery,useGetPostNameQuery,useSetPostDataMutation} =pokemonApi