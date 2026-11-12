#image node
FROM node:22-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

#image node propre, moins lourde
FROM node:22-alpine

WORKDIR /app
RUN npm install -g serve
COPY --from=builder /app/dist ./dist

#sur le port 80
EXPOSE 80

#lancement
CMD ["serve", "-s", "dist", "-l", "80"]