import ProfileCard from "../components/profile-card";

export default function ProfileSelection () {
  return (
    <div className="h-full">
      <div className="flex items-center justify-center h-16">
        <img className="h-12" src="aeroflix.svg" alt="Aeroflix Logo" />
      </div>
      <div className="flex gap-12 items-center justify-center pb-32 min-h-[calc(100vh-64px)]">
        <ProfileCard avatar="avatar.png" name="¯\_(ツ)_/¯" />
        <ProfileCard avatar="avatar.png" name="( ͡° ͜ʖ ͡°)" />
      </div>
    </div>
  );
}