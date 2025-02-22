import { useState } from "react";
import { TrashIcon } from "@heroicons/react/24/solid";
const NewTask = () => {
  const [taskArray, setTaskArray] = useState([]);

  console.log("Task Array", taskArray);

  const [task, setTask] = useState();

  const addTaskHandler = () => {
    //setTask();
    const prevTask = taskArray;
    console.log("Add Task Handler", task);

    setTaskArray([...prevTask, task]);
  };

  const changeTaskHandler = (event) => {
    console.log(event);
    setTask(event.target.value);
  };

  const ClearTaskHandler = (index) => {
    console.log();
    taskArray.splice(index, 1);
    const updatedArray = taskArray;
    setTaskArray([...updatedArray]);
  };

  return (
    <>
      <div className="flex flex-col gap-2 w-6/12">
        <h4 className="text-2xl font-semibold">Task</h4>

        <form>
          <div className="flex justify-between gap-5">
            <input
              type="text"
              name="title"
              value={task}
              onChange={(event) => {
                changeTaskHandler(event);
              }}
              className="border border-gray-300 w-9/12 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              type="button"
              className="text-white bg-gray-400 px-5 py-2 rounded-md hover:bg-blue-600 cursor-pointer"
              onClick={addTaskHandler}
            >
              Add Task
            </button>
          </div>
        </form>

        {taskArray.map((val, i) => {
          return (
            <div className=" flex justify-between  mt-5" key={i}>
              <p className="text-black bg-gray-100 w-9/12 p-2 rounded-lg pl-4">
                {val}
              </p>

              <button className=" p-2 bg-gray-400 text-white rounded-lg hover:bg-red-600 cursor-pointer" onClick={() => {
                  ClearTaskHandler(i);
                }}>
                <TrashIcon className="w-6 h-6" />
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default NewTask;
