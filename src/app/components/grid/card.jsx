export default function Card(props) {
  return (
    <img
      className="w-48 h-72 rounded-2xl transition-transform duration-300 hover:scale-105"
      src={props.src}
    />
  );
}
