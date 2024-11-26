import { twMerge } from "tailwind-merge";

export default function Text(props) {
  return (
    <p className={twMerge(["text-2xl font-poppins text-neutral-100"], props.className)}>
      {props.children}
    </p>
  );
}
