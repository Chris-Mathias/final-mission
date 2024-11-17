"use client";

import { useRouter } from "next/navigation";

export default function ProfileCard(props) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/catalog")}
      className="flex flex-col items-center justify-center cursor-pointer"
    >
      <img className="w-48 h-48 rounded-full bg-neutral-800 object-cover" src={props.avatar} />
      <p className="text-3xl mt-4 font-poppins text-neutral-100">
        {props.name}
      </p>
    </div>
  );
}
