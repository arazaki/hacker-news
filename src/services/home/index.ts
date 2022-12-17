import {
  useInfiniteQuery,
  UseInfiniteQueryOptions,
} from "@tanstack/react-query";

import { baseApi } from "libs/axios";

import { ApiError } from "libs/axios/types";

import { TopStoriesResponse, TopStoriesApiResponse } from "./types";

const PER_PAGE = 100;

export const useTopStories = (
  options?: UseInfiniteQueryOptions<TopStoriesResponse, ApiError>
) => {
  return useInfiniteQuery<TopStoriesResponse, ApiError>(
    ["useTopStoriesIds"],
    async ({ pageParam = 0 }) => {
      const response = await baseApi.get<TopStoriesApiResponse>(
        `/topstories.json`
      );
      const itemIds = response.data;
      const items = await Promise.all(
        itemIds.slice(pageParam, pageParam + PER_PAGE).map(async (id) => {
          const itemRes = await baseApi.get(`/item/${id}.json`);
          return itemRes.data;
        })
      );
      return {
        items,
        nextPage: pageParam + PER_PAGE,
        total: itemIds.length,
      };
    },

    {
      staleTime: Infinity,
      cacheTime: 0,
      getNextPageParam: (lastPage) => {
        if (lastPage.nextPage >= lastPage.total) {
          return undefined;
        }
        return lastPage.nextPage;
      },
      ...options,
    }
  );
};
