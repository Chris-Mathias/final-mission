"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../contexts/auth-context";

import ProfileCard from "../components/profile-card";

export default function ProfileSelection () {
  const router = useRouter();
  const { isAuthenticated, loading, profiles, fetchProfiles } = useAuth();

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
      <div className="flex items-center justify-center h-16">
        <img className="h-12" src="aeroflix.svg" alt="Aeroflix Logo" />
      </div>
      <div className="flex gap-12 items-center justify-center pb-32 min-h-[calc(100vh-64px)]">
        {profiles.map((profile) => (
          <ProfileCard key={profile.id} avatar={profile.img} name={profile.name} />
        ))}
      </div>
    </div>
  ) : null;
}