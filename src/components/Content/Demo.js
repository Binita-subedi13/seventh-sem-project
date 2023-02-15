import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345,paddingTop:"5px" }}>
      <CardMedia
        sx={{ height: 200 }}
        image="/children.jpeg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Donate for a cause
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Excepteur ut nulla officia amet ex officia aute occaecat veniam sit sint ea nisi tempor. Occaecat Lorem do mollit consectetur sint proident. Sit pariatur irure ipsum culpa Lorem tempor.
        </Typography>
      </CardContent>
      <CardActions>
      <button  className='bg-orange-500 p-2 rounded-sm text text-white hover'>Donate Now</button>

      </CardActions>
    </Card>
  );
}
