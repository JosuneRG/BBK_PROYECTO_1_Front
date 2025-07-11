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

- ESTRUCTURA GENERAL DEL PROYECTO
/src
│
├── assets/
│
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── ProductCard.jsx
│   ├── CartItem.jsx
│   ├── ProtectedRoute.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── Profile.jsx
│   ├── ProductDetails.jsx
│   ├── Cart.jsx
│   ├── AdminPanel.jsx    # (si haces CRUD admin)
│   └── NotFound.jsx
│
├── layout/
│   ├── MainLayout.jsx    # Header + Footer + children
│
├── context/
│   ├── AuthContext.jsx
│   ├── CartContext.jsx
│
├── hooks/
│   ├── useAuth.js
│   ├── useCart.js
│
├── services/
│   ├── authService.js
│   ├── productService.js
│   ├── orderService.js
│   └── userService.js
│
├── routes/
│   ├── AppRouter.jsx
│
├── styles/
│   ├── _variables.scss
│   ├── App.scss
│   ├── Home.scss
│   ├── Login.scss
│   ├── Register.scss
│   ├── Product.scss
│   └── Profile.scss
│
├── utils/
│   ├── validators.js     # Validaciones de formularios
│   ├── formatPrice.js
│   └── constants.js
│
├── App.jsx
├── main.jsx
└── index.scss

-->