# 1) Собираем продакшен-бандл
FROM node:18 AS builder

WORKDIR /app

# Копируем только зависимости, чтобы кешировать npm-install
COPY package.json package-lock.json ./
RUN npm ci

# Копируем весь код и собираем
COPY . .
RUN npm run build

# 2) Запускаем статику
FROM node:18 AS runner

WORKDIR /app

# Устанавливаем minimal зависимости для serve
COPY package.json package-lock.json ./
RUN npm ci --production

# Берем готовую сборку
COPY --from=builder /app/build ./build

# Глобально ставим serve (или вы можете заменить на ваш статик-сервер)
RUN npm install -g serve

EXPOSE 3000

# Запускаем отдачу build-папки на порту 3000
CMD ["serve", "-s", "build", "-l", "3000"]
