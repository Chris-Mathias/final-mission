import { twMerge } from "tailwind-merge";

export default function ProfileImage(props) {
  return (
    <img
      className={twMerge(["rounded-full bg-neutral-800 object-cover"], props.className)}
      src={props.src}
      alt={props.alt}
    />
  );
}