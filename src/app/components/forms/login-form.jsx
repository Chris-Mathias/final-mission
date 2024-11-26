"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { useData } from "../../contexts/data-context";
import Button from "../buttons";
import GoogleAppleButton from "../buttons/google-apple-button";
import Input from "../input";

export default function LoginForm() {
  const router = useRouter();
  const { handleLogin, isAuthenticated, loading, errorMessage } = useData();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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
    <div className="flex flex-col items-center justify-center pb-32 min-h-[calc(100vh-64px)]">
      <Input
        autoFocus={true}
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Input
        className="relative mt-1"
        password={true}
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onKeyDown={handleKeyDown}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
      />
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
      <Button onClick={handleSubmit} className="mt-4">
        Entrar
      </Button>
      <Button onClick={() => router.push("/register")} className="mt-1">
        Cadastrar-se
      </Button>
      <GoogleAppleButton google={true} className="mt-4" />
      <GoogleAppleButton google={false} className="mt-1" />
    </div>
  );
}
