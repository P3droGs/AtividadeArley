FROM node:18-alpine
WORKDIR /app

# Instala todas as dependências (incluindo @types)
COPY package.json package-lock.json* ./
RUN npm install

# Copia o resto do código
COPY . .

# Compila o projeto
RUN npm run build

# Remove dependências de desenvolvimento após o build (opcional)
RUN npm prune --production

EXPOSE 4000
CMD ["npm", "start"]
