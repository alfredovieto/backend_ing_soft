# backend_ing_soft

API REST para gestionar tareas por usuario, con autenticación JWT. Está hecha con Node.js, Express y MongoDB (Mongoose).

## Requisitos

- Node.js
- Una base de datos MongoDB, local o en la nube

## Instalación

```bash
npm install
cp .env.example .env
```

Después, edita `.env` con tus valores:

| Variable     | Descripción                                                  |
| ------------ | ------------------------------------------------------------ |
| `PORT`       | Puerto del servidor. Si no se define, se usa el 5000.        |
| `MONGO_DB`   | Cadena de conexión a MongoDB.                                |
| `JWT_SECRET` | Clave para firmar los tokens JWT.                            |
| `NODE_ENV`   | Con `production`, las respuestas de error no incluyen el stack. |

## Ejecución

```bash
npm start        # inicia el servidor
npm run server   # inicia el servidor con recarga automática (nodemon)
```

## Endpoints

Los endpoints privados requieren el encabezado `Authorization: Bearer <token>`. El token se obtiene al iniciar sesión.

| Método   | Ruta                  | Acceso  | Descripción            |
| -------- | --------------------- | ------- | ---------------------- |
| `POST`   | `/api/users/register` | Público | Registra un usuario    |
| `POST`   | `/api/users/login`    | Público | Inicia sesión          |
| `GET`    | `/api/users/datos`    | Privado | Devuelve datos del usuario |
| `GET`    | `/api/tareas`         | Privado | Lista las tareas       |
| `POST`   | `/api/tareas`         | Privado | Crea una tarea         |
| `PUT`    | `/api/tareas/:id`     | Privado | Actualiza una tarea    |
| `DELETE` | `/api/tareas/:id`     | Privado | Elimina una tarea      |

## Estructura

```text
backend/
├── config/        # conexión a la base de datos
├── controllers/   # lógica de cada endpoint
├── middleware/    # autenticación y manejo de errores
├── models/        # esquemas de Mongoose
├── routes/        # definición de rutas
└── server.js      # punto de entrada
```
