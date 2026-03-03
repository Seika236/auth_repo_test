# My Fullstack App

Этот проект состоит из клиентской части (Vite + React/Vue) и серверной части (NestJS + Prisma).

## Быстрый старт

```bash
cd server
pnpm install

# Генерируем Prisma Client
npx prisma generate

# Установите ссылку в .env DATABASE_URL [пароль и базу данных]
DATABASE_URL=postgresql://postgres:your_password@localhost:5432/your_database?schema=public

# Применяем миграции к базе данных
npx prisma migrate dev --name init

# Запускаем сервер
npm run start:dev

# Запуск клиента
cd ../client
pnpm install
npm run dev

```
