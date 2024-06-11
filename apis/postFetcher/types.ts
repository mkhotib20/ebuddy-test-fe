import { Post } from '@/models/post/types';

export interface PostDataResponse {
  hasNext?: boolean;
  data?: Post[];
}
