FROM node:alpine
WORKDIR /app
COPY package.json pnpm-lock.yaml  ./
RUN npm i -g pnpm
RUN pnpm install
COPY . .
EXPOSE 3000
CMD [ "pnpm", "run", "dev" ]