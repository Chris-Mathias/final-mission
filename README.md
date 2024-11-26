# Aeroflix

Este projeto é uma aplicação web desenvolvida com Next.js, React e Tailwind CSS. Ele também utiliza FontAwesome para ícones. Siga as instruções abaixo para configurar e executar o projeto localmente. Essa aplicação foi desenvolvida para fins acadêmicos, da disciplina de Programação para Interface de Usuário, do curso de Graduação em Ciência da Computação da UNIJUI.

## Tecnologias Utilizadas

- **Next.js**: Framework React para renderização do lado do servidor e otimização do front-end.
- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Tailwind CSS**: Framework CSS utilitário para construção rápida de layouts responsivos e modernos.
- **FontAwesome**: Conjunto de ícones vetoriais.

### Instalando o Node.js

1. Acesse o site oficial [Node.js](https://nodejs.org/).
2. Baixe a versão recomendada (LTS) para o seu sistema operacional.

## Passo a Passo para Rodar o Projeto

### 1. Rodar o backend

Antes de tudo, acesse o repositório do [backend](https://github.com/ChristianGCa/final_mission_backend) e siga o passo a passo para a execução da API.

### 2. Clonar o Repositório

Primeiro, clone o repositório para o seu computador. Se ainda não tiver o repositório, faça isso com o comando:

```bash
git clone https://github.com/Chris-Mathias/final-mission.git
cd final-mission
```

### 3. Instalar as Dependências

Dentro da pasta do projeto, execute o comando abaixo para instalar todas as dependências necessárias:

```bash
npm install
```

Esse comando vai instalar todas as dependências listadas no arquivo `package.json`, incluindo o Next.js, React, Tailwind CSS, FontAwesome, react-router-dom, e outras bibliotecas essenciais para o projeto.

### 4. Criar e configurar o .env

Na raíz do projeto, crie o arquivo .env com o comando abaixo:

```bash
touch .env
```

Agora, abra o arquivo criado e insira a seguinte linha:

```bash
NEXT_PUBLIC_API_URL=http://localhost:3000
```

Após, salve o arquivo. Esse passo permitirá o acesso à API rodando na porta 3000. Substitua o link caso necessário.

### 5. Rodar o Projeto Localmente

Execute o comando abaixo para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

O servidor será iniciado e você poderá acessar a aplicação em `http://localhost:3001`, caso a API já esteja rodando na porta 3000.
