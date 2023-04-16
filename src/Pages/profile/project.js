import React from "react";
import { Button, TextField, Typography } from "@mui/material";
import { postProjectApi } from "../../api/post";
import { useNavigate } from "react-router-dom";

const ProjectForm = () => {
  const navigation = useNavigate();
  const [userData, setUserData] = React.useState({
    title: "",
    description: "",
  });

  const changeHandler = (field, value) => {
    const newState = { ...userData };
    newState[field] = value;
    setUserData(newState);
  };

  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      console.log(userData);
      const data = await postProjectApi(userData);
      if (data) {
        navigation("/projects");
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <section>
      <form onClick={submitHandler} className="border rounded p-4 ">
        <Typography variant="h4">Add Project Form</Typography>
        <div className="grid gap-4 py-4">
          <div className="grid gap-1">
            <Typography>Title:</Typography>
            <TextField
              onChange={(e) => changeHandler("title", e.target.value)}
            />
          </div>
          <div className="grid gap-1">
            <Typography>Description:</Typography>
            <TextField
              multiline
              maxRows={5}
              onChange={(e) => changeHandler("description", e.target.value)}
            />
          </div>

          <Button variant="contained" type="submit">
            Add Project
          </Button>
        </div>
      </form>
    </section>
  );
};

export default ProjectForm;
