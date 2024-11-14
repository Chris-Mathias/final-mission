import MenuTitle from "./menu-title";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

export default function Navbar() {
  return (
    <div className="flex items-center w-full h-16 gap-12 bg-transparent">
      <img className="flex-none h-12 ml-4" src="aeroflix.svg"></img>
      <MenuTitle>Início</MenuTitle>
      <MenuTitle>Minha Lista</MenuTitle>
      <MenuTitle>Séries</MenuTitle>
      <MenuTitle>Filmes</MenuTitle>
      <FontAwesomeIcon icon={faMagnifyingGlass} className="flex-none h-8" />
      <span className="flex-1"></span>
      <FontAwesomeIcon icon={faUser} className="flex-none h-8 mr-4" />
    </div>
  );
}
