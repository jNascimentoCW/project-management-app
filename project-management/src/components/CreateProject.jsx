import Input from "./Input";
import Modal from "./Modal";

import { useRef } from "react";

export default function CreateProject({ onAdd, onCancel }) {
  const modal = useRef();

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    // validation ...
    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="text-[#868484] mb-5 text-3xl font-bold py-4">
          Invalid Input
        </h2>
        <p className="text-2xl text-stone-500 py-2">
          Oops ... Looks like you forgot to enter a value
        </p>
        <p className="text-2xl text-stone-400 py-2">
          Please make sure you provide a valid value for every input field
        </p>
      </Modal>
      <div className="w-2/3 py-[8rem]">
        <menu className="flex justify-end gap-x-[1rem] w-[85%]">
          <button value="cancel" className="text-xl" onClick={onCancel}>
            Cancel
          </button>
          <button
            className="bg-black text-white text-xl px-[3rem] py-3 rounded-xl hover:bg-gray"
            onClick={handleSave}
          >
            Save
          </button>
        </menu>
        <div className="flex flex-col w-[85%]">
          <Input ref={title} type="text" label="TITLE" />
          <Input ref={description} label="DESCRIPTION" textarea />
          <Input ref={dueDate} type="date" label="DUE DATE" />
        </div>
      </div>
    </>
  );
}
