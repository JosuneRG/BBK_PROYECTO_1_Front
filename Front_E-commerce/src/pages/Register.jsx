import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Register.scss"; // Asegúrate de tener estilos

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    // image: null, // Para futuras imágenes
  });

  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "El nombre es obligatorio";
    if (!form.email.includes("@")) newErrors.email = "Email inválido";
    if (form.password.length < 6) newErrors.password = "Mínimo 6 caracteres";
    if (form.password !== form.confirmPassword)
      newErrors.confirmPassword = "Las contraseñas no coinciden";

    // Imagen (opcional)
    /*
    if (form.image) {
      const validTypes = ["image/jpeg", "image/png"];
      if (!validTypes.includes(form.image.type)) {
        newErrors.image = "Formato inválido (solo JPG o PNG)";
      }
      if (form.image.size > 2 * 1024 * 1024) {
        newErrors.image = "La imagen debe pesar menos de 2MB";
      }
    }
    */

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const body = {
        name: form.name,
        email: form.email,
        password: form.password,
      };

      const res = await fetch("http://localhost:4000/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (!res.ok) {
        setServerError(data.message || "Error al registrar");
        return;
      }

      alert("¡Registro exitoso!");
      navigate("/login");

    } catch (error) {
      setServerError("Error de conexión con el servidor");
    }
  };

  return (
    <div className="register-container">
    <h2>Crear Cuenta</h2>
    <form>
      <label>Nombre completo</label>
      <input type="text" placeholder="Tu nombre" />

      <label>Email</label>
      <input type="email" placeholder="usuario@example.com" />

      <label>Contraseña</label>
      <input type="password" placeholder="********" />

      <label>Confirmar contraseña</label>
      <input type="password" placeholder="********" />

      <button type="submit">Registrarse</button>
    </form>
    <div className="login-link">¿Ya tienes cuenta? Inicia sesión</div>
    </div>

  );
};

export default Register;
