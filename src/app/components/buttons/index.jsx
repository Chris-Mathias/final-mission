import { twMerge } from "tailwind-merge";

export default function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className={twMerge(["w-96 h-12 bg-blue-aero text-lg font-poppins font-bold text-neutral-100 rounded-lg"], props.className)}
    >
      {props.children}
    </button>
  );
}
