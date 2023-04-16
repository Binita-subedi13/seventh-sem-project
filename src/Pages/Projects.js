import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import { getProjects } from "../api/get";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const [isLoading, setLoading] = React.useState(true);
  const [data, setData] = React.useState(null);
  const [isError, setError] = React.useState(false);

  async function asyncFunction() {
    try {
      const data = await getProjects();
      setData(data?.data);
      setLoading(false);
      console.log(data);
    } catch (e) {
      setLoading(false);
      setError(false);
    }
  }

  useEffect(() => {
    if (isLoading) asyncFunction();
  }, []);

  return (
    <div>
      <Typography variant="h3">
        {isLoading ? "Loading" : isError ? "Error" : "Projects"}
      </Typography>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {data &&
          data?.map((item) => {
            return (
              <ProjectCard
                title={item.title}
                description={item.description}
                id={item.id}
                key={item.id}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Projects;
