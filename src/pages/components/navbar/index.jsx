import "../../../app/globals.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

export default function Navbar() {
  return (
    <div className="flex items-center w-full h-16 gap-12 bg-transparent">
      <img className="flex-none h-12 ml-4" src="aeroflix.svg"></img>
      <h1 className="flex-none text-white text-2xl font-poppins">Início</h1>
      <h1 className="flex-none text-white text-2xl font-poppins">Minha Lista</h1>
      <h1 className="flex-none text-white text-2xl font-poppins">Séries</h1>
      <h1 className="flex-none text-white text-2xl font-poppins">Filmes</h1>
      <FontAwesomeIcon icon={faMagnifyingGlass} className="flex-none h-8" />
      <span className="flex-1"></span>
      <FontAwesomeIcon icon={faUser} className="flex-none h-8 mr-4" />
    </div>
  );
}
