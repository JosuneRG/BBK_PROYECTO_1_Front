# React + Vite
# BBK_PROYECTO_1_Front
<!-- Intsalacion:
# 1. Crear el proyecto con Vite
npm create vite@latest

# 2. Entra en el directorio del proyecto
cd React_Pagina_Personal

# 3. Instala dependencias
npm install

# 4. Inicia el servidor de desarrollo
npm run dev

# 5. Instala React Router DOM
npm install react-router-dom

# 6. Instala SASS como dependencia de desarrollo
npm install -D sass

-----------------------------------------------------

# 📚 BBK Proyecto 1 – Frontend

**Librería BBK** es un e-commerce de libros creado con React. Permite registro/login, visualización de libros, carrito de la compra y perfil de usuario. Este proyecto integra el frontend con tu API de backend.

---

## 🗂️ Estructura del proyecto

```
src/
├─ components/      # Componentes reutilizables (Header, Footer, ProductCard…)
├─ pages/           # Vistas principales (Home, Login, Register, Profile…)
├─ layout/          # Layout principal con Header + Footer + Outlet
├─ context/         # Contextos (AuthContext, CartContext)
├─ routes/          # Enrutamiento con AppRouter
├─ styles/          # SCSS para cada sección
├─ App.jsx          # Componente raíz
└─ main.jsx         # Punto de entrada (ReactDOM)
```

---

## ✅ Funcionalidades implementadas

* 🧩 **Context de autenticación** (`AuthContext`) para manejar login y estado del usuario.
* 🏠 **Home**: muestra libros destacados en formato tarjeta con estilo moderno.
* 🔑 **Login**:

  * Formularios con validación (email y contraseña).
  * Estado de error visible.
  * Centro completo en pantalla.
* ✍️ **Register**:

  * Campos para nombre, email, contraseña y confirmación.
  * Validaciones con mensajes de error.
  * Animación suave tras registro exitoso y redirección automática a login.

---

## 🎨 Diseño y estilos

* Todos los formularios (`Login`, `Register`) usan tarjetas blancas centradas, con `box-shadow`, bordes redondeados y paletas consistentes (`#ff6f61`, `#264653`).
* El `Header` y `Footer` con estilos modulares SCSS, acumulando un diseño limpio y cohesivo.
* Estilos SCSS organizados por componente/página para facilitar escalabilidad.

---

## 🚀 Cómo ejecutar localmente

1. Clona el repositorio:

   ```bash
   git clone https://github.com/JosuneRG/BBK_PROYECTO_1_Front.git
   cd BBK_PROYECTO_1_Front
   ```

2. Instala dependencias:

   ```bash
   npm install
   # o yarn
   ```

3. Inicia la app (suponiendo que el backend corre en `http://localhost:4000`):

   ```bash
   npm run dev
   # o yarn dev
   ```

4. Abre en el navegador:

   ```
   http://localhost:5173
   ```

---

## 🚧 Qué sigue en `develop`

* 🛒 **Carrito**: agregar libros, visualización y gestión del carrito.
* 🏍️ **Pedir**: integración con la API para crear pedidos reales.
* 👤 **Profile**: mostrar datos del usuario, historial de pedidos, editar perfil y cerrar sesión.
* 📚 **Products & ProductDetails**: listado completo y vista individual con fetch dinámico.
* 🔐 **Route Guards**: proteger rutas privadas como `profile` o `checkout`.
* ⚙️ **Extras opcionales**: filtros, buscador, wishlist, reviews, panel admin, responsive y SASS refinado.

---

## ☑️ Buenas prácticas en proyecto

* Uso de **ramas: `main` para producción**, `develop` para desarrollo, y `feature/...` para nuevas funcionalidades.
* Estilos **modulares y semánticos** (SCSS por componente).
* Componentes y funciones bajo los límites de líneas establecidos.
* Bien documentado y legible, ideal para presentación final.

---

## ✅ ¿Quieres contribuir?

1. Crea una rama a partir de `develop`: `feature/nombre_característica`
2. Implementa y haz `git add` + `git commit`
3. Sube la rama: `git push origin feature/nombre_característica`
4. Abre Pull Request hacia `develop` y haz merge tras aprobación ✅

-->