import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function MediaCard() {
  return (
    <div className="flex  gap-20 w-10/12 mx-auto pl-6">
      {items.map((i) => {
        return (
          <Card sx={{ maxWidth: 350, paddingTop: "5px" }}>
            <CardMedia sx={{ height: 200 }} image={i.img} />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {i.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {i.description}
              </Typography>
            </CardContent>
            <CardActions>
              <button className="bg-orange-500 p-2 border-2 border-orange-500 rounded-sm text text-white hover:bg-lime-700  hover:border-lime-700 transition duration-200">
                Donate Now
              </button>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
}
const items = [
  {
    img: "/Assets/Photos/event-photo2.jpg",
    title: "Donate for a cause",
    description:
      "Excepteur ut nulla officia amet ex officia aute occaecat veniam sit sint ea nisi tempor. Occaecat Lorem do mollit consectetur sint proident. Sit pariatur irure ipsum culpa Lorem tempor.",
  },
  {
    img: "/Assets/Photos/children.jpeg",
    title: "Donate for a cause",
    description:
      "Excepteur ut nulla officia amet ex officia aute occaecat veniam sit sint ea nisi tempor. Occaecat Lorem do mollit consectetur sint proident. Sit pariatur irure ipsum culpa Lorem tempor.",
  },
  {
    img: "/Assets/Photos/children.jpeg",
    title: "Donate for a cause",
    description:
      "Excepteur ut nulla officia amet ex officia aute occaecat veniam sit sint ea nisi tempor. Occaecat Lorem do mollit consectetur sint proident. Sit pariatur irure ipsum culpa Lorem tempor.",
  },
];
