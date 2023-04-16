import React from "react";
import ProjectForm from "./project";
import { Button, Typography } from "@mui/material";
import { getDonations, getMeApi } from "./../../api/get";

const ProfilePage = () => {
  const [addProject, setAddProject] = React.useState(false);
  const [isLoading, setLoading] = React.useState(true);

  const [data, setData] = React.useState(null);
  const [isError, setError] = React.useState(false);

  async function asyncFunction() {
    try {
      const data = await getMeApi();
      setData(data?.data);
      setLoading(false);
      console.log(data);
    } catch (e) {
      setLoading(false);
      setError(false);
    }
  }

  React.useEffect(() => {
    if (isLoading) asyncFunction();
  }, []);
  return (
    <section className="p-8 max-w-xl mx-auto">
      {data && (
        <div className="grid gap-2 p-4 bg-green-800 text-white">
          <Typography variant="h5">{data?.username}</Typography>
          <Typography>Email:{data?.email}</Typography>
        </div>
      )}
      <div className="my-4">
        <Button variant="contained" onClick={() => setAddProject(!addProject)}>
          {addProject ? "Hide Project Form" : "Add Project"}
        </Button>
      </div>
      {addProject && <ProjectForm />}
      {data && <DontaionList id={data?.id} />}
    </section>
  );
};

export default ProfilePage;

const DontaionList = ({ id }) => {
  const [isLoading, setLoading] = React.useState(true);
  const [data, setData] = React.useState(null);
  const [isError, setError] = React.useState(false);

  async function asyncFunction() {
    try {
      const data = await getDonations();
      setData(data?.data?.filter((item) => item.userId === id));
      setLoading(false);
      console.log(data);
    } catch (e) {
      setLoading(false);
      setError(false);
    }
  }

  React.useEffect(() => {
    if (isLoading) asyncFunction();
  }, []);
  return (
    <div className="grid gap-3">
      <Typography variant="h5">Donation List</Typography>
      {data?.map((item, index) => {
        return (
          <div className="bg-green-200 p-4">
            <Typography>
              {index + 1}. Project_Id : <b>{item.projectId}</b>
            </Typography>
            <Typography variant="h6">Rs:4{item.price}</Typography>
          </div>
        );
      })}
    </div>
  );
};
