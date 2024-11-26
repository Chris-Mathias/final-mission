"use client";

import { useRouter } from "next/navigation";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

import Logo from "./logo";
import NavigationIcon from "./navigation-icon";
import Text from "../text";

export default function Navbar() {
  const router = useRouter();

  return (
    <div className="fixed top-0 left-0 flex items-center w-full h-16 gap-12 bg-neutral-900 shadow-neutral-950 shadow-lg z-20">
      <Logo />
      <Text className="flex-none cursor-pointer">Início</Text>
      <Text className="flex-none cursor-pointer">Minha Lista</Text>
      <Text className="flex-none cursor-pointer">Séries</Text>
      <Text className="flex-none cursor-pointer">Filmes</Text>
      <NavigationIcon icon={faMagnifyingGlass} />
      <span className="flex-1"></span>
      <NavigationIcon
        icon={faUser}
        onClick={() => router.push("/profile")}
        className="mr-4"
      />
    </div>
  );
}
