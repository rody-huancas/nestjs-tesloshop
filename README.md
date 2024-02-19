<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## STACK
- NestJs
- TypeScript
- PostgreSQL
- TypeORM

## Teslo API
1. Clonar el proyecto
2. ```npm install```
3. Clonar el archivo ```.env.example``` y renombrarlo a ```.env```
4. Cambiar las variables de entorno
5. Levantar la base de datos
```
docker-compose up -d
```
6. Ejecutar SEED (para llenar la bd)
```
http://localhost:3000/api/seed
```
7. Levantar el proyecto: ```npm run start:dev```