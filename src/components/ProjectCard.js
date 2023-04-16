import React from "react";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";

import { postDonationApi } from "../api/post";
import { toast } from "react-toastify";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const ProjectCard = ({ title, description, id }) => {
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);

  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      const data = await postDonationApi(id, value);
      if (data) {
        toast(`Sucessfully Donated ${value}`);
        handleOpen();
        setValue(0);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="p-4 grid gap-4 bg-green-100">
      <Typography variant="h4">{title}</Typography>
      <Typography className="text-gray-800">{description}</Typography>
      <Button onClick={handleOpen} variant="contained">
        Donate Now
      </Button>

      <Modal open={open} onClose={handleOpen}>
        <Box sx={{ ...style, width: 400 }}>
          <form className="grid gap-2" onClick={submitHandler}>
            <TextField
              value={value}
              onChange={(e) => setValue(parseInt(e.target.value))}
              type="number"
            />
            <Button type="submit" variant="contained">
              Donate Now
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default ProjectCard;
