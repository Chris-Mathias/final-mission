import { useRouter } from "next/navigation";

export default function Logo() {
  const router = useRouter();

  return (
    <img
      onClick={() => router.push("/catalog")}
      className="flex-none h-12 ml-4 cursor-pointer"
      src="aeroflix.svg"
    ></img>
  );
}