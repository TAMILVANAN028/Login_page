import React, { useEffect, useState } from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/')
      .then(response => setPosts(response.data))
      .catch(error => console.error('Error fetching posts', error));
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Posts</Typography>
      <List>
        {posts.map(post => (
          <ListItem button key={post.id} onClick={() => navigate(`/posts/comments/${post.id}`)}>
            <ListItemText primary={post.title} secondary={post.body} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default PostsPage;

