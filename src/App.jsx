import { useState } from "react";
import notebook from "./assets/notebook.png";
import NewProject from "./componenets/NewProject";
import ProjectDetails from "./componenets/ProjectDetails";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";

function App() {
  const [projectArray, setProjectArray] = useState([]);
  const [showNewProjectForm, setShowNewProjectForm] = useState(false);
  const [projectInfo, setProjectInfo] = useState([]);

  const newProjectHandler = () => {
    setShowNewProjectForm(true);
  };

  const saveProjectHandler = (projectData) => {
    const preVal = projectArray;
    setProjectArray([...preVal, { ...projectData, id: crypto.randomUUID() }]);
  };

  const cancelProjectHandler = () => {
    setShowNewProjectForm(false);
  };

  const deleteProjectHandler = (idToDelete) => {
    const updatedArray = projectArray.filter(item => item.id !== idToDelete);
    setProjectArray([...updatedArray]);
    setShowNewProjectForm((prev) => !prev);
  };

  const viewProjectHandler = (projectDetails) => {
    setShowNewProjectForm(false);
    setProjectInfo(projectDetails);
  };

  return (
    <>
      <main>
        <div className="flex">
          <aside className="h-screen bg-black w-3/12  flex flex-col items-center gap-8 pt-8">
            <h3 className="text-amber-50">YOUR PROJECTS</h3>
            <button
              type="button"
              className="text-white bg-gray-600 px-5 py-2 rounded-md hover:bg-blue-600 cursor-pointer"
              onClick={newProjectHandler}
            >
              +Add Project
            </button>

            <hr className="border-0.5 border-t border-white w-8/12" />
            <div className="flex flex-col gap-2">
            {projectArray.map((value, index) => {
              return (
                <div className="flex" key={index}>
                  <p
                    className="text-black bg-gray-100 p-1 pl-2  rounded-md text-center cursor-pointer hover:bg-gray-400 flex justify-center items-center gap-5"
                    onClick={() => {
                      viewProjectHandler(value);
                    }}
                  >
                    {value.title}{" "}
                    {<ChevronDoubleRightIcon className="w-6 h-6" />}
                  </p>
                </div>
              );
            })}
            </div>
           
          </aside>

          {projectArray.length === 0 && !showNewProjectForm && (
            <div className="flex flex-col items-center gap-7 w-9/12 mt-16">
              <img className="w-30 h-30" src={notebook} alt="" />
              <h4 className="text-2xl font-semibold">No Project Selected</h4>
              <p className=" text-slate-600 font-semibold">
                Select a project or get started with new one
              </p>
              <button
                type="button"
                className="text-white bg-black px-5 py-2 rounded-md hover:bg-blue-600 cursor-pointer"
                onClick={newProjectHandler}
              >
                Create new Project
              </button>
            </div>
          )}

          {showNewProjectForm && (
            <NewProject saveProjectHandler={saveProjectHandler} onCancelProjectHandler={cancelProjectHandler} />
          )}

          {!showNewProjectForm && projectArray.length >= 1 && (
            <ProjectDetails onDeleteProject={deleteProjectHandler} projectData={projectInfo} />
          )}
        </div>
      </main>
    </>
  );
}

export default App;
