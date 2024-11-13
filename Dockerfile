# Используем Node.js 20
FROM node:20

# Создаем рабочую директорию
WORKDIR /usr/src/app

# Копируем package.json и устанавливаем зависимости
COPY package*.json ./
RUN npm install

# Копируем весь исходный код
COPY . .

# Сборка TypeScript
RUN npm run build

# Открываем порт и запускаем приложение
EXPOSE 3000
CMD ["npm", "run", "start:prod"]
