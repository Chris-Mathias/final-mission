"use client";

import { useData } from "../contexts/data-context";
import Navbar from "../components/navbar";
import ProfileInfo from "../components/profile-info";

export default function Profile() {
  const { selectedProfile, user, handleLogout } = useData();

  return (
    <div className="h-full">
      <Navbar />
      <ProfileInfo
        selectedProfile={selectedProfile}
        user={user}
        handleLogout={handleLogout}
      />
    </div>
  );
}
