import { Avatar, Card, CardContent, CardHeader, Typography } from '@mui/material';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import { Post } from '@/models/post/types';

dayjs.extend(relativeTime);

interface PostItemProps {
  post: Post;
}

const NOW = dayjs();

const PostItem = ({ post }: PostItemProps) => {
  const postTimestamp = dayjs(post.timestamp);
  const isMoreThan5Day = NOW.diff(postTimestamp, 'day') >= 5;

  return (
    <Card sx={{ marginTop: '2rem', width: '100%' }}>
      <CardHeader
        avatar={<Avatar src={post.pictureUrl} />}
        title={post.name}
        subheader={isMoreThan5Day ? postTimestamp.format('DD MMM YYYY HH:mm') : postTimestamp.fromNow()}
      />
      <CardContent>
        <Typography sx={{ whiteSpace: 'pre-wrap' }} variant="body1">
          {post.text}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PostItem;
