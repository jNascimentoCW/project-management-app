import Buttons from "./Buttons";

import projectLogo from "../../src/assets/logo.png";

export default function NoProjectStarted({ onStartAddProject }) {
  return (
    <div className="flex flex-col items-center w-2/3 py-[8rem]">
      <img src={projectLogo} alt="" className="w-[7rem] mb-16" />
      <h2 className="text-[#868484] mb-5 text-3xl font-bold">
        No Project Selected
      </h2>
      <h3 className="text-2xl text-[#D0D4CA]">
        Select a project or get started with a new one
      </h3>
      <Buttons value="startProject" onClick={onStartAddProject}>
        Create New Project
      </Buttons>
    </div>
  );
}
