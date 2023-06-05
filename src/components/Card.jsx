import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


function Cards(props) {
    const { post } = props;
  return (
    <Card sx={{ maxWidth: 300, marginTop: 15, marginRight: 10, marginLeft: 10, backgroundColor:"#dbdbdb" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image = {post.imagen}
          alt="green iguana"
          style={{
            width: '300px',
            height: '300px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
        <CardContent>
          <Typography textAlign="center"  gutterBottom variant="h5" component="div">
            {post.title}
          </Typography>
          <Typography textAlign="justify"  variant="body2" color="text.secondary">
            {post.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default Cards