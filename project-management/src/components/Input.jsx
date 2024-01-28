import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  const classes = "bg-lightGray rounded-sm text-gray p-4 outline-0 border-[#A9A9A9] focus:border-gray border-b-4";

  return (
    <p className="flex flex-col">
      <label className="text-xl text-[#868484] pt-8 pb-2 font-bold">{label}</label>
      {textarea ? <textarea ref={ref} className={classes} {...props} /> : <input ref={ref} className={classes} {...props} />}
    </p>
  );
});

export default Input;
