# Projeto Mega-Sena — Server + Front + Postgres (Docker)

Arquivos preparados conforme o PDF fornecido. Setup mínimo:

1. Substitua `db/megasena.csv` pelo CSV real (se tiver). O `db/init.sql` irá criar a tabela e executar o COPY no primeiro boot do Postgres.
2. Variáveis de ambiente no `.env` já configuradas:
   - DB_USER=postgres
   - DB_PASSWORD=123
   - DB_PORT=5432
   - SERVER_PORT=4000
3. Rodar:
   docker compose up --build

Serviços:
- Postgres (porta 5432)
- Server Express TypeScript (porta 4000)
- Front React (porta 3000)

Observações:
- O front usa a variável `REACT_APP_API_URL` do `.env` para apontar para o backend (em produção Docker compose, o front pode usar http://server:4000).
- Se preferir desenvolver localmente, rode `npm install` nas pastas `server` e `front` separadamente e execute os scripts `npm run dev` / `npm start`.
