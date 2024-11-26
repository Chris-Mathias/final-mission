"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { useData } from "../../contexts/data-context";
import Button from "../buttons";
import GoogleAppleButton from "../buttons/google-apple-button";
import Input from "../input";
import ErrorMessage from "../text/error-message";

export default function RegisterForm() {
  const router = useRouter();
  const { handleRegister, errorMessage } = useData();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = () => {
    if (!name || !email || !password || !confirmPassword) {
      setError("Por favor, preencha todos os campos.");
    } else if (password !== confirmPassword) {
      setError("As senhas não coincidem.");
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
    <div className="flex flex-col items-center justify-center pb-32 min-h-[calc(100vh-64px)]">
      <Input
        autoFocus={true}
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Input
        className="mt-1"
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
      <Input
        className="mt-1"
        confirmPassword={true}
        placeholder="Confirme a Senha"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        onKeyDown={handleKeyDown}
        showPassword={showPassword}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <Button className="mt-4 bg-neutral-100 font-normal text-neutral-950">
        Adicionar método de pagamento
      </Button>
      <Button onClick={handleSubmit} className="mt-4">
        Cadastrar-se
      </Button>
      <Button onClick={() => router.push("/login")} className="mt-1">
        Voltar ao login
      </Button>
      <GoogleAppleButton google={true} className="mt-4" />
      <GoogleAppleButton google={false} className="mt-1" />
    </div>
  );
}
