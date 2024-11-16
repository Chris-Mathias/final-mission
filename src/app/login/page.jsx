"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleLogin = () => {
    if (!email || !senha) {
      setErrorMessage("Por favor, preencha o email e a senha.");
    } else if (email != "admin" || senha != "admin") {
      setErrorMessage("Email ou senha incorretos.");
    } else {
      setErrorMessage("");
      console.log("Login:", email, senha);
      router.push("/catalog");
    }
    setEmail("");
    setSenha("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div className="h-full">
      <div className="flex items-center justify-center h-16">
        <img className="h-12" src="aeroflix.svg" alt="Aeroflix Logo" />
      </div>
      <div className="flex flex-col items-center justify-center pb-32 min-h-screen">
        <div className="w-96 h-12">
          <input
            className="w-96 h-12 p-4 text-lg font-poppins text-neutral-100 bg-neutral-800 rounded-lg"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="relative w-96 h-12 mt-1">
          <input
            type={showPassword ? "text" : "password"}
            className="w-96 h-12 p-4 text-lg font-poppins text-neutral-100 bg-neutral-800 rounded-lg"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2"
          >
            <img
              src={showPassword ? "eye-1.svg" : "eye-2.svg"}
              className="h-5 w-5 text-gray-500"
              alt="Mostrar/ocultar senha"
            />
          </button>
        </div>
        {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
        <button
          onClick={handleLogin}
          className="w-96 h-12 mt-4 bg-blue-aero text-lg font-poppins font-bold text-neutral-100 rounded-lg"
        >
          Entrar
        </button>
        <button className="w-96 h-12 mt-1 bg-blue-aero text-lg font-poppins font-bold text-neutral-100 rounded-lg">
          Cadastrar-se
        </button>
      </div>
    </div>
  );
}
