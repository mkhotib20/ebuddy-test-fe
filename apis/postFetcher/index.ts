'server only';

import baseFetcher from '../baseFetcher/server';
import { PostDataResponse } from './types';

const postFetcher = async (page = 1, limit = 10) => {
  const result = await baseFetcher<PostDataResponse>(`/api/homepage-post?page=${page}&limit=${limit}`, {
    next: { tags: ['post-home'] },
  });

  return {
    postData: result.data?.data,
    postError: result.error,
  };
};

export default postFetcher;
