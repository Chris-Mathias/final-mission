"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../contexts/auth-context";

import Navbar from "../components/navbar";
import Grid from "../components/grid";

export default function Catalog() {
  const { isAuthenticated, loading, fetchCatalog } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, loading, router]);

  useEffect(() => {
    fetchCatalog();
  }, [fetchCatalog]);

  if (loading) {
    return null;
  }

  return isAuthenticated ? (
    <div className="h-full w-full">
      <Navbar />
      <Grid />
    </div>
  ) : null;
}
