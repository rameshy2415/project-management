import NewTask from "./NewTask";
import ViewProject from "./ViewProject";



const ProjectDetails = (projectData) => {
  return (
    <>
      <div className="flex flex-col items-start  gap-2 w-9/12 mt-16 pl-30">
        <ViewProject {...projectData}  />
        <hr className="border-0.5 border-t border-gray-700 my-8 w-8/12" />
        <NewTask />
      </div>
    </>
  );
};

export default ProjectDetails;
