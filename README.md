# Pokémon TCG Tournament Stats

Página que consome dados de torneios competitivos de Pokémon TCG (via [Limitless TCG](https://limitlesstcg.com)) e exibe estatísticas sobre o torneio selecionado.

🔗 **[Versão Live do Projeto]([#](https://pokemon-tcg-result.vercel.app))**

<img width="1200" height="798" alt="image" src="https://github.com/user-attachments/assets/e28d547b-4afc-4f65-9c05-add6d70b224c" />
<img width="1312" height="778" alt="image" src="https://github.com/user-attachments/assets/b7743613-783e-4edb-a83d-545b108702ef" />



## 📋 Sobre o projeto

O projeto foi feito como parte do meu portfolio para demonstrar habilidades com front-end e consumo de APIs REST. Ele busca dados através da API pública do LimitlessTCG sobre torneios online de Pokémon TCG para exibir informações relevantes de cada torneio como:

- Nome, data e formato do torneio
- Número de participantes
- Vencedor e TOP 8
- Visualização dos baralhos usados por cada jogador (via texto e via imagens)
- Distribuição de uso de decks (arquétipos mais jogados)

## 🛠️ Tecnologias utilizadas

- **React** — biblioteca principal de UI
- **Vite** — build tool e dev server
- **Recharts** — visualização de dados (gráfico de barras horizontal)
- **Limitless TCG API** — fonte dos dados de torneios

## Funcionalidades

- Consumo assíncrono de dados via `fetch`/`async-await`
- Gráfico horizontal de uso de decks, com agrupamento automático dos menos usados em "Outros"
- Layout responsivo (adapta `flex-direction` e outros estilos conforme o tamanho da tela)

## 🚀 Rodando localmente

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/seu-usuario/nome-do-repo.git
cd nome-do-repo
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O projeto estará disponível em `http://localhost:5173` (porta padrão do Vite).

## Deploy

O projeto está atualmente hospedado na **Vercel**, com deploy automático a cada push na branch `main`.

## Licença

Este projeto é livre para fins de estudo e portfolio.

## Autor

**João Vitor Lopes**

Desenvolvedor Unity (2D/3D mobile) em transição para fullstack web.

- [LinkedIn](https://www.linkedin.com/in/joão-vitor-lopes-de-almeida-963330166/)
