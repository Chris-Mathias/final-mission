"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useData } from "../contexts/data-context";
import ProfileCard from "../components/profile-info/profile-card";
import SimpleNavbar from "../components/navbar/simple-navbar";

export default function ProfileSelection() {
  const router = useRouter();
  const {
    isAuthenticated,
    loading,
    profiles,
    fetchProfiles,
  } = useData();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, loading, router]);

  useEffect(() => {
    fetchProfiles();
  }, [fetchProfiles, profiles]);

  if (loading) {
    return null;
  }

  return isAuthenticated ? (
    <div className="h-full">
      <SimpleNavbar />
      <div className="flex gap-12 items-center justify-center pb-32 min-h-[calc(100vh-64px)]">
        {profiles.map((profile) => (
          <ProfileCard
            key={profile.id}
            profile={profile}
          />
        ))}
      </div>
    </div>
  ) : null;
}
