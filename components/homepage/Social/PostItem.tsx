import { Avatar, Card, CardContent, CardHeader, Typography } from '@mui/material';

import { Post } from '@/models/post/types';

interface PostItemProps {
  post: Post;
}

const PostItem = ({ post }: PostItemProps) => {
  return (
    <Card sx={{ marginTop: '2rem', width: '100%' }}>
      <CardHeader
        avatar={<Avatar src={post.pictureUrl} />}
        title={post.name}
        subheader={new Date(post.timestamp).toLocaleString()}
      />
      <CardContent>
        <Typography variant="body1">{post.text}</Typography>
      </CardContent>
    </Card>
  );
};

export default PostItem;
