import { useRouter } from "next/navigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-regular-svg-icons";

import Button from "../buttons";
import Text from "../text";

export default function ProfileInfo(props) {
  const router = useRouter();

  return (
    <div className="flex flex-col mt-16 p-12">
      <div className="flex">
        <img
          className="w-32 h-32 rounded-full bg-neutral-800 object-cover"
          src={props.selectedProfile?.img}
        />
        <div className="flex flex-col justify-center ml-12 min-h-32 ">
          <Text className="text-3xl">{props.selectedProfile?.name}</Text>
          <Button
            onClick={() => router.push("/profile-selection")}
            className="w-56 h-14 mt-4 text-2xl font-normal"
          >
            Trocar Usuário
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-6 mx-12 mt-12">
        <Text className="font-bold">Informações da Conta</Text>
        <Text>{props.user?.name}</Text>
        <Text>{props.user?.email}</Text>
        <Text>{props.user?.phone}</Text>
        <Text>{props.user?.address}</Text>
        <Button className="h-14 text-2xl font-normal">
          Editar Informações
        </Button>
        <Text className="font-bold mt-12">Configurações de Assinatura</Text>
        <div className="flex gap-8 items-center">
          <FontAwesomeIcon icon={faCreditCard} className="h-12" />
          <Text>**** **** **** 1234</Text>
        </div>
        <div className="flex justify-between">
          <Button className="h-14 text-2xl font-normal">
            Alterar Método de Pagamento
          </Button>
          <Button
            onClick={props.handleLogout}
            className="w-56 h-14 bg-red-600 text-2xl font-normal"
          >
            Sair
          </Button>
        </div>
      </div>
    </div>
  );
}
