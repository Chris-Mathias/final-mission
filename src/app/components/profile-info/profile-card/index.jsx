"use client";

import { useRouter } from "next/navigation";

import { useData } from "../../../contexts/data-context";
import ProfileImage from "../profile-image";
import Text from "../../text";

export default function ProfileCard(props) {
  const router = useRouter();
  const { handleSelectProfile } = useData();

  return (
    <div
      onClick={() => {
        handleSelectProfile(props.profile);
      }}
      className="flex flex-col items-center justify-center cursor-pointer"
    >
      <ProfileImage
        src={props.profile.img}
        alt={props.profile.name}
        className="w-48 h-48"
      />
      <Text className="text-3xl mt-4">{props.profile.name}</Text>
    </div>
  );
}
