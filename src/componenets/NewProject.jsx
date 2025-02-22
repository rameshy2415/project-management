import { useState } from "react";

// eslint-disable-next-line react/prop-types
const NewProject = ({ saveProjectHandler, onCancelProjectHandler }) => {
  const projectData = {
    title: "",
    description: "",
    dueDate: new Date(new Date().toISOString()),
  };


  const [projectInfo, setProjectInfo] = useState(projectData);


  const addProjectHandler = () => {
    saveProjectHandler(projectInfo);
  };

  const cancelProjectHandler = () => {
    onCancelProjectHandler();
  };

  const changeHandler = (field, event) => {
    console.log(event);
    const val = event.target.value;

    setProjectInfo((prev) => {
      return {
        ...prev,
        [field]: val,
      };
    });
  };

  return (
    <>
      <form className="w-9/12 mt-16 pl-30">
        <div className="flex flex-col items-start gap-7 w-9/12 mt-16 pl-20 pb-10 rounded-md ">
          <div className="flex justify-end items-end gap-2.5 w-9/12">
            <button
              type="button"
              className="text-white bg-gray-400 px-5 py-2 rounded-md hover:bg-blue-600 cursor-pointer mt-10"
              onClick={cancelProjectHandler}
            >
              Cancel
            </button>
            <button
              type="button"
              className="text-white bg-black px-5 py-2 rounded-md hover:bg-blue-600 cursor-pointer"
              onClick={addProjectHandler}
            >
              Save
            </button>
          </div>

          <div className="flex flex-col space-y-2 w-9/12">
            <label htmlFor="title" className="text-gray-500 font-medium">
              TITLE
            </label>
            <input
              type="text"
              name="title"
              value={projectInfo.title}
              onChange={(event) => {
                changeHandler("title", event);
              }}
              className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="flex flex-col space-y-2 w-9/12">
            <label htmlFor="description" className="text-gray-500 font-medium">
              DESCRIPTION
            </label>
            <textarea
              name="description"
              id="description"
              cols="30"
              value={projectInfo.description}
              onChange={(event) => {
                changeHandler("description", event);
              }}
              className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>

          <div className="flex flex-col space-y-2 w-9/12">
            <label htmlFor="dueDate" className="text-gray-500 font-medium">
              DUE DATE
            </label>
            <input
              type="date"
              id="dueDate"
              value={projectInfo.dueDate}
              onChange={(event) => {
                changeHandler("dueDate", event);
              }}
              className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default NewProject;
