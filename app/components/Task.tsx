"use client";

import { ITask } from "@/types/tasks";
import icons from "@/utils/icons";
import React, { FormEventHandler, useState } from "react";
import Modal from "./Modal";
import { deleteTodo, editTodo } from "@/api";
import { useRouter } from "next/navigation";

interface TaskProps {
  task: ITask;
  index: number;
}

const { AiOutlineEdit, AiFillDelete } = icons;

const Task: React.FC<TaskProps> = ({ task, index }) => {
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
  const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);
  const [taskToEdit, setTaskToEdit] = useState<string>(task.text);
  const router = useRouter();
  const handleSubmitEdit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await editTodo({
      id: task.id,
      text: taskToEdit,
    });
    setOpenModalEdit(false);
    router.refresh();
  };

  const handleDeleteTask = async (id: string) => {
    await deleteTodo(id);
    setOpenModalDelete(false);
    router.refresh();
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>{task?.text}</td>
      <td className="flex gap-2">
        <span
          className="cursor-pointer"
          onClick={(e) => {
            setOpenModalEdit(true);
          }}
        >
          {" "}
          <AiOutlineEdit size={30} color="#be1abe" />
          <Modal setOpen={setOpenModalEdit} open={openModalEdit}>
            <form onSubmit={handleSubmitEdit}>
              <h3 className="font-bold text-lg">Edit task</h3>
              <div className="modal-action">
                <input
                  value={taskToEdit}
                  onChange={(e) => setTaskToEdit(e.target.value)}
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-full"
                />
                <button type="submit" className="btn">
                  Submit
                </button>
              </div>
            </form>
          </Modal>
        </span>
        <span
          className="cursor-pointer"
          onClick={() => setOpenModalDelete(true)}
        >
          <AiFillDelete size={30} color="red" />
        </span>
        <Modal open={openModalDelete} setOpen={setOpenModalDelete}>
          <h3 className="text-lg">
            Are you sure, you want to delete this task?
          </h3>
          <div className="modal-action">
            <button onClick={() => handleDeleteTask(task.id)} className="btn">
              Yes
            </button>
          </div>
        </Modal>
      </td>
    </tr>
  );
};

export default Task;
