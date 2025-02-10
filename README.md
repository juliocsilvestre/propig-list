# Sistema de Tarefas

Este projeto é um sistema simples de gerenciamento de tarefas desenvolvido em **React**. Ele permite adicionar, remover, buscar, filtrar e marcar tarefas como concluídas.

## 🚀 Tecnologias utilizadas

-   React
-   Framer Motion (para animações)
-   LocalStorage (para persistência de dados)

## 📌 Funcionalidades

-   Adicionar novas tarefas
-   Remover tarefas
-   Marcar tarefas como concluídas
-   Buscar tarefas pelo título
-   Filtrar tarefas por status (Todas, Concluídas e Pendentes)
-   Persistência dos dados no LocalStorage

---

## 📦 Como rodar o projeto

### 1️⃣ Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:

-   [Node.js](https://nodejs.org/)
-   [Git](https://git-scm.com/)

### 2️⃣ Clonar o repositório

```bash
git clone https://github.com/juliocsilvestre/seu-repositorio.git
```

### 3️⃣ Acessar a pasta do projeto

```bash
cd nome-do-repositorio
```

### 4️⃣ Instalar as dependências

```bash
npm install
# ou
yarn install
```

### 5️⃣ Rodar o projeto localmente

```bash
npm run dev
# ou
yarn dev
```

Após isso, o projeto estará rodando no navegador em **http://localhost:5173/** (caso esteja usando Vite) ou **http://localhost:3000/** (se for Create React App).

---

## 🖼️ Estrutura do projeto

```
📂 src
 ┣ 📂 assets → Imagens e ícones
 ┣ 📂 components → Componentes reutilizáveis
 ┃ ┣ 📂 Todo → Item da lista de tarefas
 ┃ ┣ 📂 TodoForm → Formulário para adicionar tarefas
 ┃ ┣ 📂 Search → Campo de busca
 ┃ ┣ 📂 Filter → Filtro de tarefas
 ┃ ┗ 📂 Footer → Rodapé do sistema
 ┣ 📂 styles → Arquivos de estilos (CSS)
 ┣ 📜 App.css → Estilos do componente principal
 ┣ 📜 App.jsx → Componente principal
 ┗ 📜 main.jsx → Ponto de entrada do React
```

---

## 🤝 Contribuição

Se quiser contribuir para o projeto:

1. Faça um fork do repositório
2. Crie uma nova branch (`git checkout -b minha-feature`)
3. Faça suas alterações e commit (`git commit -m 'Minha nova feature'`)
4. Envie um push para a branch (`git push origin minha-feature`)
5. Abra um Pull Request 🚀

---

## 📄 Licença

Este projeto está sob a licença MIT - sinta-se livre para usá-lo e modificá-lo.

Desenvolvido com ❤️ por **Julio Silvestre** → [GitHub](https://github.com/juliocsilvestre)
