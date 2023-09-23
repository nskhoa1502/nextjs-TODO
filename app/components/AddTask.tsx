"use client";

import icons from "@/utils/icons";
import Modal from "./Modal";
import { useState } from "react";

const { AiOutlinePlus } = icons;

const AddTask = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <div>
        <button className="btn btn-primary w-full font-bold text-lg">
          Add new task{" "}
          <span className="p-[2px] border-solid border-2 border-white rounded-full">
            <AiOutlinePlus />
          </span>
        </button>
      </div>
      <Modal setOpen={setOpen} open={open} />
    </>
  );
};

export default AddTask;
