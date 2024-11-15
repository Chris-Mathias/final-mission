import MenuTitle from "./menu-title";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 flex items-center w-full h-16 gap-12 bg-neutral-900 shadow-neutral-950 shadow-lg z-20">
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
