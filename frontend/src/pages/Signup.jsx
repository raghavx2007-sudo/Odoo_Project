import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      await api.post("/auth/signup", {
        name,
        email,
        password,
      });
      navigate("/login");
    } catch (error) {
      alert(`Signup failed ${error}`);
    }
  };

  return (
    <div className="auth-container">
      <h2>Signup</h2>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}

export default Signup;
