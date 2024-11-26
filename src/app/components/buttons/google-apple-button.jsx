import { twMerge } from "tailwind-merge";

import Button from ".";

export default function GoogleAppleButton(props) {
  return (
    <Button className={twMerge(["flex"], props.className)}>
      <div className="flex items-center justify-center w-[336px] h-12">
        {props.google ? "Entrar com Google" : "Entrar com Apple"}
      </div>
      <div className="flex items-center justify-center bg-neutral-100 rounded-r-lg w-12 h-12">
        <img
          className="h-8 w-8"
          src={props.google ? "google.svg" : "apple.svg"}
          alt={props.google ? "Google Logo" : "Apple Logo"}
        />
      </div>
    </Button>
  );
}
