FROM node:18-alpine
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install
COPY . .
RUN npm install --legacy-peer-deps
EXPOSE 3000
CMD ["npx", "serve", "-s", "build", "-l", "3000"]
