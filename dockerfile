# Usa a imagem oficial do Node.js
FROM node:20

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos necessários para o container
COPY package.json package-lock.json ./
RUN npm install

# Copia o restante da aplicação
COPY . .

# Porta que a aplicação está rodando
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "run", "start"]
