import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "@/interface";
export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080" }),
  reducerPath: "api",
  tagTypes: ["user"],
  endpoints: (build) => ({
    getUser: build.query<User, void>({
      query: () => "/api/v1/user",
      providesTags: ["user"],
    }),
  }),
});

export const { useGetUserQuery } = api;
