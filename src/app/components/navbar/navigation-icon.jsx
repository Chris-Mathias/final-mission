import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavigationIcon({ icon, onClick, className }) {
  const router = useRouter();

  return (
    <FontAwesomeIcon
      onClick={onClick}
      icon={icon}
      className={`flex-none h-8 cursor-pointer ${className}`}
    />
  );
}