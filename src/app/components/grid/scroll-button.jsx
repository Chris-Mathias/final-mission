import { twMerge } from "tailwind-merge";

export default function ScrollButton(props) {
  return (
    <button
      className={twMerge(
        [
          `absolute top-1/2 text-[96px] transform -translate-y-1/2 text-neutral-100 p-2 rounded-full z-10 transition-opacity duration-500 hover:scale-110 ${
            props.canScroll ? "opacity-100" : "opacity-0"
          } ${props.right ? "right-[-96px]" : "left-[-96px]"}`,
        ],
        props.className
      )}
      onClick={() => {
        if (props.scrollRef.current) {
          props.smoothScroll(props.scrollRef.current, props.scrollAmount);
        }
      }}
      style={{ transition: "opacity 0.5s ease-in-out" }}
    >
      {props.children}
    </button>
  );
}
