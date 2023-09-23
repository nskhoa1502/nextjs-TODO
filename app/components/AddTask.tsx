"use client";

import icons from "@/utils/icons";
import Modal from "./Modal";
import { FormEventHandler, useState } from "react";
import { addTodo } from "@/api";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

const { AiOutlinePlus } = icons;

const AddTask = () => {
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  const [newTaskValue, setNewTaskValue] = useState<string>("");

  const handleSubmitNewTask: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    // console.log(newTaskValue);
    await addTodo({
      id: uuidv4(),
      text: newTaskValue,
    });
    setNewTaskValue("");
    setOpen(false);
    router.refresh();
  };

  return (
    <>
      <div>
        <button
          onClick={() => setOpen(true)}
          className="btn btn-primary w-full font-bold text-lg"
        >
          Add new task{" "}
          <span className="p-[2px] border-solid border-2 border-white rounded-full">
            <AiOutlinePlus />
          </span>
        </button>
      </div>
      {open && (
        <Modal setOpen={setOpen} open={open}>
          <form onSubmit={handleSubmitNewTask}>
            <h3 className="font-bold text-lg">Add new task</h3>
            <div className="modal-action">
              <input
                value={newTaskValue}
                onChange={(e) => setNewTaskValue(e.target.value)}
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
      )}
    </>
  );
};

export default AddTask;
