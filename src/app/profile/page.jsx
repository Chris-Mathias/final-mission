"use client";

import { useRouter } from "next/navigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-regular-svg-icons";

import Navbar from "../components/navbar";
import { useAuth } from "../contexts/auth-context";

export default function Profile() {
  const router = useRouter();
  const { logout } = useAuth();

  return (
    <div className="h-full">
      <Navbar />
      <div className="flex flex-col mt-16 p-12">
        <div className="flex">
          <img
            className="w-32 h-32 rounded-full object-cover"
            src="avatar.png"
          />
          <div className="flex flex-col justify-center ml-12 min-h-32 ">
            <p className="text-3xl font-poppins text-neutral-100">Pedro</p>
            <button
              onClick={() => router.push("/profile-selection")}
              className="w-56 h-14 mt-4 bg-blue-aero text-2xl font-poppins text-neutral-100 rounded-lg"
            >
              Trocar Usuário
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-6 ml-12 mt-12">
          <p className="text-2xl font-poppins font-bold text-neutral-100">
            Informações da Conta:
          </p>
          <p className="text-2xl font-poppins text-neutral-100">Pedro Silva</p>
          <p className="text-2xl font-poppins text-neutral-100">
            pedro.silva@gmail.com
          </p>
          <p className="text-2xl font-poppins text-neutral-100">
            (55) 99999-9999
          </p>
          <p className="text-2xl font-poppins text-neutral-100">
            Rua dos Bobos, n° 0, Bairro dos Bobos, Cidade dos Bobos, Estado dos
            Bobos, Brasil
          </p>
          <button className="w-96 h-14 bg-blue-aero text-2xl font-poppins text-neutral-100 rounded-lg">
            Editar Informações
          </button>
          <p className="mt-12 text-2xl font-poppins font-bold text-neutral-100">
            Configurações de Assinatura
          </p>
          <div className="flex gap-8 items-center">
            <FontAwesomeIcon icon={faCreditCard} className="h-12" />
            <p className="text-2xl font-poppins text-neutral-100">
              **** **** **** 1234
            </p>
          </div>
          <div className="flex justify-between">
            <button className="w-96 h-14 bg-blue-aero text-2xl font-poppins text-neutral-100 rounded-lg">
              Alterar Método de Pagamento
            </button>
            <button
              onClick={logout}
              className="w-56 h-14 bg-red-500 text-2xl font-poppins text-neutral-100 rounded-lg">
              Sair
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
