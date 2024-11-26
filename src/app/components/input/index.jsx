import { useState } from "react";
import { twMerge } from "tailwind-merge";
import InputBox from "./input-box";
import PasswordButton from "../buttons/password-button";

export default function Input(props) {

  const inputType =
    props.password || props.confirmPassword
      ? props.showPassword
        ? "text"
        : "password"
      : "text";

  return (
    <div className={twMerge(["w-96 h-12"], props.className)}>
      <InputBox
        autoFocus={props.autoFocus}
        type={inputType}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        onKeyDown={props.onKeyDown}
      />
      {props.password && (
        <PasswordButton
          onClick={() => props.setShowPassword(!props.showPassword)}
          showPassword={props.showPassword}
        />
      )}
    </div>
  );
}
