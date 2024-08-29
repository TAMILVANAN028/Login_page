import React, { useEffect, useState } from 'react';
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CommentsPage = () => {
  const { postId } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then(response => setComments(response.data))
      .catch(error => console.error('Error fetching comments', error));
  }, [postId]);

  return (
    <Container>
      <Typography variant="h4">Comments</Typography>
      <List>
        {comments.map(comment => (
          <ListItem key={comment.id}>
            <ListItemText primary={comment.name} secondary={comment.body} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default CommentsPage;


