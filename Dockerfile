# Usa una imagen de Node.js como base
FROM node:latest AS build

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos del proyecto al contenedor
COPY . .

# Instala las dependencias y construye la aplicación
RUN npm install && npm run build --prod

# Etapa de producción: usar servidor ligero Nginx
FROM nginx:latest

# Copia los archivos de construcción de la etapa de compilación al servidor Nginx
COPY --from=build /app/dist/* /usr/share/nginx/html/

# Puerto en el que escucha el servidor Nginx (por defecto: 80)
EXPOSE 80

# Comando para iniciar el servidor Nginx
CMD ["nginx", "-g", "daemon off;"]