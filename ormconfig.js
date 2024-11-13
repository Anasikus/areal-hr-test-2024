// api/ormconfig.js
module.exports = {
  type: 'postgres',  // Используем PostgreSQL как тип базы данных
  host: process.env.DB_HOST || 'db',  // Указываем хост базы данных, можно передавать через переменные окружения, по умолчанию будет 'db'
  port: parseInt(process.env.DB_PORT) || 5432,  // Порт базы данных, по умолчанию 5432
  username: process.env.DB_USER || 'postgres',  // Имя пользователя базы данных, по умолчанию 'postgres'
  password: process.env.DB_PASSWORD || 'nastyad20',  // Пароль для подключения к базе, также можно передать через переменные окружения
  database: process.env.DB_NAME || 'areal_hr_test_db',  // Имя базы данных, по умолчанию 'areal_hr_test_db'
  entities: ['dist/**/*.entity{.ts,.js}'],  // Путь к сущностям, компилированные файлы TypeScript в папке dist
  migrations: ['dist/migrations/*{.ts,.js}'],  // Путь к миграциям, аналогично сущностям, компилированные файлы миграций
  synchronize: false,  // Отключаем синхронизацию для продакшн-окружения (это важно, чтобы избежать случайных изменений в базе данных)
  cli: {
    migrationsDir: '../migrations',  // Папка для миграций в исходниках, так как миграции будут находиться в папке "migrations"
  },
};
