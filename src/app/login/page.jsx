"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../contexts/auth-context";

export default function Login() {
  const router = useRouter();
  const { handleLogin, isAuthenticated, loading, errorMessage } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!loading && isAuthenticated) {
      router.push("/profile-selection");
    }
  }, [isAuthenticated, loading, router]);

  const handleSubmit = () => {
    if (!email || !password) {
      setError("Por favor, preencha todos os campos.");
    } else {
      setError("");
      handleLogin(email, password);
    }
    setEmail("");
    setPassword("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  if (loading) {
    return null;
  }

  return (
    <div className="h-full">
      <div className="flex items-center justify-center h-16">
        <img className="h-12" src="aeroflix.svg" alt="Aeroflix Logo" />
      </div>
      <div className="flex flex-col items-center justify-center pb-32 min-h-[calc(100vh-64px)]">
        <div className="w-96 h-12">
          <input
            autoFocus
            className="w-96 h-12 p-4 text-lg font-poppins text-neutral-100 bg-neutral-800 rounded-lg"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div className="relative w-96 h-12 mt-1">
          <input
            type={showPassword ? "text" : "password"}
            className="w-96 h-12 p-4 text-lg font-poppins text-neutral-100 bg-neutral-800 rounded-lg"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2"
            tabIndex={-1}
          >
            <img
              src={showPassword ? "eye-1.svg" : "eye-2.svg"}
              className="h-5 w-5 text-gray-500"
              alt="Mostrar/ocultar senha"
            />
          </button>
        </div>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
        <button
          onClick={handleSubmit}
          className="w-96 h-12 mt-4 bg-blue-aero text-lg font-poppins font-bold text-neutral-100 rounded-lg"
        >
          Entrar
        </button>
        <button
          onClick={() => router.push("/register")}
          className="w-96 h-12 mt-1 bg-blue-aero text-lg font-poppins font-bold text-neutral-100 rounded-lg"
        >
          Cadastrar-se
        </button>
        <button className="flex w-96 h-12 mt-4 bg-blue-aero text-lg font-poppins font-bold text-neutral-100 rounded-lg">
          <div className="flex items-center justify-center w-[336px] h-12">
            Entrar com Google
          </div>
          <div className="flex items-center justify-center bg-neutral-100 rounded-r-lg w-12 h-12">
            <img className="h-8 w-8" src="google.svg" alt="Google Logo" />
          </div>
        </button>
        <button className="flex w-96 h-12 mt-1 bg-blue-aero text-lg font-poppins font-bold text-neutral-100 rounded-lg">
          <div className="flex items-center justify-center w-[336px] h-12">
            Entrar com Apple
          </div>
          <div className="flex items-center justify-center bg-neutral-100 rounded-r-lg w-12 h-12">
            <img className="h-8 w-8" src="apple.svg" alt="Google Logo" />
          </div>
        </button>
      </div>
    </div>
  );
}
