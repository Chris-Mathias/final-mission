"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [profiles, setProfiles] = useState([]);
  const [catalog, setCatalog] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const storedToken = sessionStorage.getItem("authToken");
    if (storedToken) {
      setIsAuthenticated(true);
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
      router.push("/catalog");
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
      router.push("/catalog");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("authToken");
    setIsAuthenticated(false);
    router.push("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        loading,
        profiles,
        catalog,
        errorMessage,
        fetchProfiles,
        fetchCatalog,
        handleLogin,
        handleRegister,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
