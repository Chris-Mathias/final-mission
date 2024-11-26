export default function PasswordButton(props) {
  return (
    <button
      onClick={props.onClick}
      className="absolute right-4 top-1/2 transform -translate-y-1/2"
      tabIndex={-1}
    >
      <img
        src={props.showPassword ? "eye-1.svg" : "eye-2.svg"}
        className="h-5 w-5 text-gray-500"
        alt="Mostrar/ocultar senha"
      />
    </button>
  );
}
