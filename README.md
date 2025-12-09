# 🗃️ Sistema de Gestión de Productos - Proyecto Final Node.js

Este proyecto corresponde al **Proyecto Final** del curso de Node JS de Talento Tech.  
Consiste en una **API REST desarrollada con Node.js y Express** que permite la gestión de productos con autenticación de usuarios mediante **JWT**.

Incluye:
- Login de usuarios
- Roles (usuario y administrador)
- CRUD de productos
- Manejo de errores y validaciones
- Protección de rutas

---

## 🚀 Tecnologías utilizadas

- Node.js
- Express
- MongoDB + Mongoose
- JSON Web Token (JWT)
- CORS
- Body-parser
- Dotenv

---

## 📁 Estructura del proyecto

/src
├── controllers
├── models
├── routes
├── middlewares
├── services
└── index.js
.env
package.json
README.md


---

## ⚙️ Instalación del proyecto

1️⃣ Clonar el repositorio:

git clone https://github.com/VivianaVercesi/ProyectoFinalNodeJS

2️⃣ Ingresar al proyecto:

cd ProyectoFinalNodeJS

3️⃣ Instalar dependencias:

npm install

4️⃣ Crear archivo .env en la raíz del proyecto:

MONGO_URI = mongodb+srv://vivianavercesi22:MongoDB2012@cluster0.ukfyepm.mongodb.net/inventarioDB?retryWrites=true&w=majority
PORT=3000

JWT_SECRET=miclaveultrasecreta
JWT_EXPIRES=1d

5️⃣ Iniciar el servidor:

npm run start

Servidor activo en:
http://localhost:3000

---

## 🔐 Autenticación

▶️ Login de usuario

POST /usuarios/login

Body (JSON):

{
  "email": "admin@admin.com",
  "password": "admin123"
}


Respuesta correcta:

{
  "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6..."
}

---

## 📦 Endpoints de productos

Método     Ruta      	      Descripción
GET	       /productos	      Obtener todos los productos
GET	       /productos/:id	  Obtener producto por ID
POST       /productos	      Crear producto (solo admin)
DELETE	   /productos/:id	  Eliminar producto (solo admin)

---

## 🔒 Protección de rutas

- Se implementó un middleware de autenticación con JWT.

- Se validan los permisos según el rol del usuario.

- Solo los usuarios con rol admin pueden:

  - Crear productos

  - Eliminar productos

---

## ⚠️ Manejo de errores

El sistema maneja correctamente los siguientes estados HTTP:

- 400 → Petición incorrecta

- 401 → No autorizado (token inválido o inexistente)

- 403 → Acceso denegado (sin permisos)

- 404 → Ruta inexistente

- 500 → Error interno del servidor

---

## ✅ Funcionalidades implementadas

✔️ Registro de usuarios
✔️ Login con JWT
✔️ Roles (admin / user)
✔️ CRUD de productos
✔️ Protección de rutas
✔️ Conexión a MongoDB
✔️ Manejo de errores
✔️ Variables de entorno

---

## 🧪 Pruebas realizadas

Las pruebas del sistema fueron realizadas utilizando:

- Navegador web

- Postman

Verificando:

- Autenticación correcta

- Acceso permitido según rol

- Creación y eliminación de productos por administrador

- Manejo correcto de errores

---

## 👩‍💻 Autora

Viviana Vercesi
Proyecto Final - Desarrollo Backend con Node.js
