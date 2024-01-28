import Buttons from "./Buttons";

export default function Sidebar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <div className="sidebar h-screen text-white bg-black rounded-tr-3xl bottom-0 lg:left-0 px-[4rem] py-[8rem] w-1/3 ">
      <h2 className="font-bold lg:text-3xl md:text-md uppercase sm:text-md pb-10">
        YOUR PROJECTS
      </h2>
      <Buttons value="sidebar" onClick={onStartAddProject}>
        + Add Project
      </Buttons>
      <ul>
        {projects.map((project) => {
          let cssClasses =
            "hover:bg-[#291D1D] px-4 py-2 w-[95%] text-left text-xl rounded-sm";

          if (project.id === selectedProjectId) {
            cssClasses += " bg-stone-800 text-stone-200";
          } else {
            cssClasses += " text-stone-400";
          }

          return (
            <li key={project.id}>
              <button
                className={cssClasses}
                onClick={() => onSelectProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
