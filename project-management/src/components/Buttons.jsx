export default function Buttons({ value, children, ...props }) {
  return (
    <button
      value={value}
      className="bg-gray hover:bg-[#7D7C7C] text-[#868484] text-xl hover:text-white px-8 py-3 rounded-xl"
      {...props}
    >
      {children}
    </button>
  );
}
