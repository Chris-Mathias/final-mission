"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [profiles, setProfiles] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [catalog, setCatalog] = useState([]);
  const [user, setUser] = useState(null);

  const router = useRouter();

  useEffect(() => {
    const storedToken = sessionStorage.getItem("authToken");
    const storedUser = sessionStorage.getItem("user");
    const storedProfile = sessionStorage.getItem("selectedProfile");

    if (storedToken) {
      setIsAuthenticated(true);
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
      if (storedProfile) {
        setSelectedProfile(JSON.parse(storedProfile));
      }
    }
    setLoading(false);
  }, []);

  const fetchCatalog = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/catalog`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${sessionStorage.getItem("authToken")}`,
          },
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to fetch catalog");
      }

      const data = await response.json();
      setCatalog(data);
    } catch (error) {}
  };

  const fetchUser = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${sessionStorage.getItem("authToken")}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to fetch user");
      }

      const data = await response.json();
      setUser(data);
      sessionStorage.setItem("user", JSON.stringify(data));
    } catch (error) {}
  };

  const fetchProfiles = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/profiles`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${sessionStorage.getItem("authToken")}`,
          },
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to fetch profiles");
      }

      const data = await response.json();
      setProfiles(data);
    } catch (error) {}
  };

  const handleSelectProfile = (profile) => {
    setSelectedProfile(profile);
    sessionStorage.setItem("selectedProfile", JSON.stringify(profile));
    router.push("/catalog");
  };

  const handleLogin = async (email, password) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }

      const data = await response.json();
      const token = data.token;

      sessionStorage.setItem("authToken", token);
      setIsAuthenticated(true);
      fetchUser();
      router.push("/profile-selection");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleRegister = async (name, email, password) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error);
      }

      const data = await response.json();
      const token = data.token;

      sessionStorage.setItem("authToken", token);
      setIsAuthenticated(true);
      fetchUser();
      router.push("/profile-selection");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("authToken");
    setIsAuthenticated(false);
    setSelectedProfile(null);
    router.push("/login");
  };

  return (
    <DataContext.Provider
      value={{
        isAuthenticated,
        loading,
        profiles,
        catalog,
        errorMessage,
        selectedProfile,
        user,
        fetchProfiles,
        fetchCatalog,
        handleSelectProfile,
        handleLogin,
        handleRegister,
        handleLogout,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
