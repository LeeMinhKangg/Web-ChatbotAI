import { api } from './api';

export const newsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getLatestNews: builder.query<any, { limit?: number } | void>({
      query: (params = {}) => {
        const queryParams = new URLSearchParams();
        if (params.limit) queryParams.append('limit', params.limit.toString());

        return {
          url: `/news/latest?${queryParams.toString()}`,
          method: 'GET',
        };
      },
      providesTags: ['News'],
    }),

    getAllNews: builder.query<any, { 
      page?: number; 
      limit?: number; 
      search?: string;
      status?: string;
    } | void>({
      query: (params = {}) => {
        const queryParams = new URLSearchParams();
        if (params.page) queryParams.append('page', params.page.toString());
        if (params.limit) queryParams.append('limit', params.limit.toString());
        if (params.search) queryParams.append('search', params.search);
        if (params.status) queryParams.append('status', params.status);

        return {
          url: `/news?${queryParams.toString()}`,
          method: 'GET',
        };
      },
      providesTags: ['News'],
    }),

    getNewsBySlug: builder.query<any, string>({
      query: (slug) => ({
        url: `/news/slug/${slug}`,
        method: 'GET',
      }),
      providesTags: (result, error, slug) => [{ type: 'News', id: slug }],
    }),

    getNewsById: builder.query<any, string>({
      query: (id) => ({
        url: `/news/${id}`,
        method: 'GET',
      }),
      providesTags: (result, error, id) => [{ type: 'News', id }],
    }),

    createNews: builder.mutation<any, any>({
      query: (newsData) => ({
        url: '/news',
        method: 'POST',
        body: newsData,
      }),
      invalidatesTags: ['News'],
    }),

    updateNews: builder.mutation<any, { id: string } & any>({
      query: ({ id, ...newsData }) => ({
        url: `/news/${id}`,
        method: 'PUT',
        body: newsData,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: 'News', id },
        'News',
      ],
    }),

    deleteNews: builder.mutation<any, string>({
      query: (id) => ({
        url: `/news/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, id) => [
        { type: 'News', id },
        'News',
      ],
    }),
  }),
});

export const {
  useGetLatestNewsQuery,
  useGetAllNewsQuery,
  useGetNewsBySlugQuery,
  useGetNewsByIdQuery,
  useCreateNewsMutation,
  useUpdateNewsMutation,
  useDeleteNewsMutation,
} = newsApi;