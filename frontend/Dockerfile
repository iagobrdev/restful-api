# Usar uma imagem base Node.js
FROM node:20

# Definir o diretório de trabalho dentro do contêiner
WORKDIR /app

# Adicionar o arquivo package.json e package-lock.json para instalar as dependências
COPY package.json package-lock.json ./

# Instalar as dependências
RUN npm install

# Copiar o restante do código-fonte
COPY . .

# Comando para iniciar a aplicação
CMD ["npm", "start"]