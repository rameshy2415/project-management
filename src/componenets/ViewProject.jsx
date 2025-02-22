
const ViewProject = (projectData) => {
  console.log("Project Info in ViewProjectComponent", projectData);
  const { title, description, dueDate, id } = { ...projectData.projectData };

  return (
    <>
      <div className="flex  gap-2 w-8/12 justify-between">
        <div>
          <p className="text-3xl text-black p-2">{title}</p>
          <p className="text-slate-400  p-2">{dueDate}</p>
          <p className="font-sans text-black p-2">{description}</p>
        </div>
        <div className="">
          <button
            type="button"
            className="text-white bg-red-500 px-5 py-2 rounded-md hover:bg-blue-600 cursor-pointer"
            onClick={() => {
              projectData.onDeleteProject(id);
            }}
          >
            Delete Project
          </button>
        </div>
      </div>
    </>
  );
};

export default ViewProject;
