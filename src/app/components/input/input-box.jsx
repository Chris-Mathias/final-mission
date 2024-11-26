export default function InputBox(props) {
  return (
    <input
      autoFocus={props.autoFocus}
      type={props.type || "text"}
      className="w-96 h-12 p-4 text-lg font-poppins text-neutral-100 bg-neutral-800 rounded-lg"
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      onKeyDown={props.onKeyDown}
    />
  );
}
