"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../contexts/auth-context";

export default function Register() {
  const router = useRouter();
  const { handleRegister, errorMessage } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!name || !email || !password || !confirmPassword) {
      setError("Por favor, preencha todos os campos.");
    } else {
      setError("");
      handleRegister(name, email, password);
    }
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

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
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div className="w-96 h-12 mt-1">
          <input
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
        <div className="w-96 h-12 mt-1">
          <input
            type={showPassword ? "text" : "password"}
            className="w-96 h-12 p-4 text-lg font-poppins text-neutral-100 bg-neutral-800 rounded-lg"
            placeholder="Confirme a Senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
        <button className="w-96 h-12 mt-4 bg-neutral-100 text-lg font-poppins text-neutral-950 rounded-lg">
          Adicionar método de pagamento
        </button>
        <button
          onClick={handleSubmit}
          className="w-96 h-12 mt-4 bg-blue-aero text-lg font-poppins font-bold text-neutral-100 rounded-lg"
        >
          Cadastrar-se
        </button>
        <button
          onClick={() => router.push("/login")}
          className="w-96 h-12 mt-1 bg-blue-aero text-lg font-poppins font-bold text-neutral-100 rounded-lg"
        >
          Voltar ao login
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
