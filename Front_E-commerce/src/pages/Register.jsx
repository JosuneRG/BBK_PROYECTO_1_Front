import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Register.scss";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const [success, setSuccess] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "El nombre es obligatorio";
    if (!form.email.includes("@")) newErrors.email = "Email inválido";
    if (form.password.length < 6) newErrors.password = "Mínimo 6 caracteres";
    if (form.password !== form.confirmPassword)
      newErrors.confirmPassword = "Las contraseñas no coinciden";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError("");
    if (!validate()) return;

    try {
      const res = await fetch("http://localhost:4000/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setServerError(data.message || "Error al registrar");
        return;
      }

      // Disparar animación de salida del formulario
      setAnimateOut(true);

      // Mostrar mensaje éxito tras la animación (0.5s)
      setTimeout(() => {
        setSuccess(true);
      }, 500);

      // Redirigir a login 3s después del éxito
      setTimeout(() => {
        navigate("/login");
      }, 3500);

    } catch (err) {
      setServerError("Error de conexión con el servidor");
    }
  };

  return (
    <div className="register-page">
      <div className="register-container">
        {!success ? (
          <>
            <h2>Crear Cuenta</h2>
            <form
              onSubmit={handleSubmit}
              className={animateOut ? "form-fade-out" : ""}
            >
              <label>Nombre completo</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Tu nombre"
              />
              {errors.name && <div className="error">{errors.name}</div>}

              <label>Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="usuario@example.com"
              />
              {errors.email && <div className="error">{errors.email}</div>}

              <label>Contraseña</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="********"
              />
              {errors.password && <div className="error">{errors.password}</div>}

              <label>Confirmar contraseña</label>
              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="********"
              />
              {errors.confirmPassword && (
                <div className="error">{errors.confirmPassword}</div>
              )}

              {serverError && <div className="server-error">{serverError}</div>}

              <button type="submit">Registrarse</button>
            </form>

            <div className="login-link">
              ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
            </div>
          </>
        ) : (
          <div className="success-message">
            <h2>¡Registro exitoso! 🎉</h2>
            <p>Serás redirigido al inicio de sesión en unos segundos...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
