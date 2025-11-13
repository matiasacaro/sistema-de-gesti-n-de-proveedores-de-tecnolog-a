# Etapa 1: Build
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa 2: Servir contenido estático con Nginx
FROM nginx:alpine

# Copia el build de Vite al directorio público de Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Expone el puerto por donde servirá la app
EXPOSE 80

# Inicia Nginx
CMD ["nginx", "-g", "daemon off;"]
